import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.38'], // replace with device-ip in development to avoid funny issues due to HMR
};

export default nextConfig;
