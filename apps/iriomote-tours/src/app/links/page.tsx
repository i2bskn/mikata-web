import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { LinksContent } from "@repo/ui/links-content";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "リンク集・掲載事業者一覧",
  description:
    "西表島の自然を120%楽しめる自然ツアーやアクティビティの情報、素敵なホテルなど西表島の魅力を紹介しています。",
};

export default function LinksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "リンク集・掲載事業者一覧", url: `${siteConfig.siteUrl}/links` },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={<LinksContent />}
      />
    </>
  );
}
