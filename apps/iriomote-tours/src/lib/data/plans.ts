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
    isPremium: true,
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
    isPremium: true,
  },
  {
    slug: "setplan349",
    name: "★春の特別SALE【石垣島/1日】迷ったらコレ☆ウミガメを探そう！川平湾SUP/カヌー＆青の洞窟シュノーケリングツアー★＜写真無料＆送迎付き＞（No.349）",
    description:
      "石垣島の2大絶景スポットを1日で制覇できるセットプラン。ミシュラングリーンガイド三ツ星を獲得した「川平湾」でのSUP/カヌー体験と、大人気スポット「青の洞窟」でのシュノーケリング体験がセットになった人気No.1コース。水難救助員資格を持ったガイドが安全にサポートし、初心者の方やお子さま連れのご家族でも安心してご参加いただけます。写真データの無料プレゼント・送迎・備品レンタル込みの全部込み込み価格、前日18時までキャンセル料無料の安心保証付き。",
    imageUrl: "/images/plans/setplan349.webp",
    price: 13500,
    originalPrice: 29000,
    childPrice: 12500,
    infantPrice: 11500,
    duration: "約7時間",
    tags: ["送迎付き", "写真無料", "当日予約OK", "プレミアム厳選", "前日18時までキャンセル無料"],
    rating: 4.8,
    reviewCount: 205,
    category: "setplan",
    features: [
      "沖縄県警公認のマル優（安全対策優良）認定業者が運営",
      "水難救助員資格を持ったガイドが同行・サポート",
      "累計参加人数30万人突破の安心実績",
      "川平湾と青の洞窟、石垣島の2大絶景スポットを1日で体験",
      "ガイドが防水カメラで撮影した写真データを無料プレゼント",
      "前日18時までキャンセル料無料",
      "ツアー備品（SUP/カヌー・シュノーケル一式・ライフジャケット等）すべて無料レンタル",
      "当日予約OK（当日7:30まで申込可）",
      "初心者向けの丁寧なレクチャーつき",
      "ウミガメとの遭遇チャンスあり",
    ],
    includes: [
      "体験料",
      "賠償責任保険料",
      "消費税",
      "SUP/カヌー一式",
      "シュノーケリング器材一式",
      "安全備品（ライフジャケット・専用シューズ）",
      "ウェットスーツ（冬季）",
      "写真データ",
      "温水シャワー（石垣港離島ターミナル近く）",
      "参加者限定特典ページ（飲食店クーポン・穴場情報）",
    ],
    schedule: [
      { time: "9:00", activity: "石垣港離島ターミナル前/ホテル前にお迎え" },
      { time: "9:30", activity: "現地フィールド到着・レクチャー" },
      { time: "10:00", activity: "午前アクティビティスタート" },
      { time: "11:15", activity: "午前アクティビティ終了・お昼休みへ" },
      { time: "12:00", activity: "昼食休憩（自由）" },
      { time: "13:30", activity: "午後フィールドへ移動" },
      { time: "14:00", activity: "午後フィールド到着" },
      { time: "14:30", activity: "午後アクティビティスタート" },
      { time: "16:00", activity: "午後アクティビティ終了" },
      { time: "16:30", activity: "石垣港離島ターミナル前/ホテル到着・解散" },
    ],
    meetingPoint:
      "各ホテル/石垣港離島ターミナル前（石垣島南部エリア＝東：ANAインターコンチネンタル〜西：フサキリゾートまで無料送迎）",
    notes: [
      "対象年齢：5〜59歳（安全管理上の理由により60歳以上はご遠慮願います）",
      "5〜11歳のお子さまは海況・参加人数によりSUPではなくカヌーになる場合があります",
      "雨天催行（フィールドの安全確保ができない場合は中止となります）",
      "予め濡れても良い服装に着替えのうえご集合ください",
      "現地近くにトイレがないため、事前にお手洗いをお済ませください",
      "遅刻される場合は事前にご連絡ください",
      "参加人数：1〜10名（11名以上は事前にご相談ください）",
      "申込み締切：当日7:30まで",
      "天候・海況によりスケジュールが変動する場合があります",
    ],
    isPremium: true,
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
    isPremium: true,
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
