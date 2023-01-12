/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
};

module.exports = nextConfig;
