export interface CombinationItem {
  href: string;
  title: string;
  image: string;
}

export interface CombinationSectionProps {
  items: CombinationItem[];
  title?: string;
  iconUrl?: string;
  seeMoreHref?: string;
}

export function CombinationSection({
  items,
  title = "人気の組み合わせから探す",
  iconUrl,
  seeMoreHref = "/category/setplan",
}: CombinationSectionProps) {
  return (
    <section style={{ marginTop: "20px", padding: "16px" }}>
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
        <a
          href={seeMoreHref}
          style={{
            backgroundColor: "#ed3434",
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
      </div>
      <div className="flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block overflow-hidden shrink-0 w-[150px] sm:w-auto"
            style={{ borderRadius: "4px", backgroundColor: "#fff", border: "1px solid #e5e5e5" }}
          >
            <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "10px", fontSize: "13px", fontWeight: "bold", color: "#333" }}>{item.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
