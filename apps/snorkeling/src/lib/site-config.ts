import type { SiteConfig } from "@repo/seo/metadata";
import type { NavItem, FooterSection, RelatedSite, PartnerLogo } from "@repo/ui";

/**
 * 石垣島シュノーケリングツアーズ サイト設定
 */
export const siteConfig: SiteConfig = {
  siteName: "石垣島シュノーケリングツアーズ",
  siteUrl: "https://snorkeling.ishigaki-tours.com",
  defaultOgImage: "https://snorkeling.ishigaki-tours.com/og-image.jpg",
};

/**
 * カテゴリナビアイテム - 既存サイトのタブナビ（9項目）
 */
export const categoryNavItems = [
  { label: "人気プラン\nランキング", href: "/ranking", iconUrl: "/images/category/ranking.webp", isActive: true },
  { label: "アクティビティ", href: "/plan", iconUrl: "/images/category/activity.webp" },
  { label: "スポットから\n探す", href: "/spot", iconUrl: "/images/category/spot.webp" },
  { label: "人気の組み合わ\nせから探す", href: "/category/setplan", iconUrl: "/images/category/setplan.webp" },
  { label: "当日予約OK\nプラン", href: "/scene-time/same_day_booking.html", iconUrl: "/images/category/same-day.webp" },
  { label: "お得な割引\nセットプラン", href: "/category/setplan", iconUrl: "/images/category/setplan-discount.webp" },
  { label: "プレミアム\n厳選プラン", href: "/campaign/premium-plan.html", iconUrl: "/images/category/premium.webp" },
  { label: "送迎付きツアー", href: "/plan?category=shuttle", iconUrl: "/images/category/transfer.png" },
  { label: "観光ツアー", href: "/scene-time/sightseeing.html", iconUrl: "/images/category/sightseeing.webp" },
];

/**
 * ヘッダーナビゲーション - 既存サイト: 人気ランキング、「選ばれる理由」とは（2項目）
 */
export const navItems: NavItem[] = [
  { label: "人気ランキング", href: "/ranking" },
  { label: `${siteConfig.siteName}が「選ばれる理由」とは`, href: "/visitor" },
];

/**
 * フッターリンクセクション
 */
export const footerSections: FooterSection[] = [
  {
    title: "サイト情報",
    links: [
      { label: `${siteConfig.siteName}が「選ばれる理由」とは`, href: "/visitor" },
      { label: "よくある質問＆注意事項", href: "/faq" },
      { label: "運営者情報", href: "/administratordata" },
      { label: "旅行業務取扱料金表(国内旅行)", href: "https://www.shummake.com/ryokin-kokunnai/" },
      { label: "特定商取引法に関する表記", href: "/act_on_specified_commercial_transactions" },
      { label: "利用規約", href: "/policy" },
      { label: "個人情報保護方針", href: "/privacypolicy" },
      { label: "リンク集・掲載事業者一覧", href: "/links" },
      { label: "アフィリエイトについて", href: "https://shummake-affiliate-programs.manus.space/" },
      { label: "採用情報", href: "https://www.shummake.com/recruit/" },
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

/**
 * 関連サイト一覧
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
  { name: "奄美ツアーズ", href: "https://amami-tours.com" },
  { name: "屋久島アクティビティ", href: "https://yakushima-tours.com" },
  { name: "ハワイツアーズ", href: "https://hawaii-tours.com" },
  { name: "ホノルルツアーズ", href: "https://honolulu-tours.com" },
  { name: "プーケットツアーズ", href: "https://phuket-tours.com" },
  { name: "セブ島ツアーズ", href: "https://cebu-tours.com" },
  { name: "長野ツアーズ", href: "https://nagano-tours.com" },
  { name: "北海道観光ツアーズ", href: "https://hokkaido-tours.com" },
  { name: "ニセコツアーズ", href: "https://niseko-tours.com" },
];

/**
 * パートナーロゴ
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
  instagram: "https://www.instagram.com/ishigaki_tours/",
};
