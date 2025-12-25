import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yukiti6333.wordpress.com",
      },
    ],
  },
};

export default nextConfig;
