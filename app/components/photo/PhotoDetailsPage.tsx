import Link from "next/link";

type Photo = {
  id: string;
  title: string;
};

type PhotoDetailsPageProps = {
  photo: Photo;
};

export default function PhotoDetailsPage({ photo }: PhotoDetailsPageProps) {
  return (
    <main>
      <h1>Photo Deatils Page</h1>
      <p>Photo Title: {photo.title}</p>

      <nav>
        <Link href="/">Back to Gallery</Link>
      </nav>
    </main>
  );
};
