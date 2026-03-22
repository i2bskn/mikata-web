import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "特集",
};

const pickupItems = [
  {
    title: "【各便40席限定】簡単！便利！離島フェリーチケットの予約＆詳細はこちら",
    imageUrl: "/images/sidebar/ferry-banner.webp",
    href: "https://ishigaki-tours.com/ferry/",
    external: true,
    date: "2025年9月28日",
  },
  {
    title: "一生モノの絶景体験！石垣島『青の洞窟』で神秘のシュノーケリングツアー",
    imageUrl: "/images/plans/bluecave304.webp",
    href: "/plan?category=bluecave",
    external: false,
    date: "2025年2月19日",
  },
  {
    title: "【石垣空港送迎付き】人気の石垣島レンタカー特集！",
    imageUrl: "/images/plans/kayak306.webp",
    href: "https://rentacar.ishigaki-tours.com/",
    external: true,
    date: "2025年2月19日",
  },
  {
    title: "【ツアーズ厳選】安心＆満足度No.1のおすすめプラン特集！",
    imageUrl: "/images/sidebar/premium-plan-banner.png",
    href: "/campaign/premium-plan.html",
    external: false,
    date: "2025年2月18日",
  },
  {
    title: "【写真無料サービス】絶景と感動の瞬間を無料写真でプレゼント☆",
    imageUrl: "/images/plans/bluecave305.webp",
    href: "/scene-time/freetourphotos.html",
    external: false,
    date: "2025年2月18日",
  },
  {
    title: "【青の洞窟1日セットプラン】シュノーケリングと大自然を1日で巡る充実ツアー特集！",
    imageUrl: "/images/plans/setplan362.webp",
    href: "/scene-time/setplan.html",
    external: false,
    date: "2025年2月17日",
  },
  {
    title: "【前日・当日予約OK！】急な旅行でも気軽に参加できる青の洞窟ツアー",
    imageUrl: "/images/plans/setplan349.webp",
    href: "/scene-time/same_day_booking.html",
    external: false,
    date: "2025年2月16日",
  },
];

export default function PickupItemPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "特集", url: `${siteConfig.siteUrl}/pickup_item` },
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
                marginBottom: "8px",
              }}
            >
              特集 一覧
            </h1>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                marginBottom: "16px",
              }}
            >
              1〜{pickupItems.length}件/{pickupItems.length}件中
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginBottom: "40px",
              }}
            >
              {pickupItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex gap-4"
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid #e5e5e5",
                    textDecoration: "none",
                    color: "#333",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
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
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#333",
                        lineHeight: "1.5",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#999",
                      }}
                    >
                      {item.date}
                    </p>
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
