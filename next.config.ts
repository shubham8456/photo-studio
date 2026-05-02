import type { NextConfig } from "next";

const isProd  = process.env.NODE_ENV === 'production';
const gitRepo = 'photo-studio';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [new URL('https://lh3.googleusercontent.com/aida-public/**')],
  },
  basePath:    isProd ? `/${gitRepo}`  : '',
  assetPrefix: isProd ? `/${gitRepo}/` : '',
};

export default nextConfig;
