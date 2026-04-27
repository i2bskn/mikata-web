type FloatingSaleButtonProps = {
  href?: string;
  hidden?: boolean;
};

export function FloatingSaleButton({ href = "/pickup_item", hidden = true }: FloatingSaleButtonProps) {
  if (hidden) return null;

  return (
    <a
      href={href}
      className="hidden lg:flex fixed flex-col items-center"
      style={{
        bottom: "20px",
        right: "20px",
        backgroundColor: "var(--color-danger)",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px 16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        textDecoration: "none",
        zIndex: 50,
        gap: "4px",
      }}
    >
      <span style={{ fontSize: "10px", fontWeight: "bold" }}>＼ 会員登録不要 ／</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
      <span style={{ fontSize: "13px", fontWeight: "bold" }}>特集・SALE</span>
      <span style={{ fontSize: "13px", fontWeight: "bold" }}>情報を見る</span>
    </a>
  );
}
