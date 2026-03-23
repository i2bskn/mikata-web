import type { FC } from "react";

export interface PriceItem {
  label: string;
  price: number;
  originalPrice?: number;
}

export interface PlanCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  price: number;
  originalPrice?: number;
  prices?: PriceItem[];
  duration?: string;
  tags?: string[];
  rating?: number;
  reviewCount?: number;
  ratingLabel?: string;
}

/**
 * プランカードコンポーネント - 既存サイトのデザインに合わせた表示
 */
export const PlanCard: FC<PlanCardProps> = ({
  name,
  imageUrl,
  href,
  price,
  originalPrice,
  duration,
  rating,
  reviewCount,
}) => {
  return (
    <a
      href={href}
      className="block overflow-hidden"
      style={{
        backgroundColor: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "4px",
        textDecoration: "none",
      }}
    >
      {/* 画像 */}
      <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* コンテンツ */}
      <div style={{ padding: "8px" }}>
        {/* プラン名 */}
        <h3
          style={{
            fontSize: "14.4px",
            fontWeight: 600,
            color: "#333",
            lineHeight: "1.4",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "6px",
          }}
        >
          {name}
        </h3>

        {/* 評価 */}
        {rating !== undefined && (
          <div className="flex items-center gap-1" style={{ marginBottom: "4px" }}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill={star <= Math.round(rating) ? "#f5a623" : "#ddd"}
                >
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.92 5.34L10 13.27l-4.78 2.51.92-5.34L2.27 6.67l5.34-.78z" />
                </svg>
              ))}
            </div>
            {reviewCount !== undefined && (
              <span style={{ fontSize: "11px", color: "#666" }}>
                ({reviewCount}件)
              </span>
            )}
          </div>
        )}

        {/* 所要時間 */}
        {duration && (
          <div style={{ fontSize: "11px", color: "#666", marginBottom: "4px" }}>
            {duration}
          </div>
        )}

        {/* 価格 */}
        <div style={{ fontSize: "11px", color: "#666" }}>
          大人(中学生以上) /
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          {originalPrice && (
            <span style={{ fontSize: "11px", color: "#999", textDecoration: "line-through", whiteSpace: "nowrap" }}>
              {originalPrice.toLocaleString()}円
            </span>
          )}
          <span style={{ fontSize: "11px", color: "#999" }}>→</span>
          <span style={{ fontSize: "16.8px", fontWeight: 600, color: "#dc4343", whiteSpace: "nowrap" }}>
            {price.toLocaleString()}円
          </span>
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
    <div style={{ border: "1px solid #e5e5e5", borderRadius: "4px", overflow: "hidden" }}>
      <div style={{ aspectRatio: "4/3", backgroundColor: "#eee" }} />
      <div style={{ padding: "8px" }}>
        <div style={{ height: "40px", backgroundColor: "#eee", borderRadius: "2px", marginBottom: "6px" }} />
        <div style={{ height: "16px", backgroundColor: "#eee", borderRadius: "2px", marginBottom: "4px", width: "60%" }} />
        <div style={{ height: "20px", backgroundColor: "#eee", borderRadius: "2px", width: "40%" }} />
      </div>
    </div>
  );
};
