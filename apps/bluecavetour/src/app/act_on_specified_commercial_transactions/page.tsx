import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "特定商取引法に関する表記",
  description:
    "役務の内容 ユーザーと本サイトに掲載されている事業者間の体験型アクティビティサービス及びこれらに付帯するサービスの予約に関する取引の場を提供するサービス",
};

const h2Style = {
  fontSize: "21.6px",
  fontWeight: "600" as const,
  marginBottom: "12px",
  paddingBottom: "8px",
  borderBottom: "6px solid #1a9edb",
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

      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 10px" }}>
        {/* 2カラムレイアウト */}
        <div className="flex gap-5">
          <Sidebar categoryNavItems={categoryNavItems} />

          {/* メインコンテンツ */}
          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              特定商取引法に関する表記
            </h1>

            <div style={{ fontSize: "16.8px", lineHeight: "2", color: "#333" }}>
              <section style={{ marginBottom: "28px" }}>
                <h2 style={h2Style}>役務の内容</h2>
                <p>
                  ユーザーと本サイトに掲載されている事業者間の体験型アクティビティサービス及びこれらに付帯するサービスの予約に関する取引の場を提供するサービス
                </p>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h2 style={h2Style}>役務の対価（ユーザーの負担する費用）</h2>
                <p>
                  当社の提供する役務について費用負担はありません。アクティビティ参加費については、各プランページに表記されています。
                </p>
              </section>

              <p style={{ marginBottom: "16px" }}>（掲載事業者の負担する費用）</p>
              <ul style={{ paddingLeft: "20px", listStyleType: "disc", marginBottom: "28px" }}>
                <li><strong>アクティビティサービス提供</strong><br />所定のサービス利用料がかかります。</li>
                <li><strong>振込申請</strong><br />振込手数料は当社が負担致します。</li>
              </ul>

              <section style={{ marginBottom: "28px" }}>
                <h2 style={h2Style}>支払方法および支払い時期</h2>
                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                  <li><strong>支払い方法</strong>
                    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                      <li>クレジットカード</li>
                      <li>現地決済</li>
                    </ul>
                  </li>
                  <li><strong>支払い時期</strong>
                    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                      <li>クレジットカード：ツアー参加後、またはその日の翌日から3日以内</li>
                      <li>現地決済：ツアー参加時、レンタカーの借り受け時</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h2 style={h2Style}>役務の提供時期</h2>
                <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
                  <li><strong>予約</strong><br />予約の都度</li>
                  <li>
                    <strong>アクティビティサービス提供</strong><br />アクティビティ登録以降、予約の都度、掲載事業者により提供されます。
                  </li>
                </ol>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h2 style={h2Style}>キャンセル特約・瑕疵担保責任等</h2>
                <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
                  <li><strong>予約ごとのキャンセル</strong><br />キャンセル返金については各プランページをご覧ください。</li>
                  <li><strong>役務の瑕疵等に関する責任</strong><br />利用規約に基づきます。</li>
                </ol>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h2 style={h2Style}>事業者名</h2>
                <p>株式会社ShumMaKe</p>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h2 style={h2Style}>所在地</h2>
                <p>〒143-0025 東京都大田区南馬込4丁目26ー18 馬込ガーデンヒルアネックス101号室</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
