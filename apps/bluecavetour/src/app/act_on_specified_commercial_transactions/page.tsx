import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { CommercialTransactionsContent } from "@repo/ui/commercial-transactions-content";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "特定商取引法に関する表記",
  description:
    "役務の内容 ユーザーと本サイトに掲載されている事業者間の体験型アクティビティサービス及びこれらに付帯するサービスの予約に関する取引の場を提供するサービス",
};

export default function ActOnSpecifiedCommercialTransactionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "特定商取引法に関する表記",
            url: `${siteConfig.siteUrl}/act_on_specified_commercial_transactions`,
          },
        ]}
      />

      <div className="mx-auto" style={{ maxWidth: "1020px" }}>
        <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <div style={{ display: "flex" }}>
            <Sidebar categoryNavItems={categoryNavItems} />
            <div className="flex-1 min-w-0">
              <CommercialTransactionsContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
