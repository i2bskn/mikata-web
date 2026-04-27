import type { FC } from "react";
import type { MenuFeaturedBanner } from "./types";

type FeaturedBannerProps = {
  banner: MenuFeaturedBanner;
  isLg?: boolean;
  onItemClick?: () => void;
};

export const FeaturedBanner: FC<FeaturedBannerProps> = ({ banner, isLg, onItemClick }) => {
  const iconSize = isLg ? "15px" : "45px";
  return (
    <div style={{ padding: "0 15px 25px" }}>
      <a
        href={banner.href}
        onClick={onItemClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 12px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#666",
        }}
      >
        <img
          src={banner.iconUrl}
          alt=""
          style={{ width: iconSize, height: iconSize, objectFit: "contain" }}
        />
        <div style={{ flex: 1 }}>
          {banner.subtitle && (
            <div style={{ fontSize: "12px", fontWeight: 500, color: "#666" }}>{banner.subtitle}</div>
          )}
          {banner.subtitle2 && (
            <div style={{ fontSize: "12px", fontWeight: 500, color: "#666" }}>{banner.subtitle2}</div>
          )}
          <div
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#666",
              marginTop: banner.subtitle2 ? "2px" : 0,
            }}
          >
            {banner.title}
          </div>
        </div>
      </a>
    </div>
  );
};
