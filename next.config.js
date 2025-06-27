/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  // this is invalid in Next.js 15+, and might be causing confusion
}


module.exports = nextConfig;