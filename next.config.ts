import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: 'export' for Vercel deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
