import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { PolicyContent } from "@repo/ui/policy-content";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "第１条（規約の適用）本規約は、株式会社ShumMaKe以下「当社」といいます）が管理・運営するインターネットウェブサイト｢石垣島 青の洞窟ツアーズ｣...",
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

      <div className="mx-auto" style={{ maxWidth: "1020px" }}>
        <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <div style={{ display: "flex" }}>
            <Sidebar categoryNavItems={categoryNavItems} />
            <div className="flex-1 min-w-0">
              <PolicyContent siteName={siteConfig.siteName} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
