import type { FC } from "react";
import type { MenuLink } from "./types";

type QuickLinkGridProps = {
  items: MenuLink[];
  onItemClick?: () => void;
};

export const QuickLinkGrid: FC<QuickLinkGridProps> = ({ items, onItemClick }) => {
  if (!items || items.length === 0) return null;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px",
        padding: "0 15px 15px",
      }}
    >
      {items.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onItemClick}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "10px 5px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "rgba(204, 204, 204, 0.32) 0px 1px 10px 3px",
            textDecoration: "none",
            color: "#666",
            fontSize: "10px",
            fontWeight: 600,
            lineHeight: "1.3",
            whiteSpace: "pre-line",
          }}
        >
          {link.iconUrl && (
            <img
              src={link.iconUrl}
              alt=""
              style={{ width: "40px", height: "40px", objectFit: "contain", marginBottom: "4px" }}
            />
          )}
          {link.label}
        </a>
      ))}
    </div>
  );
};
