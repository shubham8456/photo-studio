import { notFound } from "next/navigation";

import photoDetails from "@/data/photo_details.json";
import PhotoDetailsPage from "@/app/components/photo/PhotoDetailsPage";

type PhotoPageParams = Promise<{ id: string }>;

export default async function LoadPhotoDetailsPage({ params }: { params: PhotoPageParams }) {
  const { id } = await params;
  const photo = photoDetails.photo_data.find((p) => p.id === id);

  if (!photo) notFound();

  return (
    <PhotoDetailsPage photo={photo} />
  );
}
