import type { FC } from "react";
import type { MenuStatusBanner } from "./types";

type StatusBannerProps = {
  banner: MenuStatusBanner;
};

export const StatusBanner: FC<StatusBannerProps> = ({ banner }) => {
  return (
    <div style={{ padding: "0 15px 15px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 12px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "rgba(204, 204, 204, 0.32) 0px 1px 10px 3px",
        }}
      >
        {banner.iconUrl && (
          <img
            src={banner.iconUrl}
            alt=""
            style={{ width: "28px", height: "28px", objectFit: "contain", flexShrink: 0 }}
          />
        )}
        {banner.badge && (
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#fff",
              backgroundColor: "var(--color-accent, #f08300)",
              padding: "2px 8px",
              borderRadius: "3px",
              flexShrink: 0,
            }}
          >
            {banner.badge}
          </span>
        )}
        {banner.hours && (
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#666", flexShrink: 0 }}>
            {banner.hours}
          </span>
        )}
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#666", lineHeight: 1.3 }}>
          {banner.message}
        </span>
      </div>
    </div>
  );
};
