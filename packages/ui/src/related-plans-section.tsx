import type { FC } from "react";

export type RelatedPlanItem = {
  slug: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  childPrice?: number;
  childOriginalPrice?: number;
  infantPrice?: number;
  rating?: number;
  reviewCount?: number;
};

export type RelatedPlansSectionProps = {
  plans: RelatedPlanItem[];
  accentColor?: string;
  title?: string;
  basePath?: string;
  totalCount?: number;
};

const ShareIcon: FC<{ color?: string }> = ({ color = "#7a8794" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const Stars: FC<{ rating: number }> = ({ rating }) => (
  <span className="inline-flex items-center" style={{ gap: "1px" }}>
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} width="13" height="13" viewBox="0 0 24 24" aria-hidden>
        <polygon
          points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"
          fill={s <= Math.round(rating) ? "#f7b500" : "#e0e0e0"}
        />
      </svg>
    ))}
  </span>
);

const PriceRow: FC<{
  label: string;
  price: number;
  originalPrice?: number;
}> = ({ label, price, originalPrice }) => (
  <div
    className="flex items-center justify-between flex-wrap"
    style={{ fontSize: "13px", padding: "3px 0", gap: "6px" }}
  >
    <span style={{ color: "#333" }}>{label}</span>
    <span className="flex items-center" style={{ gap: "4px" }}>
      {originalPrice && (
        <span style={{ color: "#999", textDecoration: "line-through", fontSize: "12px" }}>
          {originalPrice.toLocaleString()}円
        </span>
      )}
      {originalPrice && <span style={{ color: "#999", fontSize: "12px" }}>→</span>}
      <span
        style={{
          color: "#fff",
          backgroundColor: "var(--color-danger, #ed3434)",
          padding: "2px 8px",
          borderRadius: "3px",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        {price.toLocaleString()}円
      </span>
    </span>
  </div>
);

export const RelatedPlansSection: FC<RelatedPlansSectionProps> = ({
  plans,
  accentColor = "#1a9edb",
  title = "関連プラン",
  basePath = "/plan",
  totalCount,
}) => {
  if (plans.length === 0) return null;
  const count = totalCount ?? plans.length;

  return (
    <section style={{ marginTop: "20px" }}>
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "12px" }}
      >
        <h2
          className="flex items-center"
          style={{
            fontSize: "21.6px",
            fontWeight: 600,
            color: "#212529",
            lineHeight: "1.2",
            gap: "8px",
          }}
        >
          <ShareIcon />
          {title}
        </h2>
        <span style={{ fontSize: "13px", color: "#666" }}>全{count}件</span>
      </div>

      <div
        style={{
          backgroundColor: "#dbf3f5",
          padding: "12px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {plans.map((plan) => {
          const href = `${basePath}/${plan.slug}`;
          return (
            <article
              key={plan.slug}
              style={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                padding: "10px",
                display: "flex",
                gap: "12px",
              }}
            >
              <a
                href={href}
                style={{
                  flexShrink: 0,
                  width: "38%",
                  maxWidth: "230px",
                  display: "block",
                  borderRadius: "3px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "4/3",
                }}
              >
                <img
                  src={plan.imageUrl}
                  alt={plan.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </a>

              <div className="flex-1 min-w-0" style={{ display: "flex", flexDirection: "column" }}>
                <a
                  href={href}
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#212529",
                    lineHeight: "1.4",
                    textDecoration: "none",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {plan.name}
                </a>

                <div
                  style={{
                    borderBottom: `1px solid ${accentColor}`,
                    margin: "8px 0",
                  }}
                />

                <div style={{ marginBottom: "8px" }}>
                  <PriceRow
                    label="大人(中学生以上)"
                    price={plan.price}
                    originalPrice={plan.originalPrice}
                  />
                  {plan.childPrice !== undefined && (
                    <PriceRow
                      label="小人(中学生未満)"
                      price={plan.childPrice}
                      originalPrice={plan.childOriginalPrice}
                    />
                  )}
                  {plan.infantPrice !== undefined && (
                    <PriceRow label="幼児(小学生未満)" price={plan.infantPrice} />
                  )}
                </div>

                <div
                  className="flex items-center justify-between flex-wrap"
                  style={{ gap: "8px", marginTop: "auto" }}
                >
                  {plan.rating !== undefined && (
                    <span className="flex items-center" style={{ gap: "4px" }}>
                      <Stars rating={plan.rating} />
                      {plan.reviewCount !== undefined && (
                        <span style={{ fontSize: "12px", color: "#666" }}>
                          ({plan.reviewCount}件)
                        </span>
                      )}
                    </span>
                  )}
                  <a
                    href={href}
                    style={{
                      backgroundColor: accentColor,
                      color: "#fff",
                      textDecoration: "none",
                      padding: "6px 16px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    詳細を見る ＞
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
