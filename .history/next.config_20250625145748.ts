import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/modules/home/view',
        permanent: false, // use true for 301
      },
    ]
  },
};

export default nextConfig;
