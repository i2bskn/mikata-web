import type { Plan } from "../types";

/**
 * プランデータ（本番ではCMS/DBから取得）
 */
export const plans: Plan[] = [
  {
    slug: "bluecave304",
    name: "【石垣島/半日】当日予約OK！ウミガメに会えるかも☆秘境『青の洞窟』シュノーケリング＆洞窟探検ツアー★写真無料＆送迎付き（No.304）",
    description:
      "石垣島の人気スポット「青の洞窟」でシュノーケリング体験！透明度抜群の海でカラフルな熱帯魚やウミガメに出会えるチャンス。初心者やお子様連れでも安心のガイド付きツアーです。",
    imageUrl: "/images/plans/bluecave304.webp",
    price: 6500,
    originalPrice: 7500,
    duration: "約2.5時間",
    tags: ["人気No.1", "当日予約OK", "送迎付き"],
    rating: 4.8,
    reviewCount: 256,
    category: "bluecave",
    features: [
      "ウミガメ遭遇率80%以上",
      "写真データ無料プレゼント",
      "ホテル送迎付き",
      "器材レンタル込み",
    ],
    includes: [
      "シュノーケリング器材一式",
      "ウェットスーツ",
      "ライフジャケット",
      "写真撮影・データ",
      "保険料",
      "送迎",
    ],
    schedule: [
      { time: "08:00", activity: "ホテルお迎え" },
      { time: "08:30", activity: "青の洞窟到着・説明" },
      { time: "09:00", activity: "シュノーケリング開始" },
      { time: "10:00", activity: "洞窟探検" },
      { time: "10:30", activity: "終了・ホテルへ送迎" },
    ],
    meetingPoint: "石垣島市内ホテル（送迎あり）",
    notes: [
      "天候により中止になる場合があります",
      "妊娠中の方はご参加いただけません",
      "3歳以上からご参加いただけます",
    ],
  },
  {
    slug: "bluecave305",
    name: "【石垣島/約2.5時間】当日予約OK！神秘的スポット『青の洞窟』を目指すSUPツアー★透明度抜群の海で新体験♪写真無料＆送迎付き（No.305）",
    description:
      "SUP（スタンドアップパドル）で青の洞窟を目指す人気ツアー！透き通る海の上を滑るように進み、神秘的な青の洞窟へ。初心者でも丁寧にレクチャーするので安心です。",
    imageUrl: "/images/plans/bluecave305.webp",
    price: 7000,
    duration: "約2.5時間",
    tags: ["当日予約OK", "初心者OK"],
    rating: 4.7,
    reviewCount: 128,
    category: "bluecave",
    features: [
      "SUP初心者大歓迎",
      "写真データ無料",
      "少人数制ツアー",
    ],
    includes: [
      "SUPボード・パドル",
      "ライフジャケット",
      "写真撮影・データ",
      "保険料",
      "送迎",
    ],
    schedule: [
      { time: "09:00", activity: "集合・SUPレクチャー" },
      { time: "09:30", activity: "SUPスタート" },
      { time: "10:30", activity: "青の洞窟到着・探検" },
      { time: "11:00", activity: "帰路・終了" },
    ],
    meetingPoint: "米原ビーチ駐車場",
  },
  {
    slug: "kayak306",
    name: "【石垣島/半日】透明度抜群の海で新体験！人気の話題スポット『青の洞窟』を目指すカヤックツアー★写真無料＆送迎付き（No.306）",
    description:
      "カヤックで青の洞窟を目指すアドベンチャーツアー！2人乗りカヤックで協力しながら漕ぎ進め、青く輝く洞窟へ。カップルやファミリーにおすすめです。",
    imageUrl: "/images/plans/kayak306.webp",
    price: 6800,
    duration: "約2.5時間",
    tags: ["カップルにおすすめ", "ファミリー向け"],
    rating: 4.6,
    reviewCount: 89,
    category: "kayak",
    features: [
      "2人乗りカヤック",
      "ファミリー・カップル人気",
      "写真データ無料",
    ],
    includes: [
      "カヤック・パドル",
      "ライフジャケット",
      "写真撮影・データ",
      "保険料",
      "送迎",
    ],
    schedule: [
      { time: "08:30", activity: "集合・カヤックレクチャー" },
      { time: "09:00", activity: "カヤックスタート" },
      { time: "10:00", activity: "青の洞窟到着・探検" },
      { time: "10:30", activity: "帰路・終了" },
    ],
    meetingPoint: "米原ビーチ駐車場",
  },
  {
    slug: "setplan362",
    name: "【石垣島/1日】海と川を制覇☆石垣島最長！宮良川マングローブSUP/カヌー＆青の洞窟シュノーケリングツアー★＜写真無料&送迎付き＞（No.362）",
    description:
      "石垣島を1日で満喫！午前は宮良川でマングローブSUP/カヌー、午後は青の洞窟でシュノーケリング。海と川、両方楽しめる贅沢なセットプランです。",
    imageUrl: "/images/plans/setplan362.webp",
    price: 14000,
    originalPrice: 16000,
    duration: "約7時間",
    tags: ["1日満喫", "人気セット"],
    rating: 4.9,
    reviewCount: 156,
    category: "setplan",
    features: [
      "マングローブ＆青の洞窟",
      "1日で石垣島満喫",
      "ランチ付きオプションあり",
    ],
    includes: [
      "SUP/カヌー器材",
      "シュノーケリング器材",
      "写真撮影・データ",
      "保険料",
      "送迎",
    ],
    schedule: [
      { time: "08:30", activity: "ホテルお迎え" },
      { time: "09:00", activity: "宮良川マングローブツアー開始" },
      { time: "11:30", activity: "ランチ休憩" },
      { time: "13:00", activity: "青の洞窟シュノーケリング" },
      { time: "15:30", activity: "終了・ホテルへ送迎" },
    ],
    meetingPoint: "石垣島市内ホテル（送迎あり）",
  },
  {
    slug: "setplan349",
    name: "【石垣島/1日】迷ったらコレ☆ウミガメを探そう！川平湾SUP/カヌー＆青の洞窟シュノーケリングツアー★＜写真無料＆送迎付き＞（No.349）",
    description:
      "石垣島の2大人気スポットを1日で制覇！午前は絶景・川平湾でSUP/カヌー、午後は青の洞窟でシュノーケリング。迷ったらこのプランがおすすめです。",
    imageUrl: "/images/plans/setplan349.webp",
    imageUrls: [
      "/images/plans/bluecave305.webp",
      "/images/plans/kayak306.webp",
      "/images/plans/bluecave304.webp",
      "/images/plans/marine399.webp",
      "/images/plans/setplan362.webp",
    ],
    price: 13500,
    originalPrice: 29000,
    childPrice: 12500,
    infantPrice: 11500,
    duration: "約7時間",
    tags: ["2大スポット", "おすすめ"],
    rating: 4.8,
    reviewCount: 203,
    category: "setplan",
    features: [
      "川平湾＆青の洞窟",
      "ウミガメ遭遇率高",
      "写真データ無料",
    ],
    includes: [
      "SUP/カヌー器材",
      "シュノーケリング器材",
      "写真撮影・データ",
      "保険料",
      "送迎",
    ],
    schedule: [
      { time: "9:00", activity: "石垣港ターミナル/ホテル迎車" },
      { time: "9:30", activity: "現地到着・レクチャー" },
      { time: "10:00", activity: "午前アクティビティ（川平湾SUP/カヌー）" },
      { time: "12:00", activity: "昼食休憩" },
      { time: "14:00", activity: "午後アクティビティ（青の洞窟シュノーケリング）" },
      { time: "16:00", activity: "送迎終了" },
    ],
    meetingPoint: undefined,
  },
  {
    slug: "charter-tour553",
    name: "【石垣島/半日】ガイド貸切☆贅沢VIPチャータープラン＜写真無料＆送迎付き＞柔軟対応◎自分たちのペースで♪団体旅行・社員旅行にも（No.553）",
    description:
      "ガイド貸切で贅沢な時間を！行きたい場所、やりたいことを自由にアレンジ可能。グループ旅行や社員旅行、特別な記念日にもおすすめのVIPプランです。",
    imageUrl: "/images/plans/charter553.webp",
    price: 35000,
    duration: "約3時間",
    tags: ["貸切プラン", "VIP"],
    rating: 5.0,
    reviewCount: 42,
    category: "charter",
    features: [
      "完全貸切ガイド",
      "スケジュール自由",
      "グループ・団体歓迎",
    ],
    includes: [
      "ガイド貸切",
      "器材レンタル",
      "写真撮影・データ",
      "保険料",
      "送迎",
    ],
    schedule: [
      { time: "ご希望の時間", activity: "お迎え" },
      { time: "〜", activity: "ご希望のアクティビティ" },
      { time: "〜", activity: "終了・送迎" },
    ],
    meetingPoint: "ご指定の場所",
  },
  {
    slug: "marine-sports399",
    name: "【石垣島/1日】童心に返って遊びまくる☆青の洞窟探検＋ウミガメビーチシュノーケリング＋マリンスポーツ10種類以上遊び放題コース！グループ旅行にもおすすめ（No.399）",
    description:
      "1日中遊び尽くす！青の洞窟探検、ウミガメシュノーケリング、さらにマリンスポーツ10種類以上が遊び放題。友達グループや社員旅行に最適です。",
    imageUrl: "/images/plans/marine399.webp",
    price: 18000,
    originalPrice: 22000,
    duration: "約8時間",
    tags: ["遊び放題", "グループ向け"],
    rating: 4.7,
    reviewCount: 87,
    category: "marine-sports",
    features: [
      "マリンスポーツ遊び放題",
      "青の洞窟＋ウミガメ",
      "1日満喫コース",
    ],
    includes: [
      "全マリンスポーツ器材",
      "シュノーケリング器材",
      "昼食",
      "写真撮影・データ",
      "保険料",
      "送迎",
    ],
    schedule: [
      { time: "08:00", activity: "ホテルお迎え" },
      { time: "08:30", activity: "青の洞窟シュノーケリング" },
      { time: "11:00", activity: "ランチ" },
      { time: "12:00", activity: "マリンスポーツ遊び放題" },
      { time: "16:00", activity: "終了・ホテルへ送迎" },
    ],
    meetingPoint: "石垣島市内ホテル（送迎あり）",
  },
  {
    slug: "glassboat392",
    name: "【石垣島/1日】一度は見たい絶景『川平湾』でグラスボート体験＆青の洞窟シュノーケリングツアー★写真無料（No.392）",
    description:
      "川平湾でグラスボートに乗って海の中を覗き見！午後は青の洞窟でシュノーケリング。泳ぎが苦手な方やお子様連れでも楽しめる人気のセットプランです。",
    imageUrl: "/images/plans/glassboat392.webp",
    price: 12000,
    duration: "約6時間",
    tags: ["泳げなくてもOK", "ファミリー向け"],
    rating: 4.6,
    reviewCount: 134,
    category: "glassboat",
    features: [
      "グラスボートで海中観察",
      "泳げなくても参加OK",
      "お子様連れ歓迎",
    ],
    includes: [
      "グラスボート乗船料",
      "シュノーケリング器材",
      "写真撮影・データ",
      "保険料",
    ],
    schedule: [
      { time: "09:00", activity: "川平湾集合" },
      { time: "09:30", activity: "グラスボート体験" },
      { time: "11:00", activity: "ランチ休憩" },
      { time: "13:00", activity: "青の洞窟シュノーケリング" },
      { time: "15:00", activity: "終了" },
    ],
    meetingPoint: "川平湾駐車場",
  },
];

/**
 * スラッグからプランを取得
 */
export function getPlanBySlug(slug: string): Plan | undefined {
  return plans.find((plan) => plan.slug === slug);
}

/**
 * カテゴリでプランをフィルタリング
 */
export function getPlansByCategory(category: string): Plan[] {
  return plans.filter((plan) => plan.category === category);
}

/**
 * 人気プランを取得（レビュー数順）
 */
export function getPopularPlans(limit = 6): Plan[] {
  return [...plans]
    .sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0))
    .slice(0, limit);
}

/**
 * 全プランのスラッグを取得（generateStaticParams用）
 */
export function getAllPlanSlugs(): string[] {
  return plans.map((plan) => plan.slug);
}

export type SearchSort = "popular" | "review";

export type SearchFilter = {
  category?: string;
  tag?: string;
  anyTag?: string[];
};

export type SearchInput = {
  filter?: SearchFilter;
  sort?: SearchSort;
  page?: number;
  perPage?: number;
};

export type SearchResult = {
  plans: Plan[];
  total: number;
  page: number;
  perPage: number;
};

/**
 * フィルタ・ソート・ページング対応の検索
 */
export function searchPlans(input: SearchInput = {}): SearchResult {
  const { filter = {}, sort = "popular", page = 1, perPage = 10 } = input;

  let result = [...plans];

  if (filter.category) {
    result = result.filter((p) => p.category === filter.category);
  }
  if (filter.tag) {
    result = result.filter((p) => p.tags.includes(filter.tag!));
  }
  if (filter.anyTag && filter.anyTag.length > 0) {
    result = result.filter((p) => filter.anyTag!.some((t) => p.tags.includes(t)));
  }

  if (sort === "popular") {
    result.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
  } else if (sort === "review") {
    result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  }

  const total = result.length;
  const startIdx = (page - 1) * perPage;
  const endIdx = startIdx + perPage;

  return {
    plans: result.slice(startIdx, endIdx),
    total,
    page,
    perPage,
  };
}
