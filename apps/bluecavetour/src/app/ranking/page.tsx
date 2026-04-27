import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { RankingList } from "@repo/ui/ranking-list";
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
                fontSize: "30px",
                fontWeight: "600",
                color: "#212529",
                marginBottom: "6px",
              }}
            >
              人気ランキング
            </h1>

            <RankingList
              plans={rankedPlans}
              accentColor="#1a9edb"
              premiumBadgeUrl="https://bluecavetour.ishigaki-tours.com/wp-content/themes/tours-shisa/assets/img/premium-tag.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
