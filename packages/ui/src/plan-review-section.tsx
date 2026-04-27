import type { FC, ReactNode } from "react";

export type ReviewItem = {
  id: string;
  username: string;
  ageGroup: string;
  postedAt: string;
  rating: number;
  text: string;
};

export type ReviewDemographic = {
  ageGroup: string;
  percentage: number;
  color?: string;
};

export type PlanReviewSectionProps = {
  reviews: ReviewItem[];
  demographics: ReviewDemographic[];
  perPage?: number;
  accentColor?: string;
  title?: string;
  postReviewLabel?: string;
  /** 口コミ件数（指定がない場合は reviews.length を使用） */
  totalCount?: number;
};

const DEFAULT_AGE_COLORS: Record<string, string> = {
  "～10代": "#86dcf0",
  "10代": "#86dcf0",
  "20代": "#f7c022",
  "30代": "#ed5c3a",
  "40代": "#7fbf3f",
  "50代": "#3a8fd6",
  "60代～": "#9c4dcc",
  "60代~": "#9c4dcc",
};

const AGE_OPTIONS = ["～10代", "20代", "30代", "40代", "50代", "60代～"] as const;

const ChatIcon: FC<{ color?: string }> = ({ color = "#7a8794" }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Star: FC<{ filled: boolean; size?: number }> = ({ filled, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <polygon
      points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"
      fill={filled ? "#f7b500" : "#e0e0e0"}
    />
  </svg>
);

const StarRow: FC<{ rating: number }> = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <span className="inline-flex items-center" style={{ gap: "1px" }}>
      {stars.map((s) => (
        <Star key={s} filled={s <= Math.round(rating)} />
      ))}
      <span style={{ marginLeft: "6px", fontSize: "13px", fontWeight: 600, color: "#333" }}>{rating}</span>
    </span>
  );
};

function buildConicGradient(items: { color: string; percentage: number }[]): string {
  const stops: string[] = [];
  let acc = 0;
  for (const item of items) {
    if (item.percentage <= 0) continue;
    const start = acc;
    const end = acc + item.percentage;
    stops.push(`${item.color} ${start}% ${end}%`);
    acc = end;
  }
  if (stops.length === 0) {
    return "conic-gradient(#e0e0e0 0% 100%)";
  }
  return `conic-gradient(${stops.join(", ")})`;
}

const FieldLabel: FC<{ children: ReactNode; required?: boolean }> = ({ children, required }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
    <span style={{ fontSize: "14px", fontWeight: 700, color: "#212529" }}>{children}</span>
    {required && (
      <span
        style={{
          display: "inline-block",
          padding: "1px 6px",
          fontSize: "11px",
          color: "#ed3434",
          border: "1px solid #ed3434",
          borderRadius: "3px",
          fontWeight: 600,
        }}
      >
        必須
      </span>
    )}
  </div>
);

const inputStyle = {
  width: "100%",
  padding: "8px 10px",
  border: "1px solid #ced4da",
  borderRadius: "3px",
  fontSize: "14px",
  color: "#333",
  backgroundColor: "#fff",
  boxSizing: "border-box" as const,
};

export const PlanReviewSection: FC<PlanReviewSectionProps> = ({
  reviews,
  demographics,
  perPage = 8,
  accentColor = "#1a9edb",
  title = "口コミ",
  postReviewLabel = "口コミ・体験談を投稿する",
  totalCount,
}) => {
  const totalPages = Math.max(1, Math.ceil(reviews.length / perPage));
  const visible = reviews.slice(0, perPage);
  const colored = demographics.map((d) => ({
    ...d,
    color: d.color ?? DEFAULT_AGE_COLORS[d.ageGroup] ?? "#cccccc",
  }));
  const count = totalCount ?? reviews.length;

  return (
    <section style={{ marginTop: "20px" }} id="reviews">
      <h2
        className="flex items-center"
        style={{
          fontSize: "21.6px",
          fontWeight: 600,
          color: "#212529",
          lineHeight: "1.2",
          marginBottom: "12px",
          gap: "8px",
        }}
      >
        <ChatIcon />
        {title}
      </h2>

      <div
        style={{
          backgroundColor: "#eef6ff",
          padding: "20px 16px",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 700,
              color: "#212529",
              marginBottom: "16px",
            }}
          >
            こんな年齢層のお客様が参加されています!
          </p>
          <div
            className="flex items-center justify-center"
            style={{ gap: "32px", flexWrap: "wrap" }}
          >
            <div
              aria-label="年齢層の構成比"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: buildConicGradient(colored),
                flexShrink: 0,
              }}
            />
            <div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#212529", marginBottom: "8px" }}>
                【口コミ投稿割合】
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {colored.map((d) => (
                  <li
                    key={d.ageGroup}
                    className="flex items-center"
                    style={{ gap: "8px", fontSize: "14px", color: "#333", padding: "2px 0" }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: d.color,
                        display: "inline-block",
                      }}
                    />
                    <span>
                      {d.ageGroup} - {d.percentage}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <details style={{ marginBottom: "16px" }}>
          <summary
            className="flex items-center justify-between flex-wrap"
            style={{
              listStyle: "none",
              cursor: "pointer",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "16px", fontWeight: 600, color: accentColor }}>
              全{count} 件
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                backgroundColor: accentColor,
                color: "#fff",
                padding: "8px 18px",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" />
              </svg>
              {postReviewLabel}
            </span>
          </summary>

          <form
            action="#"
            style={{
              backgroundColor: "#fff",
              padding: "16px",
              borderRadius: "4px",
              marginTop: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div>
              <FieldLabel>ニックネーム（任意）</FieldLabel>
              <input type="text" style={inputStyle} placeholder="ユーザー_xxxx" />
            </div>

            <div>
              <FieldLabel required>メールアドレス</FieldLabel>
              <input type="email" style={inputStyle} />
              <p style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>
                メールアドレスが公開されることはありません。
              </p>
            </div>

            <div>
              <FieldLabel>年齢</FieldLabel>
              <select style={inputStyle} defaultValue="20代">
                {AGE_OPTIONS.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <FieldLabel required>総合評価</FieldLabel>
              <div style={{ display: "flex", gap: "4px" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} filled={false} size={28} />
                ))}
              </div>
            </div>

            <div>
              <FieldLabel required>口コミ内容</FieldLabel>
              <textarea
                rows={6}
                style={{ ...inputStyle, resize: "vertical" }}
                placeholder="コメント"
              />
            </div>

            <div>
              <FieldLabel>体験/利用中の写真（任意）</FieldLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[0, 1, 2].map((i) => (
                  <input key={i} type="file" accept="image/*" style={{ fontSize: "13px" }} />
                ))}
              </div>
              <p style={{ fontSize: "12px", color: "#666", marginTop: "6px" }}>
                ※アップロード可能な画像は5MB以下に限ります。
              </p>
              <p style={{ fontSize: "13px", color: "#f08300", marginTop: "4px" }}>
                素敵な写真付きでの投稿をお待ちしています☆
              </p>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: accentColor,
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              口コミを投稿する
            </button>
          </form>
        </details>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {visible.map((review) => (
            <article
              key={review.id}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e6e6e6",
                borderRadius: "4px",
                padding: "12px 16px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="flex items-center justify-between flex-wrap"
                style={{ gap: "8px", marginBottom: "6px" }}
              >
                <div className="flex items-center" style={{ gap: "10px", flexWrap: "wrap" }}>
                  <StarRow rating={review.rating} />
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#212529" }}>
                    {review.username}
                  </span>
                  <span style={{ fontSize: "13px", color: "#666" }}>/ {review.ageGroup}</span>
                </div>
                <span style={{ fontSize: "12px", color: "#999" }}>投稿月：{review.postedAt}</span>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#333",
                  lineHeight: "1.6",
                  margin: 0,
                  whiteSpace: "pre-wrap",
                }}
              >
                {review.text}
              </p>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div
            className="flex items-center justify-center"
            style={{ gap: "6px", marginTop: "16px", fontSize: "14px" }}
          >
            <span style={{ color: "#666", marginRight: "8px" }}>
              1/{totalPages}
            </span>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              const isActive = p === 1;
              return (
                <span
                  key={p}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "28px",
                    height: "28px",
                    padding: "0 8px",
                    border: `1px solid ${accentColor}`,
                    borderRadius: "3px",
                    backgroundColor: isActive ? accentColor : "#fff",
                    color: isActive ? "#fff" : accentColor,
                    fontWeight: 600,
                  }}
                >
                  {p}
                </span>
              );
            })}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px",
                border: `1px solid ${accentColor}`,
                borderRadius: "3px",
                color: accentColor,
                fontWeight: 600,
              }}
            >
              &gt;
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
