import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  // Only allow this on local development for security
  if (process.env.NODE_NODE !== 'development') {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }

  const data = await req.formData();
  const file = data.get('file') as File;
  const details = JSON.parse(data.get('details') as string);

  // 1. Save the image to public folder
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const imagePath = path.join(process.cwd(), 'public/src/images', file.name);
  fs.writeFileSync(imagePath, buffer);

  // 2. Update the .ts file
  const tsFilePath = path.join(process.cwd(), 'data/photo_details.ts');
  const fileContent = fs.readFileSync(tsFilePath, 'utf8');
  
  // Very simple injection logic: find the array end and insert before it
  // Note: For a more robust version, you might want to use a JSON file instead
  const updatedContent = fileContent.replace(
    /\];/, 
    `  ${JSON.stringify(details, null, 2)},\n];`
  );
  
  fs.writeFileSync(tsFilePath, updatedContent);

  return NextResponse.json({ success: true });
}
