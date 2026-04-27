import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // 既存のURL構造を維持するためのrewrite設定
  async rewrites() {
    return [
      // シーン・時間帯ページ
      {
        source: "/scene-time/:slug.html",
        destination: "/scene-time/:slug",
      },
      // アクティビティページ
      {
        source: "/activity/:slug.html",
        destination: "/activity/:slug",
      },
      // キャンペーンページ
      {
        source: "/campaign/:slug.html",
        destination: "/campaign/:slug",
      },
      // 人気スポットページ
      {
        source: "/popular-spot/:slug.html",
        destination: "/popular-spot/:slug",
      },
    ];
  },
};

export default nextConfig;
