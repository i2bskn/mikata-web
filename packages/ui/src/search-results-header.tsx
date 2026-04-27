import type { FC } from "react";

type SearchResultsHeaderProps = {
  title: string;
  page: number;
  perPage: number;
  total: number;
  sort: "popular" | "review";
  popularSortHref: string;
  reviewSortHref: string;
  /** 見出し左線・ソートアクティブの色。デフォルトは検索ボタンと同じ var(--color-danger) */
  accentColor?: string;
};

export const SearchResultsHeader: FC<SearchResultsHeaderProps> = ({
  title,
  page,
  perPage,
  total,
  sort,
  popularSortHref,
  reviewSortHref,
  accentColor = "var(--color-danger, #ed3434)",
}) => {
  const startIdx = total === 0 ? 0 : (page - 1) * perPage + 1;
  const endIdx = Math.min(page * perPage, total);

  return (
    <div style={{ marginBottom: "16px" }}>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 600,
          color: "#212529",
          paddingLeft: "10px",
          borderLeft: `4px solid ${accentColor}`,
          marginBottom: "12px",
          lineHeight: "1.4",
        }}
      >
        {title}の検索結果
      </h1>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div style={{ fontSize: "16px", color: "#666" }}>
          {startIdx}〜{endIdx}件/{total}件中
        </div>
        <div className="flex items-center gap-3" style={{ fontSize: "16px" }}>
          <a
            href={popularSortHref}
            style={{
              color: sort === "popular" ? accentColor : "#666",
              fontWeight: sort === "popular" ? 700 : 400,
              textDecoration: "none",
              borderBottom: `2px solid ${sort === "popular" ? accentColor : "transparent"}`,
              paddingBottom: "2px",
            }}
          >
            人気順
          </a>
          <a
            href={reviewSortHref}
            style={{
              color: sort === "review" ? accentColor : "#666",
              fontWeight: sort === "review" ? 700 : 400,
              textDecoration: "none",
              borderBottom: `2px solid ${sort === "review" ? accentColor : "transparent"}`,
              paddingBottom: "2px",
            }}
          >
            口コミ順
          </a>
        </div>
      </div>
    </div>
  );
};
