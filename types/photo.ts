export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Metadata {
  cameraBody: string;
  lensSystem: string;
  aperture: string;
  shutterSpeed: string;
  iso: number;
  focalLength: string;
}

export interface PhotoDetails {
  id: string;
  title: string;
  desc: string;
  createdAt: string;
  url: string;
  aspect: string;
  tags: string[];
  location: string;
  coordinates: Coordinates;
  metadata: Metadata;
}
