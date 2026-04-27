import type { FC } from "react";
import { ContactAccordion, type ContactCategory } from "./contact-accordion";

export interface SelectContactContentProps {
  items: ContactCategory[];
  themeColor?: string;
  agencyContactHref?: string;
  agencyContactLabel?: string;
}

const DEFAULT_AGENCY_LABEL = "旅行代理店の方向け\n◎お問い合わせはこちら◎";

export const SelectContactContent: FC<SelectContactContentProps> = ({
  items,
  themeColor = "#1a9edb",
  agencyContactHref,
  agencyContactLabel = DEFAULT_AGENCY_LABEL,
}) => {
  const isExternal =
    typeof agencyContactHref === "string" &&
    agencyContactHref.startsWith("http");

  return (
    <>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#212529",
          marginBottom: "12px",
        }}
      >
        お問い合わせ
      </h1>

      <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#212529" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "16.8px",
              fontWeight: "400",
              color: "#212529",
              lineHeight: "1.6",
              display: "inline-block",
              borderBottom: `3px solid ${themeColor}`,
              paddingBottom: "8px",
            }}
          >
            お問い合わせ内容を
            <br />
            選択してください
          </h2>
        </div>

        <ContactAccordion items={items} themeColor={themeColor} />

        {agencyContactHref && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              href={agencyContactHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              style={{
                display: "inline-block",
                padding: "16px 40px",
                backgroundColor: themeColor,
                color: "#fff",
                borderRadius: "8px",
                fontSize: "14.4px",
                fontWeight: 600,
                lineHeight: 1.5,
                textDecoration: "none",
                whiteSpace: "pre-line",
              }}
            >
              {agencyContactLabel}
            </a>
          </div>
        )}
      </div>
    </>
  );
};
