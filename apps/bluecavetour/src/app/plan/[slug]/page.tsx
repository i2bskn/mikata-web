import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductJsonLd, BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { generatePlanMetadata } from "@repo/seo/metadata";
import { getPlanBySlug, getAllPlanSlugs, getPopularPlans } from "../../../lib/data/plans";
import { siteConfig } from "../../../lib/site-config";
import { PlanCard } from "@repo/ui/plan-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPlanSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    return { title: "プランが見つかりません" };
  }

  return generatePlanMetadata(
    {
      name: plan.name,
      description: plan.description,
      image: plan.imageUrl,
      slug: plan.slug,
    },
    siteConfig
  );
}

export default async function PlanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  const relatedPlans = getPopularPlans(3).filter((p) => p.slug !== slug);

  return (
    <>
      <ProductJsonLd
        data={{
          name: plan.name,
          description: plan.description,
          image: `${siteConfig.siteUrl}${plan.imageUrl}`,
          url: `${siteConfig.siteUrl}/plan/${plan.slug}`,
          price: plan.price,
          priceCurrency: "JPY",
          availability: "InStock",
          seller: {
            name: siteConfig.siteName,
            url: siteConfig.siteUrl,
          },
          aggregateRating: plan.rating
            ? {
                ratingValue: plan.rating,
                reviewCount: plan.reviewCount ?? 0,
              }
            : undefined,
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "プラン", url: `${siteConfig.siteUrl}/plan` },
          { name: plan.name, url: `${siteConfig.siteUrl}/plan/${plan.slug}` },
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
          <span className="text-gray-900">詳細</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2">
            {/* 画像 */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200">
              <img
                src={plan.imageUrl}
                alt={plan.name}
                className="h-full w-full object-cover"
              />
              {/* タグ */}
              {plan.tags.length > 0 && (
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {plan.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-orange-500 px-3 py-1 text-sm font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* タイトル・評価 */}
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-gray-900">{plan.name}</h1>
              {plan.rating && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">{plan.rating.toFixed(1)}</span>
                  </div>
                  {plan.reviewCount && (
                    <span className="text-gray-500">
                      ({plan.reviewCount}件のレビュー)
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* 説明 */}
            <div className="mt-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                プラン説明
              </h2>
              <p className="text-gray-700 leading-relaxed">{plan.description}</p>
            </div>

            {/* 特徴 */}
            {plan.features.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-lg font-bold text-gray-900">
                  このプランの特徴
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* スケジュール */}
            {plan.schedule.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-lg font-bold text-gray-900">
                  スケジュール
                </h2>
                <div className="space-y-3">
                  {plan.schedule.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-20 flex-shrink-0 font-medium text-blue-600">
                        {item.time}
                      </div>
                      <div className="text-gray-700">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 料金に含まれるもの */}
            {plan.includes.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-lg font-bold text-gray-900">
                  料金に含まれるもの
                </h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {plan.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 注意事項 */}
            {plan.notes && plan.notes.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-lg font-bold text-gray-900">
                  注意事項
                </h2>
                <ul className="space-y-2">
                  {plan.notes.map((note, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-orange-500">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* サイドバー（予約カード） */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ¥{plan.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-blue-600">
                    ¥{plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500">〜 / 人</span>
                </div>
                {plan.originalPrice && (
                  <span className="mt-1 inline-block rounded bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                    {Math.round((1 - plan.price / plan.originalPrice) * 100)}%
                    OFF
                  </span>
                )}
              </div>

              <div className="mb-6 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>所要時間：{plan.duration}</span>
                </div>
                {plan.meetingPoint && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>集合場所：{plan.meetingPoint}</span>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="block w-full rounded-full bg-orange-500 py-4 text-center font-medium text-white transition-colors hover:bg-orange-600"
              >
                予約・空き状況を見る
              </a>

              <p className="mt-4 text-center text-xs text-gray-500">
                ※「予約・空き状況を見る」を押すと姉妹サイト「石垣島ツアーズ」に遷移します
              </p>
            </div>
          </div>
        </div>

        {/* 関連プラン */}
        {relatedPlans.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              おすすめのプラン
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPlans.map((relatedPlan) => (
                <PlanCard
                  key={relatedPlan.slug}
                  name={relatedPlan.name}
                  description={relatedPlan.description}
                  imageUrl={relatedPlan.imageUrl}
                  href={`/plan/${relatedPlan.slug}`}
                  price={relatedPlan.price}
                  originalPrice={relatedPlan.originalPrice}
                  duration={relatedPlan.duration}
                  tags={relatedPlan.tags}
                  rating={relatedPlan.rating}
                  reviewCount={relatedPlan.reviewCount}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
