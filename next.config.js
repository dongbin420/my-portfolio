/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: [
      'i.namu.wiki',
      'cdn.icon-icons.com',
      'icons.veryicon.com',
      'velog.velcdn.com',
      'cdn1.vectorstock.com',
    ],
  },
};

module.exports = nextConfig;
