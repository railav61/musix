import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint errors during build
  },
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com", "unsplash.com"],
  },
};

export default nextConfig;
