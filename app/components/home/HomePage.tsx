import GalleryItem from "./GalleryItem";
import Header from "../header";
import Footer from "../footer";

import { photoDetails } from "../../../data/photo_details";

const categories = [...new Set(photoDetails.flatMap(photo => photo.tags.map(tag => tag.toUpperCase())))];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-unit">

        {/* Filter List */}
        <section className="mt-2 mb-2">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar py-4 px-2 text-sm">
            <button className="flex-0 px-3 py-1.5 rounded-full bg-slate-800 text-white flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[12px]">
                filter_list
              </span>
              ALL
            </button>
            {categories.map(
              (category) => (
                <button
                  key={category}
                  className="flex-0 px-3 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/20 text-slate-600  hover:text-white  dark:hover:bg-slate-800/60 transition-all"
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </section>

        {/* Gallery Items */}
        <section className="masonry-grid pb-12">
          {photoDetails.map((photo) => (
            <GalleryItem key={photo.id} {...photo} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
