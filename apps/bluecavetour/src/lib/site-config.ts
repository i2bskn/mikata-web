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
 * サイドバー設定
 */
export const sidebarConfig = {
  planCount: 17,
  banners: [
    {
      href: "https://ishigaki-tours.com/ferry/",
      imageUrl: "/images/sidebar/ferry-banner.webp",
      alt: "離島フェリー予約",
      external: true,
    },
    {
      href: "/campaign/premium-plan.html",
      imageUrl: "/images/banner/hero-premium.webp",
      alt: "ツアーズ厳選プレミアムプラン",
    },
  ],
};

/**
 * トップページ「シーン・時間帯から探す」の表示項目
 */
export const sceneTimeItems = [
  { href: "/scene-time/half-day.html", image: "/images/scene/half-day.jpg", title: "お手軽！半日ツアー" },
  { href: "/scene-time/one-day.html", image: "/images/scene/one-day.jpg", title: "満喫！1日ツアー" },
  { href: "/scene-time/freetourphotos.html", image: "/images/scene/free-photo.webp", title: "写真無料サービス付きツアー" },
  { href: "/scene-time/same_day_booking.html", image: "/images/scene/same-day.webp", title: "前日・当日予約可能な青の洞窟ツアー" },
];

/**
 * トップページ「人気の組み合わせから探す」の表示項目
 */
export const combinationItems = [
  { href: "/setplan/bluecave-kabirabay.html", title: "青の洞窟×川平湾ツアー", image: "/images/setplan/bluecave-kabirabay.webp" },
  { href: "/setplan/bluecave-mangrove.html", title: "青の洞窟×マングローブツアー", image: "/images/setplan/bluecave-mangrove.webp" },
  { href: "/setplan/bluecave-sup-kayak.html", title: "石垣島青の洞窟×SUP・カヤック", image: "/images/setplan/bluecave-sup-kayak.webp" },
];

/**
 * トップページ「おすすめ観光情報＆キャンペーン」の表示項目
 */
export const campaignItems = [
  { href: "/ferry/tours", image: "/images/campaign/ferry.jpg", title: "【各便40席限定】簡単！便利！離島フェリーチケットの予約＆詳細はこちら" },
  { href: "/popular-spot/bluecave.html", image: "/images/campaign/bluecave-spot.png", title: "一生モノの絶景体験！石垣島『青の洞窟』で神秘のシュノーケリングツアー" },
  { href: "/scene-time/rental-car.html", image: "/images/campaign/rental-car.png", title: "【石垣空港送迎付き】人気の石垣島レンタカー特集！" },
  { href: "/campaign/premium-plan.html", image: "/images/campaign/premium-plan.webp", title: "【ツアーズ厳選】安心＆満足度No.1のおすすめプラン特集！" },
  { href: "/scene-time/freetourphotos.html", image: "/images/campaign/freetourphotos.webp", title: "【写真無料】絶景と感動を写真でプレゼント！" },
  { href: "/scene-time/setplan.html", image: "/images/campaign/setplan.jpg", title: "お得な割引セットプラン特集" },
  { href: "/scene-time/same_day_booking.html", image: "/images/campaign/same-day-booking.webp", title: "前日・当日予約可能な青の洞窟ツアー" },
];

/**
 * カテゴリナビアイテム - サイドバー・カテゴリナビ共通
 */
export const categoryNavItems = [
  { label: "人気プラン\nランキング", href: "/ranking", iconUrl: "/images/category/ranking.webp", isActive: true },
  { label: "アクティビティ", href: "/plan", iconUrl: "/images/category/activity.webp" },
  { label: "当日予約OK\nプラン", href: "/scene-time/same_day_booking.html", iconUrl: "/images/category/same-day.webp" },
  { label: "写真無料サービ\nス付きプラン", href: "/scene-time/freetourphotos.html", iconUrl: "/images/category/free-photo.png" },
  { label: "プレミアム\n厳選プラン", href: "/campaign/premium-plan.html", iconUrl: "/images/category/premium.webp" },
  { label: "ウミガメツアー", href: "/plan?category=umigame", iconUrl: "/images/category/sea-turtle.png" },
  { label: "送迎付きプラン", href: "/plan?category=shuttle", iconUrl: "/images/category/transfer.png" },
  { label: "お得な割引\nセットプラン", href: "/category/setplan", iconUrl: "/images/category/setplan.webp" },
];

/**
 * ヘッダーナビゲーション - 既存サイト: アクティビティ、人気ランキング、「選ばれる理由」とは
 */
/**
 * トップページ「条件から探す」のアコーディオン項目
 */
export const conditionSearchItems = [
  { label: "スポットから探す", options: ["青の洞窟"] },
  { label: "見れるものから探す", options: ["星空", "マングローブ", "熱帯魚", "ウミガメ", "朝陽"] },
  {
    label: "シーンから探す",
    options: ["学生旅行", "男旅", "社員旅行", "カップル", "ハネムーン", "ファミリー", "一人旅", "団体旅行", "女子旅"],
  },
  {
    label: "シーズンから探す",
    options: ["1年中", "冬（1月〜3月）", "夏（7月〜9月）", "春（4月〜6月）", "秋（10月〜12月）"],
  },
  { label: "時間帯から探す", options: ["早朝", "午前", "午後", "1日", "夕方"] },
  {
    label: "こだわり条件から探す",
    options: [
      "前日予約OK",
      "当日予約OK",
      "食事付き",
      "度付きゴーグル",
      "写真サービス無料",
      "自由時間あり",
      "60歳以上参加OKツアー",
      "外国語対応（English available）",
      "初心者向け",
      "複数割対象",
      "雨の日OK",
      "マル優（安全対策優良）業者ツアー",
    ],
  },
];

/**
 * トップページ「予約から参加の流れ」のステップ
 */
export const bookingFlowSteps = [
  {
    step: 1,
    image: "/images/flow/flow01.webp",
    title: "ツアーを探す",
    text: "シーンや時間帯から参加したいツアーを探してみましょう♪",
  },
  {
    step: 2,
    image: "/images/flow/flow02.webp",
    title: "予約プランの申し込み",
    text: "申し込みたいプランを決めたら、日付と時間帯を選んで申し込み開始！",
  },
  {
    step: 3,
    image: "/images/flow/flow03.webp",
    title: "予約確定",
    text: "予約が完了すると、石垣島ツアーズから連絡がきます♪",
  },
  {
    step: 4,
    image: "/images/flow/flow04.webp",
    title: "ツアーに参加",
    text: "あとは当日参加するだけ！思いっきり楽しんじゃおう！！",
  },
];

/**
 * トップページ「関連情報」のバナー
 */
export const relatedBanners = [
  { href: "/campaign/premium-plan.html", image: "/images/related/premium-plan.png", alt: "ツアーズ厳選プレミアムプラン" },
  { href: "https://ishigaki-tours.com/ferry/", image: "/images/related/ferry.webp", alt: "離島フェリー予約" },
  { href: "https://ishigaki-tours.com/", image: "/images/related/bluecavetour.webp", alt: "石垣島ツアーズ" },
  { href: "https://kohama-tours.com/", image: "/images/related/kohama.webp", alt: "小浜島ツアーズ" },
  { href: "https://iriomote-tours.com/", image: "/images/related/iriomote.png", alt: "西表島ツアーズ" },
  { href: "/affiliate-programs/", image: "/images/related/affiliate.png", alt: "アフィリエイトパートナー募集" },
];

/**
 * ツアーズコラムの記事（トップページのコラムリスト・/column-top で利用）
 * - 並びはサンプル。`views` 降順で閲覧数ランキング、その他で人気記事として表示する
 */
export const columnArticles = [
  {
    href: "/column/sightseeing-spots",
    image: "/images/column/activity.webp",
    title: "石垣島観光スポット15選！穴場・グルメ・モデルコースと「行ってはいけない」時期を徹底解説",
    date: "2026年4月21日",
    views: 735,
  },
  {
    href: "/column/okinawa-bluecave-access",
    image: "/images/column/okinawa-bluecave.webp",
    title: "石垣島「青の洞窟」は個人で行ける？駐車場・行き方・がっかりしないコツを完全解説",
    date: "2026年4月17日",
    views: 582,
  },
  {
    href: "/column/sea-turtle-season",
    image: "/images/column/marine.webp",
    title: "石垣島でウミガメに会える時期は？5〜9月が狙い目＆ベストシーズン解説",
    date: "2026年4月6日",
    views: 1154,
  },
  {
    href: "/column/bluecave-individual-route",
    image: "/images/column/activity.webp",
    title: "石垣島・青の洞窟へ個人で行く方法！自力ルートとがっかりしないコツ",
    date: "2026年4月3日",
    views: 1927,
  },
  {
    href: "/column/bluecave-snorkeling-tips",
    image: "/images/column/marine.webp",
    title: "石垣島・青の洞窟シュノーケリング攻略！自力で行く方法・時間帯・口コミ",
    date: "2026年3月23日",
    views: 539,
  },
  {
    href: "/column/okinawa-bluecave",
    image: "/images/column/okinawa-bluecave.webp",
    title: "【沖縄・青の洞窟】行く前に知りたい！場所・アクセス・おすすめツアーまとめ",
    date: "2025年11月10日",
    views: 685,
  },
];

/**
 * /column-top のヒーロー記事
 */
export const columnHero = {
  href: "/column/sightseeing-spots",
  image: "/images/column/activity.webp",
  title: "石垣島観光スポット15選！穴場・グルメ・モデルコースと「行ってはいけない」時期を徹底解説",
  views: 735,
};

export const planOptions = [
  { value: "bluecave", label: "青の洞窟シュノーケリング" },
  { value: "kayak", label: "カヤック" },
  { value: "setplan", label: "セットプラン" },
  { value: "charter", label: "チャーター" },
  { value: "marine-sports", label: "マリンスポーツ" },
];

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
  catchphrase: `青の洞窟専門のアクティビティ予約サイト "石垣島 青の洞窟ツアーズ"`,
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
        { label: "青の洞窟×\n川平湾", href: "/setplan/bluecave-kabirabay.html", iconUrl: "/images/menu/icon-kabirabay.png" },
        { label: "青の洞窟×\nマングローブ", href: "/setplan/bluecave-mangrove.html", iconUrl: "/images/menu/icon-mangrove.png" },
      ],
    },
  ],
  externalSites: [
    { label: "石垣島ツアーズ", href: "https://ishigaki-tours.com/", iconUrl: "/images/menu/ishigaki-logo.png" },
    { label: "小浜島ツアーズ", href: "https://kohama-tours.com/", iconUrl: "/images/menu/kohama-logo.png" },
  ],
  externalSitesIconUrl: "/images/menu/icon-other-island.png",
  featuredBanners: [
    {
      href: "/scene-time/freetourphotos.html",
      iconUrl: "/images/menu/icon-camera.png",
      subtitle: "心に残る瞬間を写真に残そう！",
      title: "写真無料プラン",
    },
    {
      href: "https://ishigaki-tours.com/tours-ferry",
      iconUrl: "/images/menu/icon-ferry.png",
      subtitle: "【各便40席限定】石垣島から離島へ！",
      subtitle2: "（乗船時間までキャンセル料無料）",
      title: "離島フェリー予約受付中",
    },
  ],
  infoLinksSection: {
    title: "初めて行く方へ！お役立ち情報",
    iconUrl: "/images/menu/icon-info.png",
    items: [
      { label: "青の洞窟とは？\n基本情報紹介", href: "https://ishigaki-tours.com/popular-spot/bluecave.html", iconUrl: "/images/menu/icon-bluecave.png" },
      { label: "コラム一覧", href: "/column", iconUrl: "/images/menu/icon-column.png" },
    ],
  },
  mainBanner: {
    href: "https://ishigaki-tours.com/popular-spot/bluecave.html",
    imageUrl: "/images/menu/bluecave-kv.png",
    alt: "青の洞窟ツアー",
  },
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

/**
 * 検索結果ページの slug → タイトル + 絞り込み条件
 * 各 type ごとに定義し、page.tsx の generateStaticParams + searchPlans の filter として利用
 */
export type SearchSlugConfig = {
  title: string;
  category?: string;
  tag?: string;
  anyTag?: string[];
};

export const sceneTimeSlugMap: Record<string, SearchSlugConfig> = {
  "half-day": { title: "お手軽！半日ツアー", anyTag: ["半日"] },
  "one-day": { title: "満喫！1日ツアー", anyTag: ["1日満喫"] },
  freetourphotos: { title: "写真無料サービス付きツアー" },
  "same_day_booking": { title: "前日・当日予約可能な青の洞窟ツアー", tag: "当日予約OK" },
  "same-day-booking": { title: "前日・当日予約可能な青の洞窟ツアー", tag: "当日予約OK" },
  setplan: { title: "お得な割引セットプラン", category: "setplan" },
  "rental-car": { title: "石垣島レンタカー特集" },
};

export const campaignSlugMap: Record<string, SearchSlugConfig> = {
  "premium-plan": { title: "ツアーズ厳選プレミアムプラン" },
};

export const popularSpotSlugMap: Record<string, SearchSlugConfig> = {
  bluecave: { title: "青の洞窟", category: "bluecave" },
};
