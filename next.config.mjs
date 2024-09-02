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
      {
        protocol: 'https',
        hostname: process.env.HOST_NAME,
        pathname: '/uploads/**/*',
      },

      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '',
      },
    ],
  },
};

export default nextConfig;
