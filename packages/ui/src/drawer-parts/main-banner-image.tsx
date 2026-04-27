import type { FC } from "react";
import type { MenuMainBanner } from "./types";

type MainBannerImageProps = {
  banner: MenuMainBanner;
  onItemClick?: () => void;
};

export const MainBannerImage: FC<MainBannerImageProps> = ({ banner, onItemClick }) => {
  return (
    <div style={{ padding: "0 15px 12px" }}>
      <a href={banner.href} onClick={onItemClick} style={{ display: "block" }}>
        <img
          src={banner.imageUrl}
          alt={banner.alt}
          style={{ width: "100%", borderRadius: "4px" }}
        />
      </a>
    </div>
  );
};
