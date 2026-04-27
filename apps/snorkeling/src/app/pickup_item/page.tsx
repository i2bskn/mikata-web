import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { PickupList } from "@repo/ui/pickup-list";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "特集",
};

const pickupItems = [
  {
    title: "【各便40席限定】簡単！便利！離島フェリーチケットの予約＆詳細はこちら",
    imageUrl: "/images/pickup/ferry.jpg",
    href: "https://ishigaki-tours.com/tours-ferry",
    external: true,
    date: "2025年5月26日",
  },
  {
    title: "【石垣島発着】西表島ツアー（フェリーチケット付き）",
    imageUrl: "/images/pickup/iriomote-ferry.png",
    href: "/uncategorized/setplan-activity-ferry.html",
    date: "2025年5月26日",
  },
  {
    title: "【送迎付き】石垣島シュノーケリングツアーで 手ぶら＆ラクラク参加！",
    imageUrl: "/images/pickup/pickup-tour.jpg",
    href: "/scene-time/pickup-tour.html",
    date: "2025年5月26日",
  },
  {
    title: "【ウミガメシュノーケリングツアー】石垣島の透明度抜群の海で、ウミガメと一緒に泳げる！",
    imageUrl: "/images/pickup/seaturtles.webp",
    href: "/scene-time/seaturtles.html",
    date: "2025年5月25日",
  },
  {
    title: "【幻の島（浜の島）シュノーケリングツアー】人気の無人島でシュノーケル＆海遊びを満喫！",
    imageUrl: "/images/pickup/maboroshi.webp",
    href: "/uncategorized/hama-island.html",
    date: "2025年5月24日",
  },
  {
    title: "【ツアーズ厳選】安心＆満足度No.1のおすすめプラン特集！",
    imageUrl: "/images/pickup/premium.webp",
    href: "/campaign/premium-plan.html",
    date: "2025年5月24日",
  },
  {
    title: "【写真無料サービス】絶景と感動の瞬間を無料写真でプレゼント☆",
    imageUrl: "/images/pickup/freetourphotos.webp",
    href: "/scene-time/freetourphotos.html",
    date: "2025年5月24日",
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
            <PickupList items={pickupItems} />
          </div>
        </div>
      </div>
    </>
  );
}
