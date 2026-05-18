import type { Metadata } from "next";
import { ColumnTopMain } from "@repo/ui/column-top-main";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import {
  categoryNavItems,
  columnArticles,
  columnHeroSlides,
} from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "コラム",
};

export default function ColumnTopPage() {
  const pickupArticles = columnArticles.slice(0, 5);
  const rankingArticles = [...columnArticles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <PageWithSidebarTemplate
      sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
      mainSlot={
        <ColumnTopMain
          heroSlides={columnHeroSlides}
          pickupArticles={pickupArticles}
          rankingArticles={rankingArticles}
          seeAllHref="/column"
        />
      }
    />
  );
}
