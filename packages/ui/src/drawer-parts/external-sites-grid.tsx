import type { FC } from "react";
import type { MenuLink } from "./types";

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#666",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

type ExternalSitesGridProps = {
  title?: string;
  iconUrl?: string;
  items: MenuLink[];
  isLg?: boolean;
};

export const ExternalSitesGrid: FC<ExternalSitesGridProps> = ({
  title = "他の島のツアーもチェック",
  iconUrl,
  items,
  isLg,
}) => {
  if (!items || items.length === 0) return null;
  const logoStyle: React.CSSProperties = isLg
    ? { height: "40px", maxWidth: "89px", objectFit: "contain", marginBottom: "5px" }
    : { height: "40px", objectFit: "contain", marginBottom: "5px" };

  return (
    <div style={{ padding: "0 15px 15px" }}>
      <div style={sectionTitleStyle}>
        {iconUrl && <img src={iconUrl} alt="" style={{ width: "20px", height: "20px" }} />}
        {title}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "8px",
        }}
      >
        {items.map((site) => (
          <a
            key={site.href}
            href={site.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 10px 5px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            {site.iconUrl ? <img src={site.iconUrl} alt={site.label} style={logoStyle} /> : null}
            <span style={{ fontSize: "10px", fontWeight: 600, color: "#666" }}>{site.label}</span>
            <span style={{ fontSize: "9px", color: "#999" }}>（外部サイト）</span>
          </a>
        ))}
      </div>
    </div>
  );
};
