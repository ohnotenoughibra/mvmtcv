import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // For Netlify compatibility
  output: 'export',
  
  // Optimize image loading for static site
  images: {
    unoptimized: true,
    minimumCacheTTL: 60 * 60 * 24 * 7, // Cache images for a week
  },
  
  // Improved page loading
  experimental: {
    scrollRestoration: true,
  },
  
  // Enable trailing slash for better static hosting
  trailingSlash: true,
};

export default nextConfig;