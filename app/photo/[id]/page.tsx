import { notFound } from "next/navigation";
import PhotoDetailsPage from "../../components/photo/PhotoDetailsPage";

type Photo = {
  id: string;
  title: string;
};

type PhotoPageProps = {
  params: {
    photo: string;
  };
};

function getPhoto(photoId: string): Photo | undefined {
  const photos: Photo[] = [
    { id: "1", title: "Sunset" },
    { id: "2", title: "Mountains" },
  ];

  return photos.find((p) => p.id === photoId);
}

export default function LoadPhotoDetailsPage({ params }: PhotoPageProps) {
  const photo = getPhoto(params.photo);

  if (!photo) {
    notFound();
  }

  return (
    <PhotoDetailsPage photo={photo} />
  );
}
