type SortKey = "popular" | "review";

type BuildHrefInput = {
  basePath: string;
  page?: number;
  sort?: SortKey;
};

export function buildSearchResultsHref({ basePath, page = 1, sort = "popular" }: BuildHrefInput): string {
  const params = new URLSearchParams();
  if (sort !== "popular") params.set("sort", sort);
  if (page !== 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export function parseSearchResultsParams(searchParams: Record<string, string | string[] | undefined>): {
  page: number;
  sort: SortKey;
} {
  const sortParam = searchParams.sort;
  const sort: SortKey = sortParam === "review" ? "review" : "popular";
  const pageParam = searchParams.page;
  const pageStr = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const parsed = pageStr ? parseInt(pageStr, 10) : 1;
  const page = Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
  return { page, sort };
}
