/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/page/1',
        destination: '/blog',
        permanent: true,
      }
    ]
  },
  env: {
    NEXT_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN,
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false }

    if(isServer) require('./server-scripts/sitemap-generator')

    return config
  }
}

module.exports = nextConfig
