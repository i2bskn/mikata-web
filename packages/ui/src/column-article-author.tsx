import type { FC } from "react";

export type ColumnArticleAuthorProps = {
  name: string;
  image: string;
  /** 自己紹介。リンクなどを含む HTML 文字列 */
  bioHtml: string;
};

export const ColumnArticleAuthor: FC<ColumnArticleAuthorProps> = ({
  name,
  image,
  bioHtml,
}) => {
  return (
    <section
      className="flex"
      style={{
        gap: "20px",
        alignItems: "flex-start",
        padding: "20px",
        backgroundColor: "#fafafa",
        border: "1px solid #e6e6e6",
        borderRadius: "8px",
        marginBottom: "32px",
      }}
    >
      <div
        className="shrink-0"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#212529",
            marginBottom: "10px",
            lineHeight: 1.4,
          }}
        >
          この記事を書いた人 : {name}
        </h3>
        <div
          className="column-author-bio"
          style={{ fontSize: "13px", lineHeight: 1.8, color: "#333" }}
          dangerouslySetInnerHTML={{ __html: bioHtml }}
        />
      </div>
    </section>
  );
};
