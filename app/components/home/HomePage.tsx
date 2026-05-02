import GalleryItem from "./GalleryItem";
import Header from "../header";
import Footer from "../footer";

import { photoDetails } from "../../../data/photo_details";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-unit">

        {/* Filter List */}
        <section className="mt-8 mb-8">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar py-4 px-2">
            <button className="flex-0 px-6 py-3 rounded-full bg-slate-800 text-white font-label-sm text-label-sm flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[18px]">
                filter_list
              </span>
              ALL
            </button>
            {["MOUNTAINS", "FORESTS", "DESERTS", "COASTS", "ARCTIC"].map(
              (category) => (
                <button
                  key={category}
                  className="flex-0 px-6 py-3 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 font-label-sm text-label-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all"
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
