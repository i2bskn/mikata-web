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
import { siteConfig, sidebarConfig, bookingFlowSteps, categoryNavItems, campaignItems, campaignSearchItems, columnArticles, combinationItems, conditionSearchItems, planOptions, relatedBanners, sceneTimeItems, spotItems } from "../lib/site-config";
import { Sidebar } from "../components/sidebar";
import { SearchResultsBottom } from "../components/search-results-bottom";
import { parseSearchResultsParams } from "../lib/search-results-url";

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
const ACCENT_COLOR = "#007CDB";

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
        searchPanelSlot={
          <SearchPanel
            categoryNavItems={categoryNavItems}
            planOptions={planOptions}
            planCount={sidebarConfig.planCount}
            backgroundColor="#dbfbfc"
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
