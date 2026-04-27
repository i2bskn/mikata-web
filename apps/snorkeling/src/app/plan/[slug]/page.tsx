import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductJsonLd, BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { generatePlanMetadata } from "@repo/seo/metadata";
import { getPlanBySlug, getAllPlanSlugs, getPopularPlans } from "../../../lib/data/plans";
import {
  siteConfig,
  categoryNavItems,
  conditionSearchItems,
  columnArticles,
  relatedBanners,
  bookingFlowSteps,
} from "../../../lib/site-config";
import { Sidebar } from "../../../components/sidebar";
import { ImageSlider } from "@repo/ui/image-slider";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { PlanReviewSection } from "@repo/ui/plan-review-section";
import { RelatedPlansSection } from "@repo/ui/related-plans-section";
import { ConditionSearch } from "@repo/ui/condition-search";
import { ColumnList } from "@repo/ui/column-list";
import { RelatedSitesGrid } from "@repo/ui/related-sites-grid";
import { BookingFlow } from "@repo/ui/booking-flow";
import { FloatingBookingButton } from "../../../components/floating-booking-button";
import { sampleReviews, sampleDemographics } from "../../../lib/data/reviews";

const THEME_COLOR = "#007CDB";

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

  const relatedPlans = getPopularPlans(6).filter((p) => p.slug !== slug).slice(0, 5);

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

      <PageWithSidebarTemplate
        topSlot={
          <>
            <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 10px" }}>
              <div style={{ padding: "10px 0 0" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-danger)",
                    color: "#fff",
                    padding: "1px 4px",
                    fontSize: "12px",
                    fontWeight: "400",
                    borderRadius: "0px",
                    marginBottom: "8px",
                  }}
                >
                  マル優（安全対策優良）業者ツアー
                </span>
                <h1
                  style={{
                    fontSize: "19.2px",
                    fontWeight: 600,
                    color: "#212529",
                    lineHeight: "1.4",
                    margin: "0",
                  }}
                >
                  {plan.name}
                </h1>
              </div>
            </div>

            <div style={{ marginTop: "10px", marginBottom: "10px", position: "relative", overflow: "visible" }}>
              <ImageSlider
                slides={(plan.imageUrls ?? [plan.imageUrl]).map((url, i) => ({
                  imageUrl: url,
                  alt: `${plan.name} - ${i + 1}`,
                }))}
                autoPlayInterval={5000}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  zIndex: 1,
                }}
              >
                <div>
                  大人(中学生以上)　：
                  {plan.originalPrice && (
                    <span style={{ textDecoration: "line-through" }}>{plan.originalPrice.toLocaleString()}円</span>
                  )}
                  {" → "}
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>{plan.price.toLocaleString()}</span>円
                </div>
                {plan.childPrice && (
                  <div>小人(中学生未満)：{plan.childPrice.toLocaleString()}円</div>
                )}
                {plan.infantPrice && (
                  <div>幼児(小学生未満)　：{plan.infantPrice.toLocaleString()}円</div>
                )}
              </div>
            </div>
          </>
        }
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <>
            {plan.rating && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0 10px 8px",
                  borderBottom: "1px solid #e3e3e3",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i <= Math.round(plan.rating!) ? "#fbc110" : "#ddd"}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-danger)" }}>{plan.rating.toFixed(1)}</span>
                <span
                  style={{
                    background: "linear-gradient(45deg, #ffcd5a, #fd9a46)",
                    color: "#fff",
                    padding: "5px 6px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  最高の評価
                </span>
                {plan.reviewCount && (
                  <span style={{ fontSize: "12px", color: "#212529" }}>
                    (<a href="#reviews" style={{ fontSize: "12px", color: "#007bff", textDecoration: "none" }}>口コミ{plan.reviewCount}件</a>)
                  </span>
                )}
              </div>
            )}

            <div style={{ borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
              {["プランの特徴", "参考スケジュール", "内容と詳細", "このプランのQ&A", "関連プラン"].map((tab, i, arr) => (
                <button
                  key={tab}
                  type="button"
                  className="text-[11px] lg:text-[14.4px]"
                  style={{
                    flex: 1,
                    padding: "10px 0",
                    fontWeight: "600",
                    color: "var(--color-danger)",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRight: i < arr.length - 1 ? "1px solid #eee" : "none",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div style={{ marginTop: "16px", maxWidth: "360px", marginLeft: "auto" }}>
              <div
                style={{
                  padding: "4px 8px 2px",
                  backgroundColor: "#ffd65c",
                  borderRadius: "4px",
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#212529",
                }}
              >
                直近で<strong style={{ color: "var(--color-danger)", fontSize: "18px" }}>87</strong>人が検討しています。
                <strong style={{ color: "var(--color-danger)", marginLeft: "8px" }}>残りわずか△</strong>
              </div>

              <div style={{ marginTop: "16px" }}>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "var(--color-danger)",
                    color: "#fff",
                    padding: "8px 0px",
                    borderRadius: "3px",
                    fontSize: "19.2px",
                    fontWeight: "600",
                    textDecoration: "none",
                    textAlign: "center",
                    width: "360px",
                    minHeight: "70px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: "400" }}>＼ 会員登録不要 ／</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    予約・空き状況を見る
                  </div>
                </a>
                <p style={{ marginTop: "8px", fontSize: "11px", color: "#999" }}>
                  ※「予約・空き状況を見る」を押すと姉妹サイト「石垣島ツアーズ」に遷移します。ご予約は遷移先ページからお進みください
                </p>
              </div>
            </div>

            <div style={{ marginTop: "12px", textAlign: "right" }}>
              <button
                type="button"
                style={{
                  padding: "8px 20px",
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

            <section style={{ marginTop: "20px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: THEME_COLOR, fontSize: "20px" }}>🏷</span>
                このプランの特徴
              </h2>
              <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.8" }}>{plan.description}</p>
              {plan.features.length > 0 && (
                <ul style={{ marginTop: "12px", listStyle: "none", padding: 0 }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 0", fontSize: "14px", color: "#333" }}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill={THEME_COLOR}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section style={{ marginTop: "20px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "10px", backgroundColor: THEME_COLOR, fontWeight: 700, color: "#fff", textAlign: "left", width: "150px", fontSize: "16.8px" }}>金額</th>
                    <td style={{ padding: "10px", color: "#333" }}>
                      <div>大人(中学生以上)：{plan.originalPrice && <span style={{ textDecoration: "line-through", color: "#999" }}>{plan.originalPrice.toLocaleString()}円</span>} → <strong style={{ color: "var(--color-danger)" }}>{plan.price.toLocaleString()}円</strong></div>
                      {plan.childPrice && <div style={{ marginTop: "4px" }}>小人(中学生未満)：<strong>{plan.childPrice.toLocaleString()}円</strong></div>}
                      {plan.infantPrice && <div style={{ marginTop: "4px" }}>幼児(小学生未満)：<strong>{plan.infantPrice.toLocaleString()}円</strong></div>}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "10px", backgroundColor: THEME_COLOR, fontWeight: 700, color: "#fff", textAlign: "left", width: "150px", fontSize: "16.8px" }}>時間帯</th>
                    <td style={{ padding: "10px", color: "#333" }}>
                      {plan.schedule.length > 0 ? `${plan.schedule[0].time}-${plan.schedule[plan.schedule.length - 1].time}` : "お問い合わせください"}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "10px", backgroundColor: THEME_COLOR, fontWeight: 700, color: "#fff", textAlign: "left", width: "150px", fontSize: "16.8px" }}>所要時間</th>
                    <td style={{ padding: "10px", color: "#333" }}>{plan.duration}</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                    <th style={{ padding: "10px", backgroundColor: THEME_COLOR, fontWeight: 700, color: "#fff", textAlign: "left", width: "150px", fontSize: "16.8px" }}>開催期間</th>
                    <td style={{ padding: "10px", color: "#333" }}>通年</td>
                  </tr>
                  {plan.meetingPoint && (
                    <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <th style={{ padding: "10px", backgroundColor: THEME_COLOR, fontWeight: 700, color: "#fff", textAlign: "left", width: "150px", fontSize: "16.8px" }}>集合場所</th>
                      <td style={{ padding: "10px", color: "#333" }}>{plan.meetingPoint}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </section>

            {plan.schedule.length > 0 && (
              <section style={{ marginTop: "20px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px" }}>
                  参考スケジュール
                </h2>
                <div style={{ borderLeft: `3px solid ${THEME_COLOR}`, paddingLeft: "16px" }}>
                  {plan.schedule.map((item, index) => (
                    <div key={index} style={{ display: "flex", gap: "12px", padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>
                      <span style={{ fontWeight: "bold", color: THEME_COLOR, fontSize: "14px", minWidth: "60px" }}>{item.time}</span>
                      <span style={{ fontSize: "14px", color: "#333" }}>{item.activity}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {plan.includes.length > 0 && (
              <section style={{ marginTop: "20px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#212529", marginBottom: "12px" }}>
                  料金に含まれるもの
                </h2>
                <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px" }}>
                  {plan.includes.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#333" }}>
                      <span style={{ color: THEME_COLOR }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

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

          </>
        }
        bottomSectionsSlot={
          <>
            <PlanReviewSection
              reviews={sampleReviews}
              demographics={sampleDemographics}
              accentColor={THEME_COLOR}
            />
            <ConditionSearch items={conditionSearchItems} iconUrl="/images/icons/loupe.svg" />
            <RelatedPlansSection plans={relatedPlans} accentColor={THEME_COLOR} />
            <ColumnList articles={columnArticles} iconUrl="/images/icons/pen.svg" />
            <RelatedSitesGrid items={relatedBanners} />
            <BookingFlow steps={bookingFlowSteps} />
          </>
        }
      />

      <FloatingBookingButton />
    </>
  );
}
