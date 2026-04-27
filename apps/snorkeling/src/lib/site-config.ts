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
 * サイドバー設定
 */
export const sidebarConfig = {
  planCount: 20,
  banners: [
    {
      href: "https://ishigaki-tours.com/tours-ferry/",
      imageUrl: "/images/sidebar/ferry-banner.webp",
      alt: "離島フェリー予約",
      external: true,
    },
    {
      href: "/scene-time/seaturtles.html",
      imageUrl: "/images/sidebar/seaturtles-banner.jpg",
      alt: "ウミガメシュノーケリング",
    },
    {
      href: "/uncategorized/hama-island.html",
      imageUrl: "/images/sidebar/maboroshi-banner.png",
      alt: "幻の島(浜島)でシュノーケリング体験",
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
  { href: "/scene-time/same_day_booking.html", image: "/images/scene/same-day.webp", title: "前日・当日予約可能なツアー" },
];

/**
 * トップページ「人気スポットから探す」の表示項目
 */
export const spotItems = [
  { href: "/scene-time/seaturtles.html", image: "/images/spot/seaturtles.jpg", title: "ウミガメシュノーケリング" },
  { href: "/spot/maboroshi", image: "/images/spot/maboroshi.png", title: "幻の島" },
  { href: "/spot/bluecave", image: "/images/spot/bluecave.png", title: "青の洞窟" },
  { href: "/spot/kabira", image: "/images/spot/kabira.webp", title: "川平湾" },
];

/**
 * トップページ「人気の組み合わせから探す」の表示項目
 */
export const combinationItems = [
  { href: "/setplan/snorkeling-kabirabay", title: "シュノーケリング×川平湾ツアー", image: "/images/setplan/snorkeling-kabirabay.webp" },
  { href: "/setplan/snorkeling-mangrove", title: "シュノーケリング×マングローブツアー", image: "/images/setplan/snorkeling-mangrove.webp" },
  { href: "/setplan/maboroshi-taketomi", title: "幻の島×竹富島ツアー", image: "/images/setplan/maboroshi-taketomi.webp" },
];

/**
 * トップページ「キャンペーンから探す」の表示項目
 */
export const campaignSearchItems = [
  { href: "/campaign/premium-plan.html", title: "【厳選】石垣島シュノーケリングツアーズプレミアムプラン", image: "/images/campaign/premium-plan.webp" },
];

/**
 * トップページ「おすすめ観光情報＆キャンペーン」の表示項目
 */
export const campaignItems = [
  { href: "https://ishigaki-tours.com/tours-ferry/", image: "/images/campaign/ferry.jpg", title: "【各便40席限定】簡単！便利！離島フェリーチケットの予約＆詳細はこちら" },
  { href: "/uncategorized/setplan-activity-ferry.html", image: "/images/campaign/iriomote-ferry.png", title: "【石垣島発着】西表島ツアー（フェリーチケット付き）" },
  { href: "/scene-time/pickup-tour.html", image: "/images/campaign/pickup-tour.jpg", title: "送迎付きツアー特集！ホテルからラクラク出発" },
  { href: "/scene-time/freetourphotos.html", image: "/images/campaign/freetourphotos.webp", title: "【写真無料】絶景と感動を写真でプレゼント！" },
  { href: "/campaign/premium-plan.html", image: "/images/campaign/premium-plan.webp", title: "【ツアーズ厳選】安心＆満足度No.1のおすすめプラン特集！" },
  { href: "/scene-time/same_day_booking.html", image: "/images/campaign/same-day-booking.webp", title: "前日・当日予約可能なツアー" },
];

/**
 * カテゴリナビアイテム - 既存サイトのタブナビ（9項目）
 */
export const categoryNavItems = [
  { label: "人気プラン\nランキング", href: "/ranking", iconUrl: "/images/category/ranking.webp", isActive: true },
  { label: "アクティビティ", href: "/plan", iconUrl: "/images/category/activity.webp" },
  { label: "スポットから\n探す", href: "/spot", iconUrl: "/images/category/spot.png" },
  { label: "人気の組み合わ\nせから探す", href: "/category/combinations", iconUrl: "/images/category/setplan.webp" },
  { label: "当日予約OK\nプラン", href: "/scene-time/same_day_booking.html", iconUrl: "/images/category/same-day.webp" },
  { label: "お得な割引\nセットプラン", href: "/category/setplan", iconUrl: "/images/category/setplan-discount.jpg" },
  { label: "プレミアム\n厳選プラン", href: "/campaign/premium-plan.html", iconUrl: "/images/category/premium.jpg" },
  { label: "送迎付きツアー", href: "/plan?category=shuttle", iconUrl: "/images/category/transfer.png" },
  { label: "観光ツアー", href: "/scene-time/sightseeing.html", iconUrl: "/images/category/sightseeing.webp" },
];

/**
 * トップページ「条件から探す」のアコーディオン項目
 */
export const conditionSearchItems = [
  { label: "スポットから探す", options: ["川平湾", "青の洞窟", "幻の島(浜島)", "西表島", "バラス島"] },
  { label: "見れるものから探す", options: ["熱帯魚", "水牛", "ウミガメ", "マングローブ", "マンタ"] },
  {
    label: "シーンから探す",
    options: ["カップル", "ハネムーン", "一人旅", "ファミリー", "団体旅行", "女子旅", "学生旅行", "男旅", "社員旅行"],
  },
  {
    label: "シーズンから探す",
    options: ["1年中", "冬（1月〜3月）", "夏（7月〜9月）", "春（4月〜6月）", "秋（10月〜12月）"],
  },
  { label: "時間帯から探す", options: ["1日", "午前", "午後"] },
  {
    label: "こだわり条件から探す",
    options: [
      "当日予約OK",
      "前日予約OK",
      "60歳以上参加OKツアー",
      "食事付き",
      "66歳以上参加OK",
      "シャワー付き",
      "最低価格保証",
      "スキンダイビングOK",
      "雨の日OK",
      "リベンジ割対象",
      "複数割対象",
      "全部込み込み料金",
      "写真サービス無料",
      "送迎あり",
      "初心者向け",
      "マル優（安全対策優良）業者ツアー",
      "0歳参加OK",
      "1歳参加OK",
      "2歳参加OK",
      "3歳参加OK",
      "4歳参加OK",
      "5歳参加OK",
      "6〜9歳参加OK",
      "団体・大人数OK",
      "外国語対応（English available）",
      "自由時間あり",
      "度付きゴーグル",
      "泳げない人向け",
    ],
  },
];

/**
 * トップページ「予約から参加の流れ」のステップ
 */
export const bookingFlowSteps = [
  {
    step: 1,
    image: "/images/flow/flow01.jpg",
    title: "ツアーを探す",
    text: "時間帯や体験内容から希望のツアーを選択♪",
  },
  {
    step: 2,
    image: "/images/flow/flow02.jpg",
    title: "プランを予約",
    text: "日付や人数、オプションなどを選んで申し込み！",
  },
  {
    step: 3,
    image: "/images/flow/flow03.jpg",
    title: "メールを確認",
    text: "予約完了後、メールで詳細が届きます☆",
  },
  {
    step: 4,
    image: "/images/flow/flow04.jpg",
    title: "ツアーに参加",
    text: "あとは参加するだけ！思いきり楽しもう♪",
  },
];

/**
 * トップページ「関連情報」のバナー
 */
export const relatedBanners = [
  { href: "/campaign/premium-plan.html", image: "/images/related/premium-plan.png", alt: "ツアーズ厳選プレミアムプラン" },
  { href: "https://ishigaki-tours.com/tours-ferry/", image: "/images/related/ferry.webp", alt: "離島フェリー予約" },
  { href: "https://ishigaki-tours.com/", image: "/images/related/ishigaki-tours.webp", alt: "石垣島ツアーズ" },
  { href: "https://kohama-tours.com/", image: "/images/related/kohama.webp", alt: "小浜島ツアーズ" },
  { href: "https://iriomote-tours.com/", image: "/images/related/iriomote.png", alt: "西表島ツアーズ" },
  { href: "https://shummake-affiliate-programs.manus.space/", image: "/images/related/affiliate.png", alt: "アフィリエイトパートナー募集" },
];

/**
 * トップページ「ツアーズコラム」の記事
 */
export const columnArticles = [
  {
    href: "/column/snorkeling-guide",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島シュノーケリング完全ガイド！初心者でも安心の楽しみ方",
    date: "2025年11月10日",
    views: 185,
  },
  {
    href: "/column/maboroshi-island",
    image: "/images/column/maboroshi-island.webp",
    title: "幻の島（浜島）とは？行き方・ベストシーズン・おすすめツアーまとめ",
    date: "2025年11月4日",
    views: 142,
  },
  {
    href: "/column/sea-turtles",
    image: "/images/column/sea-turtles.webp",
    title: "石垣島でウミガメに会える！シュノーケリングツアーの選び方＆おすすめスポット",
    date: "2025年10月31日",
    views: 98,
  },
];

/**
 * トップページ検索パネルのプラン選択
 */
export const planOptions = [
  { value: "snorkeling", label: "シュノーケリング" },
  { value: "seaturtles", label: "ウミガメツアー" },
  { value: "hama-island", label: "幻の島ツアー" },
  { value: "setplan", label: "セットプラン" },
  { value: "diving", label: "ダイビング" },
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
  statusBanner: {
    iconUrl: "/images/menu/icon-status-clock.png",
    badge: "営業中",
    hours: "8:00〜17:00",
    message: "当日予約も受付中！",
  },
  quickLinks: [
    { label: "人気ツアー\nランキング", href: "/ranking", iconUrl: "/images/menu/icon-ranking.png" },
    { label: "予約確認\n(予約済みの方)", href: "https://mikata.in/yaeyama-tour/subscribers/confirm", iconUrl: "/images/menu/calender-icon.png" },
    { label: "閲覧履歴\nお気に入り", href: "/myplan", iconUrl: "/images/menu/icon-history.png" },
  ],
  sections: [
    {
      title: "プランを探す",
      items: [
        { label: "送迎付き\nツアー", href: "/scene-time/pickup-tour.html", iconUrl: "/images/menu/icon-pickup.png" },
        { label: "当日予約\nOKプラン", href: "/scene-time/same-day-booking.html", iconUrl: "/images/menu/icon-same-day.jpg" },
        { label: "プレミアム\nプラン", href: "/campaign/premium-plan.html", iconUrl: "/images/menu/icon-premium.jpg" },
        { label: "ウミガメ\nシュノーケリング", href: "/scene-time/seaturtles.html", iconUrl: "/images/menu/icon-seaturtles.png" },
        { label: "時間帯\nから探す", href: "/category/scene-time", iconUrl: "/images/menu/icon-time-of-day.png" },
      ],
    },
    {
      title: "おすすめ人気スポット",
      iconUrl: "/images/menu/icon-spot-pin.png",
      items: [
        { label: "青の洞窟", href: "/popular-spot/bluecave.html", iconUrl: "/images/menu/icon-bluecave.png" },
        { label: "幻の島（浜島）", href: "/uncategorized/hama-island.html", iconUrl: "/images/menu/icon-maboroshi.png" },
        { label: "バラス島", href: "/popular-spot/barasu-island.html", iconUrl: "/images/menu/icon-barasu.png" },
      ],
    },
  ],
  featuredBanners: [
    {
      href: "https://ishigaki-tours.com/tours-ferry",
      iconUrl: "/images/menu/icon-ferry.png",
      subtitle: "【各便40席限定】石垣島から離島へ！",
      subtitle2: "（乗船時間までキャンセル料無料）",
      title: "離島フェリー予約受付中",
    },
  ],
  mainBanners: [
    {
      href: "/scene-time/seaturtles.html",
      imageUrl: "/images/menu/banner-seaturtles.jpg",
      alt: "ウミガメシュノーケリング",
    },
    {
      href: "/campaign/premium-plan.html",
      imageUrl: "/images/menu/banner-premium.jpg",
      alt: "ツアーズ厳選プレミアムプラン",
    },
  ],
  sliderImages: [
    "/images/menu/slider/slide-01.webp",
    "/images/menu/slider/slide-02.webp",
    "/images/menu/slider/slide-03.webp",
    "/images/menu/slider/slide-04.webp",
    "/images/menu/slider/slide-05.webp",
    "/images/menu/slider/slide-06.webp",
    "/images/menu/slider/slide-07.webp",
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
