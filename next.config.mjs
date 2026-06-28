/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` emits a self-contained `out/` folder
  // that can be uploaded as-is to Hostinger (no Node server at runtime).
  output: 'export',
  // Each route is written as `<route>/index.html` so Apache serves clean
  // URLs without rewrite rules.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // The Next image optimizer needs a server, which static export does not
    // have. Serve original files instead.
    unoptimized: true,
  },
}

export default nextConfig
