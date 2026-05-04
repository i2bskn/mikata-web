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
 * テーマカラー（旧サイト ishigaki-tours.com から抽出: Bootstrap primary）
 */
export const themeColor = "#007BFF";

/**
 * 人気ランキングのプレミアムバッジ画像URL（snorkeling は未指定）
 */
export const rankingPremiumBadgeUrl: string | undefined = undefined;

/**
 * 運営者情報ページ用データ
 */
export const administratorKvImageUrl = "/images/administrator/kv.jpg";

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
  { src: "/images/partner/anta.png", alt: "全国旅行業協会" },
  { src: "/images/partner/his.png", alt: "HIS" },
  { src: "/images/partner/sdgs.png", alt: "おきなわSDGsパートナー" },
  { src: "/images/partner/umi-nihon.png", alt: "海と日本プロジェクト" },
];

/**
 * 選ばれる理由（/visitor-2）ページ用データ
 */
export const visitorMetaDescription =
  "「旅行をもっと簡単に」 私たちはエリア特化型の観光ポータルを運営することで、様々な旅行の不便の解消を目指します";

export const visitorKvImageUrl = "/images/visitor/kv.png";

export const visitorKvImageAlt = "石垣島専門 厳選ツアー/アクティビティ/レンタカーがいっぱい！";

export const visitorIntroText =
  "石垣島に特化した様々な情報や厳選したツアー・プランを掲載しております。";

export const visitorSiteDescription =
  "現地在住スタッフも多く、掲載しているツアーや体験の多くをスタッフ自身が実際に体験しています。その中でも「本当にいい」と感じたものだけを厳選して掲載しているため、安心してご利用いただけます。";

export const visitorReasons = [
  {
    title: "会員登録不要で簡単予約",
    text: "石垣島ツアーズでは面倒な会員登録が不要。必要情報を入力して1分程度で予約が完結。石垣島ツアーズでは面倒な会員登録をスキップして簡単に予約することができます。",
  },
  {
    title: "24時間WEB予約受付（相談可能）",
    text: "石垣島ツアーズは石垣島に特化したアクティビティの予約サイトです。石垣島を知り尽くしたスタッフが多数在籍しておりますので、アクティビティの相談やツアーの空き状況確認等、小さなことから何でもお気軽にお問い合わせくださいませ。いつでも簡単にWEBからご予約が可能です。",
  },
  {
    title: "石垣島最大規模のプラン取扱数",
    text: "石垣島ツアーズでは石垣島専門のアクティビティ予約サイトの中で最大規模のプラン数を取り扱っております。定番のプランからニッチなコンテンツまで幅広いジャンルを取り揃えています。石垣島で楽しめる多彩な体験が凝縮された当サイトを、ぜひご参考ください。※2025年2月時点 当社調べ（該当月の任意の日程で、予約可能プラン数を各社計測）",
  },
  {
    title: "厳選されたプランのみ掲載",
    text: "石垣島ツアーズは、価格の安さや品ぞろえの豊富さだけではなく、貴重なご旅行を心の底から楽しんでもらうために高品質プランの提案を心がけています。厳選された多くのプランを一度に比較・予約することができるので、お客様の好みにあったプランを見つけることができるでしょう。",
  },
  {
    title: "人気の離島で楽しめるのプランを網羅",
    text: "西表島、小浜島、竹富島など石垣島から行くことのできる八重山諸島のツアーを多数掲載しております。八重山諸島で楽しめる数多くのツアーを網羅しているので、ご希望のプランが必ず見つかるはずです。",
  },
  {
    title: "直前予約も可能",
    text: "石垣島ツアーズでは前日等の直前予約にも対応しております。当日予約できるプランもありますので、ぜひチェックしてください！ただし、人気のプランはすぐに満席になってしまうので、できるだけ早いタイミングでのご予約を推奨いたします。",
  },
  {
    title: "安心の実績",
    text: "現在、弊社では沖縄の離島を中心に全15以上の地域でアクティビティ予約サイト「ツアーズ」を展開しています。累計45万人以上のお客様からこれまでご予約をいただいており、石垣島ツアーズだけでも多くの参加実績を誇ります。みなさまのご旅行をより良いものにするために素敵なプランをご提案いたします。＊2025/2/1時点",
  },
  {
    title: "旅行専門家が運営",
    text: "私たちのサイトは、旅行業を取得した信頼ある旅行専門家が運営しています。現地在住スタッフも多く、掲載しているツアーや体験の多くをスタッフ自身が実際に体験しています。その中でも「本当にいい」と感じたものだけを厳選して掲載しているため、安心してご利用いただけます。さらに、私たちのスタッフ全員が旅行好きという情熱を持っているため、実際に訪れた場所や体験を基にしたリアルなアドバイスやおすすめが満載です。◼︎旅行業登録番号：沖縄県知事登録旅行業　第3-471号",
  },
];

export const visitorIslandDescription =
  "石垣島は、八重山諸島の玄関口として、多彩な魅力を持つ沖縄屈指のリゾート地です。エメラルドグリーンに輝く海や、白砂が美しいビーチなど、息をのむような絶景が広がっています。島内には豊かな自然が残り、多様なアクティビティが満喫できます。また、西表島や竹富島、小浜島などの周辺離島へも簡単にアクセスできます。";

export const visitorTravelTips: { title: string; text: string }[] = [
  {
    title: "満席注意！ツアーは事前予約がおすすめ",
    text: "石垣島に来られる方のほとんどがアクティビティ体験をされます。人気のプランについては直前に予約しようと思ってもすでに満席で予約できないというケースも少なくありません。人気のツアー・アクティビティは、特に繁忙期に混み合うことがあります。せっかくの旅行を最高の思い出にするためには事前にツアーを予約して、希望のプランをぜひ楽しんでください。",
  },
  {
    title: "レンタカーも事前に予約しておこう",
    text: "繁忙期シーズンや連休などには満車になることが多々ございます。レンタカーがあると観光の利便性が一段と上がりますので、早めのご予約を推奨いたします。",
  },
  {
    title: "服装や持ち物について",
    text: "季節によって適切な服装がございます。冬のシーズンは想像以上に寒かったなんてこともあるかもしれません。せっかくの旅行で体調を崩さないようにしっかり準備しておきましょう。",
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
  { title: "会員登録不要で簡単予約", text: "石垣島ツアーズでは面倒な会員登録が不要。必要情報を入力して1分程度で予約が完結します。" },
  { title: "24時間WEB予約受付", text: "石垣島ツアーズは24時間いつでもWEBから簡単にご予約いただけます。" },
  { title: "石垣島の旅行情報を網羅", text: "石垣島ツアーズは石垣島の旅行・アクティビティに特化した様々な情報を掲載しております。おすすめのアクティビティ、観光スポット、グルメ、レンタカーなど幅広い情報を集約しています。" },
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
  planCount: 409,
  banners: [
    {
      href: "/activitys/setplan-activity-ferry.html",
      imageUrl: "/images/sidebar/sidebar-setplan-iriomote.png",
      alt: "【ツアーズ限定割引】西表島セットプラン（フェリーチケット付き）",
    },
    {
      href: "/tours-ferry/",
      imageUrl: "/images/sidebar/sidebar-ferry.png",
      alt: "離島フェリー予約",
    },
    {
      href: "/campaign/premium-plan.html",
      imageUrl: "/images/sidebar/sidebar-premium.png",
      alt: "ツアーズ厳選プレミアムプラン",
    },
  ],
  widgetSections: [
    {
      title: "アクティビティから探す",
      items: [
        { label: "SUP（スタンドアップパドル）", href: "/activitys/sup.html" },
        { label: "幻の島（浜島）ツアー", href: "/popular-spot/hama-island.html" },
        { label: "青の洞窟ツアー", href: "/popular-spot/bluecave.html" },
        { label: "シュノーケリング", href: "/activitys/snorkel.html" },
        { label: "川平湾ツアー", href: "/popular-spot/kabira-bay.html" },
        { label: "マンタツアー", href: "/activitys/manta.html" },
        { label: "ダイビング", href: "/activitys/diving.html" },
        { label: "カヌー（シーカヤック）", href: "/activitys/kayak.html" },
        { label: "八重山離島巡り", href: "/popular-spot/remote-island-tour.html" },
        { label: "ナイトツアー（星空・ナイトサファリ）", href: "/scene-time/nighttour.html" },
        { label: "石垣島チャーター（貸切）ツアー", href: "/scene-time/charter_tour.html" },
        { label: "マリンスポーツ（バナナボート・ウィンドサーフィン）", href: "/activitys/marine-sports.html" },
        { label: "クルージング", href: "/activitys/cruising.html" },
        { label: "フォトツアー", href: "/activitys/photo-tour.html" },
        { label: "グラスボート体験", href: "/activitys/glassboat.html" },
        { label: "釣りツアー", href: "/activitys/fishing.html" },
        { label: "【石垣島発着】新城島（パナリ島）ツアー", href: "/popular-spot/panari-island.html" },
        { label: "ドルフィンツアー（イルカ体験）", href: "/activitys/dolphin.html" },
        { label: "ジャングルトレッキング", href: "/activitys/trekking.html" },
        { label: "“奇跡の島” バラス島ツアー", href: "/popular-spot/barasu-island.html" },
        { label: "ヨガ体験", href: "/activitys/yoga.html" },
        { label: "マッサージ", href: "/activitys/massage.html" },
        { label: "【季節限定】ホタル・サガリバナツアー", href: "/scene-time/seasonal.html" },
        { label: "石垣島レンタカー", href: "/scene-time/rental-car.html" },
      ],
    },
    {
      title: "人気スポットから探す",
      items: [
        { label: "川平湾ツアー", href: "/popular-spot/kabira-bay.html" },
        { label: "青の洞窟ツアー", href: "/popular-spot/bluecave.html" },
        { label: "幻の島（浜島）ツアー", href: "/popular-spot/hama-island.html" },
        { label: "“奇跡の島” バラス島ツアー", href: "/popular-spot/barasu-island.html" },
        { label: "【石垣島発着】竹富島観光（水牛車）日帰り離島ツアー", href: "/popular-spot/taketomi-island.html" },
        { label: "【石垣島発着】新城島（パナリ島）ツアー", href: "/popular-spot/panari-island.html" },
        { label: "【石垣島発】周辺離島巡りツアー(西表・由布・竹富・小浜)", href: "/popular-spot/remote-island-tour.html" },
      ],
    },
    {
      title: "シーン・時間帯から探す",
      items: [
        { label: "【厳選】石垣島ツアーズプレミアムプラン", href: "/campaign/premium-plan.html" },
        { label: "当日予約可能なアクティビティツアー", href: "/scene-time/same_day_booking.html" },
        { label: "マル優（安全対策優良業者）認定ツアー", href: "/scene-time/certification-tour.html" },
        { label: "石垣島ナイトツアー", href: "/scene-time/nighttour.html" },
        { label: "石垣島チャーター(貸切)ツアー", href: "/scene-time/charter_tour.html" },
        { label: "【季節限定開催】石垣島サガリバナ＆ホタル鑑賞ツアー", href: "/scene-time/seasonal.html" },
        { label: "石垣島レンタカー", href: "/scene-time/rental-car.html" },
        { label: "石垣島の乗り物(レンタルバイク・レンタサイクル)アクティビティ", href: "/scene-time/rentalothers.html" },
        { label: "【物販】石垣島レジンアート", href: "/scene-time/resin-art.html" },
      ],
    },
    {
      title: "石垣島関連情報",
      items: [
        { label: "コラム一覧", href: "/column" },
        { label: "観光スポット一覧", href: "/spot" },
      ],
    },
  ],
  recentlyViewedTitle: "最近チェックしたプラン",
  recentlyViewedEmptyText: "閲覧履歴はありません。",
};

/**
 * トップページ「シーン・時間帯から探す」の表示項目（旧サイト準拠 18項目）
 */
export const sceneTimeItems = [
  { href: "/scene-time/special-plan.html", image: "/images/scene/scene-special-plan.png", title: "石垣島ツアーズ限定★オリジナル体験プラン" },
  { href: "/scene-time/same_day_booking.html", image: "/images/scene/scene-same-day.jpg", title: "当日予約可能なアクティビティツアー" },
  { href: "/scene-time/certification-tour.html", image: "/images/scene/scene-certification.png", title: "マル優（安全対策優良業者）認定ツアー" },
  { href: "/scene-time/ferry-ticket.html", image: "/images/scene/scene-ferry-ticket.jpg", title: "【事前予約】離島フェリーチケット" },
  { href: "/scene-time/group-travel.html", image: "/images/scene/scene-group-travel.png", title: "石垣島団体グループ旅行（家族旅行・社員旅行・学生旅行・修学旅行）" },
  { href: "/scene-time/beginner.html", image: "/images/scene/scene-beginner.jpg", title: "【はじめての石垣】失敗したくない方向け王道ツアー" },
  { href: "/scene-time/charter_tour.html", image: "/images/scene/scene-charter.jpg", title: "石垣島チャーター（貸切）ツアー" },
  { href: "/scene-time/sunset-tour.html", image: "/images/scene/scene-sunset.jpeg", title: "石垣島サンセット（夕方開催）ツアー" },
  { href: "/scene-time/nighttour.html", image: "/images/scene/scene-nighttour.webp", title: "石垣島ナイトツアー" },
  { href: "/scene-time/seasonal.html", image: "/images/scene/scene-seasonal.jpg", title: "【季節限定開催】石垣島サガリバナ＆ホタル鑑賞ツアー" },
  { href: "/scene-time/rental-car.html", image: "/images/scene/scene-rental-car.jpg", title: "石垣島レンタカー" },
  { href: "/scene-time/kickboard-rental.html", image: "/images/scene/scene-kickboard.png", title: "石垣島電動キックボードレンタル" },
  { href: "/scene-time/rentalothers.html", image: "/images/scene/scene-rentalothers.jpg", title: "石垣島の乗り物（レンタルバイク・レンタサイクル）アクティビティ" },
  { href: "/scene-time/baby-sitter.html", image: "/images/scene/scene-baby-sitter.jpg", title: "石垣島ベビーシッター" },
  { href: "/scene-time/unusual-experience.html", image: "/images/scene/scene-unusual.jpg", title: "【石垣島】ちょっと変わった珍しい＆面白い体験ツアー" },
  { href: "/scene-time/senior-tour.html", image: "/images/scene/scene-senior.jpeg", title: "【60代～70代】ご年配の方でも楽しめるツアー" },
  { href: "/scene-time/pet.html", image: "/images/scene/scene-pet.jpg", title: "【ペット（愛犬）と参加OK】石垣島アクティビティツアー・レンタカー" },
  { href: "/scene-time/resin-art.html", image: "/images/scene/scene-resin-art.png", title: "【物販】石垣島レジンアート" },
];

/**
 * トップページ「人気スポットから探す」の表示項目（旧サイト準拠 12項目）
 */
export const spotItems = [
  { href: "/popular-spot/kabira-bay.html", image: "/images/spot/spot-kabira-bay.webp", title: "川平湾ツアー" },
  { href: "/popular-spot/bluecave.html", image: "/images/spot/spot-bluecave.jpg", title: "青の洞窟ツアー" },
  { href: "/popular-spot/hama-island.html", image: "/images/spot/spot-hama-island.jpg", title: "幻の島（浜島）ツアー" },
  { href: "/popular-spot/barasu-island.html", image: "/images/spot/spot-barasu-island.jpg", title: "“奇跡の島” バラス島ツアー" },
  { href: "/popular-spot/mangrove.html", image: "/images/spot/spot-mangrove.jpeg", title: "石垣島マングローブツアー" },
  { href: "/popular-spot/taketomi-island.html", image: "/images/spot/spot-taketomi-island.jpg", title: "【石垣島発着】竹富島観光（水牛車）日帰り離島ツアー" },
  { href: "/popular-spot/iriomotejima.html", image: "/images/spot/spot-iriomotejima.jpg", title: "【石垣島発着】西表島アクティビティツアー" },
  { href: "/popular-spot/kohamajima.html", image: "/images/spot/spot-kohamajima.jpeg", title: "【石垣島発着】小浜島ツアー" },
  { href: "/popular-spot/panari-island.html", image: "/images/spot/spot-panari-island.jpg", title: "【石垣島発着】新城島（パナリ島）ツアー" },
  { href: "/popular-spot/remote-island-tour.html", image: "/images/spot/spot-remote-island-tour.jpg", title: "【石垣島発着】周辺離島巡りツアー（西表・由布・竹富・小浜）" },
  { href: "/popular-spot/haterumajima.html", image: "/images/spot/spot-haterumajima.jpg", title: "【石垣島発着】波照間島アクティビティツアー" },
  { href: "/popular-spot/kuroshima.html", image: "/images/spot/spot-kuroshima.jpg", title: "【石垣島発着】黒島アクティビティツアー" },
];

/**
 * トップページ「アクティビティから探す」の表示項目（旧サイト準拠 25項目）
 */
export const activityItems = [
  { href: "/activitys/setplan-activity-ferry.html", image: "/images/activity/activity-setplan-ferry.png", title: "【石垣島発着】西表島ツアー（フェリーチケット付き）" },
  { href: "/activitys/snorkel.html", image: "/images/activity/activity-snorkel.jpg", title: "石垣島シュノーケリング（シュノーケル）ツアー" },
  { href: "/activitys/sup.html", image: "/images/activity/activity-sup.jpg", title: "石垣島SUP（サップ）ツアー" },
  { href: "/activitys/kayak.html", image: "/images/activity/activity-kayak.jpg", title: "石垣島カヌー（カヤック）ツアー" },
  { href: "/activitys/diving.html", image: "/images/activity/activity-diving.jpg", title: "石垣島ダイビング・スキューバダイビングツアー" },
  { href: "/activitys/umigame.html", image: "/images/activity/activity-umigame.jpg", title: "石垣島ウミガメの体験プラン・アクティビティツアー" },
  { href: "/activitys/fishing.html", image: "/images/activity/activity-fishing.jpg", title: "石垣島海釣り・船釣り体験ツアー" },
  { href: "/activitys/boat-charter.html", image: "/images/activity/activity-boat-charter.jpg", title: "石垣島・小浜島ボートチャーター（貸切）ツアー" },
  { href: "/activitys/marine-sports.html", image: "/images/activity/activity-marine-sports.jpg", title: "マリンスポーツ（バナナボート・トーイングチューブ・ウィンドサーフィン）" },
  { href: "/activitys/manta.html", image: "/images/activity/activity-manta.jpg", title: "石垣島マンタ(シュノーケル・ダイビング)ツアー" },
  { href: "/activitys/dolphin.html", image: "/images/activity/activity-dolphin.jpg", title: "石垣島ドルフィンツアー（イルカふれあい体験）" },
  { href: "/activitys/parasailing.html", image: "/images/activity/activity-parasailing.jpg", title: "石垣島パラセーリングツアー" },
  { href: "/activitys/bus-tour.html", image: "/images/activity/activity-bus-tour.jpg", title: "石垣島観光バス・タクシーツアー" },
  { href: "/activitys/trekking.html", image: "/images/activity/activity-trekking.jpg", title: "石垣島トレッキングツアー" },
  { href: "/activitys/buggy.html", image: "/images/activity/activity-buggy.jpg", title: "石垣島四輪バギー体験ツアー・レンタル" },
  { href: "/activitys/trike.html", image: "/images/activity/activity-trike.jpg", title: "石垣島トライク(ガイド付き)ツアー" },
  { href: "/activitys/cruising.html", image: "/images/activity/activity-cruising.jpg", title: "石垣島クルージングツアー" },
  { href: "/activitys/glassboat.html", image: "/images/activity/activity-glassboat.jpg", title: "石垣島グラスボート体験" },
  { href: "/activitys/jet-ski.html", image: "/images/activity/activity-jet-ski.jpg", title: "石垣島ジェットスキー・水上バイク体験ツアー" },
  { href: "/activitys/yoga.html", image: "/images/activity/activity-yoga.jpg", title: "石垣島ヨガ体験" },
  { href: "/activitys/sauna.html", image: "/images/activity/activity-sauna.png", title: "石垣島サウナ体験(ビーチサウナ体験)" },
  { href: "/activitys/photo-tour.html", image: "/images/activity/activity-photo-tour.jpeg", title: "石垣島フォト(写真撮影)ツアー" },
  { href: "/activitys/massage.html", image: "/images/activity/activity-massage.jpg", title: "石垣島マッサージ体験" },
  { href: "/activitys/okinawa-cultural.html", image: "/images/activity/activity-okinawa-cultural.jpg", title: "沖縄伝統文化体験(食文化・三線体験)" },
  { href: "/activitys/handmade.html", image: "/images/activity/activity-handmade.jpg", title: "石垣島のものづくり・ハンドメイド体験" },
];

/**
 * トップページ「キャンペーンから探す」の表示項目（旧サイト準拠）
 */
export const campaignSearchItems = [
  { href: "/campaign/spacial-sale-plan.html", title: "特別SALEプラン", image: "/images/campaign/campaign-search-sale.jpg" },
  { href: "/campaign/gw-activity.html", title: "GWアクティビティ特集", image: "/images/campaign/campaign-search-gw.png" },
  { href: "/campaign/premium-plan.html", title: "ツアーズ厳選プレミアムプラン", image: "/images/campaign/campaign-search-premium.png" },
  { href: "/campaign/multi-buy-discount.html", title: "複数割キャンペーン", image: "/images/campaign/campaign-search-multi-buy.png" },
];

/**
 * トップページ「おすすめ観光情報＆キャンペーン」の表示項目（旧サイト準拠）
 */
export const campaignItems = [
  { href: "https://ishigaki-tours.com/tours-ferry/", image: "/images/campaign/campaign-ferry.png", title: "【各便40席限定】簡単！便利！離島フェリーチケットの予約＆詳細はこちら" },
  { href: "/scene-time/spacial-sale-plan.html", image: "/images/campaign/campaign-search-sale.jpg", title: "【期間限定】特別SALEプランで石垣島を満喫！" },
  { href: "/campaign/gw-activity.html", image: "/images/campaign/campaign-gw-activity.png", title: "GW期間中も楽しめるアクティビティ特集" },
  { href: "/activitys/setplan-activity-ferry.html", image: "/images/campaign/campaign-iriomote-setplan.webp", title: "【石垣島発着】西表島ツアー（フェリーチケット付き）" },
  { href: "/scene-time/special-plan.html", image: "/images/campaign/campaign-special-plan.png", title: "【ツアーズ厳選】安心＆満足度No.1の限定プラン特集" },
  { href: "/monthly-information", image: "/images/campaign/campaign-monthly-info.jpg", title: "月別おすすめ情報＆季節のツアー特集" },
];

/**
 * カテゴリナビアイテム - 旧サイト ishigaki-tours.com に準拠（14項目）
 * - 既存ページがあるものは内部path、未実装の機能は外部リンク or `#` placeholder
 * - 後続でカテゴリ別ページを実装したら href を内部pathに切り替える
 */
export const categoryNavItems = [
  { label: "人気プラン\nランキング", href: "/ranking", iconUrl: "/images/category/ranking.png", isActive: true },
  { label: "アクティビティ", href: "/plan", iconUrl: "/images/category/activity.jpg" },
  { label: "フェリー\nチケット予約", href: "https://ishigaki-tours.com/tours-ferry/", iconUrl: "/images/category/ferry.jpg" },
  { label: "スポットから\n探す", href: "/spot", iconUrl: "/images/category/spot.png" },
  { label: "当日予約OK\nプラン", href: "/scene-time/same_day_booking.html", iconUrl: "/images/category/same-day.jpg" },
  { label: "お得な割引\nセットプラン", href: "/category/setplan", iconUrl: "/images/category/setplan-discount.jpg" },
  { label: "プレミアム\n厳選プラン", href: "/campaign/premium-plan.html", iconUrl: "/images/category/premium.jpg" },
  { label: "レンタカー", href: "https://ishigaki-tours.com/scene-time/rental-car.html", iconUrl: "/images/category/rentacar.jpg" },
  { label: "観光ツアー", href: "/scene-time/sightseeing.html", iconUrl: "/images/category/sightseeing.jpg" },
  { label: "スパ＆リラク\nゼーション", href: "#", iconUrl: "/images/category/spa.jpg" },
  { label: "ものづくり体験", href: "#", iconUrl: "/images/category/craft.jpg" },
  { label: "物販", href: "#", iconUrl: "/images/category/shopping.png" },
  { label: "ベビーシッター", href: "#", iconUrl: "/images/category/babysitter.png" },
  { label: "石垣島\n出張料理", href: "#", iconUrl: "/images/category/catering.png" },
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
 * - 旧サイト ishigaki-tours.com/column の記事から抽出
 */
export const columnArticles = [
  {
    href: "/column/cherry-blossoms",
    image: "/images/column/cherry-blossoms.jpg",
    title: "石垣島の桜はいつ咲く？2026年の開花予想と寒緋桜の名所・スポットまとめ",
    date: "2026年4月27日",
    views: 1842,
  },
  {
    href: "/column/taiwan",
    image: "/images/column/taiwan.jpg",
    title: "石垣島から台湾へ直行便はある？距離・移動時間・おすすめ手段まとめ！",
    date: "2026年4月20日",
    views: 1230,
  },
  {
    href: "/column/ferry-iriomotejima",
    image: "/images/column/ferry-iriomotejima.webp",
    title: "石垣島→西表島フェリー｜料金・時刻表・上原港vs大原港・欠航時の対応を完全解説",
    date: "2026年4月10日",
    views: 2870,
  },
  {
    href: "/column/bluecave-snorkeling",
    image: "/images/column/bluecave-snorkeling.jpg",
    title: "石垣島「青の洞窟」完全ガイド｜場所・行き方・シュノーケリングツアー料金・初心者OK情報まとめ",
    date: "2026年3月25日",
    views: 3420,
  },
  {
    href: "/column/ferry-taketomijima",
    image: "/images/column/ferry-taketomijima.jpg",
    title: "石垣島-竹富島フェリー情報【時刻表・料金・お得なWEB予約も！】竹富島観光の魅力も徹底解説！",
    date: "2026年3月15日",
    views: 2156,
  },
  {
    href: "/column/attraction-spot",
    image: "/images/column/attraction-spot.jpg",
    title: "石垣島観光の決定版！絶対外せない人気スポット・アクティビティ・ベストシーズンを徹底解説",
    date: "2026年3月5日",
    views: 4180,
  },
  {
    href: "/column/observation-deck",
    image: "/images/column/observation-deck.jpg",
    title: "石垣島の展望台おすすめ7選！星空・夜景・絶景を楽しむ完全ガイド",
    date: "2026年2月20日",
    views: 1675,
  },
  {
    href: "/column/winter",
    image: "/images/column/winter.jpg",
    title: "石垣島は冬に観光するのがおすすめな理由を徹底解説！",
    date: "2026年2月10日",
    views: 980,
  },
  {
    href: "/column/ishigakijima-izakaya",
    image: "/images/column/izakaya.jpg",
    title: "石垣島で人気の居酒屋10選！予約必須の人気のお店から地元の方が通う穴場のお店までご紹介",
    date: "2026年1月25日",
    views: 2340,
  },
  {
    href: "/column/downtown",
    image: "/images/column/downtown.jpg",
    title: "石垣島の繁華街について！繁華街から近い居酒屋やホテルをご紹介！",
    date: "2026年1月15日",
    views: 1456,
  },
  {
    href: "/column/kuroshima-lunch",
    image: "/images/column/kuroshima-lunch.jpg",
    title: "黒島ランチ完全ガイド！おすすめ店舗と失敗しない選び方・観光モデルコース",
    date: "2025年12月28日",
    views: 670,
  },
  {
    href: "/column/hatoma-island",
    image: "/images/column/hatoma-island.jpg",
    title: "石垣島から行ける鳩間島観光ガイド｜フェリー・アクセス・スポット・宿泊を完全解説",
    date: "2025年12月10日",
    views: 540,
  },
  {
    href: "/column/supermarket",
    image: "/images/column/supermarket.jpg",
    title: "石垣島のスーパーについて！大手のスーパーから地元のスーパーまで",
    date: "2025年11月20日",
    views: 820,
  },
  {
    href: "/column/ishigaki-parasailing-accident-safety-guide",
    image: "/images/column/parasailing-safety.jpg",
    title: "石垣島パラセーリングで事故はあるのか？最新事例と安全に楽しむための完全ガイド",
    date: "2025年11月5日",
    views: 1120,
  },
  {
    href: "/column/miyakojima-parasailing-fukusou",
    image: "/images/column/miyakojima-parasailing-fukusou.jpg",
    title: "石垣島パラセーリングの服装はこれでOK！女性向けコーデと季節別対策",
    date: "2025年10月20日",
    views: 730,
  },
];

/**
 * /column/[slug] の著者プロフィール（サンプル：全記事共通）
 * - 本実装では tiptap で編集された記事ごとの著者情報を持たせる想定
 */
export const columnAuthor = {
  name: "石垣島ツアーズ編集部",
  image: "/images/column/attraction-spot.jpg",
  bioHtml: `石垣島ツアーズ編集部は、現地在住スタッフと旅行のプロフェッショナルで構成されたチームです。実際に体験したアクティビティや訪れた観光スポット、地元ならではの食事処やイベント情報など、石垣島の「本当におすすめできる」情報を発信しています。離島めぐり、マリンアクティビティ、観光ツアー、レンタカー利用のコツなど、皆さまの旅をより充実させるための情報を随時更新中。（Instagramでも沖縄旅行に役立つ情報を発信中→<a href="https://www.instagram.com/ishigaki_tours/" target="_blank" rel="noopener noreferrer">@ishigaki_tours</a>）　〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜　旅行のお役立ち情報や最新キャンペーン情報を発信する公式LINEアカウントができました！友達限定のお得な情報を発信予定です♪<a href="#" target="_blank" rel="noopener noreferrer">友達追加はこちら</a>`,
};

/**
 * /column/[slug] のサンプル本文（HTML）
 * - 本実装では tiptap で編集されたコンテンツを記事ごとに保持する
 * - 当面は全記事に同じサンプルを表示する
 */
export const columnArticleSampleBody = `
<p>石垣島は、八重山諸島の玄関口として年間を通じて多くの旅行者が訪れる人気の南国リゾートです。本記事では、初めての石垣島旅行でも失敗しないように、おすすめの観光スポットや離島めぐり、必要な持ち物、押さえておきたいポイントを徹底的に解説します。</p>

<h2>石垣島観光のベストシーズン</h2>
<p>石垣島は通年で観光が楽しめますが、特におすすめのシーズンは <strong>4月〜10月</strong> です。この時期は気温も水温も心地よく、マリンアクティビティから離島巡りまで幅広く楽しむことができます。</p>
<h3>季節ごとの特徴</h3>
<ul>
  <li><strong>春（3〜5月）</strong>：寒緋桜の見頃、混雑も比較的少ない狙い目シーズン</li>
  <li><strong>夏（6〜9月）</strong>：海水温も気温も最高、家族連れにも最適</li>
  <li><strong>秋（10〜11月）</strong>：台風後の透明度回復シーズン、ウミガメ遭遇率も高い</li>
  <li><strong>冬（12〜2月）</strong>：星空観賞・マンタやクジラに会える可能性もあり、観光客も少なめ</li>
</ul>

<h2>絶対に外せない観光スポット 3 選</h2>
<h3>1. 川平湾</h3>
<p>ミシュラン・グリーンガイド・ジャポンで三つ星を獲得した、石垣島を代表する絶景スポット。エメラルドグリーンの海と点在する小島が織りなす景色は、一度見たら忘れられません。グラスボートで海中観察も人気です。</p>
<img src="/images/column/attraction-spot.jpg" alt="石垣島の人気観光スポット" />
<h3>2. 幻の島（浜島）</h3>
<p>潮が引いた時にだけ姿を現す三日月形の白い砂浜。石垣島から船で30分ほどの場所にあり、360度を珊瑚礁に囲まれた絶景スポットとして人気です。シュノーケリングや写真撮影に最適。</p>
<h3>3. 青の洞窟</h3>
<p>石垣島北部の人気スポット。洞窟内に差し込む光が海を青く染め上げる神秘的な景観と、周辺の珊瑚礁での生き物観察が楽しめます。シュノーケリングツアーが豊富。</p>

<h2>離島めぐりも石垣島観光の醍醐味</h2>
<p>石垣島は、西表島・竹富島・小浜島・黒島・鳩間島・パナリ島など、八重山諸島へのアクセスが抜群。フェリーで30分〜1時間程度で行けるので、日帰りツアーも充実しています。</p>
<ul>
  <li><strong>竹富島</strong>：水牛車で巡る赤瓦の集落と白い砂浜</li>
  <li><strong>西表島</strong>：マングローブとジャングルの大自然</li>
  <li><strong>小浜島</strong>：のどかな景色とサトウキビ畑</li>
  <li><strong>黒島</strong>：人より牛の数が多い、のんびり島時間</li>
</ul>

<h2>持ち物チェックリスト</h2>
<ul>
  <li>水着・ラッシュガード</li>
  <li>タオル・着替え</li>
  <li>日焼け止め（環境に優しい珊瑚礁配慮のもの）</li>
  <li>飲み物・軽食</li>
  <li>防水カメラ・スマホケース</li>
  <li>ビーチサンダル・歩きやすい靴</li>
  <li>レンタカー予約（離島巡り以外なら必須級）</li>
</ul>

<blockquote>
<p>人気のツアーやレンタカーは特に繁忙期にはすぐに満席・満車になります。石垣島ツアーズで事前予約しておくのがおすすめです。</p>
</blockquote>

<h2>まとめ</h2>
<p>石垣島は、海・空・島・食・文化のすべてが詰まった魅力たっぷりの観光地です。本記事を参考に、自分にぴったりの観光プラン・アクティビティ・ツアーを選び、思い出に残る素敵な旅をお楽しみください。</p>
<p>ご予約・お問い合わせはお気軽に石垣島ツアーズまで！皆様のご参加を心よりお待ちしております。</p>
`;

/**
 * /column-top のヒーロースライダー記事（views 上位3件）
 */
export const columnHeroSlides = [
  {
    href: "/column/attraction-spot",
    image: "/images/column/attraction-spot.jpg",
    title: "石垣島観光の決定版！絶対外せない人気スポット・アクティビティ・ベストシーズンを徹底解説",
    views: 4180,
  },
  {
    href: "/column/bluecave-snorkeling",
    image: "/images/column/bluecave-snorkeling.jpg",
    title: "石垣島「青の洞窟」完全ガイド｜場所・行き方・シュノーケリングツアー料金・初心者OK情報まとめ",
    views: 3420,
  },
  {
    href: "/column/ferry-iriomotejima",
    image: "/images/column/ferry-iriomotejima.webp",
    title: "石垣島→西表島フェリー｜料金・時刻表・上原港vs大原港・欠航時の対応を完全解説",
    views: 2870,
  },
];

/**
 * トップページ検索パネルのプラン選択
 */
export const planOptions = [
  { value: "marine", label: "マリンアクティビティ" },
  { value: "iriomote", label: "西表島ツアー" },
  { value: "taketomi", label: "竹富島ツアー" },
  { value: "snorkeling", label: "シュノーケリング" },
  { value: "diving", label: "ダイビング" },
  { value: "sup-kayak", label: "SUP・カヌー" },
  { value: "sightseeing", label: "観光ツアー" },
  { value: "setplan", label: "セットプラン" },
];

/**
 * ヘッダーナビゲーション - 既存サイト: 人気ランキング、「選ばれる理由」とは（2項目）
 */
export const navItems: NavItem[] = [
  { label: "アクティビティ", href: "/category/activitys" },
  { label: "人気ランキング", href: "/ranking" },
  { label: `${siteConfig.siteName}が「選ばれる理由」とは`, href: "/visitor-2" },
];

/**
 * フッターリンクセクション
 */
export const footerSections: FooterSection[] = [
  {
    title: "サイト情報",
    links: [
      { label: `${siteConfig.siteName}が「選ばれる理由」とは`, href: "/visitor-2" },
      { label: "よくある質問＆注意事項", href: "/faq" },
      { label: `${siteConfig.siteName}特集＆キャンペーン情報`, href: "/campaign" },
      { label: "石垣島の観光スポット一覧", href: "/spot" },
      { label: "リンク集・掲載事業者一覧", href: "/links" },
      { label: "個人情報保護方針", href: "/privacypolicy" },
      { label: "利用規約", href: "/policy" },
      { label: "特定商取引法に関する表記", href: "/act_on_specified_commercial_transactions" },
      { label: "旅行業約款・条件書", href: "/yakkan" },
      { label: "旅行業務取扱料金表(国内旅行)", href: "https://www.shummake.com/ryokin-kokunnai/" },
      { label: "運営者情報", href: "/administratordata" },
      { label: "ツアーの手配について（旅行代理店専用）", href: "/group-travel" },
      { label: "掲載のご依頼について", href: "/partner-entry" },
      { label: "記事掲載のご依頼について（記事広告）", href: "/promotion" },
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
  catchphrase: `石垣島専門のアクティビティ予約サイト"${siteConfig.siteName}"`,
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
        { label: "当日予約\nOKプラン", href: "/scene-time/same_day_booking.html", iconUrl: "/images/menu/icon-same-day.jpg" },
        { label: "プレミアム\nプラン", href: "/campaign/premium-plan.html", iconUrl: "/images/menu/icon-premium.jpg" },
        { label: "離島セット\nプラン", href: "/activitys/setplan-activity-ferry.html", iconUrl: "/images/menu/icon-seaturtles.png" },
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
      href: "/activitys/setplan-activity-ferry.html",
      imageUrl: "/images/menu/banner-iriomote-setplan.png",
      alt: "【ツアーズ限定割引】西表島セットプラン（フェリーチケット付き）",
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
    imageUrl: "/images/partner/anta.png",
    description: "一般社団法人 全国旅行業協会（ANTA）〈旅行業協会加盟〉",
  },
  {
    name: "HIS",
    imageUrl: "/images/partner/his.png",
    description: "HIS〈大手旅行会社と提携〉",
  },
  {
    name: "海と日本プロジェクト",
    imageUrl: "/images/partner/umi-nihon.png",
    description: "海と日本プロジェクト〈内閣府と日本財団が推進〉",
  },
  {
    name: "宝塚医療大学",
    imageUrl: "/images/partner/takarazuka.png",
    description: "宝塚医療大学〈産学連携〉",
  },
  {
    name: "おきなわSDGsパートナー",
    imageUrl: "/images/partner/sdgs.png",
    description: "おきなわSDGsパートナー〈SDGsの普及活動を実施〉",
  },
  {
    name: "スカイレンタカー",
    imageUrl: "/images/partner/sky-rentacar.png",
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
