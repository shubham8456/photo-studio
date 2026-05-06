"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "../header";
import Footer from "../footer";
import ImageUploader from "../ImageUploader";
import FormField from "../FormField";
import AddTags from "./AddTags";

import { ArrowBack } from "../icons/ArrowBack";
import { Publish } from "../icons/Publish";

import { compressImage } from '@/utils/compressor';
import { toBrowserDateTime, toISODateTime } from "@/utils/date";

import { PhotoDetails, Metadata } from "@/types/photo";


export default function UploadPage() {
  const [file, setFile]                 = useState<File | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [formData, setFormData]         = useState<Partial<PhotoDetails>>({
    title: "",
  });

  type MetadataKey = keyof Metadata;
  const metadataFields: { id: MetadataKey; label: string; placeholder: string }[] = [
    { id: "cameraBody",   label: "Camera Body",   placeholder: "e.g. Sony A7R IV" },
    { id: "lensSystem",   label: "Lens System",   placeholder: "e.g. EF-S... IS STM" },
    { id: "aperture",     label: "Aperture",      placeholder: "e.g. f/5" },
    { id: "shutterSpeed", label: "Shutter Speed", placeholder: "e.g. 1/100s" },
    { id: "iso",          label: "ISO",           placeholder: "e.g. 100" },
    { id: "focalLength",  label: "Focal Length",  placeholder: "e.g. 35mm" },
  ];

  const updateMeta = (key: keyof Metadata, val: string | number) => {
    setFormData((prev) => ({
      ...prev,
      metadata: {
        ...(prev.metadata || {iso:0,cameraBody:'',lensSystem:'',aperture:'',shutterSpeed:'',focalLength:''}),
        [key]: key === "iso" ? Number(val) : val,
      } as Metadata,
    }));
  };

  const publishPost = async () => {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    setIsPublishing(true);

    try {
      const data = new FormData();
      const compressedFile = await compressImage(file);
      data.append("file", compressedFile);
      data.append("details", JSON.stringify(formData));

      const response = await fetch("/api/local-save", {
        method: "POST",
        body: data,
      });

      if (!response.ok) { throw new Error("Failed to save the image to the local library.") }

      const result = await response.json();

      alert("Successfully published to Gallery!");
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error publishing: " + (error as Error).message);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* navigation bar */}
      <div className="p-6">
        <Link
          href="/"
          className="flex items-center gap-2 group text-slate-600 hover:text-slate-900 transition-colors bg-transparent border-none cursor-pointer"
        >
          <ArrowBack />
          <span className="font-bold text-xs uppercase tracking-widest">
            Back to Gallery
          </span>
        </Link>
      </div>

      <main className="px-4 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-6">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-2 text-2xl md:text-4xl font-bold uppercase">
              UPLOAD&nbsp;
              <span className="text-slate-400">NEW PHOTOS</span>
            </h1>
            <p className="text-on-surface-variant">
              Contribute your finest landscape photography to this curated collection.
            </p>
          </header>

          <ImageUploader
            setFile={setFile}
            formData={formData}
            setFormData={setFormData}
          />

          {/* Image Deatils Form */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-6">
            <div className="space-y-8">
              <FormField
                label="Photo Title"
                placeholder="e.g. Whispers of the Cascades"
                value={formData.title}
                onChange={(val) => setFormData({ ...formData, title: val })}
              />

              <FormField
                label="Description"
                type="textarea"
                placeholder="Describe the conditions, lighting, and narrative of the shot..."
                value={formData.desc}
                onChange={(val) => setFormData({ ...formData, desc: val })}
              />

              <FormField
                label="Location"
                placeholder="e.g. Uttarakhand, India"
                value={formData.location}
                onChange={(val) => setFormData({ ...formData, location: val })}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Latitude"
                  value={formData.coordinates?.lat}
                  placeholder="0.00"
                  onChange={(val) =>
                    setFormData((prev) => ({
                      ...prev,
                      coordinates: {
                        ...(prev.coordinates || { lat: 0, lng: 0 }),
                        lat: Number(val),
                      },
                    }))
                  }
                />
                <FormField
                  label="Longitude"
                  value={formData.coordinates?.lng}
                  placeholder="0.00"
                  onChange={(val) =>
                    setFormData((prev) => ({
                      ...prev,
                      coordinates: {
                        ...(prev.coordinates || { lat: 0, lng: 0 }),
                        lng: Number(val),
                      },
                    }))
                  }
                />
              </div>

              <div>
                <label className="block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Capture Date & Time
                </label>
                <span className="text-[9px] text-slate-400 font-bold uppercase">
                  {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </span>
                <input
                  type="datetime-local"
                  value={toBrowserDateTime(formData.createdAt || "")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      createdAt: toISODateTime(e.target.value),
                    })
                  }
                  className="w-full bg-[#E0E5EC] border-none soft-ui-recessed rounded-xl px-6 py-4 focus:ring-0 text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <AddTags
              formData={formData}
              setFormData={setFormData}
            />
          </section>

          <span className="font-semibold text-slate-500 uppercase">
            Technical MetaData
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metadataFields.map((field) => (
              <FormField
                key={field.id}
                label={field.label}
                placeholder={field.placeholder}
                value={formData.metadata?.[field.id]}
                onChange={(val) => updateMeta(field.id, val)}
              />
            ))}
          </div>

          {/* Save the changes */}
          <section className="mt-10 flex justify-start items-center gap-8">
            <button
              onClick={publishPost}
              disabled={isPublishing}
              className={`soft-ui-extruded px-12 py-5 rounded-2xl font-bold text-lg text-slate-800 bg-slate-50 active:scale-95 transition-all flex items-center gap-3 ${
                isPublishing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Publish className={isPublishing ? "animate-pulse" : ""} />
              {isPublishing ? "Saving to Disk..." : "Publish to Gallery"}
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
