import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 async redirects() {
    return [
      {
        source: '/',
        destination: '/modules/home/views',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
