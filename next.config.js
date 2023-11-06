/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/sitemap_index.xml ",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
