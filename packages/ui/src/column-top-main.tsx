import type { FC } from "react";
import { ColumnArticleList } from "./column-article-list";
import type { ColumnArticle } from "./column-list";
import { ColumnSearchBox } from "./column-search-box";

export type ColumnTopHero = {
  href: string;
  image: string;
  title: string;
  views: number;
};

export type ColumnTopMainProps = {
  hero: ColumnTopHero;
  pickupArticles: ColumnArticle[];
  rankingArticles: ColumnArticle[];
  /** 検索フォームの送信先（任意） */
  searchAction?: string;
  /** 「コラム一覧を見る」ボタンの遷移先 */
  seeAllHref?: string;
  /** 見出し左線・ボタン枠の色。既定は var(--color-danger) */
  accentColor?: string;
};

const PageHeading: FC<{ accentColor: string }> = ({ accentColor }) => (
  <h1
    style={{
      fontSize: "22px",
      fontWeight: 600,
      color: "#212529",
      paddingLeft: "10px",
      borderLeft: `4px solid ${accentColor}`,
      lineHeight: 1.4,
      marginBottom: "16px",
    }}
  >
    コラム
  </h1>
);

const HeroBlock: FC<{ hero: ColumnTopHero }> = ({ hero }) => (
  <a
    href={hero.href}
    style={{
      position: "relative",
      display: "block",
      overflow: "hidden",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#fff",
      marginBottom: "20px",
    }}
  >
    <img
      src={hero.image}
      alt={hero.title}
      style={{ width: "100%", height: "auto", display: "block" }}
    />
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        left: "8px",
        transform: "translateY(-50%)",
        width: "32px",
        height: "64px",
        backgroundColor: "rgba(255,255,255,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        right: "8px",
        transform: "translateY(-50%)",
        width: "32px",
        height: "64px",
        backgroundColor: "rgba(255,255,255,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "16px 20px",
        background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%)",
      }}
    >
      <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.5, marginBottom: "4px" }}>
        {hero.title}
      </p>
      <span
        className="flex items-center gap-1"
        style={{ fontSize: "13px", justifyContent: "flex-end" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        {hero.views}
      </span>
    </div>
  </a>
);

const PickupIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7a8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="14 3 14 9 20 9" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);

const CrownIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#f5b210" stroke="#f5b210" strokeWidth="1" strokeLinejoin="round">
    <path d="M2 8l4.5 4L12 4l5.5 8L22 8l-2 12H4z" />
  </svg>
);

export const ColumnTopMain: FC<ColumnTopMainProps> = ({
  hero,
  pickupArticles,
  rankingArticles,
  searchAction,
  seeAllHref = "/column",
  accentColor = "var(--color-danger, #ed3434)",
}) => {
  return (
    <>
      <PageHeading accentColor={accentColor} />

      <HeroBlock hero={hero} />

      <ColumnSearchBox action={searchAction} accentColor={accentColor} />

      <ColumnArticleList
        title="ピックアップコラム"
        iconNode={<PickupIcon />}
        articles={pickupArticles}
        seeMore={{ href: seeAllHref, label: "コラム一覧を見る" }}
        accentColor={accentColor}
      />

      <ColumnArticleList
        title="閲覧数ランキング"
        iconNode={<CrownIcon />}
        articles={rankingArticles}
        accentColor={accentColor}
      />

      <ColumnSearchBox action={searchAction} accentColor={accentColor} />
    </>
  );
};
