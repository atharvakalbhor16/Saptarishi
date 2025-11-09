/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'saptrishifoundation.in',
      },
    ],
  },
}

module.exports = nextConfig
