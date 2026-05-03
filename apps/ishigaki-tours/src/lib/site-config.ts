import type { SiteConfig } from "@repo/seo/metadata";
import type { NavItem, FooterSection, RelatedSite, PartnerLogo } from "@repo/ui";
import type { ContactCategory } from "@repo/ui/contact-accordion";

/**
 * 石垣島ツアーズ サイト設定
 */
export const siteConfig: SiteConfig = {
  siteName: "石垣島ツアーズ",
  siteUrl: "https://ishigaki-tours.com",
  defaultOgImage: "https://ishigaki-tours.com/og-image.jpg",
};

/**
 * テーマカラー（暫定）
 */
export const themeColor = "#1E90FF";

/**
 * 人気ランキングのプレミアムバッジ画像URL（snorkeling は未指定）
 */
export const rankingPremiumBadgeUrl: string | undefined = undefined;

/**
 * 運営者情報ページ用データ
 */
export const administratorKvImageUrl = "/images/administrator/kv.webp";

export const administratorCompanyInfo = [
  { label: "会社名", value: "株式会社ShumMaKe" },
  { label: "住所", value: "〒143-0025 東京都大田区南馬込4丁目26ー18馬込ガーデンヒルアネックス101号室" },
  { label: "代表者", value: "小池 誠" },
  { label: "営業時間", value: "8:00〜18:00" },
  { label: "ウェブサイト", value: "https://www.shummake.com/", isLink: true },
  { label: "事業内容", value: "地域特化型アクティビティ予約・観光ポータルサイトの企画・運営、アクティビティ予約システムの開発・提供" },
  { label: "加盟団体", value: "全国旅行業協会（ANTA）" },
  { label: "旅行業登録番号", value: "沖縄県知事登録旅行業 第3-471号" },
  { label: "取引銀行", value: "みずほ銀行、住信SBI銀行、琉球銀行、他" },
];

export const administratorPartnerImages = [
  { src: "/images/partner/anta.webp", alt: "全国旅行業協会" },
  { src: "/images/partner/his.webp", alt: "HIS" },
  { src: "/images/partner/sdgs.webp", alt: "おきなわSDGsパートナー" },
  { src: "/images/partner/umi-nihon.webp", alt: "海と日本プロジェクト" },
];

/**
 * 選ばれる理由（/visitor）ページ用データ
 */
export const visitorMetaDescription =
  "「旅行をもっと簡単に」 私たちはエリア特化型の観光ポータルを運営することで、様々な旅行の不便の解消を目指します";

export const visitorKvImageUrl = "/images/visitor/kv.jpg";

export const visitorKvImageAlt = "石垣島シュノーケリング専門 厳選ツアーがいっぱい！";

export const visitorIntroText =
  "石垣島で楽しめるシュノーケリングに特化した様々な情報や厳選したツアー・プランを掲載しております。";

export const visitorSiteDescription =
  "現地在住スタッフも多く、掲載しているツアーや体験の多くをスタッフ自身が実際に体験しています。その中でも「本当にいい」と感じたものだけを厳選して掲載しているため、安心してご利用いただけます。";

export const visitorReasons = [
  {
    title: "会員登録不要で簡単予約",
    text: "石垣島シュノーケリングツアーズでは面倒な会員登録が不要。必要情報を入力して1分程度で予約が完結します。",
  },
  {
    title: "24時間WEB予約受付",
    text: "石垣島シュノーケリングツアーズは石垣島のシュノーケリングに特化したアクティビティの予約サイトで、24時間いつでもWEBから簡単にご予約いただけます。せっかくのご旅行を、現地ツアーに参加して最高の思い出にしませんか？",
  },
  {
    title: "石垣島シュノーケリングに特化した情報を集約",
    text: "石垣島シュノーケリングツアーズは石垣島シュノーケリングに特化した様々な情報を掲載しております。おすすめのアクティビティ、観光スポット、グルメなど幅広い情報を集約しておりますので、事前にチェックして、最大限に旅行楽しめる準備をしておきましょう！",
  },
  {
    title: "厳選されたプランのみ掲載",
    text: "石垣島シュノーケリングツアーズは、価格の安さや品ぞろえの豊富さだけではなく、貴重なご旅行を心の底から楽しんでもらうために高品質プランの提案を心がけています。厳選された多くのプランを一度に比較・予約することができるので、お客様の好みにあったプランを見つけることができるでしょう。",
  },
  {
    title: "プラン情報のわかりやすさ",
    text: "石垣島シュノーケリングツアーズでは各プランの魅力・情報が最大限に伝わるように「わかりやすさ」「明瞭さ」を意識しております。持ち物や集合場所等の必要な情報をできるだけわかりやすく説明しており、口コミから実際に参加したお客様の声を確認することも可能です。",
  },
  {
    title: "直前予約も可能",
    text: "石垣島シュノーケリングツアーズでは前日等の直前予約にも対応しております。当日予約できるプランもありますので、ぜひチェックしてください！ただし、人気のプランはすぐに満席になってしまうので、できるだけ早いタイミングでのご予約を推奨いたします。",
  },
  {
    title: "安心の実績",
    text: "現在、弊社では沖縄の離島を中心に全15以上の地域でアクティビティ予約サイト「ツアーズ」を展開しています。累計45万人以上のお客様からこれまでご予約をいただいており、石垣島シュノーケリングツアーズだけでも多くの参加実績を誇ります。",
  },
  {
    title: "旅行専門家が運営",
    text: "旅行業を取得した信頼ある旅行専門家が運営。現地在住スタッフも多く、実際に体験した中から厳選して掲載。◼︎旅行業登録番号：沖縄県知事登録旅行業 第3-471号",
  },
];

export const visitorIslandDescription =
  "石垣島は、透き通る海と壮大な自然が魅力の南国リゾートです。ここでは、シュノーケリングやダイビングを通して、美しいサンゴ礁やカラフルな熱帯魚と出会うことができます。穏やかな海は初心者にも優しく、誰もが感動する景色が広がっています。レンタカーを借りて、島内の隠れたビーチやローカルな食堂を巡るのもおすすめ。ゆったりとした時間の中で、自然のエネルギーと島の温かさを全身で感じられることでしょう。";

export const visitorTravelTips: { title: string; text: string }[] = [
  {
    title: "満席注意！ツアーは事前予約がおすすめ",
    text: "石垣島に来られる方のほとんどがアクティビティ体験をされます。人気のプランについては直前に予約しようと思ってもすでに満席で予約できないというケースも少なくありません。人気のツアー・アクティビティは、特に繁忙期に混み合うことがあります。せっかくの旅行を最高の思い出にするためには事前にツアーを予約して、希望のプランをぜひ楽しんでください。",
  },
  {
    title: "レンタカーも事前に予約しておこう",
    text: "繁忙期シーズンや連休などには満車になることが多々ございます。レンタカーがあると観光の利便性が一段と上がりますので、早めのご予約を推奨いたします。",
  },
];

/**
 * FAQ ページの「よくある質問」項目
 */
export const faqItems = [
  {
    question: "チェックアウト日にアクティビティに参加できますか？",
    answer:
      "もちろん可能です！アクティビティにご参加されるお客様は、チェックアウトを済ませ、アクティビティに参加できる恰好に着替えて集合してください。\n※ダイビングについては飛行機でお帰りになられる日にはご参加いただけません。",
  },
  {
    question: "アクティビティに年齢制限はありますか？",
    answer:
      "各アクティビティ毎に年齢制限を設けております。詳しくは各プランのページの下部に設置されている「コース内容と詳細」部分をご確認ください。\n※安全管理上の理由により、対象年齢以外の方はご参加をご遠慮いただいております。何卒ご了承ください。",
  },
  {
    question: "どのような服を来ていけば良いでしょうか？",
    answer:
      "プランによって異なりますので、詳しくは各プランページをご参照ください。基本的には濡れてもいい服装であれば大丈夫です。水着や半袖に短パン、薄手の長袖に下は海パン、ショートパンツにレギンスなどの服装がおすすめです。",
  },
  {
    question: "どのような靴を履いて行けばよいですか？",
    answer:
      "アクティビティの種類やプランによって異なります。専用の靴を貸出ししている場合もございますので、詳しくは各プランページをご確認ください。",
  },
  {
    question: "アクティビティ参加の際に必要な持ち物はありますか？",
    answer:
      "各プラン毎に必要な持ち物はプランページをご確認下さい。ハンドタオル、日焼け止め、帽子、サングラスはいずれのアクティビティに参加の場合もお持ち頂くことをお勧めいたします。携帯電話、カメラ等につきまして、水ぬれや水没の恐れがございますので、自己責任でお持ち下さい。",
  },
  {
    question: "雨が降っていてもアクティビティは催行しますか？",
    answer:
      "アクティビティによっては安全性を確認した上で、雨天でもアクティビティを開催する可能性がございます。また、雨が降っていなくても、天候や川の状況により、ネイチャーガイドの判断でアクティビティの催行を中止する場合がございます（ツアー中止の場合はキャンセル料は発生いたしません）。",
  },
  {
    question: "カヌーやSUPに乗った事がないのですが、大丈夫でしょうか？",
    answer:
      "もちろん大丈夫です！ほとんどの方が未経験で参加されています。経験豊富なガイドが丁寧にレクチャーいたしますので、初めての方でも安心してお楽しみいただけます。",
  },
  {
    question: "事前クレジットカード決済に関して",
    answer:
      "【クレジットカードでお支払いの場合】\nクレジットカードでお申し込みいただいた場合、実際の決済（引き落とし）はツアー等のご参加後に確定されます。そのため、申し込み時点では引き落としは行われておりません。\nクレジットカード会社によっては、カード情報を登録した時点で「未確定のご利用明細」に表示されることがありますが、これは実際の引き落としではありませんのでご安心ください。\n\n【デビットカード・プリペイドカードでお支払いの場合】\nデビットカードまたはプリペイドカードをご利用の場合は、お申し込み時点で即時に引き落としが発生します。予約がキャンセルされた場合は、自動で返金処理を行いますのでご安心ください。",
  },
  {
    question: "キャンセル料はいつから発生しますか？",
    answer:
      "キャンセルポリシーはプランによって異なります。詳細は各プランのページをご確認ください。",
  },
];

export const administratorReasons = [
  { title: "会員登録不要で簡単予約", text: "石垣島シュノーケリングツアーズでは面倒な会員登録が不要。必要情報を入力して1分程度で予約が完結します。" },
  { title: "24時間WEB予約受付", text: "石垣島シュノーケリングツアーズは24時間いつでもWEBから簡単にご予約いただけます。" },
  { title: "石垣島シュノーケリングに特化した情報を集約", text: "石垣島シュノーケリングツアーズは石垣島シュノーケリングに特化した様々な情報を掲載しております。おすすめのアクティビティ、観光スポット、グルメなど幅広い情報を集約しています。" },
  { title: "厳選されたプランのみ掲載", text: "価格の安さや品ぞろえの豊富さだけではなく、高品質プランの提案を心がけています。" },
  { title: "プラン情報のわかりやすさ", text: "各プランの魅力・情報が最大限に伝わるように「わかりやすさ」「明瞭さ」を意識しております。" },
  { title: "直前予約も可能", text: "前日等の直前予約にも対応しております。当日予約できるプランもあります。" },
  { title: "安心の実績", text: "現在、全15以上の地域でアクティビティ予約サイト「ツアーズ」を展開。累計45万人以上のお客様からご予約をいただいております。＊2025/2/1時点" },
  { title: "旅行専門家が運営", text: "旅行業を取得した信頼ある旅行専門家が運営。現地在住スタッフも多く、実際に体験した中から厳選して掲載。◼︎旅行業登録番号：沖縄県知事登録旅行業 第3-471号" },
];

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
 * ツアーズコラムの記事（トップページのコラムリスト・/column-top・/column で利用）
 * - 並びは date 降順（新着順）。views で閲覧数ランキングを派生
 */
export const columnArticles = [
  {
    href: "/column/individual-snorkeling-spots",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島個人シュノーケリングできる場所｜安全ビーチ＆地図ガイド",
    date: "2026年4月27日",
    views: 973,
  },
  {
    href: "/column/hidden-beaches",
    image: "/images/column/maboroshi-island.webp",
    title: "石垣島の穴場ビーチ7選！地元民が教える「本当に綺麗な海」と混雑回避のコツ",
    date: "2026年4月27日",
    views: 3023,
  },
  {
    href: "/column/snorkeling-complete-guide",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島シュノーケリング初心者完全ガイド｜ツアー選び・個人スポット・ランキングまで解説",
    date: "2026年4月25日",
    views: 658,
  },
  {
    href: "/column/beach-recommendations",
    image: "/images/column/maboroshi-island.webp",
    title: "石垣島のビーチおすすめ｜綺麗な海・穴場・地図で失敗しない選び方",
    date: "2026年4月22日",
    views: 339,
  },
  {
    href: "/column/maboroshi-island-guide",
    image: "/images/column/maboroshi-island.webp",
    title: "幻の島（浜島）完全ガイド！上陸ベストシーズン・所要時間・おすすめツアーまとめ",
    date: "2026年4月21日",
    views: 812,
  },
  {
    href: "/column/snorkeling-beginner",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島シュノーケリング初心者講座！持ち物・服装・酔いやすい人のコツまで完全解説",
    date: "2026年4月17日",
    views: 624,
  },
  {
    href: "/column/sea-turtle-best-season",
    image: "/images/column/sea-turtles.webp",
    title: "石垣島でウミガメに会える時期は？5〜9月が狙い目＆ベストシーズン徹底解説",
    date: "2026年4月6日",
    views: 1284,
  },
  {
    href: "/column/snorkeling-spots",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島シュノーケリングおすすめスポット15選！透明度・ウミガメ・初心者向けを比較",
    date: "2026年4月3日",
    views: 1956,
  },
  {
    href: "/column/sea-turtles-tour",
    image: "/images/column/sea-turtles.webp",
    title: "ウミガメシュノーケリング攻略！高確率で会えるツアー・時間帯・写真の撮り方",
    date: "2026年3月23日",
    views: 478,
  },
  {
    href: "/column/manta-snorkeling-tour",
    image: "/images/column/maboroshi-island.webp",
    title: "石垣島マンタシュノーケリングおすすめツアーランキング！半日プランや時期も",
    date: "2026年3月16日",
    views: 685,
  },
  {
    href: "/column/maboroshi-island-tour",
    image: "/images/column/maboroshi-island.webp",
    title: "石垣島「幻の島」シュノーケリングおすすめツアー！上陸のみ・竹富島セットも",
    date: "2026年3月11日",
    views: 580,
  },
  {
    href: "/column/diving-complete-guide",
    image: "/images/column/sea-turtles.webp",
    title: "石垣島ダイビング完全ガイド！マンタに会える人気スポットと初心者向け情報",
    date: "2026年1月12日",
    views: 204,
  },
  {
    href: "/column/marine-activity-latest",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島で楽しむマリンアクティビティ最新ガイド！シュノーケルスポットと当日予約のコツ",
    date: "2026年1月12日",
    views: 173,
  },
  {
    href: "/column/family-snorkeling",
    image: "/images/column/sea-turtles.webp",
    title: "石垣島で子どもとシュノーケリングを満喫！家族で楽しめる体験スポットまとめ",
    date: "2025年12月20日",
    views: 718,
  },
  {
    href: "/column/snorkeling-guide",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島シュノーケリング完全ガイド！初心者でも安心の楽しみ方",
    date: "2025年11月10日",
    views: 712,
  },
];

/**
 * /column/[slug] の著者プロフィール（サンプル：全記事共通）
 * - 本実装では tiptap で編集された記事ごとの著者情報を持たせる想定
 */
export const columnAuthor = {
  name: "T.Furuike",
  image: "/images/column/sea-turtles.webp",
  bioHtml: `幼少期から体を動かすのが大好きで、今までシュノーケリング・ダイビング・カヌー・SUP・トレッキング・サーフィン…等20種以上のアクティビティを経験。 大学時代に一度訪れた石垣島に魅了され、20代前半の時には沖縄本島へ移住し4年間生活。4年間で訪れた離島の数は40島以上。 現在では、200ヶ所以上の観光地へ直接足を運び、その土地のおすすめや魅力を発信している。（Instagramで沖縄旅行に役立つ情報を発信中→<a href="https://www.instagram.com/worldtours_official" target="_blank" rel="noopener noreferrer">@worldtours_official</a>）　〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜　旅行のお役立ち情報や最新キャンペーン情報を発信する公式LINEアカウントができました！友達限定のお得な情報を発信予定です♪<a href="#" target="_blank" rel="noopener noreferrer">友達追加はこちら</a>`,
};

/**
 * /column/[slug] のサンプル本文（HTML）
 * - 本実装では tiptap で編集されたコンテンツを記事ごとに保持する
 * - 当面は全記事に同じサンプルを表示する
 */
export const columnArticleSampleBody = `
<p>石垣島の海は、日本でも屈指の透明度と豊かな生態系を誇るシュノーケリングの聖地です。本記事では、初心者の方でも安心して楽しめるよう、おすすめのスポットや時期、必要な持ち物、押さえておきたいポイントを徹底的に解説します。</p>

<h2>石垣島でシュノーケリングを楽しむベストシーズン</h2>
<p>石垣島は通年でシュノーケリングが可能ですが、特におすすめのシーズンは <strong>5月〜10月</strong> です。この時期は海水温が25℃を超え、ウェットスーツなしでも快適に泳ぐことができます。</p>
<h3>季節ごとの特徴</h3>
<ul>
  <li><strong>春（4〜5月）</strong>：透明度が高く、混雑も少ない穴場シーズン</li>
  <li><strong>夏（6〜9月）</strong>：海水温も気温も最高、家族連れにも最適</li>
  <li><strong>秋（10〜11月）</strong>：台風後の透明度回復シーズン、ウミガメ遭遇率も高い</li>
  <li><strong>冬（12〜3月）</strong>：マンタやクジラに会える可能性もあるが、ウェットスーツ必須</li>
</ul>

<h2>おすすめスポット 3 選</h2>
<h3>1. 幻の島（浜島）</h3>
<p>石垣島から船で30分ほどの場所にある、潮が引いた時にだけ姿を現す三日月形の白い砂浜。360度を珊瑚礁に囲まれ、シュノーケリングの絶景スポットとして人気です。</p>
<img src="/images/column/maboroshi-island.webp" alt="幻の島" />
<p>島の周辺ではカラフルな熱帯魚やウミガメと出会えるチャンスも多く、初心者から上級者まで楽しめます。</p>
<h3>2. 米原ビーチ</h3>
<p>遠浅の地形と豊富な珊瑚礁が魅力のビーチ。ビーチからエントリーできるため、ボートが苦手な方にもおすすめです。</p>
<h3>3. 青の洞窟周辺</h3>
<p>石垣島北部の人気スポット。洞窟内に差し込む光が海を青く染め上げる神秘的な景観と、周辺の珊瑚礁での生き物観察が楽しめます。</p>

<h2>当日の持ち物チェックリスト</h2>
<ul>
  <li>水着（ラッシュガード推奨）</li>
  <li>タオル・着替え</li>
  <li>日焼け止め（環境に優しい珊瑚礁配慮のもの）</li>
  <li>飲み物・軽食</li>
  <li>防水カメラ・スマホケース</li>
  <li>ビーチサンダル</li>
</ul>
<p>シュノーケル器材一式（マスク・シュノーケル・フィン）はツアー参加であればレンタル可能なため、手ぶらでもOKです。</p>

<blockquote>
<p>初心者の方は必ずガイド付きツアーに参加することをおすすめします。海況の判断や緊急時の対応など、安全面でも安心です。</p>
</blockquote>

<h2>まとめ</h2>
<p>石垣島でのシュノーケリングは、一度体験すると忘れられない感動の連続です。本記事を参考に、自分にぴったりのスポット・シーズン・ツアーを選び、思い出に残る素敵な旅をお楽しみください。</p>
<p>ご予約・お問い合わせはお気軽に当店までご連絡ください。皆様のご参加を心よりお待ちしております。</p>
`;

/**
 * /column-top のヒーロースライダー記事
 */
export const columnHeroSlides = [
  {
    href: "/column/snorkeling-spots",
    image: "/images/column/snorkeling-guide.webp",
    title: "石垣島シュノーケリングおすすめスポット15選！透明度・ウミガメ・初心者向けを比較",
    views: 1956,
  },
  {
    href: "/column/maboroshi-island-guide",
    image: "/images/column/maboroshi-island.webp",
    title: "幻の島（浜島）完全ガイド！上陸ベストシーズン・所要時間・おすすめツアーまとめ",
    views: 812,
  },
  {
    href: "/column/sea-turtle-best-season",
    image: "/images/column/sea-turtles.webp",
    title: "石垣島でウミガメに会える時期は？5〜9月が狙い目＆ベストシーズン徹底解説",
    views: 1284,
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

/**
 * 検索結果ページの slug → タイトル + 絞り込み条件
 */
export type SearchSlugConfig = {
  title: string;
  category?: string;
  tag?: string;
  anyTag?: string[];
};

export const sceneTimeSlugMap: Record<string, SearchSlugConfig> = {
  "pickup-tour": { title: "送迎付きツアー", tag: "送迎付き" },
  "same-day-booking": { title: "当日予約OKプラン", tag: "当日予約OK" },
  "same_day_booking": { title: "当日予約OKプラン", tag: "当日予約OK" },
  seaturtles: { title: "ウミガメシュノーケリング", anyTag: ["ウミガメ"] },
  freetourphotos: { title: "写真撮影付きツアー", tag: "写真無料" },
};

export const campaignSlugMap: Record<string, SearchSlugConfig> = {
  "premium-plan": { title: "ツアーズ厳選プレミアムプラン" },
};

export const popularSpotSlugMap: Record<string, SearchSlugConfig> = {
  bluecave: { title: "青の洞窟" },
  "barasu-island": { title: "バラス島" },
};

/**
 * /select-contact 用カテゴリデータ
 */
export const contactCategories: ContactCategory[] = [
  {
    title: "既にご予約されたお客様",
    subItems: [
      {
        title: "ご予約内容の確認・集合場所等のお問い合わせ",
        description:
          "ご予約確定メールに記載の連絡方法にて、担当ガイドまたは施設へ直接ご連絡ください。",
        methods: [
          {
            type: "link",
            label: "予約確認ページ",
            href: "https://mikata.in/yaeyama-tour/subscribers/confirm",
          },
        ],
      },
      {
        title: "キャンセル・変更のお問い合わせ",
        description:
          "ご予約確定メールをご確認ください。キャンセル料については「よくある質問＆注意事項」ページもご参照ください。",
        methods: [
          {
            type: "faq",
            label: "よくある質問＆注意事項",
            href: "/faq",
          },
        ],
      },
    ],
  },
  {
    title: "これからご予約されるお客様",
    subItems: [
      {
        title: "当日予約の空き確認",
        description:
          "当日予約はサイト内で空きのあるプランを検索いただけます。",
        methods: [
          {
            type: "link",
            label: "プランを探す",
            href: "/",
          },
        ],
      },
      {
        title: "その他のご予約に関するお問い合わせ",
        description:
          "24時間WEB予約受付中、会員登録不要でご予約いただけます。トップページからプランを選んでお申し込みください。",
        methods: [
          {
            type: "link",
            label: "トップページ",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "その他のお問い合わせやご相談",
    subItems: [
      {
        title: "領収書発行をご希望のお客様",
        description:
          "現地決済の場合はツアーガイド・施設が発行いたします。事前決済の場合は領収書発行ページから発行いただけます。",
        methods: [
          {
            type: "link",
            label: "領収書発行ページ",
            href: "https://ishigaki-tours.com/receipt",
          },
        ],
      },
      {
        title: "アクティビティ参加後のお問い合わせ",
        description:
          "忘れ物・写真データ等のお問い合わせは、担当ガイドへ直接ご連絡ください。連絡先が不明な場合は予約確認ページからご確認いただけます。",
        methods: [
          {
            type: "link",
            label: "予約確認ページ",
            href: "https://mikata.in/yaeyama-tour/subscribers/confirm",
          },
        ],
      },
      {
        title: "その他一般的なご質問",
        description:
          "よくある質問をご確認ください。解決しない場合は、お気軽にお問い合わせください。",
        methods: [
          {
            type: "faq",
            label: "よくある質問＆注意事項",
            href: "/faq",
          },
        ],
      },
    ],
  },
];

/**
 * 旅行代理店向けお問い合わせボタンのリンク先
 * snorkeling 旧サイト（https://snorkeling.ishigaki-tours.com/select-contact）に倣う
 */
export const agencyContactHref: string | undefined =
  "https://www.shummake.com/agent-form/";
