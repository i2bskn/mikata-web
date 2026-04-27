import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ColumnDetailMain } from "@repo/ui/column-detail-main";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import {
  categoryNavItems,
  columnArticles,
  columnAuthor,
  columnArticleSampleBody,
  siteConfig,
} from "../../../lib/site-config";
import { Sidebar } from "../../../components/sidebar";
import { SearchResultsBottom } from "../../../components/search-results-bottom";

const RANKING_LIMIT = 5;

type Params = { slug: string };

function findArticleBySlug(slug: string) {
  return columnArticles.find((a) => a.href === `/column/${slug}`);
}

export function generateStaticParams(): Params[] {
  return columnArticles.map((a) => ({ slug: a.href.replace("/column/", "") }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = findArticleBySlug(params.slug);
  if (!article) return {};
  return { title: article.title };
}

export default function ColumnDetailPage({ params }: { params: Params }) {
  const article = findArticleBySlug(params.slug);
  if (!article) notFound();

  const rankingArticles = [...columnArticles]
    .sort((a, b) => b.views - a.views)
    .slice(0, RANKING_LIMIT);

  const shareUrl = `${siteConfig.siteUrl}${article.href}`;

  return (
    <PageWithSidebarTemplate
      sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
      mainSlot={
        <ColumnDetailMain
          title={article.title}
          date={article.date}
          views={article.views}
          heroImage={article.image}
          bodyHtml={columnArticleSampleBody}
          shareUrl={shareUrl}
          shareTitle={article.title}
          author={columnAuthor}
          rankingArticles={rankingArticles}
        />
      }
      bottomSectionsSlot={<SearchResultsBottom />}
    />
  );
}
