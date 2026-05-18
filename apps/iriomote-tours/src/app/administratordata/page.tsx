import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { AdministratorContent } from "@repo/ui/administrator-content";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import {
  siteConfig,
  categoryNavItems,
  themeColor,
  administratorKvImageUrl,
  administratorCompanyInfo,
  administratorPartnerImages,
  administratorReasons,
} from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "会社名 株式会社ShumMaKe 住所 〒143-0025 東京都大田区南馬込4丁目26ー18馬込ガーデンヒルアネックス101号室",
};

export default function AdministratorDataPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "運営者情報", url: `${siteConfig.siteUrl}/administratordata` },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <AdministratorContent
            kvImageUrl={administratorKvImageUrl}
            companyInfo={administratorCompanyInfo}
            partnerImages={administratorPartnerImages}
            reasons={administratorReasons}
            themeColor={themeColor}
          />
        }
      />
    </>
  );
}
