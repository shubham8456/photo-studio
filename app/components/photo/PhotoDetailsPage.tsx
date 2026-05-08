"use client";

import { useRouter } from "next/navigation";
import Image         from "next/image";

import MapWrapper from "./MapWrapper";
import Header     from "../header";
import Footer     from "../footer";

import { PhotoDetails } from "@/types/photo";
import { formatDate }   from "@/utils/date";

import { ArrowBack } from "../icons/ArrowBack";
import { Camera }    from "../icons/Camera";
import { Location }  from "../icons/Location";

interface PhotoDetailsPageProps {
  photo: PhotoDetails;
}

export default function PhotoDetailsPage({ photo }: PhotoDetailsPageProps) {
  const router = useRouter();

  return (
    <main>
      <Header />

      <main className="container mx-auto px-4 md:px-margin-desktop max-w-container-max pb-24 mt-6">
        
        {/* navigation bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 group text-slate-600 hover:text-slate-900 transition-colors bg-transparent border-none cursor-pointer"
          >
            <ArrowBack />
            <span className="font-bold text-xs uppercase tracking-widest">
              Back to Gallery
            </span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            {photo.title ? photo.title : ""}
          </h1>
        </div>

        <div className="photo-frame rounded-[2rem] overflow-hidden p-4 md:p-8 bg-[#E0E5EC] mb-8">
          <div className="rounded-2xl overflow-hidden relative">

            {/* Image Showcase */}
            {photo.url
              ? (<Image
                  className="w-full h-full soft-in-deep object-cover"
                  src={photo.url}
                  alt={photo.title}
                  width="100"
                  height="100"
                />)
              : (<div className="font-semibold text-center uppercase">Unable to load image</div>)
            }
            
            {/* Image Tags */}
            <div className="absolute bottom-6 left-6 flex gap-3">
              {photo.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold uppercase tracking-wider text-[10px] border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="rounded-[1.5rem] overflow-hidden soft-ui-extruded p-3 md:p-6 bg-[#E0E5EC] mb-16">
          {photo.createdAt && !isNaN(Date.parse(photo.createdAt)) && (
            <span className="bg-white/30 px-2 py-0.5 rounded-full">
              <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px]">
                CAPTURED ON:&nbsp;
              </span>
              <span className="font-semibold text-slate-800 text-xs" suppressHydrationWarning>
                {formatDate(photo.createdAt)}
              </span>
            </span>
          )}
          <h3 className="font-semibold mt-3">
            {photo.desc ? `"${photo.desc}"` : ''}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 p-10 rounded-[1.5rem] soft-ui-extruded bg-[#E0E5EC]">
            <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Camera />
              Technical Metadata
            </h3>

            {/* Spec Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
              {[
                { k: "Camera Body",     v: photo.metadata.cameraBody || ''},
                { k: "Lens System",     v: photo.metadata.lensSystem || ''},
                { k: "Aperture",        v: photo.metadata.aperture || ''},
                { k: "Shutter Speed",   v: photo.metadata.shutterSpeed || ''},
                { k: "ISO Sensitivity", v: typeof photo.metadata.iso === 'number' && photo.metadata.iso != 0 ? `ISO ${photo.metadata.iso}` : ''},
                { k: "Focal Length",    v: photo.metadata.focalLength || ''},
              ].map((spec, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px]">
                    {spec.k}
                  </span>
                  <span className="font-semibold text-slate-800">{spec.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/40 flex items-center gap-4">
              <div className="p-3 rounded-full soft-ui-extruded bg-[#E0E5EC]">
                <Location />
              </div>
              <div>
                <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px]">
                  Location Discovery
                </span>
                <p className="font-semibold text-slate-800">
                  {photo.location ? photo.location : "Not Available"}
                </p>
              </div>
            </div>
          </div>

          {/* Minimap */}
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-[1.5rem] soft-ui-extruded bg-[#E0E5EC] flex-grow flex flex-col items-center justify-center text-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden soft-ui-recessed mb-6">
                {photo.coordinates &&
                 typeof photo.coordinates.lat === 'number' &&
                 typeof photo.coordinates.lng === 'number' &&
                 !isNaN(photo.coordinates.lat) &&
                  !isNaN(photo.coordinates.lng)
                  ? (<MapWrapper lat={photo.coordinates.lat} lng={photo.coordinates.lng} />)
                  : (<div className="font-semibold uppercase mt-32">Invalid Coordinates</div>)
                }
              </div>
              <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px] mb-2">
                Capture Coordinates
              </span>
              <p className="font-mono text-slate-700 bg-white/30 px-4 py-1 rounded-full text-xs">
                {`${photo.coordinates.lat}° N, ${photo.coordinates.lng}° E`}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </main>
  );
}
