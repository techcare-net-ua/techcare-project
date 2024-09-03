/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/shop',
        destination: '/',
        permanent: true,
      },
      // Wildcard path matching
    ];
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: process.env.HOST_NAME,
      //   pathname: '/uploads/**/*',
      // },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/uploads/**/*',
        port: '1337',
      },

      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
