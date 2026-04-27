import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchPanel } from "@repo/ui/search-panel";
import { SearchResultsTemplate } from "@repo/ui/search-results-template";
import { searchPlans } from "../../../lib/data/plans";
import {
  categoryNavItems,
  planOptions,
  sceneTimeSlugMap,
  sidebarConfig,
  siteConfig,
} from "../../../lib/site-config";
import { Sidebar } from "../../../components/sidebar";
import { SearchResultsBottom } from "../../../components/search-results-bottom";
import { buildSearchResultsHref, parseSearchResultsParams } from "../../../lib/search-results-url";

const PER_PAGE = 10;
const ACCENT_COLOR = "#1a9edb";
const PREMIUM_BADGE_URL =
  "https://bluecavetour.ishigaki-tours.com/wp-content/themes/tours-shisa/assets/img/premium-tag.png";

type Params = { slug: string };
type SearchParams = Record<string, string | string[] | undefined>;

export function generateStaticParams(): Params[] {
  return Object.keys(sceneTimeSlugMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = sceneTimeSlugMap[slug];
  if (!config) return {};
  return { title: `${config.title}の検索結果` };
}

export default async function SceneTimePage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const sp = (await searchParams) ?? {};
  const config = sceneTimeSlugMap[slug];
  if (!config) notFound();

  const { page, sort } = parseSearchResultsParams(sp);
  const result = searchPlans({
    filter: { category: config.category, tag: config.tag, anyTag: config.anyTag },
    sort,
    page,
    perPage: PER_PAGE,
  });

  const basePath = `/scene-time/${slug}`;
  const totalPages = Math.max(1, Math.ceil(result.total / PER_PAGE));

  return (
    <SearchResultsTemplate
      title={config.title}
      plans={result.plans}
      total={result.total}
      page={page}
      perPage={PER_PAGE}
      sort={sort}
      popularSortHref={buildSearchResultsHref({ basePath, page, sort: "popular" })}
      reviewSortHref={buildSearchResultsHref({ basePath, page, sort: "review" })}
      prevPageHref={page > 1 ? buildSearchResultsHref({ basePath, page: page - 1, sort }) : undefined}
      nextPageHref={page < totalPages ? buildSearchResultsHref({ basePath, page: page + 1, sort }) : undefined}
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
  );
}
