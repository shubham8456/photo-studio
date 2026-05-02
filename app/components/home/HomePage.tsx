"use client";

import { useState } from 'react';

import GalleryItem from "./GalleryItem";
import Header from "../header";
import Footer from "../footer";
import { FilterIcon } from '../../components/icons/FilterIcon';

import { photoDetails } from "../../../data/photo_details";

const categories = [...new Set(photoDetails.flatMap(photo => photo.tags.map(tag => tag.toUpperCase())))];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredPhotos = activeCategory === "ALL" 
    ? photoDetails
    : photoDetails.filter(photo => photo.tags.includes(activeCategory.toLowerCase()));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-unit">

        {/* List of Filters */}
        <section className="mt-2 mb-2">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar py-4 px-2 text-sm">
            <button
              onClick={() => setActiveCategory("ALL")}
              className={`flex-0 px-3 py-1.5 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === "ALL" 
                ? "bg-slate-800 text-white" 
                : "bg-white/40 text-slate-600"
              }`}
            >
              <FilterIcon />
              ALL
            </button>
            {categories.map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-0 px-3 py-1.5 rounded-full border border-white/20 transition-all ${
                    activeCategory === category 
                    ? "bg-slate-800 text-white" 
                    : "bg-white/40 text-slate-600 md:hover:bg-slate-800/60 md:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </section>

        {/* Gallery Items */}
        <section className="masonry-grid pb-12">
          {filteredPhotos.map((photo) => (
            <GalleryItem key={photo.id} {...photo} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
