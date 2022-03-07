/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'api.themoviedb.org'],
  },
}

module.exports = nextConfig
