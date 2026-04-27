import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { SelectContactContent } from "@repo/ui/select-contact-content";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import {
  siteConfig,
  categoryNavItems,
  themeColor,
  contactCategories,
  agencyContactHref,
} from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "お問い合わせ内容を選択してください 既にご予約されたお客様",
};

export default function SelectContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "お問い合わせ",
            url: `${siteConfig.siteUrl}/select-contact`,
          },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <SelectContactContent
            items={contactCategories}
            themeColor={themeColor}
            agencyContactHref={agencyContactHref}
          />
        }
      />
    </>
  );
}
