import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { plans, getPopularPlans } from "../../lib/data/plans";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "人気ランキング",
};

const rankBadgeColors: Record<number, string> = {
  1: "#1a9edb",
  2: "#1a9edb",
  3: "#1a9edb",
};

export default function RankingPage() {
  const rankedPlans = getPopularPlans(plans.length);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "人気ランキング", url: `${siteConfig.siteUrl}/ranking` },
        ]}
      />

      <div
        className="mx-auto"
        style={{ maxWidth: "1020px", padding: "0 10px" }}
      >
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "24px",
              }}
            >
              人気ランキング
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {rankedPlans.map((plan, index) => (
                <a
                  key={plan.slug}
                  href={`/plan/${plan.slug}`}
                  style={{
                    display: "block",
                    backgroundColor: "#fff",
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    textDecoration: "none",
                    color: "#333",
                    overflow: "hidden",
                  }}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* 画像エリア */}
                    <div
                      style={{
                        position: "relative",
                        flexShrink: 0,
                      }}
                      className="w-full sm:w-[280px]"
                    >
                      <img
                        src={plan.imageUrl}
                        alt={plan.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          minHeight: "180px",
                          objectFit: "cover",
                        }}
                      />
                      {/* ランキングバッジ */}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          backgroundColor:
                            rankBadgeColors[index + 1] ?? "#999",
                          color: "#fff",
                          padding: "4px 12px",
                          fontSize: "16px",
                          fontWeight: "bold",
                          borderRadius: "0 0 8px 0",
                        }}
                      >
                        {index + 1}位
                      </div>
                    </div>

                    {/* コンテンツエリア */}
                    <div style={{ flex: 1, padding: "16px", minWidth: 0 }}>
                      {/* プラン名 */}
                      <h2
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                          color: "#333",
                          lineHeight: "1.5",
                          marginBottom: "12px",
                        }}
                      >
                        {plan.name}
                      </h2>

                      {/* 価格 */}
                      <div style={{ marginBottom: "8px" }}>
                        <div
                          className="flex items-center gap-2 flex-wrap"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            style={{
                              fontSize: "13px",
                              color: "#333",
                            }}
                          >
                            大人(中学生以上)
                          </span>
                          {plan.originalPrice && (
                            <span
                              style={{
                                fontSize: "13px",
                                color: "#999",
                                textDecoration: "line-through",
                              }}
                            >
                              {plan.originalPrice.toLocaleString()}円
                            </span>
                          )}
                          <span
                            style={{ fontSize: "13px", color: "#999" }}
                          >
                            →
                          </span>
                          <span
                            style={{
                              fontSize: "22px",
                              fontWeight: "bold",
                              color: "#ed3434",
                            }}
                          >
                            {plan.price.toLocaleString()}円
                          </span>
                        </div>
                      </div>

                      {/* 評価 */}
                      {plan.rating !== undefined && (
                        <div
                          className="flex items-center gap-2"
                          style={{ marginBottom: "12px" }}
                        >
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill={
                                  star <= Math.round(plan.rating ?? 0)
                                    ? "#f5a623"
                                    : "#ddd"
                                }
                              >
                                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.92 5.34L10 13.27l-4.78 2.51.92-5.34L2.27 6.67l5.34-.78z" />
                              </svg>
                            ))}
                          </div>
                          {plan.reviewCount !== undefined && (
                            <span
                              style={{ fontSize: "13px", color: "#666" }}
                            >
                              ({plan.reviewCount}件)
                            </span>
                          )}
                        </div>
                      )}

                      {/* 詳細を見るボタン */}
                      <div
                        style={{
                          display: "inline-block",
                          padding: "8px 32px",
                          backgroundColor: "#333",
                          color: "#fff",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        詳細を見る ＞
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
