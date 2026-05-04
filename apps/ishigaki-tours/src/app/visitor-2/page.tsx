import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { VisitorContent } from "@repo/ui/visitor-content";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import {
  siteConfig,
  categoryNavItems,
  themeColor,
  visitorMetaDescription,
  visitorKvImageUrl,
  visitorKvImageAlt,
  visitorIntroText,
  visitorSiteDescription,
  visitorReasons,
  visitorIslandDescription,
  visitorTravelTips,
} from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: `旅行専門家が作る予約サイト「${siteConfig.siteName}」とは`,
  description: visitorMetaDescription,
};

export default function VisitorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: `旅行専門家が作る予約サイト「${siteConfig.siteName}」とは`,
            url: `${siteConfig.siteUrl}/visitor-2`,
          },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <VisitorContent
            siteName={siteConfig.siteName}
            kvImageUrl={visitorKvImageUrl}
            kvImageAlt={visitorKvImageAlt}
            introText={visitorIntroText}
            siteDescription={visitorSiteDescription}
            reasons={visitorReasons}
            themeColor={themeColor}
            islandDescription={visitorIslandDescription}
            travelTips={visitorTravelTips}
            accordion
          />
        }
      />
    </>
  );
}
