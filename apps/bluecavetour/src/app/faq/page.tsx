import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";
import { FaqAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "よくある質問＆注意事項",
  description:
    "よくある質問 Q1.チェックアウト日にアクティビティに参加できますか？ もちろん可能です！チェ",
};

const h3Style = {
  fontSize: "19px",
  fontWeight: "600" as const,
  marginBottom: "12px",
  paddingLeft: "19px",
  borderLeft: "4px solid #999",
};

const faqItems = [
  {
    question: "チェックアウト日にアクティビティに参加できますか？",
    answer:
      "もちろん可能です！チェックアウトを済ませ、アクティビティに参加できる服装に着替えて集合場所へお越しください。プランによりますが荷物のお預かり可能のツアーもございます。（ホテル等への送迎は事前にご相談ください）。",
  },
  {
    question: "アクティビティに年齢制限はありますか？",
    answer:
      "各アクティビティ毎に年齢制限を設けております。詳しくは各プランのページの下部に設置されている「コース内容と詳細」部分をご確認ください。\n※安全管理上の理由により、対象年齢以外の方はご参加をご遠慮いただいております。何卒ご了承ください。",
  },
  {
    question: "どのような靴を履いて行けばよいですか？",
    answer:
      "アクティビティの種類やプランによって異なります。専用の靴を貸出ししている場合もございますので、詳しくは各プランページをご確認ください。",
  },
  {
    question: "アクティビティ参加の際に必要な持ち物はありますか？",
    answer:
      "各プラン毎に必要な持ち物はプランページをご確認下さい。ハンドタオル、日焼け止め、帽子、サングラスはいずれのアクティビティに参加の場合もお持ち頂くことをお勧めいたします。携帯電話、カメラ等につきまして、水ぬれや水没の恐れがございますので、自己責任でお持ち下さい。",
  },
  {
    question: "雨が降っていてもアクティビティは催行しますか？",
    answer:
      "アクティビティによっては安全性を確認した上で、雨天でもアクティビティを開催する可能性がございます。また、雨が降っていなくても、天候や川の状況により、ネイチャーガイドの判断でアクティビティの催行を中止する場合がございます（ツアー中止の場合はキャンセル料は発生いたしません）。",
  },
  {
    question: "予約をキャンセルした場合、いつ返金されますか？",
    answer:
      "【クレジットカードでお支払いの場合】\nクレジットカードでお申し込みいただいた場合、実際の決済（引き落とし）はツアー等のご参加後に確定されます。そのため、申し込み時点では引き落としは行われておりません。\nクレジットカード会社によっては、カード情報を登録した時点で「未確定のご利用明細」に表示されることがありますが、これは実際の引き落としではありませんのでご安心ください。\nまた、3Dセキュア（本人認証サービス）の仕様により、「11円」などの少額が利用明細に記載されることがあります。これはカードの有効性確認のためであり、実際に引き落としとはなりませんのでご安心ください。\n\n【デビットカード・プリペイドカードでお支払いの場合】\nデビットカードまたはプリペイドカードをご利用の場合は、お申し込み時点で即時に引き落としが発生します。予約がキャンセルされた場合は、自動で返金処理を行いますのでご安心ください。なお、返金の反映タイミングはご利用のカード会社や金融機関によって異なります。\n\nクレジットカードの返金処理の完了までは、通常1〜2ヶ月程度かかります。ただし、これはあくまで目安であり、カード会社の処理状況によって異なります。",
  },
  {
    question: "クレジットカード番号が5桁までしか入力できません",
    answer:
      "iPhoneのデフォルトのテンキーで入力するとそのような現象が起こります。フルキーボードで入力していただければ、正常に番号を入力することができます。",
  },
  {
    question: "キャンセル料はいつから発生しますか？",
    answer:
      "キャンセルポリシーはプランによって異なります。詳細は各プランのページをご確認ください。",
  },
  {
    question: "領収書は発行できますか？",
    answer:
      "決済方法によって発行方法が異なります。\n\n【現地決済の場合】\n現地のツアーガイド、施設が発行します。ご精算時に領収書発行をご依頼ください。\n※事業者によっては領収書発行ができない場合もございますので、必要な方は事前に担当ガイドまでお問い合わせください。\n\n【事前決済の場合】\nいただいた情報をもとに弊社で発行させていただきます。\n※適格領収書には該当しませんのでご注意ください。",
  },
];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "よくある質問＆注意事項",
            url: `${siteConfig.siteUrl}/faq`,
          },
        ]}
      />

      <div
        className="mx-auto"
        style={{ maxWidth: "1020px", padding: "0 10px" }}
      >
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "24px",
              }}
            >
              よくある質問＆注意事項
            </h1>

            <div
              style={{ fontSize: "14px", lineHeight: "1.8", color: "#333" }}
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
                    paddingLeft: "20px",
                    listStyleType: "decimal",
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
                    style={{ paddingLeft: "20px", listStyleType: "disc" }}
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
                    style={{ paddingLeft: "20px", listStyleType: "disc" }}
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
                  style={{ paddingLeft: "20px", listStyleType: "disc" }}
                >
                  <li style={{ marginBottom: "8px" }}>
                    気象警報が発令している場合、もしくは予想される場合。
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    雷が鳴っている場合。
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    前日までの大雨、長雨により滝、川の増水が予想される場合。
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    強風のため、アクティビティの催行が危険と判断される場合。
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    波高2.5M以上の場合（海に出るアクティビティの場合）。
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    前線通過が予想される場合。
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    参加者がガイドの指示に従わない場合。
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    ガイドが体調不良の場合。
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
