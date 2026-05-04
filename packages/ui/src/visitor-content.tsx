import type { FC, ReactNode } from "react";
import { VisitorAccordionList } from "./visitor-accordion-list";

export interface VisitorReason {
  title: string;
  text: string;
}

export interface VisitorContentProps {
  siteName: string;
  kvImageUrl: string;
  kvImageAlt: string;
  introText: ReactNode;
  siteDescription: ReactNode;
  reasons: VisitorReason[];
  themeColor?: string;
  /** strong など強調表示に当てる文字色。未指定なら色付けなし。 */
  accentColor?: string;
  /** 紹介文セクション直下に挿入する装飾画像（ミッション/旅イラスト等） */
  missionImage?: { src: string; alt: string };
  /** 「予約から参加までの流れ」セクションの中身を差し替えるスロット（見出しごと置換） */
  bookingFlowSlot?: ReactNode;
  steps?: string[];
  islandDescription?: ReactNode;
  /** 「島の魅力とは」直下に挿入するスロット（関連プランカード等） */
  islandRelatedSlot?: ReactNode;
  travelTips?: { title: string; text: string }[];
  accordion?: boolean;
}

const h3Style = {
  fontSize: "19.4px",
  fontWeight: "600" as const,
  color: "#666",
  marginBottom: "19.4px",
  paddingLeft: "19.4px",
  borderLeft: "4px solid #999",
  paddingTop: "3px",
  paddingBottom: "3px",
  lineHeight: "1.4",
  borderBottom: "3px solid #eee",
};

const h2Style = (themeColor: string) => ({
  fontSize: "21.6px",
  fontWeight: "600" as const,
  color: "#666",
  marginBottom: "12px",
  paddingBottom: "4px",
  borderBottom: `6px solid ${themeColor}`,
});

export const VisitorContent: FC<VisitorContentProps> = ({
  siteName,
  kvImageUrl,
  kvImageAlt,
  introText,
  siteDescription,
  reasons,
  themeColor = "#1a9edb",
  accentColor,
  missionImage,
  bookingFlowSlot,
  steps = ["ツアーを探す", "予約プランの申し込み", "予約確定", "ツアーに参加"],
  islandDescription,
  islandRelatedSlot,
  travelTips,
  accordion = false,
}) => {
  const strongStyle = accentColor ? { color: accentColor } : undefined;
  return (
    <>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#212529",
          marginTop: "10px",
          lineHeight: "1.4",
          marginBottom: "12px",
        }}
      >
        旅行専門家が作る予約サイト「{siteName}」とは
      </h1>

      <div className="page-content" style={{ fontSize: "16.8px", lineHeight: "2", color: "#212529" }}>
        {/* KV画像 */}
        <img
          src={kvImageUrl}
          alt={kvImageAlt}
          style={{ width: "100%", borderRadius: "4px", marginBottom: "24px" }}
        />

        {/* メインセクション */}
        <section style={{ marginBottom: "16.8px" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>
            「旅行をもっと簡単に」
          </p>
          <p style={{ marginBottom: "12px" }}>
            私たちは<strong style={strongStyle}>エリア特化型</strong>の観光ポータルを運営することで、様々な<strong style={strongStyle}>旅行の不便の解消</strong>を目指します。
          </p>
          <p style={{ marginBottom: "12px" }}>
            {introText}
          </p>
          <p style={{ marginBottom: "12px" }}>
            私たちのサイトは、<strong style={strongStyle}>旅行業</strong>を取得した信頼ある<strong style={strongStyle}>旅行専門家</strong>が運営しています。
          </p>
          <p>
            {siteDescription}
          </p>
        </section>

        {missionImage && (
          <section style={{ marginBottom: "16.8px", textAlign: "center" }}>
            <img
              src={missionImage.src}
              alt={missionImage.alt}
              style={{ maxWidth: "100%", height: "auto", display: "inline-block" }}
            />
          </section>
        )}

        {/* 選ばれる理由セクション */}
        <section style={{ marginBottom: "16.8px" }}>
          <h3 style={h3Style}>ツアーズが選ばれる理由</h3>
          {accordion ? (
            <VisitorAccordionList items={reasons} themeColor={themeColor} />
          ) : (
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {reasons.map((reason, index) => (
                <li key={index} style={{ marginBottom: "20px" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "4px" }}>
                    {index + 1}. {reason.title}
                  </p>
                  <p>{reason.text}</p>
                </li>
              ))}
            </ol>
          )}
        </section>

        {/* 予約から参加までの流れ */}
        {bookingFlowSlot ? (
          bookingFlowSlot
        ) : (
          <section style={{ marginBottom: "16.8px" }}>
            <h2 style={h2Style(themeColor)}>予約から参加までの流れ</h2>
            <div
              className="grid grid-cols-2 lg:grid-cols-4"
              style={{ gap: "12px", textAlign: "center" }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    padding: "16px 8px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "6px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: themeColor,
                      marginBottom: "8px",
                    }}
                  >
                    {index + 1}
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "600" }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 石垣島の魅力 */}
        {islandDescription && (
          <section style={{ marginBottom: "16.8px" }}>
            <h3 style={h3Style}>石垣島の魅力とは</h3>
            {typeof islandDescription === "string" ? (
              <p>{islandDescription}</p>
            ) : (
              islandDescription
            )}
            {islandRelatedSlot}
          </section>
        )}

        {/* 旅行を失敗しないために */}
        {travelTips && travelTips.length > 0 && (
          <section style={{ marginBottom: "16.8px" }}>
            <h3 style={h3Style}>石垣島旅行を失敗しないために</h3>
            {accordion ? (
              <VisitorAccordionList items={travelTips} themeColor={themeColor} />
            ) : (
              <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {travelTips.map((tip, index) => (
                  <li key={index} style={{ marginBottom: "20px" }}>
                    <p style={{ fontWeight: "bold", marginBottom: "4px" }}>
                      {index + 1}．{tip.title}
                    </p>
                    <p>{tip.text}</p>
                  </li>
                ))}
              </ol>
            )}
          </section>
        )}
      </div>
    </>
  );
};
