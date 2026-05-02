import Link from "next/link";
import Image from "next/image";

type GalleryItemProps = {
  id: string;
  title: string;
  desc: string;
  img: string;
  aspect: string;
};

const GalleryItem = ({ id, title, desc, img, aspect }: GalleryItemProps) => (
  <Link
    href={`/photo/${id}`}
    className="masonry-item group block cursor-pointer"
  >
    <div className="neumorphic-card rounded-[1.5rem] p-3 flex flex-col gap-3 transition-transform duration-300 hover:scale-[1.02]">
      <div className={`neumorphic-inset-img rounded-[1rem] overflow-hidden relative ${aspect}`}>
        <Image
          src={img}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={title}
          width="100"
          height="100"
        />
      </div>
      <div className="px-2 pb-1">
        <h3 className="font-semibold text-sm text-on-surface truncate">
          {title}
        </h3>
        <p className="text-[10px] text-on-surface-variant line-clamp-2 mt-1">
          {desc}
        </p>
      </div>
    </div>
  </Link>
);

export default GalleryItem;
