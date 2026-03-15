import type { SiteConfig } from "@repo/seo/metadata";
import type { NavItem, FooterSection, RelatedSite, PartnerLogo } from "@repo/ui";

/**
 * 石垣島 青の洞窟ツアーズ サイト設定
 */
export const siteConfig: SiteConfig = {
  siteName: "石垣島 青の洞窟ツアーズ",
  siteUrl: "https://bluecavetour.ishigaki-tours.com",
  defaultOgImage: "https://bluecavetour.ishigaki-tours.com/og-image.jpg",
};

/**
 * ヘッダーナビゲーション - 既存サイト: アクティビティ、人気ランキング、「選ばれる理由」とは
 */
export const navItems: NavItem[] = [
  { label: "アクティビティ", href: "/plan" },
  { label: "人気ランキング", href: "/ranking" },
  { label: "石垣島青の洞窟ツアーズが「選ばれる理由」とは", href: "/visitor" },
];

/**
 * フッターリンクセクション - 既存サイトのフッターナビ
 */
export const footerSections: FooterSection[] = [
  {
    title: "サイト情報",
    links: [
      { label: "石垣島青の洞窟ツアーズが「選ばれる理由」とは", href: "/visitor" },
      { label: "よくある質問＆注意事項", href: "/faq" },
      { label: "運営者情報", href: "/administratordata" },
      { label: "旅行業務取扱料金表(国内旅行)", href: "/travel-fee" },
      { label: "特定商取引法に関する表記", href: "/act_on_specified_commercial_transactions" },
      { label: "利用規約", href: "/policy" },
      { label: "個人情報保護方針", href: "/privacypolicy" },
      { label: "リンク集・掲載事業者一覧", href: "/links" },
      { label: "アフィリエイトについて", href: "/affiliate" },
      { label: "採用情報", href: "/recruit" },
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
  saleUrl: "/pickup_item",
  reservationCheckUrl: "https://mikata.in/yaeyama-tour/subscribers/confirm",
};

/**
 * 関連サイト一覧 - 既存サイトのフッター「当社運営サイトのご紹介」
 */
export const relatedSites: RelatedSite[] = [
  { name: "西表島ツアーズ", href: "https://iriomote-tours.com" },
  { name: "小浜島ツアーズ", href: "https://kohama-tours.com" },
  { name: "石垣島ツアーズ", href: "https://ishigaki-tours.com" },
  { name: "石垣島 青の洞窟ツアーズ", href: "https://bluecavetour.ishigaki-tours.com" },
  { name: "石垣島シュノーケリングツアーズ", href: "https://snorkeling.ishigaki-tours.com" },
  { name: "石垣島ダイビングツアーズ", href: "https://diving.ishigaki-tours.com" },
  { name: "石垣島レンタカーツアーズ", href: "https://rentacar.ishigaki-tours.com" },
  { name: "幻の島ツアーズ", href: "https://maboroshi-tours.com" },
  { name: "与那国島ツアーズ", href: "https://yonaguni-tours.com" },
  { name: "宮古島ツアーズ", href: "https://miyako-tours.com" },
  { name: "宮古島シュノーケリングツアーズ", href: "https://snorkeling.miyako-tours.com" },
  { name: "パンプキンホールツアーズ", href: "https://pumpkin.miyako-tours.com" },
  { name: "沖縄ツアーズ", href: "https://okinawa-tours.com" },
  { name: "沖縄やんばるツアーズ", href: "https://yanbaru.okinawa-tours.com" },
  { name: "沖縄恩納村ツアーズ", href: "https://onna.okinawa-tours.com" },
  { name: "沖縄パラセーリングツアーズ", href: "https://parasailing.okinawa-tours.com" },
  { name: "慶良間ツアーズ", href: "https://kerama-tours.com" },
  { name: "水納島ツアーズ", href: "https://minnajima-tours.com" },
  { name: "ホエールウォッチングツアーズ", href: "https://whale.okinawa-tours.com" },
  { name: "久米島ツアーズ", href: "https://kumejima-tours.com" },
  { name: "奄美大島ツアーズ", href: "https://amami-tours.com" },
  { name: "屋久島アクティビティ", href: "https://yakushima-tours.com" },
  { name: "ハワイツアーズ", href: "https://hawaii-tours.com" },
  { name: "長野ツアーズ", href: "https://nagano-tours.com" },
];

/**
 * パートナーロゴ - フッターに表示
 */
export const partnerLogos: PartnerLogo[] = [
  {
    name: "全国旅行業協会（ANTA）",
    imageUrl: "/images/partner/anta.webp",
    description: "一般社団法人 全国旅行業協会（ANTA）〈旅行業協会加盟〉",
  },
  {
    name: "HIS",
    imageUrl: "/images/partner/his.webp",
    description: "HIS〈大手旅行会社と提携〉",
  },
  {
    name: "海と日本プロジェクト",
    imageUrl: "/images/partner/umi-nihon.webp",
    description: "海と日本プロジェクト〈内閣府と日本財団が推進〉",
  },
  {
    name: "宝塚医療大学",
    imageUrl: "/images/partner/takarazuka.webp",
    description: "宝塚医療大学〈産学連携〉",
  },
  {
    name: "おきなわSDGsパートナー",
    imageUrl: "/images/partner/sdgs.webp",
    description: "おきなわSDGsパートナー〈SDGsの普及活動を実施〉",
  },
  {
    name: "スカイレンタカー",
    imageUrl: "/images/partner/sky-rentacar.webp",
    description: "スカイレンタカー〈レンタカー事業の提携〉",
  },
];

/**
 * ソーシャルリンク
 */
export const socialLinks = {
  instagram: "https://www.instagram.com/bluecavetour/",
};
