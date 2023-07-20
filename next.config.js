/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN,
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false }

    if (isServer) require('./server-scripts/sitemap-generator')

    return config
  },
}

module.exports = nextConfig
