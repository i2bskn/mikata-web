export interface CampaignItem {
  href: string;
  image: string;
  title: string;
}

export interface CampaignSectionProps {
  items: CampaignItem[];
  title?: string;
  iconUrl?: string;
}

export function CampaignSection({
  items,
  title = "おすすめ観光情報＆キャンペーン",
  iconUrl = "/images/icons/flag.svg",
}: CampaignSectionProps) {
  return (
    <section style={{ marginTop: "20px" }}>
      <h2
        className="flex items-center gap-2"
        style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2", marginBottom: "12px" }}
      >
        <img src={iconUrl} alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
        {title}
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollSnapType: "x mandatory" }}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block shrink-0 overflow-hidden"
            style={{ width: "160px", scrollSnapAlign: "start", borderRadius: "4px", border: "1px solid #e5e5e5" }}
          >
            <div style={{ width: "160px", height: "89px", overflow: "hidden" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "8px", fontSize: "12px", fontWeight: "bold", color: "#333", lineHeight: "1.4" }}>{item.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
