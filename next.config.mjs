/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Serve screenshots as AVIF or WebP at the size each screen needs. Originals stay in /public.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
