import type { FC } from "react";

type SearchResultsPaginationProps = {
  page: number;
  perPage: number;
  total: number;
  prevPageHref?: string;
  nextPageHref?: string;
  accentColor?: string;
  /** 件数表示「N〜M件/total件中」の表示。既定 true */
  showCount?: boolean;
  /** 前後ボタンの表示。既定 true */
  showNav?: boolean;
};

export const SearchResultsPagination: FC<SearchResultsPaginationProps> = ({
  page,
  perPage,
  total,
  prevPageHref,
  nextPageHref,
  accentColor = "var(--color-danger, #ed3434)",
  showCount = true,
  showNav = true,
}) => {
  if (total === 0) return null;
  if (!showCount && !showNav) return null;
  const startIdx = (page - 1) * perPage + 1;
  const endIdx = Math.min(page * perPage, total);

  return (
    <div
      className="flex items-center justify-between flex-wrap gap-2"
      style={{ marginBottom: "20px" }}
    >
      {showCount ? (
        <div style={{ fontSize: "16px", color: "#666" }}>
          {startIdx}〜{endIdx}件/{total}件中
        </div>
      ) : (
        <div />
      )}
      {showNav && (
        <div className="flex items-center gap-2">
          {prevPageHref && (
            <a
              href={prevPageHref}
              style={{
                padding: "6px 18px",
                border: `1px solid ${accentColor}`,
                borderRadius: "5px",
                color: accentColor,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              ← 前へ
            </a>
          )}
          {nextPageHref && (
            <a
              href={nextPageHref}
              style={{
                padding: "6px 18px",
                border: `1px solid ${accentColor}`,
                borderRadius: "5px",
                color: accentColor,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              次へ →
            </a>
          )}
        </div>
      )}
    </div>
  );
};
