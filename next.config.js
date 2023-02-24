/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      "https://www.linkedin.com/feed/"
    ]
  }
}

module.exports = nextConfig
