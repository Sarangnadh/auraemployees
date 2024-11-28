import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode
  swcMinify: true, // Enables SWC for faster builds and smaller bundles
  images: {
    domains: ["example.com"], // Whitelist domains for Next.js Image Optimization
  },
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint checks during the build
  },
  typescript: {
    ignoreBuildErrors: false, // Set to true if you want to ignore TypeScript build errors
  },
};

export default nextConfig;

