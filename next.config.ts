// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // Pinterest images
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pin.it', // Add this for pin.it
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.maia.id', 
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
