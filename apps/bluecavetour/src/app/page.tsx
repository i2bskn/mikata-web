import Link from "next/link";
import { PlanCard } from "@repo/ui/plan-card";
import { HeroBanner } from "@repo/ui/hero-banner";
import { CategoryNav } from "@repo/ui/category-nav";
import { OrganizationJsonLd } from "@repo/seo/json-ld";
import { getPopularPlans } from "../lib/data/plans";
import { siteConfig } from "../lib/site-config";

// ヒーローバナーのスライドデータ
const heroSlides = [
  {
    imageUrl: "/images/banner/hero-1.jpg",
    alt: "石垣島 青の洞窟シュノーケリング",
  },
  {
    imageUrl: "/images/banner/hero-2.jpg",
    alt: "透明度抜群の海でカヤック体験",
  },
  {
    imageUrl: "/images/banner/hero-3.jpg",
    alt: "ウミガメに出会えるツアー",
  },
];

// カテゴリナビのアイテム
const categoryNavItems = [
  { label: "人気ランキング", href: "/ranking", icon: "ranking" as const },
  { label: "アクティビティ", href: "/plan", icon: "activity" as const },
  { label: "シーン・時間帯", href: "/category/scene-time", icon: "time" as const },
  { label: "セットプラン", href: "/category/setplan", icon: "combo" as const },
  { label: "キャンペーン", href: "/category/campaign", icon: "campaign" as const },
];

export default function HomePage() {
  const popularPlans = getPopularPlans(6);

  return (
    <>
      <OrganizationJsonLd
        data={{
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/logo.png`,
          description:
            "石垣島の人気スポット「青の洞窟」ツアー特化サイト。シュノーケリング、SUP、カヤックなど多彩なアクティビティを提供。",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* 2カラムレイアウト */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* メインコンテンツ */}
          <div className="flex-1">
            {/* ヒーローバナー */}
            <HeroBanner slides={heroSlides} autoPlayInterval={5000} />

            {/* カテゴリナビゲーション */}
            <div className="mt-6">
              <CategoryNav items={categoryNavItems} />
            </div>

            {/* 検索フォーム */}
            <div className="mt-6 rounded-lg bg-white p-4 shadow-sm border">
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                ツアーを検索
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    アクティビティ
                  </label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">すべて</option>
                    <option value="bluecave">青の洞窟シュノーケリング</option>
                    <option value="kayak">カヤック</option>
                    <option value="setplan">セットプラン</option>
                    <option value="charter">チャーター</option>
                    <option value="marine-sports">マリンスポーツ</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    参加日
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  >
                    検索する
                  </button>
                </div>
              </div>
            </div>

            {/* 人気プランセクション */}
            <section className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  人気ツアーランキング
                </h2>
                <Link
                  href="/ranking"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  すべて見る →
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {popularPlans.map((plan, index) => (
                  <div key={plan.slug} className="relative">
                    {/* ランキングバッジ */}
                    <div className="absolute -left-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                    <PlanCard
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
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* サイドバー */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="space-y-6">
              {/* プレミアムプランバナー */}
              <Link
                href="/campaign/premium-plan.html"
                className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
                  <div className="text-xs font-medium uppercase tracking-wider opacity-90">
                    Premium Plan
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    プレミアムプラン
                  </h3>
                  <p className="mt-2 text-sm opacity-90">
                    厳選された高品質ツアーをご紹介
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium">
                    詳しく見る →
                  </span>
                </div>
              </Link>

              {/* 写真無料サービス */}
              <Link
                href="/scene-time/freetourphotos.html"
                className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary to-blue-600 p-6 text-white">
                  <div className="text-3xl mb-2">📸</div>
                  <h3 className="text-lg font-bold">
                    写真データ無料プレゼント
                  </h3>
                  <p className="mt-2 text-sm opacity-90">
                    ツアー中の写真を無料でお渡し
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium">
                    対象プランを見る →
                  </span>
                </div>
              </Link>

              {/* 当日予約 */}
              <Link
                href="/scene-time/same_day_booking.html"
                className="block overflow-hidden rounded-lg border bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="font-bold text-gray-900">当日予約OK</h3>
                    <p className="text-sm text-gray-600">
                      今日参加できるプラン
                    </p>
                  </div>
                </div>
              </Link>

              {/* セットプラン */}
              <div className="rounded-lg border bg-white p-4 shadow-md">
                <h3 className="mb-4 font-bold text-gray-900">
                  人気の組み合わせ
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/setplan/bluecave-sup-kayak.html"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary"
                    >
                      <span className="text-primary">▶</span>
                      青の洞窟×SUP・カヤック
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/setplan/bluecave-mangrove.html"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary"
                    >
                      <span className="text-primary">▶</span>
                      青の洞窟×マングローブ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/setplan/bluecave-kabirabay.html"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary"
                    >
                      <span className="text-primary">▶</span>
                      青の洞窟×川平湾
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 高評価ツアー */}
              <div className="rounded-lg border bg-white p-4 shadow-md">
                <h3 className="mb-4 font-bold text-gray-900">
                  高評価ツアー
                </h3>
                <ul className="space-y-3">
                  {popularPlans.slice(0, 3).map((plan) => (
                    <li key={plan.slug}>
                      <Link
                        href={`/plan/${plan.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded bg-gray-200">
                          <img
                            src={plan.imageUrl}
                            alt={plan.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-2">
                            {plan.name}
                          </p>
                          {plan.rating && (
                            <div className="mt-1 flex items-center gap-1">
                              <svg
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-xs text-gray-600">
                                {plan.rating.toFixed(1)}
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* アクティビティカテゴリセクション */}
        <section className="mt-12 rounded-lg bg-blue-50 p-6">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
            アクティビティから探す
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              href="/plan?category=bluecave"
              title="青の洞窟シュノーケリング"
              description="人気No.1の定番ツアー"
              icon="🏊"
            />
            <CategoryCard
              href="/plan?category=kayak"
              title="カヤック"
              description="2人乗りで楽しむ海上散歩"
              icon="🚣"
            />
            <CategoryCard
              href="/plan?category=setplan"
              title="セットプラン"
              description="1日で複数体験をお得に"
              icon="⭐"
            />
            <CategoryCard
              href="/plan?category=charter"
              title="チャーター"
              description="貸切で自由なプラン"
              icon="👑"
            />
          </div>
        </section>

        {/* CTAセクション */}
        <section className="mt-12 rounded-lg bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">
            石垣島で最高の思い出を作りませんか？
          </h2>
          <p className="mb-6 opacity-90">
            会員登録不要で簡単予約。当日予約も対応しています。
          </p>
          <Link
            href="/plan"
            className="inline-block rounded-full bg-accent px-10 py-3 text-lg font-medium text-white transition-opacity hover:opacity-90"
          >
            ツアーを予約する
          </Link>
        </section>
      </div>
    </>
  );
}

function CategoryCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
