/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // don’t fail the build if TS finds errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // don’t fail the build if ESLint finds errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
