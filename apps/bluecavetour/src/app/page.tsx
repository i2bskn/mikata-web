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
import { siteConfig, sidebarConfig, bookingFlowSteps, categoryNavItems, campaignItems, columnArticles, combinationItems, conditionSearchItems, planOptions, relatedBanners, sceneTimeItems } from "../lib/site-config";
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

            <BookingFlow steps={bookingFlowSteps} />

          </div>
        </div>
      </div>
      <FloatingSaleButton />
      <StickyPhotoBanner />
    </>
  );
}
