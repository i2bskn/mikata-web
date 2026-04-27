import Link from "next/link";
import { ImageSlider } from "@repo/ui/image-slider";
import { PopularRankingSlider } from "@repo/ui/popular-ranking-slider";
import { CampaignSection } from "@repo/ui/campaign-section";
import { IconCardGrid } from "@repo/ui/icon-card-grid";
import { SearchPanel } from "@repo/ui/search-panel";
import { ConditionSearch } from "@repo/ui/condition-search";
import { ColumnList } from "@repo/ui/column-list";
import { OrganizationJsonLd } from "@repo/seo/json-ld";
import { getPopularPlans } from "../lib/data/plans";
import { siteConfig, sidebarConfig, categoryNavItems, campaignItems, campaignSearchItems, columnArticles, combinationItems, conditionSearchItems, planOptions, sceneTimeItems, spotItems } from "../lib/site-config";
import { Sidebar } from "../components/sidebar";

// ヒーローバナーのスライドデータ（元サイト準拠）
const heroSlides = [
  {
    imageUrl: "/images/banner/hero-snorkeling.jpg",
    alt: "石垣島シュノーケリング専門 厳選ツアーがいっぱい！",
    href: "/",
  },
  {
    imageUrl: "/images/banner/hero-ferry.png",
    alt: "離島フェリー予約",
    href: "https://ishigaki-tours.com/tours-ferry/",
  },
  {
    imageUrl: "/images/banner/hero-maboroshi.png",
    alt: "幻の島シュノーケリング",
    href: "/scene-time/seaturtles.html",
  },
];

export default function HomePage() {
  const popularPlans = getPopularPlans(8);

  return (
    <>
      <OrganizationJsonLd
        data={{
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/logo.png`,
          description:
            "石垣島シュノーケリング専門のツアー/アクティビティ予約サイト。幻の島、青の洞窟、ウミガメシュノーケリングなど多彩なツアーを提供。",
        }}
      />

      {/* ヒーローバナー - フルワイド */}
      <ImageSlider slides={heroSlides} autoPlayInterval={5000} />

      <SearchPanel categoryNavItems={categoryNavItems} planOptions={planOptions} planCount={sidebarConfig.planCount} backgroundColor="#dbfbfc" />

      {/* メインコンテンツ - 1020px幅 */}
      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 5px" }}>
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          {/* メインコンテンツ */}
          <div className="flex-1 min-w-0">
            <PopularRankingSlider plans={popularPlans} />

            <CampaignSection items={campaignItems} />

            <IconCardGrid title="人気スポットから探す" seeMoreHref="/spot" items={spotItems} backgroundImageUrl="/images/section-bg.png" />

            <IconCardGrid title="シーン・時間帯から探す" seeMoreHref="/category/scene-time" items={sceneTimeItems} backgroundImageUrl="/images/section-bg.png" />

            <IconCardGrid title="人気の組み合わせから探す" seeMoreHref="/category/setplan" items={combinationItems} backgroundImageUrl="/images/section-bg.png" />

            <IconCardGrid title="キャンペーンから探す" seeMoreHref="/category/campaign" items={campaignSearchItems} backgroundImageUrl="/images/section-bg.png" />

            <ConditionSearch items={conditionSearchItems} iconUrl="/images/icons/loupe.svg" />

            <ColumnList articles={columnArticles} />

            {/* 関連情報 */}
            <section style={{ marginTop: "20px" }}>
              <h2 style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2", marginBottom: "16px", borderBottom: "4px solid #007CDB", paddingBottom: "10px" }}>
                関連情報
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { href: "/campaign/premium-plan.html", image: "/images/related/premium-plan.png", alt: "ツアーズ厳選プレミアムプラン" },
                  { href: "https://ishigaki-tours.com/tours-ferry/", image: "/images/related/ferry.webp", alt: "離島フェリー予約" },
                  { href: "https://ishigaki-tours.com/", image: "/images/related/ishigaki-tours.webp", alt: "石垣島ツアーズ" },
                  { href: "https://kohama-tours.com/", image: "/images/related/kohama.webp", alt: "小浜島ツアーズ" },
                  { href: "https://iriomote-tours.com/", image: "/images/related/iriomote.png", alt: "西表島ツアーズ" },
                  { href: "https://shummake-affiliate-programs.manus.space/", image: "/images/related/affiliate.png", alt: "アフィリエイトパートナー募集" },
                ].map((item) => (
                  <a
                    key={item.alt}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block overflow-hidden"
                    style={{ borderRadius: "4px" }}
                  >
                    <img src={item.image} alt={item.alt} style={{ width: "100%", height: "auto", display: "block" }} />
                  </a>
                ))}
              </div>
            </section>

            {/* 予約から参加の流れ */}
            <section style={{ marginTop: "20px", paddingBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#212529",
                  lineHeight: "21.6px",
                  paddingBottom: "10px",
                  borderBottom: "4px solid #007CDB",
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
                    title: "プランを予約",
                    text: "申し込みたいプランを決めたら、日付と時間帯を選んで申し込み開始！",
                  },
                  {
                    step: 3,
                    image: "/images/flow/flow03.webp",
                    title: "メールを確認",
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
                          backgroundColor: "#007CDB",
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

      {/* フローティングボタン - PC右下 */}
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

      {/* スティッキーバナー - SP画面下部 */}
      <a
        href="/scene-time/freetourphotos.html"
        className="lg:hidden fixed left-0 right-0 flex items-center justify-center"
        style={{
          bottom: 0,
          backgroundColor: "#007CDB",
          color: "#fff",
          padding: "8px 16px",
          fontSize: "13px",
          fontWeight: "bold",
          textDecoration: "none",
          zIndex: 50,
          gap: "8px",
        }}
      >
        <span>写真撮影付きツアー</span>
        <span style={{ fontSize: "11px", backgroundColor: "#f08300", padding: "2px 8px", borderRadius: "3px" }}>
          高画質データ無料プレゼント！
        </span>
      </a>
    </>
  );
}
