import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

import { PhotoDetails } from '@/types/photo';

export async function POST(req: Request) {
  // Only allow this on local development for security
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }

  const data = await req.formData();
  const file = data.get('file') as File;
  const newPhotoDetails = JSON.parse(data.get('details') as string);

  // 1. Save the image to public folder
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const imagePath = path.join(process.cwd(), 'public/src/images', file.name);
  fs.writeFileSync(imagePath, buffer);

  // 2. Update the .json file
  const jsonFilePath = path.join(process.cwd(), 'data/photo_details.json');
  const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
  const fullData = JSON.parse(fileContent);
  const photoData: PhotoDetails[] = fullData.photo_data;
  
  const sanitizedEntry: PhotoDetails = {
    id: `img-${Date.now()}`,
    url: `/src/images/${file.name}`,
    title: "",
    desc: "",
    aspect: "",
    tags: [],
    ...newPhotoDetails,
  };

  photoData.unshift(sanitizedEntry);

  fs.writeFileSync(jsonFilePath, JSON.stringify({ photo_data: photoData }, null, 2));

  return NextResponse.json({ success: true });
}
