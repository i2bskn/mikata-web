"use client";

import {
  MenuHeaderMessage,
  QuickLinkGrid,
  SectionGrid,
  FeaturedBanner,
  ExternalSitesGrid,
  InfoLinksGrid,
  MainBannerImage,
  FooterSlider,
  useIsLg,
} from "@repo/ui/drawer-parts";
import { menuConfig } from "../lib/site-config";

const sliderImages = [
  "/images/menu/slider/slide-01.webp",
  "/images/menu/slider/slide-02.webp",
  "/images/menu/slider/slide-03.webp",
  "/images/menu/slider/slide-04.webp",
  "/images/menu/slider/slide-05.webp",
  "/images/menu/slider/slide-06.jpg",
  "/images/menu/slider/slide-07.jpg",
];

export function DrawerMenu() {
  const isLg = useIsLg();
  return (
    <>
      <MenuHeaderMessage isLg={isLg} />
      <QuickLinkGrid items={menuConfig.quickLinks} />
      {menuConfig.featuredBanners[0] && (
        <FeaturedBanner banner={menuConfig.featuredBanners[0]} isLg={isLg} />
      )}
      {menuConfig.sections.map((section) => (
        <SectionGrid
          key={section.title}
          section={section}
          defaultIconUrl="/images/menu/title-icon-c.png"
        />
      ))}
      <ExternalSitesGrid
        title="他の島のツアーもチェック"
        iconUrl={menuConfig.externalSitesIconUrl}
        items={menuConfig.externalSites}
        isLg={isLg}
      />
      {menuConfig.featuredBanners[1] && (
        <FeaturedBanner banner={menuConfig.featuredBanners[1]} isLg={isLg} />
      )}
      <InfoLinksGrid section={menuConfig.infoLinksSection} />
      <MainBannerImage banner={menuConfig.mainBanner} />
      <FooterSlider images={sliderImages} isLg={isLg} />
    </>
  );
}
