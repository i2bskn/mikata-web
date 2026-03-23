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
            {/* #1: fontSize=21.6px, #2: color=#212529, #3: marginBottom=0px */}
            <h1
              style={{
                fontSize: "21.6px",
                fontWeight: "600",
                color: "#212529",
                marginBottom: "0px",
              }}
            >
              特集 一覧
            </h1>

            {/* #4: fontSize=16.8px, #5: color=#212529 */}
            <p
              style={{
                fontSize: "16.8px",
                color: "#212529",
                margin: "0px",
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
                    /* #11: borderBottom=1px solid #e6e6e6, #12: padding=16px 10px */
                    padding: "16px 10px",
                    borderBottom: "1px solid #e6e6e6",
                    textDecoration: "none",
                    color: "#000",
                    display: "flex",
                  }}
                >
                  {/* #13: 126x71px */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                      width: "126px",
                      height: "71px",
                      objectFit: "cover",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* #6: fontSize=16.8px, #7: fontWeight=600, #8: color=#000 */}
                    <p
                      style={{
                        fontSize: "16.8px",
                        fontWeight: "600",
                        color: "#000",
                        lineHeight: "1.4",
                        marginBottom: "8px",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </p>
                    {/* #9: fontSize=14.4px, #10: color=#687279 */}
                    <div
                      style={{
                        fontSize: "14.4px",
                        color: "#687279",
                        marginTop: "4px",
                      }}
                    >
                      {item.date}
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
