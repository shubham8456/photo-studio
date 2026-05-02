"use client";

import Link from "next/link";

import Header from "../header";
import Footer from "../footer";

import { ArrowBack }  from "../icons/ArrowBack";
import { UploadFile } from "../icons/UploadFile";
import { AddCircle }  from "../icons/AddCircle";
import { Close }      from "../icons/Close";
import { Publish }    from "../icons/Publish";
import { photoDetails } from "@/data/photo_details";

const categories = [...new Set(photoDetails.flatMap(photo => photo.tags.map(tag => tag.toUpperCase())))];

const publishPost = () => {
  return;
}

export default function UploadPage() {
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
              <span className="text-slate-400">
                NEW PHOTOS
              </span>
            </h1>
            <p className="text-on-surface-variant">
              Contribute your finest landscape photography to this curated collection.
            </p>
          </header>

          <section className="mb-6">
            <div className="soft-ui-recessed rounded-3xl p-12 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 min-h-[400px] text-center group cursor-pointer transition-all">
              <div className="soft-ui-extruded w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <UploadFile />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Drag & drop your masterpiece
              </h3>
              <p className="text-on-surface-variant max-w-sm mb-8">
                High-resolution JPEG, PNG, or WebP files.
              </p>
              <button className="soft-ui-extruded px-8 py-3 rounded-xl font-bold text-xs text-slate-600 uppercase tracking-widest active:scale-95 transition-all">
                Select File
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <label className="block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-4">
                  Photo Title
                </label>
                <input
                  className="w-full bg-[#E0E5EC] border-none soft-ui-recessed rounded-xl px-6 py-4 focus:ring-0 text-slate-800 placeholder:text-slate-400"
                  placeholder="e.g. Whispers of the Cascades"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-4">
                  Description
                </label>
                <textarea
                  className="w-full bg-[#E0E5EC] border-none soft-ui-recessed rounded-xl px-6 py-4 focus:ring-0 text-slate-800 placeholder:text-slate-400"
                  placeholder="Describe the conditions, lighting, and narrative of the shot..."
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <label className="block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-4">
                  Add Tags
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-[#E0E5EC] border-none soft-ui-recessed rounded-xl px-6 py-4 focus:ring-0 text-slate-800 placeholder:text-slate-400 pr-14"
                    placeholder="Type a tag and press enter..."
                    type="text"
                  />
                  <AddCircle />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-xs text-slate-500 uppercase tracking-wider mb-4">
                  Selected Tags
                </label>
                <div className="flex flex-wrap gap-4">
                  {categories.map(
                    (tag) => (
                      <span
                        key={tag}
                        className="soft-ui-extruded px-4 py-2 rounded-full text-xs text-slate-600 flex items-center gap-2 cursor-pointer hover:shadow-sm"
                      >
                        {tag}{" "}
                        <Close />
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 flex justify-start items-center gap-8">
            <button className="font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
              Save Draft
            </button>
            <button
              onClick={() => publishPost()}
              className="soft-ui-extruded px-12 py-5 rounded-2xl font-bold text-lg text-slate-800 bg-slate-50 active:scale-95 transition-all flex items-center gap-3"
            >
              <Publish />
              Publish to Gallery
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
