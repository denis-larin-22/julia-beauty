/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['uk'],
    defaultLocale: 'uk',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
