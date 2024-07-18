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
    domains: ['localhost'],
  },
};

export default nextConfig;
