import type { SiteConfig } from "@repo/seo/metadata";
import type { NavItem, FooterSection } from "@repo/ui";

/**
 * 石垣島 青の洞窟ツアーズ サイト設定
 */
export const siteConfig: SiteConfig = {
  siteName: "石垣島 青の洞窟ツアーズ",
  siteUrl: "https://bluecavetour.ishigaki-tours.com",
  defaultOgImage: "https://bluecavetour.ishigaki-tours.com/og-image.jpg",
};

/**
 * ヘッダーナビゲーション
 */
export const navItems: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "メニュー", href: "/メニュー" },
  { label: "人気ランキング", href: "/ranking" },
  { label: "コラム", href: "/column" },
  { label: "よくある質問", href: "/faq" },
];

/**
 * フッターリンクセクション
 */
export const footerSections: FooterSection[] = [
  {
    title: "ツアー情報",
    links: [
      { label: "プラン一覧", href: "/plan" },
      { label: "人気ランキング", href: "/ranking" },
      { label: "当日予約可能", href: "/scene-time/same_day_booking.html" },
      { label: "写真無料ツアー", href: "/scene-time/freetourphotos.html" },
    ],
  },
  {
    title: "セットプラン",
    links: [
      { label: "青の洞窟×SUP・カヤック", href: "/setplan/bluecave-sup-kayak.html" },
      { label: "青の洞窟×マングローブ", href: "/setplan/bluecave-mangrove.html" },
      { label: "青の洞窟×川平湾", href: "/setplan/bluecave-kabirabay.html" },
    ],
  },
  {
    title: "サポート",
    links: [
      { label: "よくある質問", href: "/faq" },
      { label: "お問い合わせ", href: "/select-contact" },
      { label: "利用規約", href: "/policy" },
      { label: "特定商取引法", href: "/act_on_specified_commercial_transactions" },
    ],
  },
];

/**
 * 会社情報
 */
export const companyInfo = {
  name: "株式会社ShumMaKe",
  address: "〒143-0025 東京都大田区南馬込4丁目26-18",
};

/**
 * ヘッダー設定
 */
export const headerConfig = {
  catchphrase: `青の洞窟専門のアクティビティ予約サイト "石垣島 青の洞窟ツアーズ"`,
  contactUrl: "/select-contact",
  historyUrl: "/myplan",
  reservationCheckUrl: "https://ishigaki-tours.com/mypage/reservation",
};
