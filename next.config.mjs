/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
  },
  async redirects() {
    return [{ source: "/favicon.ico", destination: "/logo.png", permanent: true }];
  },
};

export default nextConfig;
