export interface SidebarCategoryNavItem {
  label: string;
  href: string;
  iconUrl: string;
  isActive?: boolean;
}

export interface SidebarBanner {
  href: string;
  imageUrl: string;
  alt: string;
  external?: boolean;
}

export interface SidebarProps {
  categoryNavItems: SidebarCategoryNavItem[];
  planCount: number;
  banners: SidebarBanner[];
}

export function Sidebar({ categoryNavItems, planCount, banners }: SidebarProps) {
  return (
    <aside className="hidden lg:block shrink-0" style={{ width: "225px", paddingRight: "25px" }}>
      <div className="sticky" style={{ top: "110px" }}>
        {/* サイドバーカテゴリナビ + 検索フォーム（1つのカード） */}
        <div style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 1px 6px 0px #ccc", overflow: "hidden", padding: "15px", marginBottom: "20px" }}>
          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            {categoryNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex flex-col items-center text-center"
                style={{
                  width: "80px",
                  padding: "8px 4px",
                  color: "#333",
                  borderBottom: item.isActive ? "3px solid #f08300" : "3px solid transparent",
                  fontSize: "11px",
                  whiteSpace: "normal",
                  verticalAlign: "top",
                }}
              >
                <img
                  src={item.iconUrl}
                  alt={item.label.split("\n")[0]}
                  width={28}
                  height={28}
                  style={{ width: "28px", height: "28px", objectFit: "contain" }}
                />
                <span style={{ whiteSpace: "pre-line" }}>{item.label}</span>
              </a>
            ))}
          </div>
          <div style={{ paddingTop: "10px" }}>
          <select
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            <option>全てのプラン</option>
          </select>
          <input
            type="text"
            placeholder="日付未定"
            readOnly
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          />
          <div className="flex items-center gap-3" style={{ fontSize: "12px", color: "#333", marginBottom: "10px" }}>
            <label className="flex items-center gap-1">
              <input type="checkbox" />
              <span>今日</span>
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" />
              <span>明日</span>
            </label>
            <button type="button" style={{ fontSize: "11px", color: "#666", background: "none", border: "none" }}>
              ＋さらに絞り込む
            </button>
          </div>
          <div style={{ textAlign: "center", color: "#666", fontSize: "13px", marginBottom: "10px" }}>
            該当プラン数
            <div>
              <span style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>{planCount}</span>
              <span style={{ fontSize: "14px" }}>件</span>
            </div>
          </div>
          <button
            type="button"
            style={{
              width: "100%",
              backgroundColor: "var(--color-danger)",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            検索する
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          </div>
        </div>

        {/* サイドバーバナー広告 */}
        {banners.map((banner, i) => (
          <div key={banner.imageUrl} style={{ marginTop: i === 0 ? "16px" : "12px" }}>
            <a
              href={banner.href}
              {...(banner.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block"
            >
              <img src={banner.imageUrl} alt={banner.alt} style={{ width: "100%", borderRadius: "4px" }} />
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}
