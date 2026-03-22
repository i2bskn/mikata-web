"use client";

import { useState } from "react";

interface ContactMethod {
  type: "line" | "phone" | "email" | "faq" | "link";
  label: string;
  href: string;
}

interface ContactSubItem {
  title: string;
  description: string;
  methods: ContactMethod[];
}

interface ContactCategory {
  title: string;
  subItems: ContactSubItem[];
}

interface ContactAccordionProps {
  items: ContactCategory[];
}

const methodColors: Record<string, { bg: string; text: string }> = {
  line: { bg: "#06c755", text: "#fff" },
  phone: { bg: "#1a9edb", text: "#fff" },
  email: { bg: "#666", text: "#fff" },
  faq: { bg: "#f08300", text: "#fff" },
  link: { bg: "#333", text: "#fff" },
};

export function ContactAccordion({ items }: ContactAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((category, catIndex) => (
        <div
          key={catIndex}
          style={{
            borderBottom: "1px solid #e5e5e5",
            marginBottom: "4px",
          }}
        >
          {/* カテゴリタイトル */}
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
              padding: "16px 0 8px 0",
              margin: 0,
            }}
          >
            {category.title}
          </h3>

          {/* サブアイテム */}
          {category.subItems.map((subItem, subIndex) => {
            const globalIndex = items
              .slice(0, catIndex)
              .reduce((acc, c) => acc + c.subItems.length, 0) + subIndex;

            return (
              <div key={subIndex}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === globalIndex ? null : globalIndex)
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "22px",
                    color: "#333",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    {subItem.title}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      lineHeight: "1",
                      color: "#333",
                      flexShrink: 0,
                    }}
                  >
                    {openIndex === globalIndex ? "−" : "＋"}
                  </span>
                </button>
                {openIndex === globalIndex && (
                  <div
                    style={{
                      padding: "0 0 16px 0",
                      fontSize: "14px",
                      lineHeight: "1.8",
                      color: "#333",
                    }}
                  >
                    <p style={{ marginBottom: "12px" }}>{subItem.description}</p>
                    {subItem.methods.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {subItem.methods.map((method, mIndex) => {
                          const colors =
                            methodColors[method.type] ?? methodColors.link;
                          return (
                            <a
                              key={mIndex}
                              href={method.href}
                              target={
                                method.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                method.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "10px 20px",
                                backgroundColor: colors.bg,
                                color: colors.text,
                                borderRadius: "5px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                textDecoration: "none",
                              }}
                            >
                              {method.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
