import type { FC } from "react";
import type { VisitorReason } from "./visitor-content";

export interface CompanyInfoItem {
  label: string;
  value: string;
  isLink?: boolean;
}

export interface AdministratorContentProps {
  kvImageUrl: string;
  kvImageAlt?: string;
  companyInfo: CompanyInfoItem[];
  partnerImages?: { src: string; alt: string }[];
  reasons: VisitorReason[];
  themeColor?: string;
}

export const AdministratorContent: FC<AdministratorContentProps> = ({
  kvImageUrl,
  kvImageAlt = "株式会社ShumMaKe",
  companyInfo,
  partnerImages,
  reasons,
  themeColor = "#1a9edb",
}) => {
  const h3Style = {
    fontSize: "19.4px",
    fontWeight: "600" as const,
    marginBottom: "19.4px",
    paddingLeft: "19.4px",
    paddingTop: "3px",
    paddingBottom: "3px",
    lineHeight: "1.4",
    borderLeft: "4px solid #999",
  };

  const h2Style = {
    fontSize: "21.6px",
    fontWeight: "600" as const,
    color: "#666",
    marginBottom: "12px",
    paddingBottom: "4px",
    borderBottom: `6px solid ${themeColor}`,
  };

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
        運営者情報
      </h1>

      <div className="page-content" style={{ fontSize: "16.8px", lineHeight: "2", color: "#212529" }}>
        {/* 会社紹介画像 */}
        <div style={{ marginBottom: "24px" }}>
          <img
            src={kvImageUrl}
            alt={kvImageAlt}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* 運営者情報テーブル */}
        <section style={{ marginBottom: "16.8px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {companyInfo.map((item) => (
                <tr
                  key={item.label}
                  style={{ borderBottom: "1px solid #e5e5e5" }}
                >
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      verticalAlign: "top",
                    }}
                  >
                    {item.label}
                  </th>
                  <td style={{ padding: "12px 16px" }}>
                    {item.isLink ? (
                      <a
                        href={item.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: themeColor }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 数多くの団体や公的機関との連携 */}
        {partnerImages && partnerImages.length > 0 && (
          <section style={{ marginBottom: "16.8px" }}>
            <h3 style={h3Style}>数多くの団体や公的機関との連携</h3>
            <div className="flex flex-wrap gap-4" style={{ marginTop: "12px" }}>
              {partnerImages.map((img) => (
                <img key={img.alt} src={img.src} alt={img.alt} style={{ width: "150px", height: "auto" }} />
              ))}
            </div>
          </section>
        )}

        {/* 旅行をもっと簡単に */}
        <section style={{ marginBottom: "16.8px" }}>
          <h3 style={h3Style}>旅行をもっと簡単に</h3>
          <p>
            インターネットの発達によって情報が多くのメディアやサービスから発信されるようになり、旅行のための情報は点在しています。ホテルはこのサービス、レンタカーはこのサイト、レストランはこのアプリ...私たちは現地アクティビティの予約を中心に、エリア特化型の観光ポータルを運営することで、そんな旅行の不便の解消を目指します。現地を知り尽くしたスタッフが旅行の計画のお手伝い〜当日現地でのお困りごとの解決まで、ワンストップで提供します。
          </p>
        </section>

        {/* 地方をもっと自由に */}
        <section style={{ marginBottom: "16.8px" }}>
          <h3 style={h3Style}>地方をもっと自由に</h3>
          <p>
            世間ではイノベーションや働き方改革などが叫ばれていますが、地方はまだまだ都心部に比べて選択肢が限られています。私たちは現地から行きた情報・魅力を発信する地方特化型の観光ポータル運営を通じて、現地に新しいカタチの事業や雇用を生み出し、教育の場（インターン）の提供や、複業、地方と都心の２拠点生活などの新しい選択肢を提供します。
          </p>
        </section>

        {/* ツアーズが選ばれる理由 */}
        <section style={{ marginBottom: "16.8px" }}>
          <h2 style={h2Style}>ツアーズが選ばれる理由</h2>
          <ol
            style={{
              paddingLeft: "40px",
              listStyleType: "decimal",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            {reasons.map((reason) => (
              <li
                key={reason.title}
                style={{ marginBottom: "16px" }}
              >
                <strong>{reason.title}</strong>
                <br />
                {reason.text}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
};
