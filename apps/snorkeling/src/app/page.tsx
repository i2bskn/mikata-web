import Link from "next/link";
import { ImageSlider } from "@repo/ui/image-slider";
import { PopularRankingSlider } from "@repo/ui/popular-ranking-slider";
import { CampaignSection } from "@repo/ui/campaign-section";
import { IconCardGrid } from "@repo/ui/icon-card-grid";
import { SearchPanel } from "@repo/ui/search-panel";
import { ConditionSearch } from "@repo/ui/condition-search";
import { ColumnList } from "@repo/ui/column-list";
import { RelatedSitesGrid } from "@repo/ui/related-sites-grid";
import { BookingFlow } from "@repo/ui/booking-flow";
import { FloatingSaleButton } from "@repo/ui/floating-sale-button";
import { StickyPhotoBanner } from "@repo/ui/sticky-photo-banner";
import { OrganizationJsonLd } from "@repo/seo/json-ld";
import { getPopularPlans } from "../lib/data/plans";
import { siteConfig, sidebarConfig, bookingFlowSteps, categoryNavItems, campaignItems, campaignSearchItems, columnArticles, combinationItems, conditionSearchItems, planOptions, relatedBanners, sceneTimeItems, spotItems } from "../lib/site-config";
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

            <RelatedSitesGrid items={relatedBanners} />

            <BookingFlow steps={bookingFlowSteps} />

          </div>
        </div>
      </div>

      <FloatingSaleButton />
      <StickyPhotoBanner />
    </>
  );
}
