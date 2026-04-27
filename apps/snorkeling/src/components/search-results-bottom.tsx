import { ConditionSearch } from "@repo/ui/condition-search";
import { ColumnList } from "@repo/ui/column-list";
import { RelatedSitesGrid } from "@repo/ui/related-sites-grid";
import { BookingFlow } from "@repo/ui/booking-flow";
import {
  conditionSearchItems,
  columnArticles,
  relatedBanners,
  bookingFlowSteps,
} from "../lib/site-config";

export function SearchResultsBottom() {
  return (
    <>
      <ConditionSearch items={conditionSearchItems} iconUrl="/images/icons/loupe.svg" />
      <ColumnList articles={columnArticles} />
      <RelatedSitesGrid items={relatedBanners} />
      <BookingFlow steps={bookingFlowSteps} />
    </>
  );
}
