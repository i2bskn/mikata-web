import type { CSSProperties } from "react";

export interface IconCardGridItem {
  href: string;
  image: string;
  title: string;
}

export interface IconCardGridProps {
  title: string;
  items: IconCardGridItem[];
  iconUrl?: string;
  seeMoreHref?: string;
  backgroundImageUrl?: string;
}

const SM_COLS_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
};

export function IconCardGrid({ title, items, iconUrl, seeMoreHref, backgroundImageUrl }: IconCardGridProps) {
  const smColClass = SM_COLS_CLASS[items.length] ?? "sm:grid-cols-4";
  const sectionStyle: CSSProperties = backgroundImageUrl
    ? {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "0 -10px 40px",
        padding: "15px 10px 0",
      }
    : { marginTop: "20px" };
  return (
    <section style={sectionStyle}>
      <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
        <h2
          className="flex items-center gap-2"
          style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2" }}
        >
          {iconUrl && (
            <img src={iconUrl} alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
          )}
          {title}
        </h2>
        {seeMoreHref && (
          <a
            href={seeMoreHref}
            style={{
              backgroundColor: "var(--color-danger)",
              color: "#fff",
              padding: "2px 10px",
              borderRadius: "3px",
              fontSize: "16.8px",
              fontWeight: "400",
              textDecoration: "none",
            }}
          >
            一覧を見る
          </a>
        )}
      </div>
      <div className={`grid grid-cols-2 ${smColClass} gap-3`}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block overflow-hidden"
            style={{ borderRadius: "4px", border: "1px solid #e5e5e5" }}
          >
            <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "8px", fontSize: "12px", fontWeight: "bold", color: "#333", lineHeight: "1.4" }}>{item.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
