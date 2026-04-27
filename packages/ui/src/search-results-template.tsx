import type { FC, ReactNode } from "react";
import { PageWithSidebarTemplate } from "./page-with-sidebar-template";
import { RankingList, type RankingPlan } from "./ranking-list";
import { SearchResultsHeader } from "./search-results-header";
import { SearchResultsPagination } from "./search-results-pagination";

export type SearchResultsTemplateProps = {
  title: string;
  plans: RankingPlan[];
  total: number;
  page: number;
  perPage: number;
  sort: "popular" | "review";
  popularSortHref: string;
  reviewSortHref: string;
  prevPageHref?: string;
  nextPageHref?: string;
  /** プランリストの「詳細を見る」ボタン色（サイトのプライマリ色） */
  accentColor: string;
  /** 見出し左線・ソートアクティブ・ページネーションの色。デフォルトは検索ボタンと同じ var(--color-danger) */
  searchAccentColor?: string;
  premiumBadgeUrl?: string;
  planLinkPrefix?: string;
  /** ヘッダー直下の SearchPanel（任意） */
  searchPanelSlot?: ReactNode;
  /** 2 カラム左の Sidebar */
  sidebarSlot: ReactNode;
  /** プランリストの下に表示する共通セクション群（ConditionSearch / ColumnList / RelatedSitesGrid / BookingFlow） */
  bottomSectionsSlot?: ReactNode;
};

export const SearchResultsTemplate: FC<SearchResultsTemplateProps> = ({
  title,
  plans,
  total,
  page,
  perPage,
  sort,
  popularSortHref,
  reviewSortHref,
  prevPageHref,
  nextPageHref,
  accentColor,
  searchAccentColor = "var(--color-danger, #ed3434)",
  premiumBadgeUrl,
  planLinkPrefix,
  searchPanelSlot,
  sidebarSlot,
  bottomSectionsSlot,
}) => {
  return (
    <PageWithSidebarTemplate
      topSlot={searchPanelSlot}
      sidebarSlot={sidebarSlot}
      mainSlot={
        <>
          <SearchResultsHeader
            title={title}
            page={page}
            perPage={perPage}
            total={total}
            sort={sort}
            popularSortHref={popularSortHref}
            reviewSortHref={reviewSortHref}
            accentColor={searchAccentColor}
          />

          <RankingList
            plans={plans}
            accentColor={accentColor}
            premiumBadgeUrl={premiumBadgeUrl}
            planLinkPrefix={planLinkPrefix}
          />

          <SearchResultsPagination
            page={page}
            perPage={perPage}
            total={total}
            prevPageHref={prevPageHref}
            nextPageHref={nextPageHref}
            accentColor={searchAccentColor}
          />
        </>
      }
      bottomSectionsSlot={bottomSectionsSlot}
    />
  );
};
