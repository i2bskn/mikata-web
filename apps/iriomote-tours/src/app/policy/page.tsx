import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { PolicyContent } from "@repo/ui/policy-content";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "利用規約",
  description: `第１条（規約の適用）本規約は、株式会社ShumMaKe以下「当社」といいます）が管理・運営するインターネットウェブサイト｢${siteConfig.siteName}｣...`,
};

export default function PolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "利用規約", url: `${siteConfig.siteUrl}/policy` },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={<PolicyContent siteName={siteConfig.siteName} />}
      />
    </>
  );
}
