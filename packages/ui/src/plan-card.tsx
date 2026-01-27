import type { FC } from "react";

export interface PriceItem {
  label: string;
  price: number;
  originalPrice?: number;
}

export interface PlanCardProps {
  /**
   * プラン名
   */
  name: string;
  /**
   * 説明文
   */
  description: string;
  /**
   * 画像URL
   */
  imageUrl: string;
  /**
   * 詳細ページへのリンク
   */
  href: string;
  /**
   * 価格（税込）- 単一価格の場合
   */
  price: number;
  /**
   * 元の価格（割引表示用）
   */
  originalPrice?: number;
  /**
   * 複数価格（大人/小人/幼児など）
   */
  prices?: PriceItem[];
  /**
   * 所要時間
   */
  duration?: string;
  /**
   * タグ（例: "人気", "当日予約OK"）
   */
  tags?: string[];
  /**
   * 評価（5段階）
   */
  rating?: number;
  /**
   * レビュー数
   */
  reviewCount?: number;
  /**
   * 評価ラベル（例: "最高の評価"）
   */
  ratingLabel?: string;
}

/**
 * タグの色を取得
 */
function getTagColor(tag: string): string {
  if (tag.includes("人気") || tag.includes("おすすめ")) {
    return "bg-accent";
  }
  if (tag.includes("当日") || tag.includes("予約OK")) {
    return "bg-green-500";
  }
  if (tag.includes("写真") || tag.includes("無料")) {
    return "bg-primary";
  }
  if (tag.includes("送迎")) {
    return "bg-purple-500";
  }
  return "bg-gray-600";
}

/**
 * プランカードコンポーネント
 *
 * ツアープランの一覧表示に使用
 */
export const PlanCard: FC<PlanCardProps> = ({
  name,
  description,
  imageUrl,
  href,
  price,
  originalPrice,
  prices,
  duration,
  tags,
  rating,
  reviewCount,
  ratingLabel,
}) => {
  const discountPercent = originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : null;

  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      {/* 画像 */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* タグ */}
        {tags && tags.length > 0 && (
          <div className="absolute left-2 top-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`rounded px-2 py-1 text-xs font-medium text-white ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* 割引率 */}
        {discountPercent && (
          <div className="absolute right-2 top-2 rounded bg-danger px-2 py-1 text-xs font-bold text-white">
            {discountPercent}% OFF
          </div>
        )}
        {/* 評価ラベル */}
        {ratingLabel && (
          <div className="absolute bottom-2 left-2 rounded bg-yellow-500 px-2 py-1 text-xs font-bold text-white">
            {ratingLabel}
          </div>
        )}
      </div>

      {/* コンテンツ */}
      <div className="p-4">
        {/* プラン名 */}
        <h3 className="mb-2 text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* 説明 */}
        <p className="mb-3 text-xs text-gray-600 line-clamp-2">{description}</p>

        {/* 所要時間・評価 */}
        <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
          {duration && (
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {duration}
            </span>
          )}
          {rating !== undefined && (
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {rating.toFixed(1)}
              {reviewCount !== undefined && (
                <span className="text-gray-400">({reviewCount})</span>
              )}
            </span>
          )}
        </div>

        {/* 価格 - 複数価格対応 */}
        {prices && prices.length > 0 ? (
          <div className="space-y-1 border-t pt-3">
            {prices.map((priceItem) => (
              <div key={priceItem.label} className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{priceItem.label}</span>
                <div className="flex items-center gap-2">
                  {priceItem.originalPrice && (
                    <span className="text-gray-400 line-through">
                      ¥{priceItem.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="font-bold text-primary">
                    ¥{priceItem.price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-end gap-2 border-t pt-3">
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ¥{originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-lg font-bold text-primary">
              ¥{price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500">〜 / 人</span>
          </div>
        )}
      </div>
    </a>
  );
};

/**
 * プランカードのスケルトン（ローディング用）
 */
export const PlanCardSkeleton: FC = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="aspect-[4/3] animate-pulse bg-gray-200" />
      <div className="p-4">
        <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="mb-3 h-4 w-full animate-pulse rounded bg-gray-200" />
        <div className="mb-3 h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
};
