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
            {/* #1: color=#212529, #2: fontSize=30px, #3: fontWeight=600, #4: marginBottom=6px */}
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#212529",
                marginBottom: "6px",
              }}
            >
              人気ランキング
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
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
                    border: "1px solid #e6e6e6",
                    borderRadius: "5px",
                    textDecoration: "none",
                    color: "#000",
                    overflow: "hidden",
                  }}
                >
                  <div className="flex flex-row">
                    {/* 画像エリア: thumbnail w=350 */}
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
                      {/* ランキングバッジ: 1=#e3af3a, 2=#adadad, 3=#aa845e, 4+=#34e5d3 */}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          backgroundColor: [
                            "#e3af3a",
                            "#adadad",
                            "#aa845e",
                          ][index] ?? "#34e5d3",
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
                      {/* Premium Planバッジ - 既存サイトはPNG画像 */}
                      <img
                        src="https://bluecavetour.ishigaki-tours.com/wp-content/themes/tours-shisa/assets/img/premium-tag.png"
                        alt="Premium plan"
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "10px",
                          width: "80px",
                          height: "auto",
                        }}
                      />
                      {/* カルーセル矢印: w:28, h:64, bg:rgba(255,255,255,0.48) */}
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

                    {/* コンテンツエリア: summary padding=16px 24px */}
                    <div style={{ flex: 1, padding: "16px 24px", minWidth: 0 }}>
                      {/* #5: fontSize=14.4px, #6: fontWeight=600, #7: color=#000 */}
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
                        {/* 大人価格行 */}
                        <p style={{ margin: 0, lineHeight: "21.6px" }}>
                          {/* #12: fontSize=12px, #13: fontWeight=600 */}
                          <span style={{ fontSize: "12px", fontWeight: "600", color: "#000" }}>
                            大人(中学生以上)
                          </span>
                          {"  "}
                          {plan.originalPrice && (
                            <>
                              <s style={{ color: "#000", fontSize: "9.6px" }}>
                                <small>{plan.originalPrice.toLocaleString()}円</small>
                              </s>
                              {" → "}
                            </>
                          )}
                          {/* #8: bg=#ec1818, #9: padding=0px 5.4px, #10: borderRadius=5px */}
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "900",
                              color: "#fff",
                              backgroundColor: "#ec1818",
                              borderRadius: "5px",
                              padding: "0px 5.4px",
                            }}
                          >
                            <strong>{plan.price.toLocaleString()}</strong>
                            <span>円</span>
                          </span>
                        </p>

                        {/* 小人価格行 */}
                        {plan.childPrice !== undefined && (
                          <p style={{ margin: 0, lineHeight: "21.6px" }}>
                            <span style={{ fontSize: "12px", fontWeight: "600", color: "#000" }}>
                              小人(中学生未満)
                            </span>
                            {" "}
                            <span style={{ fontSize: "18px", fontWeight: "600", color: "#000" }}>
                              {plan.childPrice.toLocaleString()}
                            </span>
                            <span style={{ fontSize: "18px", color: "#000" }}>円</span>
                          </p>
                        )}

                        {/* 幼児価格行 */}
                        {plan.infantPrice !== undefined && (
                          <p style={{ margin: 0, lineHeight: "21.6px" }}>
                            <span style={{ fontSize: "12px", fontWeight: "600", color: "#000" }}>
                              幼児(小学生未満)
                            </span>
                            {"  "}
                            <span style={{ fontSize: "18px", fontWeight: "600", color: "#000" }}>
                              {plan.infantPrice.toLocaleString()}
                            </span>
                            <span style={{ fontSize: "18px", color: "#000" }}>円</span>
                          </p>
                        )}
                      </div>

                      {/* 評価 + 詳細ボタン */}
                      <div
                        className="flex items-center justify-between flex-wrap gap-2"
                      >
                        {/* 評価: #21: fontSize=12px, #22: color=#000 */}
                        {plan.rating !== undefined && (
                          <div className="flex items-center gap-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  width="16"
                                  height="16"
                                  viewBox="0 0 20 20"
                                  fill={
                                    star <= Math.round(plan.rating ?? 0)
                                      ? "#fbc110"
                                      : "#ddd"
                                  }
                                >
                                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.92 5.34L10 13.27l-4.78 2.51.92-5.34L2.27 6.67l5.34-.78z" />
                                </svg>
                              ))}
                            </div>
                            {plan.reviewCount !== undefined && (
                              <span
                                style={{ fontSize: "12px", color: "#000" }}
                              >
                                ({plan.reviewCount}件)
                              </span>
                            )}
                          </div>
                        )}

                        {/* #17: bg=#1a9edb, #18: padding=8px 16px, #19: borderRadius=5px, #20: width=210px */}
                        <div
                          className="flex items-center justify-center"
                          style={{
                            width: "210px",
                            padding: "8px 16px",
                            backgroundColor: "#1a9edb",
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
          </div>
        </div>
      </div>
    </>
  );
}
