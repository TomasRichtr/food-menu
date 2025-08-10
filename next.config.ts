import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.AWS_BUCKET_URL! as string,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
