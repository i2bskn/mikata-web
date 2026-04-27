/**
 * ランキングリスト共通コンポーネント
 * 各サイトの /ranking ページで使用
 */

/** ランキング表示に必要なプランの最小インターフェース */
export interface RankingPlan {
  slug: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  childPrice?: number;
  infantPrice?: number;
  rating?: number;
  reviewCount?: number;
}

export interface RankingListProps {
  plans: RankingPlan[];
  /** 「詳細を見る」ボタンの背景色 */
  accentColor: string;
  /** プラン詳細リンクのプレフィックス（デフォルト: "/plan/"） */
  planLinkPrefix?: string;
  /** Premium Planバッジ画像URL（指定しない場合は非表示） */
  premiumBadgeUrl?: string;
}

const BADGE_COLORS = ["#e3af3a", "#adadad", "#aa845e"] as const;

function StarRating({ rating, reviewCount }: { rating?: number; reviewCount?: number }) {
  const filled = rating !== undefined ? Math.round(rating) : 0;
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill={star <= filled ? "#fbc110" : "#ddd"}
          >
            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.92 5.34L10 13.27l-4.78 2.51.92-5.34L2.27 6.67l5.34-.78z" />
          </svg>
        ))}
      </div>
      {reviewCount !== undefined && (
        <span style={{ fontSize: "12px", color: "#000" }}>
          ({reviewCount}件)
        </span>
      )}
    </div>
  );
}

function PriceRow({
  label,
  price,
  originalPrice,
  highlight,
}: {
  label: string;
  price: number;
  originalPrice?: number;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between"
      style={{ margin: "4px 0", lineHeight: "21.6px", gap: "8px" }}
    >
      <span style={{ fontSize: "12px", fontWeight: "600", color: "#000" }}>
        {label}
      </span>
      <span className="flex items-center" style={{ gap: "6px" }}>
        {highlight && originalPrice && (
          <>
            <s style={{ color: "#000", fontSize: "9.6px" }}>
              <small>{originalPrice.toLocaleString()}円</small>
            </s>
            <span aria-hidden="true">→</span>
          </>
        )}
        {highlight ? (
          <span
            style={{
              fontSize: "18px",
              fontWeight: "900",
              color: "#fff",
              backgroundColor: "#ec1818",
              borderRadius: "5px",
              padding: "2px 5.4px",
              margin: "2px 0",
              display: "inline-block",
            }}
          >
            <strong>{price.toLocaleString()}</strong>
            <span>円</span>
          </span>
        ) : (
          <>
            <span style={{ fontSize: "18px", fontWeight: "600", color: "#000" }}>
              {price.toLocaleString()}
            </span>
            <span style={{ fontSize: "18px", color: "#000" }}>円</span>
          </>
        )}
      </span>
    </div>
  );
}

export function RankingList({
  plans,
  accentColor,
  planLinkPrefix = "/plan/",
  premiumBadgeUrl,
}: RankingListProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "40px",
      }}
    >
      {plans.map((plan, index) => (
        <a
          key={plan.slug}
          href={`${planLinkPrefix}${plan.slug}`}
          style={{
            display: "block",
            backgroundColor: "#fff",
            border: "1px solid #e6e6e6",
            borderRadius: "5px",
            textDecoration: "none",
            color: "#000",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-row">
            {/* 画像エリア */}
            <div
              style={{
                position: "relative",
                flexShrink: 0,
                width: "350px",
                maxWidth: "47%",
              }}
            >
              <img
                src={plan.imageUrl}
                alt={plan.name}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "200px",
                  objectFit: "cover",
                }}
              />
              {/* ランキングバッジ */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  backgroundColor: BADGE_COLORS[index] ?? "#34e5d3",
                  color: "#fff",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "0px 5px",
                  borderRadius: "0px",
                }}
              >
                {index + 1}位
              </div>
              {/* Premium Planバッジ */}
              {premiumBadgeUrl && (
                <img
                  src={premiumBadgeUrl}
                  alt="Premium plan"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "10px",
                    width: "80px",
                    height: "auto",
                  }}
                />
              )}
              {/* カルーセル矢印（左） */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  width: "28px",
                  height: "64px",
                  backgroundColor: "rgba(255,255,255,0.48)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
              {/* カルーセル矢印（右） */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                  width: "28px",
                  height: "64px",
                  backgroundColor: "rgba(255,255,255,0.48)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>

            {/* コンテンツエリア */}
            <div style={{ flex: 1, padding: "16px 24px", minWidth: 0 }}>
              <h2
                style={{
                  fontSize: "14.4px",
                  fontWeight: "600",
                  color: "#000",
                  lineHeight: "1.4",
                  marginBottom: "10px",
                }}
              >
                {plan.name}
              </h2>

              {/* 価格テーブル */}
              <div style={{ marginBottom: "12px" }}>
                <PriceRow
                  label="大人(中学生以上)"
                  price={plan.price}
                  originalPrice={plan.originalPrice}
                  highlight
                />
                {plan.childPrice !== undefined && (
                  <PriceRow label="小人(中学生未満)" price={plan.childPrice} />
                )}
                {plan.infantPrice !== undefined && (
                  <PriceRow label="幼児(小学生未満)" price={plan.infantPrice} />
                )}
              </div>

              {/* 評価 + 詳細ボタン */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                {(plan.rating !== undefined || plan.reviewCount !== undefined) && (
                  <StarRating rating={plan.rating} reviewCount={plan.reviewCount} />
                )}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "210px",
                    padding: "8px 16px",
                    backgroundColor: accentColor,
                    color: "#fff",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  詳細を見る ＞
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
