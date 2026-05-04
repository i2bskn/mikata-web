import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { RankingList } from "@repo/ui/ranking-list";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { plans, getPopularPlans } from "../../lib/data/plans";
import {
  siteConfig,
  categoryNavItems,
  themeColor,
  rankingPremiumBadgeUrl,
} from "../../lib/site-config";
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

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <>
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
              accentColor={themeColor}
              premiumBadgeUrl={rankingPremiumBadgeUrl}
              premiumBadgeMode="per-plan"
            />
          </>
        }
      />
    </>
  );
}
