/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagcdn.com', 'your-image-host.com', 'www.gravatar.com'],
  formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Your existing ibb.co
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '**',
      },
      // Add Unsplash
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      // Optional: also add raw.githubusercontent.com if you ever use GitHub images
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;