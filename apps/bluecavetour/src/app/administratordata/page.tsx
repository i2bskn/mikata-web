import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "会社名 株式会社ShumMaKe 住所 〒143-0025 東京都大田区南馬込4丁目26ー18馬込ガーデンヒルアネックス101号室",
};

const h3Style = {
  fontSize: "19.4px",
  fontWeight: "600" as const,
  marginBottom: "19.4px",
  paddingLeft: "19.4px",
  paddingTop: "3px",
  paddingBottom: "3px",
  lineHeight: "1.4",
  borderLeft: "4px solid #999",
};

const h2Style = {
  fontSize: "21.6px",
  fontWeight: "600" as const,
  color: "#666",
  marginBottom: "12px",
  paddingBottom: "4px",
  borderBottom: "6px solid #1a9edb",
};

const companyInfo = [
  { label: "会社名", value: "株式会社ShumMaKe" },
  {
    label: "住所",
    value:
      "〒143-0025 東京都大田区南馬込4丁目26ー18馬込ガーデンヒルアネックス101号室",
  },
  { label: "代表者", value: "小池 誠" },
  { label: "営業時間", value: "8:00〜18:00" },
  {
    label: "ウェブサイト",
    value: "https://www.shummake.com/",
    isLink: true,
  },
  {
    label: "事業内容",
    value:
      "地域特化型アクティビティ予約・観光ポータルサイトの企画・運営、アクティビティ予約システムの開発・提供",
  },
  { label: "加盟団体", value: "全国旅行業協会（ANTA）" },
  { label: "旅行業登録番号", value: "沖縄県知事登録旅行業 第3-471号" },
  { label: "取引銀行", value: "みずほ銀行、住信SBI銀行、琉球銀行、他" },
];

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
    text: "青の洞窟のツアーに特化したアクティビティ予約サイトの中で最大規模のプラン数を取り扱っております。※2025年2月時点 当社調べ",
  },
  {
    title: "厳選されたプランのみ掲載",
    text: "価格の安さや品ぞろえの豊富さだけではなく、高品質プランの提案を心がけています。",
  },
  {
    title: "プラン情報のわかりやすさ",
    text: "各プランの魅力・情報が最大限に伝わるように「わかりやすさ」「明瞭さ」を意識しております。",
  },
  {
    title: "直前予約も可能",
    text: "前日等の直前予約にも対応しております。当日予約できるプランもあります。",
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

export default function AdministratorDataPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "運営者情報",
            url: `${siteConfig.siteUrl}/administratordata`,
          },
        ]}
      />

      <div className="mx-auto" style={{ maxWidth: "1020px" }}>
      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
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
              運営者情報
            </h1>

            <div className="page-content" style={{ fontSize: "16.8px", lineHeight: "2", color: "#212529" }}>
              {/* 会社紹介画像 */}
              <div style={{ marginBottom: "24px" }}>
                <img
                  src="https://phantomislandtour.ishigaki-tours.com/wp-content/uploads/2023/08/2c78c26e6ea90c7c1c836cb611188775-640x268.jpg"
                  alt="株式会社ShumMaKe"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* 運営者情報テーブル */}
              <section style={{ marginBottom: "16.8px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {companyInfo.map((item) => (
                      <tr
                        key={item.label}
                        style={{ borderBottom: "1px solid #e5e5e5" }}
                      >
                        <th
                          style={{
                            padding: "12px 16px",
                            textAlign: "left",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                            verticalAlign: "top",
                          }}
                        >
                          {item.label}
                        </th>
                        <td style={{ padding: "12px 16px" }}>
                          {item.isLink ? (
                            <a
                              href={item.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#1a9edb" }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              {/* 数多くの団体や公的機関との連携 */}
              <section style={{ marginBottom: "16.8px" }}>
                <h3 style={h3Style}>数多くの団体や公的機関との連携</h3>
                <div className="flex flex-wrap gap-4" style={{ marginTop: "12px" }}>
                  <img src="https://bluecavetour.ishigaki-tours.com/wp-content/uploads/2025/05/cb7f76683c0da65c1bfd414e10478798-300x73.webp" alt="全国旅行業協会" style={{ width: "150px", height: "auto" }} />
                  <img src="https://bluecavetour.ishigaki-tours.com/wp-content/uploads/2025/05/077223feaefdc73830874f00a6da460d-300x73.webp" alt="HIS" style={{ width: "150px", height: "auto" }} />
                  <img src="https://bluecavetour.ishigaki-tours.com/wp-content/uploads/2025/05/535e91c2fc367431b736295a0696cb89-300x73.webp" alt="おきなわSDGsパートナー" style={{ width: "150px", height: "auto" }} />
                  <img src="https://bluecavetour.ishigaki-tours.com/wp-content/uploads/2025/05/83dbd9814d393d9de6c940def08957f0-300x73.webp" alt="海と日本プロジェクト" style={{ width: "150px", height: "auto" }} />
                </div>
              </section>

              {/* 旅行をもっと簡単に */}
              <section style={{ marginBottom: "16.8px" }}>
                <h3 style={h3Style}>旅行をもっと簡単に</h3>
                <p>
                  インターネットの発達によって情報が多くのメディアやサービスから発信されるようになり、旅行のための情報は点在しています。ホテルはこのサービス、レンタカーはこのサイト、レストランはこのアプリ...私たちは現地アクティビティの予約を中心に、エリア特化型の観光ポータルを運営することで、そんな旅行の不便の解消を目指します。現地を知り尽くしたスタッフが旅行の計画のお手伝い〜当日現地でのお困りごとの解決まで、ワンストップで提供します。
                </p>
              </section>

              {/* 地方をもっと自由に */}
              <section style={{ marginBottom: "16.8px" }}>
                <h3 style={h3Style}>地方をもっと自由に</h3>
                <p>
                  世間ではイノベーションや働き方改革などが叫ばれていますが、地方はまだまだ都心部に比べて選択肢が限られています。私たちは現地から行きた情報・魅力を発信する地方特化型の観光ポータル運営を通じて、現地に新しいカタチの事業や雇用を生み出し、教育の場（インターン）の提供や、複業、地方と都心の２拠点生活などの新しい選択肢を提供します。
                </p>
              </section>

              {/* ツアーズが選ばれる理由 */}
              <section style={{ marginBottom: "16.8px" }}>
                <h2 style={h2Style}>ツアーズが選ばれる理由</h2>
                <ol
                  style={{
                    paddingLeft: "40px",
                    listStyleType: "decimal",
                    lineHeight: "1.6",
                    marginBottom: "12px",
                  }}
                >
                  {reasons.map((reason) => (
                    <li
                      key={reason.title}
                      style={{ marginBottom: "16px" }}
                    >
                      <strong>{reason.title}</strong>
                      <br />
                      {reason.text}
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
