import type { FC } from "react";
import type { MenuSection } from "./types";

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#666",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

type SectionGridProps = {
  section: MenuSection;
  onItemClick?: () => void;
  defaultIconUrl?: string;
};

export const SectionGrid: FC<SectionGridProps> = ({ section, onItemClick, defaultIconUrl }) => {
  if (!section.items || section.items.length === 0) return null;
  const headIcon = section.iconUrl ?? defaultIconUrl;
  return (
    <div style={{ padding: "0 15px 25px" }}>
      <div style={sectionTitleStyle}>
        {headIcon && <img src={headIcon} alt="" style={{ width: "20px", height: "20px" }} />}
        {section.title}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
        }}
      >
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
