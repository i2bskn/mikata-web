import type { FC } from "react";

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
   * 価格（税込）
   */
  price: number;
  /**
   * 元の価格（割引表示用）
   */
  originalPrice?: number;
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
  duration,
  tags,
  rating,
  reviewCount,
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
                className="rounded bg-orange-500 px-2 py-1 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* 割引率 */}
        {discountPercent && (
          <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
            {discountPercent}% OFF
          </div>
        )}
      </div>

      {/* コンテンツ */}
      <div className="p-4">
        {/* プラン名 */}
        <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-2">
          {name}
        </h3>

        {/* 説明 */}
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* 所要時間・評価 */}
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
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

        {/* 価格 */}
        <div className="flex items-end gap-2">
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ¥{originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-xl font-bold text-blue-600">
            ¥{price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">〜 / 人</span>
        </div>
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
