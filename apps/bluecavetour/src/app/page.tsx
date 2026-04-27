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
import { SearchResultsTemplate } from "@repo/ui/search-results-template";
import { OrganizationJsonLd } from "@repo/seo/json-ld";
import { getPopularPlans, searchPlans } from "../lib/data/plans";
import { siteConfig, sidebarConfig, bookingFlowSteps, categoryNavItems, campaignItems, columnArticles, combinationItems, conditionSearchItems, planOptions, relatedBanners, sceneTimeItems } from "../lib/site-config";
import { Sidebar } from "../components/sidebar";
import { SearchResultsBottom } from "../components/search-results-bottom";
import { parseSearchResultsParams } from "../lib/search-results-url";

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


type SearchParams = Record<string, string | string[] | undefined>;

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const params = (await searchParams) ?? {};

  if (params.post_type === "plan") {
    return <HomeSearchResultsView searchParams={params} />;
  }

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

const PER_PAGE = 10;
const ACCENT_COLOR = "#1a9edb";
const PREMIUM_BADGE_URL =
  "https://bluecavetour.ishigaki-tours.com/wp-content/themes/tours-shisa/assets/img/premium-tag.png";

function HomeSearchResultsView({ searchParams }: { searchParams: SearchParams }) {
  const { page, sort } = parseSearchResultsParams(searchParams);
  const planGenreParam = searchParams.plan_genre;
  const planGenre = Array.isArray(planGenreParam) ? planGenreParam[0] : planGenreParam;

  const result = searchPlans({
    filter: planGenre ? { tag: planGenre } : undefined,
    sort,
    page,
    perPage: PER_PAGE,
  });

  const matchedOption = planGenre ? planOptions.find((o) => o.value === planGenre) : undefined;
  const title = matchedOption?.label ?? "人気プランランキング";

  const queryEntries = Object.entries(searchParams).flatMap(([key, value]) => {
    if (key === "page" || key === "sort") return [];
    if (Array.isArray(value)) return value.map((v) => [key, v] as const);
    if (value === undefined) return [];
    return [[key, value] as const];
  });

  const buildHref = (overrides: { page?: number; sort?: "popular" | "review" }) => {
    const merged = new URLSearchParams();
    for (const [k, v] of queryEntries) merged.append(k, v);
    if (overrides.sort && overrides.sort !== "popular") merged.set("sort", overrides.sort);
    const finalPage = overrides.page ?? page;
    if (finalPage !== 1) merged.set("page", String(finalPage));
    const qs = merged.toString();
    return qs ? `/?${qs}` : "/";
  };

  const totalPages = Math.max(1, Math.ceil(result.total / PER_PAGE));

  return (
    <>
      <SearchResultsTemplate
        title={title}
        plans={result.plans}
        total={result.total}
        page={page}
        perPage={PER_PAGE}
        sort={sort}
        popularSortHref={buildHref({ sort: "popular" })}
        reviewSortHref={buildHref({ sort: "review" })}
        prevPageHref={page > 1 ? buildHref({ page: page - 1 }) : undefined}
        nextPageHref={page < totalPages ? buildHref({ page: page + 1 }) : undefined}
        accentColor={ACCENT_COLOR}
        premiumBadgeUrl={PREMIUM_BADGE_URL}
        searchPanelSlot={
          <SearchPanel
            categoryNavItems={categoryNavItems}
            planOptions={planOptions}
            planCount={sidebarConfig.planCount}
            backgroundColor="#eff4ff"
          />
        }
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        bottomSectionsSlot={<SearchResultsBottom />}
      />
      <FloatingSaleButton />
      <StickyPhotoBanner />
    </>
  );
}
