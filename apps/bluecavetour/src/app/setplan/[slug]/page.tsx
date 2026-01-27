import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PlanCard } from "@repo/ui/plan-card";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import {
  getSetPlanBySlug,
  getRelatedPlans,
  getAllSetPlanSlugs,
} from "../../../lib/data/setplans";
import { siteConfig } from "../../../lib/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSetPlanSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // .html拡張子を除去してスラッグを取得
  const cleanSlug = slug.replace(/\.html$/, "");
  const setplan = getSetPlanBySlug(cleanSlug);

  if (!setplan) {
    return { title: "セットプランが見つかりません" };
  }

  return {
    title: `【2026年最新】${setplan.title}を比較＆予約`,
    description: setplan.metaDescription,
    openGraph: {
      title: `【2026年最新】${setplan.title}を比較＆予約 | ${siteConfig.siteName}`,
      description: setplan.metaDescription,
      images: [setplan.imageUrl],
    },
  };
}

export default async function SetPlanPage({ params }: PageProps) {
  const { slug } = await params;
  // .html拡張子を除去してスラッグを取得
  const cleanSlug = slug.replace(/\.html$/, "");
  const setplan = getSetPlanBySlug(cleanSlug);

  if (!setplan) {
    notFound();
  }

  const relatedPlans = getRelatedPlans(setplan);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "セットプラン", url: `${siteConfig.siteUrl}/setplan` },
          {
            name: setplan.title,
            url: `${siteConfig.siteUrl}/setplan/${cleanSlug}.html`,
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* パンくずリスト */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/plan" className="hover:text-blue-600">
            プラン
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{setplan.title}</span>
        </nav>

        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {setplan.title}
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {setplan.description}
          </p>
        </div>

        {/* セットプランの特徴 */}
        <div className="mb-8 rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            このセットプランの魅力
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>1日で複数のアクティビティを体験</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>別々に予約するよりお得</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>移動やスケジュール調整不要</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>写真無料＆送迎付きプラン多数</span>
            </li>
          </ul>
        </div>

        {/* 関連プラン一覧 */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            おすすめのプラン
          </h2>
          {relatedPlans.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPlans.map((plan) => (
                <PlanCard
                  key={plan.slug}
                  name={plan.name}
                  description={plan.description}
                  imageUrl={plan.imageUrl}
                  href={`/plan/${plan.slug}`}
                  price={plan.price}
                  originalPrice={plan.originalPrice}
                  duration={plan.duration}
                  tags={plan.tags}
                  rating={plan.rating}
                  reviewCount={plan.reviewCount}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              関連するプランが見つかりませんでした
            </p>
          )}
        </div>

        {/* 全プランへのリンク */}
        <div className="mt-12 text-center">
          <Link
            href="/plan"
            className="inline-block rounded-full border-2 border-blue-600 px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
          >
            すべてのプランを見る
          </Link>
        </div>
      </div>
    </>
  );
}
