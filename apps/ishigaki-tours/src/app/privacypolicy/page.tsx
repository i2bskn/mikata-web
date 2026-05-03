import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { PrivacyPolicyContent } from "@repo/ui/privacy-policy-content";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "個人情報保護方針",
  description:
    "1. 個人情報の定義 当社では氏名・住所・電話番号（携帯電話/PHS含む）・メールアドレス・性別、生年月日等の「特定の個人を識別できる情報すべてを個人情報と定義」している。",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "個人情報保護方針", url: `${siteConfig.siteUrl}/privacypolicy` },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={<PrivacyPolicyContent />}
      />
    </>
  );
}
