export interface RelatedSiteItem {
  href: string;
  image: string;
  alt: string;
}

export interface RelatedSitesGridProps {
  items: RelatedSiteItem[];
  title?: string;
}

export function RelatedSitesGrid({ items, title = "関連情報" }: RelatedSitesGridProps) {
  return (
    <section style={{ marginTop: "20px" }}>
      <h2
        style={{
          fontSize: "21.6px",
          fontWeight: 600,
          color: "#212529",
          lineHeight: "1.2",
          marginBottom: "16px",
          borderBottom: "4px solid var(--color-primary)",
          paddingBottom: "10px",
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <a
              key={item.alt}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="block overflow-hidden"
              style={{ borderRadius: "4px" }}
            >
              <img src={item.image} alt={item.alt} style={{ width: "100%", height: "auto", display: "block" }} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
