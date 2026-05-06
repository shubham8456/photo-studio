"use client";

import imageCompression from 'browser-image-compression';

/**
 * Compresses an image file to WebP, FHD resolution, and 80% quality.
 */

export const compressImage = async (file: File): Promise<File> => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: 'image/webp' as const,
    initialQuality: 0.8,
  };

  try {
    const compressedBlob = await imageCompression(file, options);
    
    // Convert Blob back to a File object to maintain metadata/filename
    return new File([compressedBlob], file.name.replace(/\.[^/.]+$/, "") + ".webp", {
      type: 'image/webp',
      lastModified: Date.now(),
    });
  } catch (error) {
    console.error("Compression failed:", error);
    throw error;
  }
};
