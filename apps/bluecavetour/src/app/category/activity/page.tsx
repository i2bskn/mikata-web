import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { plans } from "../../../lib/data/plans";
import { siteConfig, categoryNavItems } from "../../../lib/site-config";
import { Sidebar } from "../../../components/sidebar";

export const metadata: Metadata = {
  title: "アクティビティの種類から探す",
};

export default function ActivityCategoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "アクティビティの種類から探す",
            url: `${siteConfig.siteUrl}/category/activity`,
          },
        ]}
      />

      <div
        className="mx-auto"
        style={{ maxWidth: "1020px", padding: "0 10px" }}
      >
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          <div className="flex-1 min-w-0">
            {/* #1: fontSize=21.6px, #2: color=#212529, #4: marginBottom=0px */}
            <h1
              style={{
                fontSize: "21.6px",
                fontWeight: "600",
                color: "#212529",
                marginBottom: "0px",
              }}
            >
              アクティビティの種類から探す
            </h1>

            {/* #5: fontSize=16.8px, #6: color=#212529 */}
            <p
              style={{
                fontSize: "16.8px",
                color: "#212529",
                margin: "0px",
                marginBottom: "16px",
              }}
            >
              {plans.length}件/{plans.length}件中
            </p>

            {/* プラン一覧 - シンプルカード */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginBottom: "24px",
              }}
            >
              {plans.map((plan) => (
                <a
                  key={plan.slug}
                  href={`/plan/${plan.slug}`}
                  className="flex gap-4"
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid #e5e5e5",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                >
                  <img
                    src={plan.imageUrl}
                    alt={plan.name}
                    style={{
                      width: "100px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2
                      style={{
                        fontSize: "14.4px",
                        fontWeight: "600",
                        color: "#000",
                        lineHeight: "1.4",
                      }}
                    >
                      {plan.name}
                    </h2>
                  </div>
                </a>
              ))}
            </div>

            <p
              style={{
                fontSize: "16.8px",
                color: "#212529",
                margin: "0px",
                marginBottom: "32px",
              }}
            >
              {plans.length}件/{plans.length}件中
            </p>

            {/* 条件から探す: #10: fontSize=16px */}
            <div style={{ marginBottom: "40px" }}>
              <div
                className="flex items-center gap-2"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#212529",
                  marginBottom: "8px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                条件から探す
              </div>
              {[
                "スポットから探す",
                "見れるものから探す",
                "シーンから探す",
                "シーズンから探す",
                "時間帯から探す",
                "こだわり条件から探す",
              ].map((label) => (
                <div
                  key={label}
                  style={{
                    /* #8: fontWeight=700, #9: padding=10px 15px, #7: fontSize=16.8px */
                    padding: "10px 15px",
                    borderBottom: "1px solid #e5e5e5",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "16.8px",
                    fontWeight: "700",
                    color: "#212529",
                  }}
                >
                  <span>{label}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
