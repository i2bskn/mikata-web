import type { SiteConfig } from "@repo/seo/metadata";
import type { NavItem } from "@repo/ui";

/**
 * 石垣島シュノーケリングツアーズ サイト設定
 */
export const siteConfig: SiteConfig = {
  siteName: "石垣島シュノーケリングツアーズ",
  siteUrl: "https://snorkeling.ishigaki-tours.com",
  defaultOgImage: "https://snorkeling.ishigaki-tours.com/og-image.jpg",
};

/**
 * ヘッダーナビゲーション - 既存サイト: 人気ランキング、「選ばれる理由」とは（2項目）
 */
export const navItems: NavItem[] = [
  { label: "人気ランキング", href: "/ranking" },
  { label: "石垣島シュノーケリングツアーズが「選ばれる理由」とは", href: "/visitor" },
];

/**
 * ヘッダー設定
 */
export const headerConfig = {
  catchphrase: `石垣島シュノーケリング専門のアクティビティ予約サイト`,
  contactUrl: "/select-contact",
  historyUrl: "/myplan",
  saleUrl: "/pickup_item",
  reservationCheckUrl: "https://mikata.in/yaeyama-tour/subscribers/confirm",
};

/**
 * ドロワーメニュー設定 - 既存サイト準拠
 */
export const menuConfig = {
  quickLinks: [
    { label: "人気ツアー\nランキング", href: "/ranking", iconUrl: "/images/category/ranking.webp" },
    { label: "予約確認\n(予約済みの方)", href: "https://mikata.in/yaeyama-tour/subscribers/confirm", iconUrl: "/images/menu/calender-icon.png" },
    { label: "閲覧履歴\nお気に入り", href: "/myplan", iconUrl: "/images/menu/bookmark-icon.png" },
  ],
  sections: [
    {
      title: "プランを探す",
      items: [
        { label: "送迎付きプラン\nから探す", href: "/plan?category=shuttle", iconUrl: "/images/category/transfer.png" },
        { label: "当日予約OK\nプラン", href: "/scene-time/same_day_booking.html", iconUrl: "/images/category/same-day.webp" },
        { label: "アクティビティ\nから探す", href: "/plan", iconUrl: "/images/category/activity.webp" },
      ],
    },
  ],
  externalSites: [
    { label: "石垣島ツアーズ", href: "https://ishigaki-tours.com/", iconUrl: "/images/menu/ishigaki-logo.png" },
    { label: "小浜島ツアーズ", href: "https://kohama-tours.com/", iconUrl: "/images/menu/kohama-logo.png" },
  ],
};
