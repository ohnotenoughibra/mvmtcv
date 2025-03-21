import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Your existing config settings
  
  // Add these settings for Netlify deployment
  output: 'export',
  
  // Add this if you're using Next.js image optimization
  images: {
    unoptimized: true,
    // Keep any existing image settings you already have
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  
  // Keep your existing experimental settings
  experimental: {
    scrollRestoration: true,
  }
};

export default nextConfig;