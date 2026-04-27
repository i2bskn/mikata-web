import type { FC } from "react";
import type { MenuInfoLinksSection } from "./types";

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#666",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

type InfoLinksGridProps = {
  section: MenuInfoLinksSection;
  onItemClick?: () => void;
};

export const InfoLinksGrid: FC<InfoLinksGridProps> = ({ section, onItemClick }) => {
  if (!section.items || section.items.length === 0) return null;
  return (
    <div style={{ padding: "0 15px 25px" }}>
      <div style={sectionTitleStyle}>
        {section.iconUrl && (
          <img src={section.iconUrl} alt="" style={{ width: "20px", height: "20px" }} />
        )}
        {section.title}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
        {section.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "10px 5px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#666",
              fontSize: "10px",
              fontWeight: 600,
              lineHeight: "1.3",
              whiteSpace: "pre-line",
            }}
          >
            {item.iconUrl && (
              <img
                src={item.iconUrl}
                alt=""
                style={{ width: "40px", height: "40px", objectFit: "contain", marginBottom: "4px" }}
              />
            )}
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
