import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Output static export for Netlify compatibility
  output: 'export',
  
  // Image configuration
  images: {
    // Use this for Netlify static export
    unoptimized: true,
    
    // Keep any existing image settings for development
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  
  // Keep your experimental settings
  experimental: {
    scrollRestoration: true,
  },
  
  // Disable image optimization but enable static image imports 
  // for compatibility with static export
  assetPrefix: '/',
  
  // Ensure all routes work correctly in static export
  trailingSlash: true,
};

export default nextConfig;