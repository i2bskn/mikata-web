"use client";

import { useState } from "react";

interface ContactMethod {
  type: "line" | "phone" | "email" | "faq" | "link";
  label: string;
  href: string;
}

interface ContactCategory {
  title: string;
  description: string;
  methods: ContactMethod[];
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #e5e5e5",
            marginBottom: "4px",
          }}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "16px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              gap: "12px",
            }}
          >
            <span>{item.title}</span>
            <span
              style={{
                fontSize: "24px",
                lineHeight: "1",
                color: "#333",
                flexShrink: 0,
              }}
            >
              {openIndex === index ? "−" : "＋"}
            </span>
          </button>
          {openIndex === index && (
            <div
              style={{
                padding: "0 0 16px 0",
                fontSize: "14px",
                lineHeight: "1.8",
                color: "#333",
              }}
            >
              <p style={{ marginBottom: "12px" }}>{item.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {item.methods.map((method, mIndex) => {
                  const colors = methodColors[method.type] ?? methodColors.link;
                  return (
                    <a
                      key={mIndex}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
