export interface ColumnArticle {
  href: string;
  image: string;
  title: string;
  date: string;
  views: number;
}

export interface ColumnListProps {
  articles: ColumnArticle[];
  iconUrl?: string;
  /** 見出しテキスト。既定は「ツアーズコラム」 */
  title?: string;
  /** 「一覧を見る」リンク先。`null` を渡すとボタン非表示 */
  seeMoreHref?: string | null;
  /** 「一覧を見る」のラベル。既定は「一覧を見る」 */
  seeMoreLabel?: string;
}

export function ColumnList({
  articles,
  iconUrl,
  title = "ツアーズコラム",
  seeMoreHref = "/column-top",
  seeMoreLabel = "一覧を見る",
}: ColumnListProps) {
  return (
    <section style={{ marginTop: "20px", padding: "16px", backgroundColor: "var(--color-decoration-2)" }}>
      <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
        <h2
          className="flex items-center gap-2"
          style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2" }}
        >
          {iconUrl && (
            <img src={iconUrl} alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
          )}
          {title}
        </h2>
        {seeMoreHref && (
          <a
            href={seeMoreHref}
            style={{
              backgroundColor: "var(--color-danger)",
              color: "#fff",
              padding: "2px 10px",
              borderRadius: "3px",
              fontSize: "16.8px",
              fontWeight: "400",
              textDecoration: "none",
            }}
          >
            {seeMoreLabel}
          </a>
        )}
      </div>
      <div style={{ borderTop: "1px solid #E6E6E6" }}>
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            className="flex gap-4"
            style={{ textDecoration: "none", color: "#333", borderBottom: "1px solid #E6E6E6", padding: "16px 10px" }}
          >
            <div className="shrink-0" style={{ width: "126px", height: "78px", borderRadius: "4px", overflow: "hidden" }}>
              <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "1.4", marginBottom: "6px" }}>{article.title}</p>
              <div className="flex items-center justify-between" style={{ fontSize: "12px", color: "#999" }}>
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    </section>
  );
}
