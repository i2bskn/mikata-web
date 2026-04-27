import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { LinksContent } from "@repo/ui/links-content";
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

      <div className="mx-auto" style={{ maxWidth: "1020px" }}>
        <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Sidebar categoryNavItems={categoryNavItems} />
            <div className="flex-1 min-w-0">
              <LinksContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
