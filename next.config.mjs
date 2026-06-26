/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'a.espncdn.com' },
      { protocol: 'https', hostname: '**.espncdn.com' },
      { protocol: 'https', hostname: '**.espn.com' },
    ],
  },
};

export default nextConfig;
