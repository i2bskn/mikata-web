import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async rewrites() {
    return [
      { source: "/scene-time/:slug.html", destination: "/scene-time/:slug" },
      { source: "/campaign/:slug.html", destination: "/campaign/:slug" },
      { source: "/popular-spot/:slug.html", destination: "/popular-spot/:slug" },
    ];
  },
};

export default nextConfig;
