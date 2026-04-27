import type { Metadata } from "next";
import { ColumnArticleList } from "@repo/ui/column-article-list";
import { CrownIcon } from "@repo/ui/column-icons";
import { ColumnSearchBox } from "@repo/ui/column-search-box";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { SearchResultsPagination } from "@repo/ui/search-results-pagination";
import { categoryNavItems, columnArticles } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";
import { SearchResultsBottom } from "../../components/search-results-bottom";
import {
  buildColumnListHref,
  parseColumnListParams,
} from "../../lib/column-list-url";

const PER_PAGE = 10;
const RANKING_LIMIT = 5;
const SEARCH_ACCENT = "var(--color-danger, #ed3434)";
const BASE_PATH = "/column";

export const metadata: Metadata = {
  title: "コラム一覧",
};

export default function ColumnListPage({
  searchParams = {},
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const { page } = parseColumnListParams(searchParams);

  const sortedByDate = [...columnArticles].sort((a, b) => b.date.localeCompare(a.date));
  const total = sortedByDate.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * PER_PAGE;
  const pageArticles = sortedByDate.slice(startIdx, startIdx + PER_PAGE);

  const rankingArticles = [...columnArticles]
    .sort((a, b) => b.views - a.views)
    .slice(0, RANKING_LIMIT);

  return (
    <PageWithSidebarTemplate
      sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
      mainSlot={
        <>
          <div
            className="flex flex-wrap items-center justify-between gap-4"
            style={{ marginBottom: "16px" }}
          >
            <h1
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#212529",
                paddingLeft: "10px",
                borderLeft: `4px solid ${SEARCH_ACCENT}`,
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              コラム一覧
            </h1>
            <div style={{ flex: "0 1 auto", minWidth: "240px" }}>
              <ColumnSearchBox />
            </div>
          </div>

          <SearchResultsPagination
            page={safePage}
            perPage={PER_PAGE}
            total={total}
            showNav={false}
          />

          <ColumnArticleList articles={pageArticles} />

          <SearchResultsPagination
            page={safePage}
            perPage={PER_PAGE}
            total={total}
            showCount={false}
            prevPageHref={
              safePage > 1
                ? buildColumnListHref({ basePath: BASE_PATH, page: safePage - 1 })
                : undefined
            }
            nextPageHref={
              safePage < totalPages
                ? buildColumnListHref({ basePath: BASE_PATH, page: safePage + 1 })
                : undefined
            }
          />

          <ColumnArticleList
            title="閲覧数ランキング"
            iconNode={<CrownIcon />}
            articles={rankingArticles}
          />
        </>
      }
      bottomSectionsSlot={<SearchResultsBottom />}
    />
  );
}
