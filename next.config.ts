import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This ensures the forms html file gets copied to the output directory
  // during the build process
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;