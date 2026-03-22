import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { plans, getPopularPlans } from "../../lib/data/plans";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "人気ランキング",
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
                fontWeight: "bold",
                color: "#1a9edb",
                marginBottom: "16px",
              }}
            >
              人気ランキング
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
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
                          backgroundColor: "#1a9edb",
                          color: "#fff",
                          padding: "6px 14px",
                          fontSize: "16px",
                          fontWeight: "bold",
                          borderRadius: "0 0 8px 0",
                        }}
                      >
                        {index + 1}位
                      </div>
                      {/* Premium Planバッジ */}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          backgroundColor: "rgba(51, 51, 51, 0.85)",
                          color: "#fff",
                          padding: "8px 12px",
                          fontSize: "11px",
                          fontWeight: "bold",
                          lineHeight: "1.3",
                          textAlign: "center",
                          borderRadius: "0 0 0 8px",
                        }}
                      >
                        Premium
                        <br />
                        Plan
                      </div>
                      {/* カルーセル矢印 */}
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "8px",
                          transform: "translateY(-50%)",
                          width: "28px",
                          height: "28px",
                          backgroundColor: "rgba(255,255,255,0.7)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "8px",
                          transform: "translateY(-50%)",
                          width: "28px",
                          height: "28px",
                          backgroundColor: "rgba(255,255,255,0.7)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
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

                      {/* 価格テーブル */}
                      <table
                        style={{
                          width: "100%",
                          marginBottom: "12px",
                          borderCollapse: "collapse",
                          fontSize: "14px",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ padding: "4px 0", color: "#333" }}>
                              大人(中学生以上)
                            </td>
                            <td style={{ padding: "4px 0", textAlign: "right" }}>
                              <span className="flex items-center justify-end gap-2">
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
                                {plan.originalPrice && (
                                  <span style={{ fontSize: "13px", color: "#999" }}>→</span>
                                )}
                                <span
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "#ed3434",
                                  }}
                                >
                                  {plan.price.toLocaleString()}円
                                </span>
                              </span>
                            </td>
                          </tr>
                          {plan.childPrice !== undefined && (
                            <tr>
                              <td style={{ padding: "4px 0", color: "#333" }}>
                                小人(中学生未満)
                              </td>
                              <td
                                style={{
                                  padding: "4px 0",
                                  textAlign: "right",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {plan.childPrice.toLocaleString()}円
                              </td>
                            </tr>
                          )}
                          {plan.infantPrice !== undefined && (
                            <tr>
                              <td style={{ padding: "4px 0", color: "#333" }}>
                                幼児(小学生未満)
                              </td>
                              <td
                                style={{
                                  padding: "4px 0",
                                  textAlign: "right",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {plan.infantPrice.toLocaleString()}円
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>

                      {/* 評価 + 詳細ボタン */}
                      <div
                        className="flex items-center justify-between flex-wrap gap-2"
                      >
                        {/* 評価 */}
                        {plan.rating !== undefined && (
                          <div className="flex items-center gap-2">
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
                            padding: "10px 40px",
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
