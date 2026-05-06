"use client";

import { useRouter, useSearchParams } from 'next/navigation';

import GalleryItem from "./GalleryItem";
import Header from "../header";
import Footer from "../footer";
import { FilterIcon } from '@/app/components/icons/FilterIcon';
import photoDetails from "@/data/photo_details.json";

const categories = [...new Set(photoDetails.photo_data.flatMap(photo => photo.tags.map(tag => tag.toUpperCase())))];

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "ALL";

  const handleFilterChange = (category: string) => {
    if (category === "ALL") {
      router.push("/");
    } else {
      router.push(`?category=${category}`);
    }
  };

  const filteredPhotos = activeCategory === "ALL" 
    ? photoDetails.photo_data
    : photoDetails.photo_data.filter(photo => photo.tags.includes(activeCategory.toLowerCase()));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-unit">

        {/* List of Filters */}
        <section className="mt-2 mb-2">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar py-4 px-2 text-sm">
            <button
              onClick={() => handleFilterChange("ALL")}
              className={`flex-none px-3 py-1.5 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === "ALL" 
                ? "bg-slate-800 text-white" 
                : "bg-white/40 text-slate-600"
              }`}
            >
              <FilterIcon />
              ALL
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`flex-none px-3 py-1.5 rounded-full border border-white/20 transition-all ${
                  activeCategory === category 
                  ? "bg-slate-800 text-white" 
                  : "bg-white/40 text-slate-600 md:hover:bg-slate-800/60 md:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
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
}
