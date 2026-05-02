import Link from "next/link";
import Image from "next/image";

import Header from "../header";
import { photoDetails } from "../../../data/photo_details";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Header/>
        <h1>Gallery Page</h1>
        {photoDetails.map((photo) => (
          <div key={photo.id}> 
            <Image src={photo.img} alt={photo.title} width="100" height="100"></Image>
            <div>{photo.title}</div>
            <div>{photo.desc}</div>
          </div>
        ))}
      </main>
    </div>
  );
}
