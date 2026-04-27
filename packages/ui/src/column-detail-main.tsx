import type { FC } from "react";
import {
  ColumnArticleAuthor,
  type ColumnArticleAuthorProps,
} from "./column-article-author";
import { ColumnArticleList } from "./column-article-list";
import { CrownIcon } from "./column-icons";
import type { ColumnArticle } from "./column-list";
import { ColumnShareButtons } from "./column-share-buttons";

export type ColumnDetailMainProps = {
  title: string;
  date: string;
  views: number;
  heroImage: string;
  /** tiptap 等で生成された HTML 本文 */
  bodyHtml: string;
  shareUrl: string;
  shareTitle: string;
  author: ColumnArticleAuthorProps;
  rankingArticles: ColumnArticle[];
  /** 見出し左線・装飾の色。既定は var(--color-danger) */
  accentColor?: string;
};

export const ColumnDetailMain: FC<ColumnDetailMainProps> = ({
  title,
  date,
  views,
  heroImage,
  bodyHtml,
  shareUrl,
  shareTitle,
  author,
  rankingArticles,
  accentColor = "var(--color-danger, #ed3434)",
}) => {
  return (
    <article>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#212529",
          paddingLeft: "10px",
          borderLeft: `4px solid ${accentColor}`,
          lineHeight: 1.5,
          marginBottom: "12px",
        }}
      >
        {title}
      </h1>

      <div
        className="flex items-center"
        style={{ gap: "16px", fontSize: "12px", color: "#666", marginBottom: "16px" }}
      >
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {views}
        </span>
      </div>

      <div
        style={{
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "24px",
        }}
      >
        <img
          src={heroImage}
          alt={title}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <div
        className="column-content"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      <ColumnShareButtons shareUrl={shareUrl} shareTitle={shareTitle} />

      <ColumnArticleAuthor {...author} />

      <ColumnArticleList
        title="閲覧数ランキング"
        iconNode={<CrownIcon />}
        articles={rankingArticles}
      />
    </article>
  );
};
