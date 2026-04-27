import type { Plan } from "../types";

/**
 * プランデータ（サンプル） - 元サイトのランキングから取得
 */
export const plans: Plan[] = [
  {
    slug: "setplan362",
    name: "【石垣島/1日】海と川を制覇☆石垣島最長！宮良川マングローブSUP/カヌー＆青の洞窟シュノーケリングツアー★＜写真無料&送迎付き＞（No.362）",
    description: "石垣島最長のマングローブ川でSUP/カヌーと青の洞窟シュノーケリングを1日で楽しめるセットプラン",
    imageUrl: "/images/plans/setplan362.webp",
    price: 13500,
    originalPrice: 29000,
    duration: "1日",
    tags: ["送迎付き", "写真無料"],
    rating: 4.7,
    reviewCount: 31,
    category: "setplan",
    features: [],
    includes: [],
    schedule: [],
  },
  {
    slug: "hama-island459",
    name: "★春の特別SALE【石垣島/1日】2つの離島を満喫！絶景『幻の島』上陸＋シュノーケリング＆のんびり『竹富島』観光《写真無料＆送迎付き》（No.459）",
    description: "幻の島上陸とシュノーケリング、竹富島観光がセットの1日ツアー",
    imageUrl: "/images/plans/hama-island459.webp",
    price: 9800,
    originalPrice: 19600,
    duration: "1日",
    tags: ["送迎付き", "写真無料"],
    rating: 4.8,
    reviewCount: 28,
    category: "hama-island",
    features: [], includes: [], schedule: [],
  },
  {
    slug: "hama-island458",
    name: "★春の特別SALE【石垣島/半日】3歳からOK！360度絶景に感動☆幻の島上陸＆ボートシュノーケリングツアー《写真無料＆送迎付き》（No.458）",
    description: "3歳から参加OK！幻の島に上陸してボートシュノーケリングを楽しむ半日ツアー",
    imageUrl: "/images/plans/hama-island458.webp",
    price: 7900,
    originalPrice: 14500,
    duration: "半日",
    tags: ["当日予約OK", "送迎付き", "写真無料"],
    rating: 4.7,
    reviewCount: 28,
    category: "hama-island",
    features: [], includes: [], schedule: [],
  },
  {
    slug: "setplan349",
    name: "★春の特別SALE【石垣島/1日】迷ったらコレ☆ウミガメを探そう！川平湾SUP/カヌー＆青の洞窟シュノーケリングツアー★＜写真無料＆送迎付き＞（No.349）",
    description: "川平湾でSUP/カヌーと青の洞窟シュノーケリングの人気セットプラン",
    imageUrl: "/images/plans/setplan349.webp",
    price: 13500,
    originalPrice: 29000,
    duration: "1日",
    tags: ["人気No.1", "送迎付き", "写真無料"],
    rating: 4.9,
    reviewCount: 130,
    category: "setplan",
    features: [], includes: [], schedule: [],
  },
  {
    slug: "bluecave304",
    name: "★春の特別SALE【石垣島/半日】当日予約OK！ウミガメに会えるかも☆秘境『青の洞窟』シュノーケリング＆洞窟探検ツアー★写真無料＆送迎付き（No.304）",
    description: "石垣島の秘境・青の洞窟でシュノーケリングと洞窟探検を楽しむ半日ツアー。透明度抜群の海で熱帯魚やウミガメとの出会いも期待できます。写真データ無料プレゼント＆送迎付きで手ぶらで参加OK！",
    imageUrl: "/images/plans/bluecave304.webp",
    imageUrls: [
      "/images/plans/bluecave304.webp",
      "/images/plans/bluecave304-2.webp",
      "/images/plans/bluecave304-3.webp",
    ],
    price: 6900,
    originalPrice: 13500,
    childPrice: 5900,
    infantPrice: 4900,
    duration: "約3時間",
    tags: ["当日予約OK", "送迎付き", "写真無料"],
    rating: 4.8,
    reviewCount: 28,
    category: "snorkeling",
    features: [
      "当日予約OK！思い立ったらすぐ参加",
      "写真データ無料プレゼント",
      "ホテルへの送迎付き",
      "シュノーケリング器材すべて無料レンタル",
      "ウミガメに会えるかも！",
      "秘境「青の洞窟」で洞窟探検",
    ],
    includes: [
      "シュノーケリング器材一式",
      "ライフジャケット",
      "マリンシューズ",
      "写真データ",
      "送迎（対象エリア）",
      "ガイド料",
      "保険料",
    ],
    schedule: [
      { time: "9:00", activity: "集合・受付" },
      { time: "9:15", activity: "ポイントへ移動" },
      { time: "9:30", activity: "シュノーケリング開始" },
      { time: "10:30", activity: "青の洞窟探検" },
      { time: "11:00", activity: "シャワー・着替え" },
      { time: "11:30", activity: "送迎・解散" },
    ],
    meetingPoint: "石垣島市街地（ホテル送迎あり）",
    notes: [
      "天候や海況によりツアーが中止になる場合があります",
      "妊娠中の方はご参加いただけません",
      "飲酒後の参加はお断りしています",
      "集合時間に遅れた場合、ツアーに参加できない場合があります",
    ],
  },
  {
    slug: "seaturtles310",
    name: "【石垣島/半日】当日予約OK！ウミガメシュノーケリングツアー★写真無料＆送迎付き（No.310）",
    description: "ウミガメに会えるシュノーケリングツアー。写真無料＆送迎付き",
    imageUrl: "/images/plans/seaturtles310.webp",
    price: 7500,
    originalPrice: 8500,
    duration: "半日",
    tags: ["当日予約OK", "送迎付き", "写真無料"],
    rating: 4.7,
    reviewCount: 89,
    category: "seaturtles",
    features: [], includes: [], schedule: [],
  },
  {
    slug: "hama-island460",
    name: "【石垣島/半日】絶景『幻の島』上陸＋体験ダイビング＆シュノーケリングツアー《写真無料＆送迎付き》（No.460）",
    description: "幻の島に上陸して体験ダイビングとシュノーケリングを楽しむ半日ツアー",
    imageUrl: "/images/plans/hama-island460.webp",
    price: 14800,
    originalPrice: 23000,
    duration: "半日",
    tags: ["送迎付き", "写真無料"],
    rating: 4.6,
    reviewCount: 15,
    category: "hama-island",
    features: [], includes: [], schedule: [],
  },
  {
    slug: "setplan363",
    name: "【石垣島/1日】青の洞窟シュノーケリング＆川平湾グラスボート＆竹富島観光ツアー★＜写真無料＆送迎付き＞（No.363）",
    description: "青の洞窟・川平湾・竹富島を1日で巡る欲張りツアー",
    imageUrl: "/images/plans/setplan363.webp",
    price: 15800,
    originalPrice: 28000,
    duration: "1日",
    tags: ["送迎付き", "写真無料"],
    rating: 4.7,
    reviewCount: 22,
    category: "setplan",
    features: [], includes: [], schedule: [],
  },
];

/**
 * 人気プラン（レビュー数順）
 */
export function getPopularPlans(limit = 6): Plan[] {
  return [...plans]
    .sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0))
    .slice(0, limit);
}

/**
 * slugでプラン取得
 */
export function getPlanBySlug(slug: string): Plan | undefined {
  return plans.find((p) => p.slug === slug);
}

/**
 * 全プランのslug一覧
 */
export function getAllPlanSlugs(): string[] {
  return plans.map((p) => p.slug);
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
