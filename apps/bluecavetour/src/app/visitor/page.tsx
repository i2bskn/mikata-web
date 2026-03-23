import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "旅行専門家が作る予約サイト「石垣島青の洞窟ツアーズ」とは",
  description:
    "『旅行をもっと簡単に』私たちはエリア特化型の観光ポータルを運営することで、様々な旅行の不便の解消を目指します",
};

const h3Style = {
  fontSize: "19.4px",
  fontWeight: "600" as const,
  color: "#666",
  marginBottom: "19.4px",
  paddingLeft: "19.4px",
  borderLeft: "4px solid #999",
  paddingBottom: "3px",
  lineHeight: "1.4",
  borderBottom: "3px solid #eee",
};

const h2Style = {
  fontSize: "21.6px",
  fontWeight: "600" as const,
  color: "#666",
  marginBottom: "12px",
  paddingBottom: "4px",
  borderBottom: "6px solid #1a9edb",
};

const reasons = [
  {
    title: "会員登録不要で簡単予約",
    text: "石垣島青の洞窟ツアーズでは面倒な会員登録が不要。必要情報を入力して1分程度で予約が完結します。",
  },
  {
    title: "24時間WEB予約受付",
    text: "石垣島青の洞窟ツアーズは24時間いつでもWEBから簡単にご予約いただけます。",
  },
  {
    title: "石垣島青の洞窟ツアー最大規模のプラン取扱数",
    text: "青の洞窟のツアーに特化したアクティビティ予約サイトの中で最大規模のプラン数を取り扱っております。定番のプランからニッチなコンテンツまで幅広いジャンルを取り揃えています。※2025年2月時点 当社調べ",
  },
  {
    title: "厳選されたプランのみ掲載",
    text: "価格の安さや品ぞろえの豊富さだけではなく、貴重なご旅行を心の底から楽しんでもらうために高品質プランの提案を心がけています。",
  },
  {
    title: "プラン情報のわかりやすさ",
    text: "各プランの魅力・情報が最大限に伝わるように「わかりやすさ」「明瞭さ」を意識しております。口コミから実際に参加したお客様の声を確認することも可能です。",
  },
  {
    title: "直前予約も可能",
    text: "前日等の直前予約にも対応しております。当日予約できるプランもありますので、ぜひチェックしてください！",
  },
  {
    title: "安心の実績",
    text: "現在、全15以上の地域でアクティビティ予約サイト「ツアーズ」を展開。累計45万人以上のお客様からご予約をいただいております。＊2025/2/1時点",
  },
  {
    title: "旅行専門家が運営",
    text: "旅行業を取得した信頼ある旅行専門家が運営。現地在住スタッフも多く、実際に体験した中から厳選して掲載。◼︎旅行業登録番号：沖縄県知事登録旅行業 第3-471号",
  },
];

const steps = [
  "ツアーを探す",
  "予約プランの申し込み",
  "予約確定",
  "ツアーに参加",
];

export default function VisitorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "旅行専門家が作る予約サイト「石垣島青の洞窟ツアーズ」とは",
            url: `${siteConfig.siteUrl}/visitor`,
          },
        ]}
      />

      <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "0 5px" }}>
        {/* 2カラムレイアウト */}
        <div style={{ display: "flex" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          {/* メインコンテンツ */}
          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#212529",
                marginTop: "10px",
                lineHeight: "1.4",
                marginBottom: "12px",
              }}
            >
              旅行専門家が作る予約サイト「石垣島青の洞窟ツアーズ」とは
            </h1>

            <div className="page-content" style={{ fontSize: "16.8px", lineHeight: "2", color: "#212529" }}>
              {/* KV画像 */}
              <img
                src="https://bluecavetour.ishigaki-tours.com/wp-content/uploads/2025/01/e6a6c5efaf4971f575d62679c2bdbf9e.png"
                alt="石垣島・青の洞窟専門 厳選ツアーがいっぱい！"
                style={{ width: "100%", borderRadius: "4px", marginBottom: "24px" }}
              />

              {/* メインセクション */}
              <section style={{ marginBottom: "16.8px" }}>
                <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>
                  「旅行をもっと簡単に」
                </p>
                <p style={{ marginBottom: "12px" }}>
                  私たちは<strong>エリア特化型</strong>の観光ポータルを運営することで、様々な<strong>旅行の不便の解消</strong>を目指します。
                </p>
                <p style={{ marginBottom: "12px" }}>
                  石垣島の人気スポット「青の洞窟」に特化した様々な情報や厳選したツアー・プランを掲載しております。
                </p>
                <p style={{ marginBottom: "12px" }}>
                  私たちのサイトは、<strong>旅行業</strong>を取得した信頼ある<strong>旅行専門家</strong>が運営しています。
                </p>
                <p>
                  現地在住スタッフも多く、掲載しているツアーや体験の多くをスタッフ自身が実際に体験しています。その中でも「本当にいい」と感じたものだけを厳選して掲載しているため、安心してご利用いただけます。
                </p>
              </section>

              {/* 選ばれる理由セクション */}
              <section style={{ marginBottom: "16.8px" }}>
                <h3 style={h3Style}>ツアーズが選ばれる理由</h3>
                <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {reasons.map((reason, index) => (
                    <li key={index} style={{ marginBottom: "20px" }}>
                      <p style={{ fontWeight: "bold", marginBottom: "4px" }}>
                        {index + 1}. {reason.title}
                      </p>
                      <p>{reason.text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 予約から参加までの流れ */}
              <section style={{ marginBottom: "16.8px" }}>
                <h2 style={h2Style}>予約から参加までの流れ</h2>
                <div
                  className="grid grid-cols-2 lg:grid-cols-4"
                  style={{ gap: "12px", textAlign: "center" }}
                >
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "16px 8px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "6px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#1a9edb",
                          marginBottom: "8px",
                        }}
                      >
                        {index + 1}
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: "600" }}>
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 石垣島の魅力 */}
              <section style={{ marginBottom: "16.8px" }}>
                <h3 style={h3Style}>石垣島の魅力とは</h3>
                <p>
                  八重山諸島の玄関口である石垣島。エメラルドグリーンの海と白砂のビーチ、豊かな自然と多様なアクティビティが楽しめます。周辺の離島へのアクセスも良好で、様々な体験ができるのが石垣島の魅力です。
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
