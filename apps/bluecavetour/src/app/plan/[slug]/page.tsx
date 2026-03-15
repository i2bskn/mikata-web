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

      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 10px" }}>
        {/* パンくずリスト - 既存サイト準拠 */}
        <nav style={{ padding: "10px 0", fontSize: "12px", color: "#999" }}>
          <Link href="/" style={{ color: "#999", textDecoration: "none" }}>ホーム</Link>
          <span style={{ margin: "0 5px" }}>&gt;</span>
          <Link href="/plan" style={{ color: "#999", textDecoration: "none" }}>プラン</Link>
          <span style={{ margin: "0 5px" }}>&gt;</span>
          <span style={{ color: "#666" }}>{plan.name.substring(0, 30)}...</span>
        </nav>

        {/* メインレイアウト */}
        <div className="flex gap-5">
          {/* 左サイドバー - PCのみ */}
          <aside className="hidden lg:block shrink-0" style={{ width: "225px" }}>
            <div className="sticky" style={{ top: "110px" }}>
              {/* サイドバーバナー */}
              <div style={{ marginTop: "16px" }}>
                <a href="https://ishigaki-tours.com/ferry/" target="_blank" rel="noopener noreferrer" className="block">
                  <img src="/images/sidebar/ferry-banner.webp" alt="離島フェリー予約" style={{ width: "100%", borderRadius: "4px" }} />
                </a>
              </div>
              <div style={{ marginTop: "12px" }}>
                <Link href="/campaign/premium-plan.html" className="block">
                  <img src="/images/sidebar/premium-plan-banner.png" alt="ツアーズ厳選プレミアムプラン" style={{ width: "100%", borderRadius: "4px" }} />
                </Link>
              </div>
            </div>
          </aside>

          {/* メインコンテンツ */}
          <div className="flex-1 min-w-0">
            {/* ヒーロー画像 */}
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                <img
                  src={plan.imageUrl}
                  alt={plan.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* タグバッジ */}
              {plan.tags.length > 0 && (
                <div style={{ position: "absolute", left: "10px", top: "10px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  {plan.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "#f08300",
                        color: "#fff",
                        padding: "3px 10px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        borderRadius: "3px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* タイトル */}
            <h1 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginTop: "12px", lineHeight: "1.5" }}>
              {plan.name}
            </h1>

            {/* 価格表示 - SP用（PCでは右サイドバー） */}
            <div className="lg:hidden" style={{ marginTop: "10px", padding: "12px", border: "1px solid #e5e5e5", borderRadius: "4px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "13px", color: "#666" }}>大人(中学生以上)</span>
                {plan.originalPrice && (
                  <span style={{ fontSize: "14px", color: "#999", textDecoration: "line-through" }}>
                    {plan.originalPrice.toLocaleString()}円
                  </span>
                )}
                <span style={{ fontSize: "13px", color: "#666" }}>→</span>
                <span style={{ fontSize: "22px", fontWeight: "bold", color: "#ed3434" }}>
                  {plan.price.toLocaleString()}円
                </span>
              </div>
              {plan.childPrice && (
                <div style={{ marginTop: "4px", fontSize: "13px", color: "#666" }}>
                  小人(中学生未満)：<strong style={{ color: "#333" }}>{plan.childPrice.toLocaleString()}円</strong>
                </div>
              )}
            </div>

            {/* 評価 */}
            {plan.rating && (
              <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i <= Math.round(plan.rating!) ? "#f5a623" : "#ddd"}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>{plan.rating.toFixed(1)}</span>
                {plan.reviewCount && (
                  <span style={{ fontSize: "12px", color: "#999" }}>({plan.reviewCount}件の口コミ)</span>
                )}
              </div>
            )}

            {/* タブナビゲーション - 既存サイト準拠 */}
            <div style={{ marginTop: "16px", borderBottom: "2px solid #1a9edb", display: "flex", flexWrap: "wrap" }}>
              {["プランの特徴", "参考スケジュール", "内容と詳細", "このプランのQ&A", "関連プラン"].map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  style={{
                    padding: "8px 12px",
                    fontSize: "12px",
                    fontWeight: i === 0 ? "bold" : "normal",
                    color: i === 0 ? "#fff" : "#1a9edb",
                    backgroundColor: i === 0 ? "#1a9edb" : "transparent",
                    border: "1px solid #1a9edb",
                    borderBottom: "none",
                    borderRadius: "4px 4px 0 0",
                    cursor: "pointer",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* ツアーズプレミアムプランとは？ - 既存サイト準拠 */}
            <section style={{ marginTop: "20px", backgroundColor: "#eff8ff", borderRadius: "4px", padding: "20px", border: "1px solid #d4e8f7" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#212529", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "20px" }}>🏆</span>
                ツアーズプレミアムプランとは？
              </h2>
              <ol style={{ paddingLeft: "20px", fontSize: "14px", color: "#333", lineHeight: "2" }}>
                <li>写真データ無料プレゼント！</li>
                <li>ご参加日前日18:00までキャンセル料無料！</li>
                <li>前日・当日予約OK！</li>
                <li>好評価の声多数！</li>
                <li>ツアーに必要な用具レンタル無料！</li>
              </ol>
              <p style={{ marginTop: "8px" }}>
                <a href="/campaign/premium-plan.html" style={{ color: "#1a9edb", fontSize: "14px", fontWeight: "bold" }}>
                  →ツアーズプレミアムプランを詳しくチェック
                </a>
              </p>
            </section>

            {/* プランの特徴 */}
            <section style={{ marginTop: "20px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#1a9edb", fontSize: "20px" }}>🏷</span>
                このプランの特徴
              </h2>
              <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.8" }}>{plan.description}</p>
              {plan.features.length > 0 && (
                <ul style={{ marginTop: "12px", listStyle: "none", padding: 0 }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 0", fontSize: "14px", color: "#333" }}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#1a9edb">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* 金額・基本情報テーブル - 既存サイト準拠 */}
            <section style={{ marginTop: "20px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "12px 16px", backgroundColor: "#f5f5f5", fontWeight: 600, color: "#333", textAlign: "left", width: "120px" }}>金額</th>
                    <td style={{ padding: "12px 16px", color: "#333" }}>
                      <div>大人(中学生以上)：{plan.originalPrice && <span style={{ textDecoration: "line-through", color: "#999" }}>{plan.originalPrice.toLocaleString()}円</span>} → <strong style={{ color: "#ed3434" }}>{plan.price.toLocaleString()}円</strong></div>
                      {plan.childPrice && <div style={{ marginTop: "4px" }}>小人(中学生未満)：<strong>{plan.childPrice.toLocaleString()}円</strong></div>}
                      {plan.infantPrice && <div style={{ marginTop: "4px" }}>幼児(小学生未満)：<strong>{plan.infantPrice.toLocaleString()}円</strong></div>}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "12px 16px", backgroundColor: "#f5f5f5", fontWeight: 600, color: "#333", textAlign: "left" }}>時間帯</th>
                    <td style={{ padding: "12px 16px", color: "#333" }}>
                      {plan.schedule.length > 0 ? `${plan.schedule[0].time}〜` : "お問い合わせください"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "12px 16px", backgroundColor: "#f5f5f5", fontWeight: 600, color: "#333", textAlign: "left" }}>所要時間</th>
                    <td style={{ padding: "12px 16px", color: "#333" }}>{plan.duration}</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "12px 16px", backgroundColor: "#f5f5f5", fontWeight: 600, color: "#333", textAlign: "left" }}>開催期間</th>
                    <td style={{ padding: "12px 16px", color: "#333" }}>通年</td>
                  </tr>
                  {plan.meetingPoint && (
                    <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <th style={{ padding: "12px 16px", backgroundColor: "#f5f5f5", fontWeight: 600, color: "#333", textAlign: "left" }}>集合場所</th>
                      <td style={{ padding: "12px 16px", color: "#333" }}>{plan.meetingPoint}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </section>

            {/* 参考スケジュール */}
            {plan.schedule.length > 0 && (
              <section style={{ marginTop: "20px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px" }}>
                  参考スケジュール
                </h2>
                <div style={{ borderLeft: "3px solid #1a9edb", paddingLeft: "16px" }}>
                  {plan.schedule.map((item, index) => (
                    <div key={index} style={{ display: "flex", gap: "12px", padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>
                      <span style={{ fontWeight: "bold", color: "#1a9edb", fontSize: "14px", minWidth: "60px" }}>{item.time}</span>
                      <span style={{ fontSize: "14px", color: "#333" }}>{item.activity}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 料金に含まれるもの */}
            {plan.includes.length > 0 && (
              <section style={{ marginTop: "20px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px" }}>
                  料金に含まれるもの
                </h2>
                <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px" }}>
                  {plan.includes.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#333" }}>
                      <span style={{ color: "#1a9edb" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 注意事項 */}
            {plan.notes && plan.notes.length > 0 && (
              <section style={{ marginTop: "20px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px" }}>
                  注意事項
                </h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plan.notes.map((note, index) => (
                    <li key={index} style={{ display: "flex", gap: "6px", padding: "4px 0", fontSize: "13px", color: "#666" }}>
                      <span style={{ color: "#f08300" }}>※</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 予約ボタン - SP用（メインコンテンツ下） */}
            <div className="lg:hidden" style={{ marginTop: "24px", textAlign: "center" }}>
              <a
                href="#"
                style={{
                  display: "block",
                  backgroundColor: "#ed3434",
                  color: "#fff",
                  padding: "16px",
                  borderRadius: "5px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                予約・空き状況を見る
              </a>
              <p style={{ marginTop: "8px", fontSize: "11px", color: "#999" }}>
                ※「予約・空き状況を見る」を押すと姉妹サイト「石垣島ツアーズ」に遷移します
              </p>
            </div>

            {/* 関連プラン */}
            {relatedPlans.length > 0 && (
              <section style={{ marginTop: "30px", paddingBottom: "40px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px", borderBottom: "4px solid #1a9edb", paddingBottom: "10px" }}>
                  関連プラン
                </h2>
                <div className="flex gap-3 overflow-x-auto pb-3">
                  {relatedPlans.map((relatedPlan) => (
                    <div key={relatedPlan.slug} className="shrink-0" style={{ width: "170px" }}>
                      <PlanCard
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
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* 右サイドバー（価格・予約） - PCのみ */}
          <aside className="hidden lg:block shrink-0" style={{ width: "280px" }}>
            <div className="sticky" style={{ top: "110px" }}>
              <div style={{ border: "1px solid #e5e5e5", borderRadius: "4px", overflow: "hidden" }}>
                {/* 価格 */}
                <div style={{ padding: "16px", borderBottom: "1px solid #e5e5e5" }}>
                  <div style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>大人(中学生以上)</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    {plan.originalPrice && (
                      <span style={{ fontSize: "14px", color: "#999", textDecoration: "line-through" }}>
                        {plan.originalPrice.toLocaleString()}円
                      </span>
                    )}
                    <span style={{ fontSize: "13px", color: "#666" }}>→</span>
                    <span style={{ fontSize: "28px", fontWeight: "bold", color: "#ed3434" }}>
                      {plan.price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: "16px", fontWeight: "bold", color: "#ed3434" }}>円</span>
                  </div>
                </div>

                {/* 予約ボタン */}
                <div style={{ padding: "16px" }}>
                  <a
                    href="#"
                    style={{
                      display: "block",
                      backgroundColor: "#ed3434",
                      color: "#fff",
                      padding: "14px",
                      borderRadius: "5px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                  >
                    予約・空き状況を見る
                  </a>
                  <p style={{ marginTop: "8px", fontSize: "11px", color: "#999", textAlign: "center" }}>
                    ※「予約・空き状況を見る」を押すと姉妹サイト<br />「石垣島ツアーズ」に遷移します
                  </p>
                </div>

                {/* お気に入り */}
                <div style={{ padding: "0 16px 16px", textAlign: "center" }}>
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#fff",
                      fontSize: "13px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    ☆ お気に入りに追加する
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
