export interface ConditionSearchItem {
  label: string;
  options?: string[];
}

export interface ConditionSearchProps {
  items: ConditionSearchItem[];
  iconUrl?: string;
}

export function ConditionSearch({ items, iconUrl }: ConditionSearchProps) {
  return (
    <section style={{ marginTop: "20px" }}>
      <h2
        className="flex items-center gap-2"
        style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2", marginBottom: "12px" }}
      >
        {iconUrl && (
          <img src={iconUrl} alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
        )}
        条件から探す
      </h2>
      {items.map((item) => (
        <details key={item.label} className="group" style={{ borderTop: "1px solid #d0d0d0" }}>
          <summary
            style={{
              padding: "10px 10px",
              fontSize: "16.8px",
              fontWeight: 600,
              color: "#333",
              cursor: "pointer",
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {item.label}
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#84929B"
              strokeWidth="3"
              className="transition-transform group-open:rotate-180"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          {item.options && item.options.length > 0 && (
            <div style={{ backgroundColor: "var(--color-decoration-2)", padding: "10px 15px" }}>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px", margin: 0, padding: 0, listStyle: "none" }}>
                {item.options.map((opt) => (
                  <li key={opt}>
                    <label style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "14px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "14px", height: "14px" }} />
                      {opt}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </details>
      ))}

      <div style={{ borderTop: "1px solid #D0D0D0", paddingTop: "10px", marginTop: "10px", textAlign: "center" }}>
        <button
          type="button"
          style={{
            backgroundColor: "var(--color-danger)",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "3px 0",
            fontSize: "28.8px",
            fontWeight: 600,
            cursor: "pointer",
            display: "block",
            width: "100%",
            maxWidth: "320px",
            margin: "0 auto",
          }}
        >
          検索する
        </button>
      </div>
    </section>
  );
}
