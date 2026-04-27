import type { FC, ReactNode } from "react";
import type { ColumnArticle } from "./column-list";

export type ColumnArticleListProps = {
  /** 中見出し。未指定なら見出し（タイトル + iconNode）非表示 */
  title?: string;
  /** 見出し左に表示する SVG 等（任意） */
  iconNode?: ReactNode;
  articles: ColumnArticle[];
  /** リスト下に表示する枠付きボタン（コラム一覧へのリンク等）。未指定なら非表示 */
  seeMore?: {
    href: string;
    label: string;
  };
  /** 枠付きボタンの色。既定は var(--color-danger) */
  accentColor?: string;
};

export const ColumnArticleList: FC<ColumnArticleListProps> = ({
  title,
  iconNode,
  articles,
  seeMore,
  accentColor = "var(--color-danger, #ed3434)",
}) => {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "16px 0",
        marginBottom: "20px",
      }}
    >
      {title && (
        <h2
          className="flex items-center gap-2"
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#212529",
            lineHeight: "1.2",
            marginBottom: "8px",
          }}
        >
          {iconNode}
          <span>{title}</span>
        </h2>
      )}

      <div style={{ borderTop: "1px solid #e6e6e6" }}>
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            className="flex gap-4"
            style={{
              textDecoration: "none",
              color: "#333",
              borderBottom: "1px solid #e6e6e6",
              padding: "16px 4px",
            }}
          >
            <div
              className="shrink-0"
              style={{ width: "126px", height: "78px", borderRadius: "4px", overflow: "hidden" }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <p style={{ fontSize: "14px", fontWeight: 700, lineHeight: "1.5", color: "#212529" }}>
                {article.title}
              </p>
              <div
                className="flex items-center justify-between"
                style={{ fontSize: "12px", color: "#666" }}
              >
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  {article.views}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {seeMore && (
        <div className="flex justify-end" style={{ marginTop: "12px" }}>
          <a
            href={seeMore.href}
            style={{
              display: "inline-block",
              padding: "8px 18px",
              border: `1px solid ${accentColor}`,
              borderRadius: "5px",
              color: accentColor,
              backgroundColor: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            {seeMore.label} ›
          </a>
        </div>
      )}
    </section>
  );
};
