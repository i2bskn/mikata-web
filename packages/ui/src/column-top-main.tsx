import type { FC } from "react";
import { ColumnArticleList } from "./column-article-list";
import type { ColumnArticle } from "./column-list";
import { ColumnSearchBox } from "./column-search-box";
import {
  ColumnTopHeroSlider,
  type ColumnTopHeroSlide,
} from "./column-top-hero-slider";

export type ColumnTopMainProps = {
  /** ヒーロー画像のスライド */
  heroSlides: ColumnTopHeroSlide[];
  pickupArticles: ColumnArticle[];
  rankingArticles: ColumnArticle[];
  /** 検索フォームの送信先（任意） */
  searchAction?: string;
  /** 「コラム一覧を見る」ボタンの遷移先 */
  seeAllHref?: string;
  /** 見出し左線・ボタン枠の色。既定は var(--color-danger) */
  accentColor?: string;
  /** ヒーロースライダーの自動再生間隔（ms）。0 で無効 */
  heroAutoPlayInterval?: number;
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
  heroSlides,
  pickupArticles,
  rankingArticles,
  searchAction,
  seeAllHref = "/column",
  accentColor = "var(--color-danger, #ed3434)",
  heroAutoPlayInterval,
}) => {
  return (
    <>
      <PageHeading accentColor={accentColor} />

      <ColumnTopHeroSlider
        slides={heroSlides}
        autoPlayInterval={heroAutoPlayInterval}
      />

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
