/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.namu.wiki',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.icon-icons.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'icons.veryicon.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.vectorstock.com',
        pathname: '**',
      },
    ],

    // domains: [
    //   'i.namu.wiki',
    //   'cdn.icon-icons.com',
    //   'icons.veryicon.com',
    //   'velog.velcdn.com',
    //   'cdn1.vectorstock.com',
    // ],
  },
};

module.exports = nextConfig;
