type StickyPhotoBannerProps = {
  href?: string;
  label?: string;
  badge?: string;
  backgroundColor?: string;
  hidden?: boolean;
};

export function StickyPhotoBanner({
  href = "/scene-time/freetourphotos.html",
  label = "写真撮影付きツアー",
  badge = "高画質データ無料プレゼント！",
  backgroundColor = "var(--color-primary)",
  hidden = true,
}: StickyPhotoBannerProps) {
  if (hidden) return null;

  return (
    <a
      href={href}
      className="lg:hidden fixed left-0 right-0 flex items-center justify-center"
      style={{
        bottom: 0,
        backgroundColor,
        color: "#fff",
        padding: "8px 16px",
        fontSize: "13px",
        fontWeight: "bold",
        textDecoration: "none",
        zIndex: 50,
        gap: "8px",
      }}
    >
      <span>{label}</span>
      <span
        style={{
          fontSize: "11px",
          backgroundColor: "#f08300",
          padding: "2px 8px",
          borderRadius: "3px",
        }}
      >
        {badge}
      </span>
    </a>
  );
}
