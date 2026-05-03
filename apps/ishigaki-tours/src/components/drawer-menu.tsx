"use client";

import {
  MenuHeaderMessage,
  StatusBanner,
  QuickLinkGrid,
  SectionGrid,
  FeaturedBanner,
  MainBannerImage,
  FooterSlider,
  useIsLg,
} from "@repo/ui/drawer-parts";
import { menuConfig } from "../lib/site-config";

export function DrawerMenu() {
  const isLg = useIsLg();
  return (
    <>
      <MenuHeaderMessage isLg={isLg} />
      <StatusBanner banner={menuConfig.statusBanner} />
      <QuickLinkGrid items={menuConfig.quickLinks} />
      {menuConfig.sections[0] && (
        <SectionGrid
          section={menuConfig.sections[0]}
          defaultIconUrl="/images/menu/title-icon-c.png"
        />
      )}
      {menuConfig.featuredBanners[0] && (
        <FeaturedBanner banner={menuConfig.featuredBanners[0]} isLg={isLg} />
      )}
      {menuConfig.sections[1] && <SectionGrid section={menuConfig.sections[1]} />}
      {menuConfig.mainBanners.map((banner) => (
        <MainBannerImage key={banner.imageUrl} banner={banner} />
      ))}
      <FooterSlider images={menuConfig.sliderImages} isLg={isLg} />
    </>
  );
}
