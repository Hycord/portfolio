/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    appDir: true,
    
  },
  images: {
    domains: ["media.discordapp.net"],
  }
}

export default nextConfig
