/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join (__dirname, 'style')]
  }
}

module.exports = nextConfig
