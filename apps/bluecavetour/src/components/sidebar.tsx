import Link from "next/link";

interface CategoryNavItem {
  label: string;
  href: string;
  iconUrl: string;
  isActive?: boolean;
}

interface SidebarProps {
  categoryNavItems: CategoryNavItem[];
}

export function Sidebar({ categoryNavItems }: SidebarProps) {
  return (
    <aside className="hidden lg:block shrink-0" style={{ width: "225px" }}>
      <div className="sticky" style={{ top: "110px" }}>
        {/* サイドバーカテゴリナビ + 検索フォーム（1つのカード） */}
        <div style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 1px 6px 0px #ccc", overflow: "hidden" }}>
          <div style={{ overflowX: "scroll", whiteSpace: "nowrap", padding: "12px" }}>
            {categoryNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex flex-col items-center text-center"
                style={{
                  width: "80px",
                  padding: "8px 4px",
                  color: item.isActive ? "#1a9edb" : "#333",
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
                <span>{item.label.split("\n")[0]}</span>
              </a>
            ))}
          </div>
          <div style={{ padding: "16px" }}>
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
              <span style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>17</span>
              <span style={{ fontSize: "14px" }}>件</span>
            </div>
          </div>
          <button
            type="button"
            style={{
              width: "100%",
              backgroundColor: "#ed3434",
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
        <div style={{ marginTop: "16px" }}>
          <a href="https://ishigaki-tours.com/ferry/" target="_blank" rel="noopener noreferrer" className="block">
            <img src="/images/sidebar/ferry-banner.webp" alt="離島フェリー予約" style={{ width: "100%", borderRadius: "4px" }} />
          </a>
        </div>
        <div style={{ marginTop: "12px" }}>
          <Link href="/campaign/premium-plan.html" className="block">
            <img src="/images/sidebar/premium-plan-banner.png" alt="ツアーズ厳選プレミアムプラン" style={{ width: "100%", borderRadius: "4px" }} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
