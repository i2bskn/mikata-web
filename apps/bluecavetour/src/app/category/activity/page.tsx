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
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "16px",
              }}
            >
              アクティビティの種類から探す
            </h1>

            <p
              style={{
                fontSize: "14px",
                color: "#333",
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
                    color: "#333",
                  }}
                >
                  <img
                    src={plan.imageUrl}
                    alt={plan.name}
                    style={{
                      width: "120px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#333",
                        lineHeight: "1.5",
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
                fontSize: "14px",
                color: "#333",
                marginBottom: "32px",
              }}
            >
              {plans.length}件/{plans.length}件中
            </p>

            {/* 条件から探す */}
            <div style={{ marginBottom: "40px" }}>
              <h2
                className="flex items-center gap-2"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "16px",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                条件から探す
              </h2>
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
                    padding: "14px 0",
                    borderBottom: "1px solid #e5e5e5",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333",
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
