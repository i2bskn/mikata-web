import Link from "next/link";
import { ImageSlider } from "@repo/ui/image-slider";
import { PopularRankingSlider } from "@repo/ui/popular-ranking-slider";
import { CampaignSection } from "@repo/ui/campaign-section";
import { IconCardGrid } from "@repo/ui/icon-card-grid";
import { SearchPanel } from "@repo/ui/search-panel";
import { ConditionSearch } from "@repo/ui/condition-search";
import { ColumnList } from "@repo/ui/column-list";
import { RelatedSitesGrid } from "@repo/ui/related-sites-grid";
import { OrganizationJsonLd } from "@repo/seo/json-ld";
import { getPopularPlans } from "../lib/data/plans";
import { siteConfig, sidebarConfig, categoryNavItems, campaignItems, columnArticles, combinationItems, conditionSearchItems, planOptions, relatedBanners, sceneTimeItems } from "../lib/site-config";
import { Sidebar } from "../components/sidebar";

// ヒーローバナーのスライドデータ（旧サイト準拠: 4枚）
const heroSlides = [
  {
    imageUrl: "/images/banner/hero-kv.png",
    alt: "石垣島・青の洞窟専門 厳選ツアーがいっぱい！",
    href: "/",
  },
  {
    imageUrl: "/images/banner/hero-ferry.webp",
    alt: "離島フェリー予約",
    href: "https://ishigaki-tours.com/ferry/",
  },
  {
    imageUrl: "/images/banner/hero-premium.webp",
    alt: "ツアーズ厳選プレミアムプラン",
    href: "/campaign/premium-plan.html",
  },
  {
    imageUrl: "/images/banner/hero-bluecave.jpg",
    alt: "石垣島 青の洞窟",
    href: "/",
  },
];


export default function HomePage() {
  const popularPlans = getPopularPlans(6);

  return (
    <>
      <OrganizationJsonLd
        data={{
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/logo.png`,
          description:
            "石垣島の人気スポット「青の洞窟」ツアー特化サイト。シュノーケリング、SUP、カヤックなど多彩なアクティビティを提供。",
        }}
      />

      {/* ヒーローバナー - フルワイド */}
      <ImageSlider slides={heroSlides} autoPlayInterval={5000} />

      <SearchPanel categoryNavItems={categoryNavItems} planOptions={planOptions} planCount={sidebarConfig.planCount} backgroundColor="#eff4ff" />

      {/* メインコンテンツ - 1020px幅 */}
      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 5px" }}>
        {/* 2カラムレイアウト - 既存サイト: 左サイドバー225px + 右メインコンテンツ */}
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          {/* メインコンテンツ */}
          <div className="flex-1 min-w-0">
            <PopularRankingSlider plans={popularPlans} />

            <CampaignSection items={campaignItems} />

            <IconCardGrid title="シーン・時間帯から探す" iconUrl="/images/icons/icon-time.webp" seeMoreHref="/category/scene-time" items={sceneTimeItems} backgroundImageUrl="/images/section-bg.png" />

            <IconCardGrid title="人気の組み合わせから探す" iconUrl="/images/icons/icon-activity.png" seeMoreHref="/category/setplan" items={combinationItems} backgroundImageUrl="/images/section-bg.png" />

            <ConditionSearch items={conditionSearchItems} iconUrl="/images/icons/loupe.svg" />

            <ColumnList articles={columnArticles} iconUrl="/images/icons/pen.svg" />

            <RelatedSitesGrid items={relatedBanners} />

            {/* 予約から参加の流れ - 既存サイト: 4ステップ横並び */}
            <section style={{ marginTop: "20px", paddingBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#212529",
                  lineHeight: "21.6px",
                  paddingBottom: "10px",
                  borderBottom: "4px solid #1a9edb",
                  marginBottom: "20px",
                }}
              >
                予約から参加の流れ
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    step: 1,
                    image: "/images/flow/flow01.webp",
                    title: "ツアーを探す",
                    text: "シーンや時間帯から参加したいツアーを探してみましょう\u266a",
                  },
                  {
                    step: 2,
                    image: "/images/flow/flow02.webp",
                    title: "予約プランの申し込み",
                    text: "申し込みたいプランを決めたら、日付と時間帯を選んで申し込み開始！",
                  },
                  {
                    step: 3,
                    image: "/images/flow/flow03.webp",
                    title: "予約確定",
                    text: "予約が完了すると、石垣島ツアーズから連絡がきます\u266a",
                  },
                  {
                    step: 4,
                    image: "/images/flow/flow04.webp",
                    title: "ツアーに参加",
                    text: "あとは当日参加するだけ！思いっきり楽しんじゃおう！！",
                  },
                ].map((item) => (
                  <div key={item.step} style={{ paddingBottom: "10px" }}>
                    <div style={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          backgroundColor: "#1a9edb",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: "bold",
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "2px",
                          zIndex: 1,
                        }}
                      >
                        {item.step}
                      </span>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: "16.8px",
                        fontWeight: 600,
                        color: "var(--color-danger)",
                        marginTop: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14.4px",
                        color: "#333",
                        lineHeight: "1.4",
                        marginTop: "4px",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* フローティングボタン - 既存サイト: PC右下に「特集・SALE情報を見る」 */}
      <a
        href="/pickup_item"
        className="hidden lg:flex fixed flex-col items-center"
        style={{
          bottom: "20px",
          right: "20px",
          backgroundColor: "var(--color-danger)",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          textDecoration: "none",
          zIndex: 50,
          gap: "4px",
        }}
      >
        <span style={{ fontSize: "10px", fontWeight: "bold" }}>＼ 会員登録不要 ／</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>特集・SALE</span>
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>情報を見る</span>
      </a>

      {/* スティッキーバナー - 既存サイト: SP画面下部に「写真撮影付きツアー」 */}
      <a
        href="/scene-time/freetourphotos.html"
        className="lg:hidden fixed left-0 right-0 flex items-center justify-center"
        style={{
          bottom: 0,
          backgroundColor: "#1a9edb",
          color: "#fff",
          padding: "8px 16px",
          fontSize: "13px",
          fontWeight: "bold",
          textDecoration: "none",
          zIndex: 50,
          gap: "8px",
        }}
      >
        <span>📷 写真撮影付きツアー</span>
        <span style={{ fontSize: "11px", backgroundColor: "#f08300", padding: "2px 8px", borderRadius: "3px" }}>
          高画質データ無料プレゼント！
        </span>
      </a>
    </>
  );
}
