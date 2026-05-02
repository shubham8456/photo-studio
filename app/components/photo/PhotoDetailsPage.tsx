import Link  from "next/link";
import Image from "next/image";

import Header from "../header";
import { PhotoDetails } from "@/types/photo";

interface PhotoDetailsPageProps {
  photo: PhotoDetails;
}

export default function PhotoDetailsPage({ photo }: PhotoDetailsPageProps) {
  return (
    <main>
      <Header />
      <h1>Photo Deatils Page</h1>
      <p>Photo Title: {photo.title}</p>
      <p>Photo Desc: {photo.desc}</p>
      <Image
        src={photo.url}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        alt={photo.title}
        width="40"
        height="40"
      />

      <nav>
        <Link href="/">Back to Gallery</Link>
      </nav>
    </main>
  );
};
