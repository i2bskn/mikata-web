import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { AdministratorContent } from "@repo/ui/administrator-content";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "会社名 株式会社ShumMaKe 住所 〒143-0025 東京都大田区南馬込4丁目26ー18馬込ガーデンヒルアネックス101号室",
};

const companyInfo = [
  { label: "会社名", value: "株式会社ShumMaKe" },
  { label: "住所", value: "〒143-0025 東京都大田区南馬込4丁目26ー18馬込ガーデンヒルアネックス101号室" },
  { label: "代表者", value: "小池 誠" },
  { label: "営業時間", value: "8:00〜18:00" },
  { label: "ウェブサイト", value: "https://www.shummake.com/", isLink: true },
  { label: "事業内容", value: "地域特化型アクティビティ予約・観光ポータルサイトの企画・運営、アクティビティ予約システムの開発・提供" },
  { label: "加盟団体", value: "全国旅行業協会（ANTA）" },
  { label: "旅行業登録番号", value: "沖縄県知事登録旅行業 第3-471号" },
  { label: "取引銀行", value: "みずほ銀行、住信SBI銀行、琉球銀行、他" },
];

const partnerImages = [
  { src: "/images/partner/anta.webp", alt: "全国旅行業協会" },
  { src: "/images/partner/his.webp", alt: "HIS" },
  { src: "/images/partner/sdgs.webp", alt: "おきなわSDGsパートナー" },
  { src: "/images/partner/umi-nihon.webp", alt: "海と日本プロジェクト" },
];

const reasons = [
  { title: "会員登録不要で簡単予約", text: "石垣島シュノーケリングツアーズでは面倒な会員登録が不要。必要情報を入力して1分程度で予約が完結します。" },
  { title: "24時間WEB予約受付", text: "石垣島シュノーケリングツアーズは24時間いつでもWEBから簡単にご予約いただけます。" },
  { title: "石垣島シュノーケリングに特化した情報を集約", text: "石垣島シュノーケリングツアーズは石垣島シュノーケリングに特化した様々な情報を掲載しております。おすすめのアクティビティ、観光スポット、グルメなど幅広い情報を集約しています。" },
  { title: "厳選されたプランのみ掲載", text: "価格の安さや品ぞろえの豊富さだけではなく、高品質プランの提案を心がけています。" },
  { title: "プラン情報のわかりやすさ", text: "各プランの魅力・情報が最大限に伝わるように「わかりやすさ」「明瞭さ」を意識しております。" },
  { title: "直前予約も可能", text: "前日等の直前予約にも対応しております。当日予約できるプランもあります。" },
  { title: "安心の実績", text: "現在、全15以上の地域でアクティビティ予約サイト「ツアーズ」を展開。累計45万人以上のお客様からご予約をいただいております。＊2025/2/1時点" },
  { title: "旅行専門家が運営", text: "旅行業を取得した信頼ある旅行専門家が運営。現地在住スタッフも多く、実際に体験した中から厳選して掲載。◼︎旅行業登録番号：沖縄県知事登録旅行業 第3-471号" },
];

export default function AdministratorDataPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "運営者情報", url: `${siteConfig.siteUrl}/administratordata` },
        ]}
      />

      <div className="mx-auto" style={{ maxWidth: "1020px" }}>
        <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <div style={{ display: "flex" }}>
            <Sidebar categoryNavItems={categoryNavItems} />
            <div className="flex-1 min-w-0">
              <AdministratorContent
                kvImageUrl="/images/administrator/kv.webp"
                companyInfo={companyInfo}
                partnerImages={partnerImages}
                reasons={reasons}
                themeColor="#007CDB"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
