import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { VisitorContent } from "@repo/ui/visitor-content";
import { BookingFlow } from "@repo/ui/booking-flow";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import {
  siteConfig,
  categoryNavItems,
  themeColor,
  accentColor,
  visitorMetaDescription,
  visitorKvImageUrl,
  visitorKvImageAlt,
  visitorMissionImageUrl,
  visitorMissionImageAlt,
  visitorIntroText,
  visitorReasons,
  visitorIslandDescription,
  visitorIslandRelatedCards,
  visitorTravelTips,
  bookingFlowSteps,
} from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: `旅行専門家が作る予約サイト「${siteConfig.siteName}」とは`,
  description: visitorMetaDescription,
};

const lineUrl = "#";

export default function VisitorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: `旅行専門家が作る予約サイト「${siteConfig.siteName}」とは`,
            url: `${siteConfig.siteUrl}/visitor-2`,
          },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <article className="text-[#212529]">
            <VisitorContent
              siteName={siteConfig.siteName}
              kvImageUrl={visitorKvImageUrl}
              kvImageAlt={visitorKvImageAlt}
              introText={visitorIntroText}
              siteDescription={
                <>
                  <strong style={{ color: accentColor }}>現地在住スタッフ</strong>
                  も多く、掲載しているツアーや体験の多くをスタッフ自身が
                  <strong style={{ color: accentColor }}>実際に体験</strong>
                  しています。その中でも「
                  <strong style={{ color: accentColor }}>本当にいい</strong>
                  」と感じたものだけを
                  <strong style={{ color: accentColor }}>厳選</strong>
                  して掲載しているため、安心してご利用いただけます。
                </>
              }
              reasons={visitorReasons}
              themeColor={themeColor}
              accentColor={accentColor}
              missionImage={{ src: visitorMissionImageUrl, alt: visitorMissionImageAlt }}
              bookingFlowSlot={
                <BookingFlow steps={bookingFlowSteps} title="予約から参加までの流れ" />
              }
              islandDescription={
                <>
                  <p style={{ marginBottom: "12px" }}>
                    石垣島は、八重山諸島の玄関口として、多彩な魅力を持つ
                    <strong style={{ color: accentColor }}>沖縄屈指のリゾート地</strong>です。
                  </p>
                  <p style={{ marginBottom: "12px" }}>
                    エメラルドグリーンに輝く海や、白砂が美しいビーチなど、息をのむような絶景が広がっています。
                  </p>
                  <p style={{ marginBottom: "12px" }}>
                    島内には豊かな自然が残り、
                    <strong style={{ color: accentColor }}>多様なアクティビティ</strong>が満喫できます。
                  </p>
                  <p>また、西表島や竹富島、小浜島などの周辺離島へも簡単にアクセスできます。</p>
                </>
              }
              islandRelatedSlot={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginTop: "20px",
                  }}
                >
                  {visitorIslandRelatedCards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      style={{
                        display: "flex",
                        gap: "16px",
                        padding: "12px",
                        border: "1px solid #e5e5e5",
                        borderRadius: "6px",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <div
                        style={{
                          flex: "0 0 200px",
                          aspectRatio: "4 / 3",
                          overflow: "hidden",
                          borderRadius: "4px",
                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: themeColor,
                            marginBottom: "8px",
                            lineHeight: 1.4,
                          }}
                        >
                          {card.title}
                        </h4>
                        <p style={{ fontSize: "13.5px", color: "#555", lineHeight: 1.6, marginBottom: "8px" }}>
                          {card.excerpt}
                        </p>
                        <p style={{ fontSize: "13px", color: "#777", marginTop: "auto", marginBottom: "8px" }}>
                          {card.countLabel}
                        </p>
                        <span
                          style={{
                            alignSelf: "flex-end",
                            border: `1px solid ${accentColor}`,
                            color: accentColor,
                            padding: "6px 14px",
                            borderRadius: "4px",
                            fontSize: "13px",
                            fontWeight: 600,
                          }}
                        >
                          アクティビティの詳細を見る
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              }
              travelTips={visitorTravelTips}
              accordion
            />

            <section style={{ marginTop: "32px", marginBottom: "24px" }}>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#fff",
                  background: `linear-gradient(180deg, ${themeColor} 0%, #006bbd 100%)`,
                  padding: "18px 16px",
                  borderRadius: "6px",
                  margin: 0,
                }}
              >
                ご相談・お問い合わせ
              </h2>
            </section>

            <section
              style={{
                fontSize: "16.8px",
                lineHeight: 2,
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              <p style={{ marginBottom: "8px" }}>
                ツアー・アクティビティのお問い合わせ以外でも
              </p>
              <p
                style={{
                  color: "#ed3434",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  textDecoration: "underline",
                }}
              >
                石垣島を知り尽くしたスタッフが丁寧にお答えします！
              </p>
              <p>「修学旅行」「団体旅行」「メディア放送」などの</p>
              <p>ご相談も随時受け付けておりますので</p>
              <p>お気軽にお問い合わせくださいませ。</p>
            </section>

            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <Link
                href="/ranking"
                style={{
                  display: "inline-block",
                  backgroundColor: themeColor,
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textAlign: "center",
                  lineHeight: 1.5,
                  textDecoration: "none",
                }}
              >
                {siteConfig.siteName}
                <br />
                人気プランランキングをチェック
              </Link>
            </div>

            <div
              style={{
                fontSize: "16.8px",
                lineHeight: 2,
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              ◆◇掲載のご依頼は
              <Link href="/partner-entry" style={{ color: themeColor, textDecoration: "underline" }}>
                こちら
              </Link>
              ◆◇
            </div>
            <div
              style={{
                fontSize: "16.8px",
                lineHeight: 2,
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              ◆◇旅行代理店様向けページは
              <Link href="/group-travel" style={{ color: themeColor, textDecoration: "underline" }}>
                こちら
              </Link>
              ◆◇
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 600,
                color: "#212529",
                paddingBottom: "8px",
                borderBottom: `3px solid ${themeColor}`,
                borderTop: `1px solid ${themeColor}`,
                paddingTop: "16px",
                marginBottom: "16px",
              }}
            >
              お問い合わせはこちら
            </h2>

            <div style={{ marginBottom: "24px" }}>
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "#06c755",
                  color: "#fff",
                  padding: "16px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 5.79 2 10.43c0 4.16 3.55 7.65 8.35 8.32.32.07.76.21.87.49.1.25.07.65.03.91l-.14.84c-.04.25-.2.97.85.53 1.04-.44 5.62-3.31 7.67-5.67C20.99 14.27 22 12.46 22 10.43 22 5.79 17.52 2 12 2zM7.99 13.13H6.04c-.28 0-.51-.23-.51-.51V8.7c0-.28.23-.51.51-.51.28 0 .51.23.51.51v3.41h1.43c.28 0 .51.23.51.51 0 .28-.22.51-.5.51zm2-.51c0 .28-.23.51-.51.51-.28 0-.51-.23-.51-.51V8.7c0-.28.23-.51.51-.51.28 0 .51.23.51.51v3.92zm4.74 0c0 .22-.14.41-.35.49-.05.02-.11.03-.16.03-.16 0-.31-.07-.41-.21l-2-2.72v2.41c0 .28-.23.51-.51.51-.28 0-.51-.23-.51-.51V8.7c0-.22.14-.41.35-.48.05-.02.11-.03.16-.03.16 0 .31.07.41.21l2 2.72V8.7c0-.28.23-.51.51-.51.28 0 .51.23.51.51v3.92zm3.21-2.47c.28 0 .51.23.51.51 0 .28-.23.51-.51.51h-1.43v.92h1.43c.28 0 .51.23.51.51 0 .28-.23.51-.51.51h-1.95c-.28 0-.51-.23-.51-.51V8.7c0-.28.23-.51.51-.51h1.95c.28 0 .51.23.51.51 0 .28-.23.51-.51.51h-1.43v.92h1.43z" />
                </svg>
                LINEで相談
              </a>
            </div>

            {/* TODO: 旧サイトに存在するが現状アセット未配置のため未実装の要素
                - 「失敗しないために」直前の大きなカヤック横長写真
                - 「累計利用者数50万人突破」キャンペーンバナー
                - 「ご相談・お問い合わせ」セクションのイラスト入り横長ヘッダー画像
                - LINE 公式アカウントの実 URL */}
          </article>
        }
      />
    </>
  );
}
