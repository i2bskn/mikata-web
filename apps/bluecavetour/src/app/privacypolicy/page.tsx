import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "個人情報保護方針",
  description:
    "1. 個人情報の定義 当社では氏名・住所・電話番号（携帯電話/PHS含む）・メールアドレス・性別、生年月日等の「特定の個人を識別できる情報すべてを個人情報と定義」している。",
};

const h3Style = {
  fontSize: "19px",
  fontWeight: "600" as const,
  marginBottom: "12px",
  paddingLeft: "19px",
  borderLeft: "4px solid #999",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          { name: "個人情報保護方針", url: `${siteConfig.siteUrl}/privacypolicy` },
        ]}
      />

      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 10px" }}>
        {/* 2カラムレイアウト */}
        <div className="flex gap-5">
          <Sidebar categoryNavItems={categoryNavItems} />

          {/* メインコンテンツ */}
          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "24px",
              }}
            >
              個人情報保護方針
            </h1>

            <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#333" }}>
              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  1. 個人情報の定義
                </h3>
                <p>
                  当社では氏名・住所・電話番号（携帯電話/PHS含む）・メールアドレス・性別、生年月日等の特定の個人を識別できる情報すべてを個人情報と定義します。
                </p>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  2.個人情報の取得及び利用目的
                </h3>
                <p style={{ marginBottom: "8px" }}>
                  当社は適正かつ公正な手段によって個人情報を取得し、取得した個人情報は、当社が行う以下のサービスをお客様が利用される際、必要な範囲でのみ収集、利用致します。
                </p>
                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                  <li>Webサイト上のサービス</li>
                  <li>アクティビティの予約・お問合せ</li>
                  <li>宿泊施設の予約・お問合せ</li>
                  <li>レンタカーの予約・お問合せ</li>
                  <li>レストランの予約・問い合わせ</li>
                  <li>情報提供に関するお問合せ</li>
                  <li>クチコミ投稿</li>
                  <li>各種アンケート</li>
                  <li>お客様とのご連絡（お客様のお問合せ等に対応が求められた場合など）</li>
                  <li>当社サービスに関するマーケティング統計調査</li>
                  <li>その他当社がサービス運営上必要と認める業務</li>
                </ul>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  3.第三者への開示・提供
                </h3>
                <p style={{ marginBottom: "8px" }}>
                  当社は、以下のいずれかに該当する場合を除き、お客様の個人情報を第三者へ開示または提供しません。尚、業務委託先への提供は第三者への開示または提供にあたりません。
                </p>
                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                  <li>ツアーの予約に必要な範囲で運営会社へ情報を提供する場合</li>
                  <li>お客様本人の同意を得た場合</li>
                  <li>法令に基づき、開示又は提供をもとめられた場合</li>
                  <li>国または地方公共団体等が公的な事務を施行する上で、協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障が出るおそれがある場合</li>
                  <li>人の生命、身体または財産などの重大な利益を保護するために必要な場合であって、お客様の同意を得ることが困難である場合</li>
                </ul>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  4.業務委託先の監督
                </h3>
                <p>
                  当社が信頼に足ると判断した場合、守秘義務（個人情報取り扱いに関するもの）の契約を締結した業務委託先に対し、当社業務の一部として個人情報の開示又は管理を委託する事があります。この場合にも、お客様の個人情報は関係法令及び本個人情報保護方針に則して取り扱われるよう、当該委託先を監督いたします。
                </p>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  5.個人情報の適正管理について
                </h3>
                <p>
                  お客様の個人情報は、適切な管理を行うとともに、漏洩、減失、改ざん等の防止に努め、個人情報の取扱いに関し、役員及び従業員に対し適切な社内教育を行うとともに、当社のサービスを円滑に運用するため全ての個人情報に一定の保存期間を別途定め、当該期間経過後は十分な注意を払って適切な方法で廃棄します。
                </p>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  6.個人情報処理の委託
                </h3>
                <p>
                  個人情報処理を委託する場合には、個人情報の保護水準を十分に満たしている業者を選定し、適切に処理されるよう契約いたします。
                </p>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  7.関係法令、規範の遵守
                </h3>
                <p>
                  当社は個人情報に関する関係法令及びその他の規範を遵守し、当社の個人情報保護方針をこれらの関係法令及びその他の規範に適合させ、規定する事項に従い個人情報を取り扱います。
                </p>
              </section>

              <section style={{ marginBottom: "28px" }}>
                <h3 style={h3Style}>
                  8.今後の個人情報保護への取り組み
                </h3>
                <p>
                  当社は、個人情報の保護及び取り扱いについて、継続的改善に努めてまいります。
                </p>
              </section>

              <div style={{ marginTop: "40px" }}>
                <p>2018年11月　制定</p>
              </div>

              <div style={{ marginTop: "40px" }}>
                <p style={{ fontWeight: "bold", marginBottom: "16px" }}>お問い合わせ先</p>
                <p>当社の個人情報保護方針に関するお問い合わせは、下記担当までお願いいたします。</p>
                <p style={{ marginTop: "16px" }}>株式会社ShumMaKe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
