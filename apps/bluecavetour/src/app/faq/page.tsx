import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { FaqContent } from "@repo/ui/faq-content";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { siteConfig, categoryNavItems, faqItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "よくある質問＆注意事項",
  description:
    "よくある質問 Q1.チェックアウト日にアクティビティに参加できますか？ もちろん可能です！チェ",
};

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "よくある質問＆注意事項",
            url: `${siteConfig.siteUrl}/faq`,
          },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={<FaqContent faqItems={faqItems} />}
      />
    </>
  );
}
