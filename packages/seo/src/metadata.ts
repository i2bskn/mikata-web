import type { Metadata } from "next";

export interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  defaultOgImage: string;
  twitterHandle?: string;
}

/**
 * ページのメタデータを生成する
 */
export function generatePageMetadata(
  page: PageMeta,
  site: SiteConfig
): Metadata {
  const title = page.title;
  const description = page.description;
  const ogTitle = page.ogTitle || title;
  const ogDescription = page.ogDescription || description;
  const ogImage = page.ogImage || site.defaultOgImage;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      siteName: site.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
      site: site.twitterHandle,
    },
    alternates: {
      canonical: page.canonical,
    },
    robots: page.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * プラン詳細ページ用のメタデータを生成
 */
export function generatePlanMetadata(
  plan: {
    name: string;
    description: string;
    image?: string;
    slug: string;
  },
  site: SiteConfig
): Metadata {
  return generatePageMetadata(
    {
      title: `${plan.name} | ${site.siteName}`,
      description: plan.description,
      ogImage: plan.image,
      canonical: `${site.siteUrl}/plan/${plan.slug}`,
    },
    site
  );
}

/**
 * コラムページ用のメタデータを生成
 */
export function generateColumnMetadata(
  column: {
    title: string;
    excerpt: string;
    image?: string;
    slug: string;
  },
  site: SiteConfig
): Metadata {
  return generatePageMetadata(
    {
      title: `${column.title} | ${site.siteName}`,
      description: column.excerpt,
      ogImage: column.image,
      canonical: `${site.siteUrl}/column/${column.slug}`,
    },
    site
  );
}
