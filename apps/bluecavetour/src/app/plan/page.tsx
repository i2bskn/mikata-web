import type { Metadata } from "next";
import { PlanCard } from "@repo/ui/plan-card";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { plans } from "../../lib/data/plans";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "プラン一覧",
  description:
    "石垣島 青の洞窟ツアーの全プラン一覧。シュノーケリング、SUP、カヤック、セットプランなど豊富なアクティビティからお選びいただけます。",
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function PlanListPage({ searchParams }: PageProps) {
  const { category } = await searchParams;

  const filteredPlans = category
    ? plans.filter((plan) => plan.category === category)
    : plans;

  const categoryLabels: Record<string, string> = {
    bluecave: "青の洞窟シュノーケリング",
    kayak: "カヤック",
    setplan: "セットプラン",
    charter: "チャーター",
    "marine-sports": "マリンスポーツ",
    glassboat: "グラスボート",
    "hama-island": "浜島",
  };

  const pageTitle = category
    ? `${categoryLabels[category] ?? category}のプラン`
    : "プラン一覧";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "プラン", url: `${siteConfig.siteUrl}/plan` },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {pageTitle}
          </h1>
          <p className="mt-2 text-gray-600">
            {filteredPlans.length}件のプランが見つかりました
          </p>
        </div>

        {/* カテゴリフィルター */}
        <div className="mb-8 flex flex-wrap gap-2">
          <CategoryButton href="/plan" active={!category}>
            すべて
          </CategoryButton>
          <CategoryButton
            href="/plan?category=bluecave"
            active={category === "bluecave"}
          >
            青の洞窟
          </CategoryButton>
          <CategoryButton
            href="/plan?category=kayak"
            active={category === "kayak"}
          >
            カヤック
          </CategoryButton>
          <CategoryButton
            href="/plan?category=setplan"
            active={category === "setplan"}
          >
            セットプラン
          </CategoryButton>
          <CategoryButton
            href="/plan?category=charter"
            active={category === "charter"}
          >
            チャーター
          </CategoryButton>
          <CategoryButton
            href="/plan?category=marine-sports"
            active={category === "marine-sports"}
          >
            マリンスポーツ
          </CategoryButton>
        </div>

        {/* プラン一覧 */}
        {filteredPlans.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlans.map((plan) => (
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
          <div className="py-16 text-center">
            <p className="text-gray-500">該当するプランが見つかりませんでした</p>
          </div>
        )}
      </div>
    </>
  );
}

function CategoryButton({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </a>
  );
}
