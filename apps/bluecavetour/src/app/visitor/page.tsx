import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { VisitorContent } from "@repo/ui/visitor-content";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: `旅行専門家が作る予約サイト「${siteConfig.siteName}」とは`,
  description:
    "『旅行をもっと簡単に』私たちはエリア特化型の観光ポータルを運営することで、様々な旅行の不便の解消を目指します",
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

export default function VisitorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: `旅行専門家が作る予約サイト「${siteConfig.siteName}」とは`,
            url: `${siteConfig.siteUrl}/visitor`,
          },
        ]}
      />

      <div className="mx-auto" style={{ maxWidth: "1020px" }}>
        <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <div style={{ display: "flex" }}>
            <Sidebar categoryNavItems={categoryNavItems} />

            <div className="flex-1 min-w-0">
              <VisitorContent
                siteName={siteConfig.siteName}
                kvImageUrl="/images/visitor/kv.png"
                kvImageAlt="石垣島・青の洞窟専門 厳選ツアーがいっぱい！"
                introText="石垣島の人気スポット「青の洞窟」に特化した様々な情報や厳選したツアー・プランを掲載しております。"
                siteDescription="現地在住スタッフも多く、掲載しているツアーや体験の多くをスタッフ自身が実際に体験しています。その中でも「本当にいい」と感じたものだけを厳選して掲載しているため、安心してご利用いただけます。"
                reasons={reasons}
                islandDescription="八重山諸島の玄関口である石垣島。エメラルドグリーンの海と白砂のビーチ、豊かな自然と多様なアクティビティが楽しめます。周辺の離島へのアクセスも良好で、様々な体験ができるのが石垣島の魅力です。"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
