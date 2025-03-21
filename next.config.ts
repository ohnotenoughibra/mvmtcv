// next.config.ts
import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep any existing settings you already have here
  
  // Add the new image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  experimental: {
    scrollRestoration: true,
  }
};

export default nextConfig;