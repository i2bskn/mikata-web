type SearchParams = Record<string, string | string[] | undefined>;

const DEFAULT_PAGE = 1;

function pickFirst(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export function parseColumnListParams(searchParams: SearchParams): { page: number } {
  const raw = pickFirst(searchParams.page);
  const parsed = raw !== undefined ? Number.parseInt(raw, 10) : NaN;
  const page = Number.isFinite(parsed) && parsed >= 1 ? parsed : DEFAULT_PAGE;
  return { page };
}

export function buildColumnListHref({
  basePath,
  page,
}: {
  basePath: string;
  page: number;
}): string {
  if (page <= 1) return basePath;
  return `${basePath}?page=${page}`;
}
