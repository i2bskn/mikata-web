import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { PickupList } from "@repo/ui/pickup-list";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { SearchResultsPagination } from "@repo/ui/search-results-pagination";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";
import { SearchResultsBottom } from "../../components/search-results-bottom";
import { pickupItems } from "../../lib/data/pickup-items";

const PER_PAGE = 10;
const BASE_PATH = "/pickup_item";

export const metadata: Metadata = {
  title: "特集",
};

type SearchParams = Record<string, string | string[] | undefined>;

function pickFirst(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function parsePage(searchParams: SearchParams): number {
  const raw = pickFirst(searchParams.page);
  const parsed = raw !== undefined ? Number.parseInt(raw, 10) : NaN;
  return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
}

function buildHref(page: number): string {
  if (page <= 1) return BASE_PATH;
  return `${BASE_PATH}?page=${page}`;
}

export default async function PickupItemPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const page = parsePage(sp);

  const total = pickupItems.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * PER_PAGE;
  const pageItems = pickupItems.slice(startIdx, startIdx + PER_PAGE);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "特集", url: `${siteConfig.siteUrl}/pickup_item` },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <>
            <PickupList
              items={pageItems}
              startIdx={startIdx + 1}
              total={total}
            />
            <SearchResultsPagination
              page={safePage}
              perPage={PER_PAGE}
              total={total}
              prevPageHref={safePage > 1 ? buildHref(safePage - 1) : undefined}
              nextPageHref={
                safePage < totalPages ? buildHref(safePage + 1) : undefined
              }
            />
          </>
        }
        bottomSectionsSlot={<SearchResultsBottom />}
      />
    </>
  );
}
