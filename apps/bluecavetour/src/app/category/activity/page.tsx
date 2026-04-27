import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { ActivityList } from "@repo/ui/activity-list";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { SearchResultsPagination } from "@repo/ui/search-results-pagination";
import { ConditionSearch } from "@repo/ui/condition-search";
import { BookingFlow } from "@repo/ui/booking-flow";
import {
  siteConfig,
  categoryNavItems,
  conditionSearchItems,
  bookingFlowSteps,
} from "../../../lib/site-config";
import { Sidebar } from "../../../components/sidebar";
import { activityCategories } from "../../../lib/data/activity-categories";

const PER_PAGE = 10;

export const metadata: Metadata = {
  title: "アクティビティの種類から探す",
};

export default function ActivityCategoryPage() {
  const total = activityCategories.length;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "アクティビティの種類から探す",
            url: `${siteConfig.siteUrl}/category/activity`,
          },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <>
            <ActivityList items={activityCategories} total={total} />
            <SearchResultsPagination
              page={1}
              perPage={PER_PAGE}
              total={total}
              showNav={false}
            />
          </>
        }
        bottomSectionsSlot={
          <>
            <ConditionSearch
              items={conditionSearchItems}
              iconUrl="/images/icons/loupe.svg"
            />
            <BookingFlow steps={bookingFlowSteps} />
          </>
        }
      />
    </>
  );
}
