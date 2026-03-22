import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "リンク集・掲載事業者一覧",
  description:
    "西表島の自然を120%楽しめる自然ツアーやアクティビティの情報、素敵なホテルなど西表島の魅力を紹介しています。",
};

const linkItems = [
  {
    name: "西表島ツアーズ",
    href: "https://iriomote-tour.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/c6e4496469204bc6fff757fd1a3518ad-640x160.png",
    description: "西表島の自然を120%楽しめる自然ツアーやアクティビティの情報、素敵なホテルなど西表島の魅力を紹介しています。ウェブサイトからそのままツアー予約もできて、困ったことがあったら西表島に詳しいスタッフが旅行計画のサポートまでしてくれる西表島最大のツアー予約サイトです。",
  },
  {
    name: "石垣島ツアーズ",
    href: "https://ishigaki-tours.com/",
    imgSrc: "https://kohama-tour.com/wp-content/uploads/2021/05/ishigaki_logo-300x57.png",
    description: "石垣島ツアーズは、石垣島の大自然を満喫するアクティビティ情報を紹介しています。ウェブサイトからツアーの予約、ご相談、団体様には旅行計画のサポートまでしている石垣島最大のツアー予約サイト。",
  },
  {
    name: "石垣島シュノーケリングツアーズ",
    href: "https://snorkeling.ishigaki-tours.com/",
    imgSrc: "https://snorkeling.ishigaki-tours.com/wp-content/uploads/2025/04/cropped-logo.png",
    description: "石垣島の美しい海を満喫できるシュノーケリングツアー専門サイト。ウミガメと泳げるスポットやサンゴ礁が広がるエリアなど、透明度抜群の絶景ポイントを厳選してご紹介。初心者から上級者まで満足できる多彩なツアーをご用意しています。",
  },
  {
    name: "小浜島ツアーズ",
    href: "https://kohama-tour.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2021/05/kohama-tour-logo-1.png",
    description: "日本で唯一の小浜島専門サイト。小浜島を満喫できるツアーやアクティビティ、現地の様子などの情報を発信しています。",
  },
  {
    name: "幻の島ツアーズ",
    href: "https://phantomislandtour.ishigaki-tours.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/logo-1.png",
    description: "石垣島・小浜島から行ける絶景の無人島「幻の島」専門ツアーサイト。透明度抜群の海でシュノーケリングやクルージングを楽しめるツアーを多数掲載。干潮時にだけ現れる、まさに幻の島で特別なひとときを。",
  },
  {
    name: "与那国島ツアーズ",
    href: "https://yonagunitour.world-tours.jp/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/cropped-logo-1.png",
    description: "日本最西端の与那国島を満喫できるアクティビティ予約サイト。神秘の海底遺跡ダイビングや日本で唯一のヨナグニウマとのふれあい体験など、与那国ならではのツアーが満載！",
  },
  {
    name: "宮古島ツアーズ",
    href: "https://miyako-tour.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2021/05/miyako-tour-logo.png",
    description: "宮古島ツアーズは宮古諸島エリア（宮古島・伊良部島）のツアー＆アクティビティの予約サイト！アクティビティ予約以外にもレンタカーやレストラン、オススメのホテル情報が充実！\n\"宮古島旅行のすべてが揃う\"サービスです♪",
  },
  {
    name: "宮古島シュノーケリングツアーズ",
    href: "https://snorkeling.miyako-tour.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/logo-1-1-e1742192421633-640x193.png",
    description: "宮古ブルーの海を楽しむシュノーケリングツアー専門サイト。八重干瀬や伊良部島の透明度抜群の海で、カラフルな熱帯魚と泳ぐ感動体験をお届け！初心者から上級者まで楽しめるツアーを多数掲載。",
  },
  {
    name: "パンプキンホールツアーズ",
    href: "https://pumpkinholetour.miyako-tour.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/logo-2-e1742192458910-640x195.png",
    description: "宮古島の秘境「パンプキン鍾乳洞」専門ツアーサイト。干潮時にだけ現れる神秘の洞窟で、天然の大きなカボチャ型ホールを探検！大自然が生み出した神秘的な空間で、忘れられない冒険を体験しよう。",
  },
  {
    name: "沖縄ツアーズ",
    href: "https://okinawatour.world-tours.jp/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2022/02/57dd77a52983f06f14315bdfff5daa41-640x191.png",
    description: "日本一の南国リゾートで多彩なアクティビティを楽しめるレジャー天国、沖縄本島エリアのアクティビティ予約サイト。シュノーケリング・ダイビングはもちろん、沖縄本島各地の様々なアクティビティ体験を掲載中。",
  },
  {
    name: "慶良間ツアーズ",
    href: "https://keramatour.world-tours.jp/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2021/05/logo-3-640x191.png",
    description: "渡嘉敷島や座間味島、慶留間島、阿嘉島などをはじめとした慶良間諸島を専門とするアクティビティ・体験・ツアー予約サイト。「ケラマブルー」と呼ばれる美しい海でのマリンアクティビティを中心に情報発信中。",
  },
  {
    name: "水納島ツアーズ",
    href: "https://minnatour.world-tours.jp/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2021/05/logo-1-1-640x171.png",
    description: "沖縄本島から15分の離島、水納島専門のアクティビティ予約サイト。「クロワッサンアイランド」とも呼ばれる水納島はマリンレジャーの聖地！シュノーケリングをはじめとした、世界レベルの海を満喫できる厳選アクティビティ体験ツアーを掲載中。",
  },
  {
    name: "奄美ツアーズ",
    href: "https://amami-tour.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2021/05/cropped-logo.png",
    description: "世界遺産候補地・奄美大島専門のアクティビティ予約サイト。大自然に囲まれた奄美大島でSUPやカヌー、シュノーケリング、ナイトツアーなどを楽しもう！",
  },
  {
    name: "屋久島アクティビティ",
    href: "https://yakushima-tour.com/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2021/05/af02fd29dc8f964fd550649b2a9db3cd-e1621558499173.png",
    description: "世界自然遺産・屋久島を専門としたアクティビティ予約サイト。大人気のトレッキングを中心に、SUPやカヌーツアーを掲載中。屋久島専門だから、厳選されたツアーがいっぱい。",
  },
  {
    name: "ホエールウォッチングツアーズ",
    href: "https://whalewatchingtour.world-tours.jp/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/ec30666c6e46260f6bb5a6a041a4e1ee-640x180.jpg",
    description: "日本各地のホエールウォッチングツアーを厳選して紹介。迫力満点のクジラとの出会いを楽しめるプランが充実！",
  },
  {
    name: "長野ツアーズ",
    href: "https://naganotour.world-tours.jp/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/logo-e1742192906933-640x160.jpg",
    description: "四季折々の大自然を楽しめる長野専門のアクティビティ予約サイト。スキー・スノボから、絶景のハイキングやサイクリングプランまで、長野の魅力を存分に体験できるツアーを多数掲載！",
  },
  {
    name: "ハワイツアーズ",
    href: "https://hawaiitour.world-tours.jp/",
    imgSrc: "https://ishigaki-tours.com/wp-content/uploads/2025/03/ddaf5c16e233a10c0e19a8f5e3d0e148.png",
    description: "ハワイ旅行をもっと特別に！人気のマリンアクティビティや観光ツアーを厳選して掲載。ダイヤモンドヘッド登山やドルフィンスイム、人気のフードツアーまで、ハワイを満喫できるプランが満載！",
  },
];

export default function LinksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "リンク集・掲載事業者一覧", url: `${siteConfig.siteUrl}/links` },
        ]}
      />

      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 10px" }}>
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "12px",
              }}
            >
              リンク集・掲載事業者一覧
            </h1>

            <div style={{ fontSize: "16.8px", lineHeight: "2", color: "#333" }}>
              {linkItems.map((item) => (
                <div key={item.href} style={{ marginBottom: "16px" }}>
                  <p>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        style={{ maxWidth: "176px", height: "auto" }}
                      />
                    </a>
                  </p>
                  <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
