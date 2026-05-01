import type { NextConfig } from "next";

const gitRepo = 'photo-studio';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath:    process.env.NODE_ENV === 'production' ? `/${gitRepo}`  : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${gitRepo}/` : '',
};

export default nextConfig;
