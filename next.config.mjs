/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // image config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
