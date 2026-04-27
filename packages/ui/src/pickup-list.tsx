import type { FC } from "react";

export interface PickupItem {
  title: string;
  imageUrl: string;
  href: string;
  external?: boolean;
  date: string;
}

export interface PickupListProps {
  items: PickupItem[];
}

export const PickupList: FC<PickupListProps> = ({ items }) => {
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
        特集 一覧
      </h1>

      <p
        style={{
          fontSize: "16.8px",
          color: "#212529",
          margin: "0px",
          marginBottom: "16px",
        }}
      >
        1〜{items.length}件/{items.length}件中
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          marginBottom: "40px",
        }}
      >
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="flex gap-4"
            style={{
              padding: "16px 10px",
              borderBottom: "1px solid #e6e6e6",
              textDecoration: "none",
              color: "#000",
              display: "flex",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{
                width: "126px",
                height: "71px",
                objectFit: "cover",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: "16.8px",
                  fontWeight: "600",
                  color: "#000",
                  lineHeight: "1.4",
                  marginBottom: "8px",
                  margin: 0,
                }}
              >
                {item.title}
              </p>
              <div
                style={{
                  fontSize: "14.4px",
                  color: "#687279",
                  marginTop: "4px",
                }}
              >
                {item.date}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
