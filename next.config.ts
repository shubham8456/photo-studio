import type { NextConfig } from "next";

const isProd  = process.env.NODE_ENV === 'production';
const gitRepo = 'photo-studio';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath:    isProd ? `/${gitRepo}`  : '',
  assetPrefix: isProd ? `/${gitRepo}/` : '',
  allowedDevOrigins: ['192.168.1.38'], // replace with device-ip in development to avoid funny issues due to HMR
};

export default nextConfig;
