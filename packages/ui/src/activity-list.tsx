import type { FC } from "react";

export interface ActivityCategoryItem {
  name: string;
  imageUrl: string;
  href: string;
  external?: boolean;
}

export interface ActivityListProps {
  items: ActivityCategoryItem[];
  /** 表示している先頭件目（1始まり）。既定 1 */
  startIdx?: number;
  /** 全件数。既定 items.length */
  total?: number;
  /** h1 タイトル。既定 "アクティビティの種類から探す" */
  title?: string;
}

export const ActivityList: FC<ActivityListProps> = ({
  items,
  startIdx = 1,
  total = items.length,
  title = "アクティビティの種類から探す",
}) => {
  const endIdx = startIdx + items.length - 1;
  return (
    <>
      <h1
        style={{
          fontSize: "21.6px",
          fontWeight: "600",
          color: "#212529",
          marginBottom: "0px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: "16.8px",
          color: "#212529",
          margin: "0px",
          marginBottom: "16px",
        }}
      >
        {startIdx}〜{endIdx}件/{total}件中
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          marginBottom: "24px",
        }}
      >
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="flex gap-4"
            style={{
              padding: "16px 0",
              borderBottom: "1px solid #e5e5e5",
              textDecoration: "none",
              color: "#212529",
              display: "flex",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{
                width: "100px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "14.4px",
                  fontWeight: "600",
                  color: "#000",
                  lineHeight: "1.4",
                  margin: 0,
                }}
              >
                {item.name}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
