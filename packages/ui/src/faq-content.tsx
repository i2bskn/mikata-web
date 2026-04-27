import type { FC } from "react";
import { FaqAccordion, type FaqItem } from "./faq-accordion";

export interface FaqContentProps {
  faqItems: FaqItem[];
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

export const FaqContent: FC<FaqContentProps> = ({ faqItems }) => {
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
        よくある質問＆注意事項
      </h1>

      <div
        className="page-content"
        style={{ fontSize: "16.8px", lineHeight: "2", color: "#212529" }}
      >
        {/* よくある質問 */}
        <section style={{ marginBottom: "40px" }}>
          <h3 style={h3Style}>よくある質問</h3>
          <FaqAccordion items={faqItems} />
        </section>

        {/* 注意事項 */}
        <section style={{ marginBottom: "40px" }}>
          <h3 style={h3Style}>注意事項</h3>
          <ol
            style={{
              paddingLeft: "27px",
              listStyleType: "decimal",
              lineHeight: "1.6",
            }}
          >
            <li style={{ marginBottom: "12px" }}>
              予約が完了された方には原則前日または事前にメール又は電話（お迎え場所・時間、靴のサイズなど）にて確認のご連絡をいたします。※ツアー前日・当日のご予約やプランによっては、事前連絡がない場合もございますのでご注意ください。
            </li>
            <li style={{ marginBottom: "12px" }}>
              ツアー中はネイチャーガイドの案内、指示の通り行動をお願い致します。自然を使ったアクティビティが多い為、時に危険な事も起こります。皆様の安全を第一に考えてネイチャーガイドが案内致しますので、ツアー参加中は必ずガイドの指示に従っていただきますようお願い致します。
            </li>
            <li style={{ marginBottom: "12px" }}>
              ツアー中はネイチャーガイドの見える範囲での行動を宜しくお願い致します。必ずネイチャーガイドから離れず行動を宜しくお願い致します。
            </li>
            <li style={{ marginBottom: "12px" }}>
              気象状況、フィールドの状況及びその他トラブル等によって、ツアーの中止又はコース、時間変更がございます。
            </li>
            <li style={{ marginBottom: "12px" }}>
              ツアー開始前、ツアー中に体調不良を感じた場合、必ずネイチャーガイドまでお伝えください。
            </li>
            <li style={{ marginBottom: "12px" }}>
              ツアー参加前や昼食時の飲酒はお控え下さい。飲酒をされている方のツアー参加は、当日でもお断りさせていただく場合がございます。
            </li>
            <li style={{ marginBottom: "12px" }}>
              安全のため、妊娠されている方、またはその兆候がある方のご参加は原則ご遠慮頂いております。（コースによっては参加可能なものもございますので、事前にご相談ください）
            </li>
            <li style={{ marginBottom: "12px" }}>
              ご貴重品はお客様自身で管理をお願い致します。貴重品の紛失、破損等につきまして、一切の責任を負いかねますので、ご了承ください。
            </li>
          </ol>
        </section>

        {/* キャンセル料 */}
        <section style={{ marginBottom: "40px" }}>
          <h3 style={h3Style}>キャンセル料に関して</h3>
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
              キャンセルポリシー
            </p>
            <p style={{ marginBottom: "8px" }}>
              参加日の7日前より以下のキャンセルポリシーが適用されます。
            </p>
            <ul
              style={{ paddingLeft: "27px", listStyleType: "disc", lineHeight: "1.6" }}
            >
              <li>7〜2日前：一律2,000円/組</li>
              <li>前日・当日のキャンセル：ツアー料金の100%</li>
            </ul>
            <p
              style={{
                fontSize: "12px",
                color: "#666",
                marginTop: "8px",
              }}
            >
              ※プランによっては上記とは異なるキャンセルポリシーを適用している場合もございます。詳しくは各プランページをご確認ください。
            </p>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
              キャンセルポリシー適用外のケース
            </p>
            <p>
              天候不良によるツアー中止や飛行機の欠航等の不可抗力でツアーにご参加できない場合はキャンセル料は頂戴いたしません。
            </p>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
              キャンセル方法
            </p>
            <p style={{ marginBottom: "8px" }}>
              キャンセルをご希望の場合は公式LINEにて以下の事項をご連絡ください。
            </p>
            <ul
              style={{ paddingLeft: "27px", listStyleType: "disc", lineHeight: "1.6" }}
            >
              <li>プラン参加日</li>
              <li>ご予約者様氏名(カタカナフルネーム)</li>
              <li>登録電話番号(ハイフンなし)</li>
              <li>キャンセル理由(必須)</li>
            </ul>
          </div>
        </section>

        {/* ツアー中止の基準 */}
        <section style={{ marginBottom: "40px" }}>
          <h3 style={h3Style}>ツアー中止の基準</h3>
          <ul
            style={{ paddingLeft: "27px", listStyleType: "disc", lineHeight: "1.6" }}
          >
            <li style={{ marginBottom: "8px" }}>
              気象警報が発令している場合、もしくは予想される場合。
            </li>
            <li style={{ marginBottom: "8px" }}>雷が鳴っている場合。</li>
            <li style={{ marginBottom: "8px" }}>
              前日までの大雨、長雨により滝、川の増水が予想される場合。
            </li>
            <li style={{ marginBottom: "8px" }}>
              強風のため、アクティビティの催行が危険と判断される場合。
            </li>
            <li style={{ marginBottom: "8px" }}>
              波高2.5M以上の場合（海に出るアクティビティの場合）。
            </li>
            <li style={{ marginBottom: "8px" }}>前線通過が予想される場合。</li>
            <li style={{ marginBottom: "8px" }}>
              参加者がガイドの指示に従わない場合。
            </li>
            <li style={{ marginBottom: "8px" }}>ガイドが体調不良の場合。</li>
          </ul>
        </section>
      </div>
    </>
  );
};
