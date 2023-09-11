/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.discordapp.net", "cdn.discordapp.com"],
  },
}

export default nextConfig
