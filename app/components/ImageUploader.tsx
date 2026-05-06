"use client";

import exifr from "exifr";
import { useRef, useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";

import { UploadFile } from "./icons/UploadFile";
import { calculateShutterSpeed } from "@/utils/shutter-speed";
import { getAddressFromCoords }  from "@/utils/location";
import { PhotoDetails } from "@/types/photo";

interface ImageUploaderProps {
  setFile: (file: File) => void;
  formData: Partial<PhotoDetails>;
  setFormData: (data: Partial<PhotoDetails>) => void;
}

export default function ImageUploader({ setFile, formData, setFormData }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleTrigger = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // 1. Set file for upload
    setFile(selectedFile);
    const localUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(localUrl);

    try {
      const data = await exifr.parse(selectedFile, {
        tiff: true,
        exif: true,
        gps: true,
        reviveValues: true,
      });

      let readableLocation = "";
      if (data.latitude && data.longitude) {
         readableLocation = await getAddressFromCoords(data.latitude, data.longitude);
      }

      const updatedDetails = {
        ...formData,
        createdAt: data.DateTimeOriginal?.toISOString() || "",
        location: readableLocation,
        coordinates: {
          lat: data.latitude || 0,
          lng: data.longitude || 0,
        },
        metadata: {
          cameraBody:
            data.Make && data.Model
              ? `${data.Make} ${data.Model}`
              : "Unknown Camera",
          lensSystem: data.LensModel || "Unknown Lens",
          aperture: data.FNumber ? `f/${data.FNumber}` : "N/A",
          shutterSpeed: calculateShutterSpeed(data.ExposureTime),
          iso: data.ISO || 0,
          focalLength: data.FocalLength ? `${data.FocalLength}mm` : "N/A",
        },
      };

      setFormData(updatedDetails);
    }
    catch(err) {
      console.error("EXIF Extraction failed, but you can still fill the form manually.", err);
      // Fallback: just set the title if EXIF fails
      setFormData({
        ...formData,
        title: selectedFile.name.replace(/\.[^/.]+$/, ""),
      });
    }
  };

  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);

  return (
    <section className="mb-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg, image/png, image/webp, image/gif"
        className="hidden"
      />

      <div
        onClick={handleTrigger}
        className="soft-ui-recessed rounded-3xl p-12 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 min-h-[400px] text-center group cursor-pointer transition-all hover:border-blue-400/50"
      >
        <div className="soft-ui-extruded w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
          <UploadFile />
        </div>

        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          Drag & drop your masterpiece
        </h3>

        <p className="text-on-surface-variant max-w-sm mb-8">
          High-resolution JPEG, PNG, or WebP files.
        </p>

        <button
          type="button"
          className="soft-ui-extruded px-8 py-3 rounded-xl font-bold text-xs text-slate-600 uppercase tracking-widest active:scale-95 transition-all pointer-events-none"
        >
          Select File
        </button>
      </div>

      {/* Image preview */}
      <div className="relative w-full">
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Upload preview"
            className="object-contain h-192 w-full mt-6"
            width={100}
            height={100}
          />
        ) : (
          <p>No image selected yet</p>
        )}
      </div>
    </section>
  );
}
