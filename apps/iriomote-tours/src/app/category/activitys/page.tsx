import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { ActivityList } from "@repo/ui/activity-list";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { SearchResultsPagination } from "@repo/ui/search-results-pagination";
import { ConditionSearch } from "@repo/ui/condition-search";
import { BookingFlow } from "@repo/ui/booking-flow";
import { ColumnList } from "@repo/ui/column-list";
import { RelatedSitesGrid } from "@repo/ui/related-sites-grid";
import {
  siteConfig,
  categoryNavItems,
  conditionSearchItems,
  bookingFlowSteps,
  columnArticles,
  relatedBanners,
} from "../../../lib/site-config";
import { Sidebar } from "../../../components/sidebar";
import { activityCategories } from "../../../lib/data/activity-categories";

const PER_PAGE = 10;
const TITLE = "アクティビティから探す";

export const metadata: Metadata = {
  title: TITLE,
};

export default async function ActivitysCategoryPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const page = Math.max(1, Number(params.page) || 1);
  const total = activityCategories.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const startIdx = (page - 1) * PER_PAGE;
  const items = activityCategories.slice(startIdx, startIdx + PER_PAGE);

  const buildHref = (p: number) => (p === 1 ? "/category/activitys" : `/category/activitys?page=${p}`);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: TITLE,
            url: `${siteConfig.siteUrl}/category/activitys`,
          },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <>
            <ActivityList
              items={items}
              startIdx={startIdx + 1}
              total={total}
              title={TITLE}
            />
            <SearchResultsPagination
              page={page}
              perPage={PER_PAGE}
              total={total}
              showCount={false}
              prevPageHref={page > 1 ? buildHref(page - 1) : undefined}
              nextPageHref={page < totalPages ? buildHref(page + 1) : undefined}
            />
          </>
        }
        bottomSectionsSlot={
          <>
            <ConditionSearch
              items={conditionSearchItems}
              iconUrl="/images/icons/loupe.svg"
            />
            <ColumnList articles={columnArticles} iconUrl="/images/icons/pen.svg" />
            <RelatedSitesGrid items={relatedBanners} />
            <BookingFlow steps={bookingFlowSteps} />
          </>
        }
      />
    </>
  );
}
