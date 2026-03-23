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

export function ContactAccordion({ items }: ContactAccordionProps) {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);

  const toggleCategory = (catIndex: number) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(catIndex)) {
        next.delete(catIndex);
      } else {
        next.add(catIndex);
      }
      return next;
    });
  };

  const toggleSubItem = (key: string) => {
    setOpenSubItem(openSubItem === key ? null : key);
  };

  return (
    <div>
      {items.map((category, catIndex) => (
        <div
          key={catIndex}
          style={{
            borderBottom: "1px solid #e5e5e5",
            paddingBottom: "8px",
            marginBottom: "8px",
          }}
        >
          {/* #7: fontSize=16.8px, #8: fontWeight=400, #9: color=#212529 */}
          <h3
            style={{
              fontSize: "16.8px",
              fontWeight: "400",
              color: "#212529",
              padding: "12px 0 4px 0",
              margin: 0,
            }}
          >
            {category.title}
          </h3>

          {/* +/- トグル */}
          <button
            type="button"
            onClick={() => toggleCategory(catIndex)}
            style={{
              display: "block",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              lineHeight: "1.2",
              color: "#333",
              padding: "2px 0",
            }}
          >
            {openCategories.has(catIndex) ? "−" : "＋"}
          </button>

          {/* 展開時のサブアイテム */}
          {openCategories.has(catIndex) && (
            <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {category.subItems.map((subItem, subIndex) => {
                const subKey = `${catIndex}-${subIndex}`;
                return (
                  <div key={subIndex}>
                    <button
                      type="button"
                      onClick={() => toggleSubItem(subKey)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 16px",
                        border: "1px solid #1a9edb",
                        borderRadius: "6px",
                        background: "#fff",
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#f08300",
                        textAlign: "left",
                      }}
                    >
                      <span>{subItem.title}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f08300"
                        strokeWidth="2"
                        style={{
                          flexShrink: 0,
                          transform: openSubItem === subKey ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openSubItem === subKey && (
                      <div
                        style={{
                          padding: "12px 16px",
                          fontSize: "14px",
                          lineHeight: "1.8",
                          color: "#333",
                          borderLeft: "1px solid #1a9edb",
                          borderRight: "1px solid #1a9edb",
                          borderBottom: "1px solid #1a9edb",
                          borderRadius: "0 0 6px 6px",
                        }}
                      >
                        <p style={{ marginBottom: "12px" }}>{subItem.description}</p>
                        {subItem.methods.length > 0 && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {subItem.methods.map((method, mIndex) => (
                              <a
                                key={mIndex}
                                href={method.href}
                                target={method.href.startsWith("http") ? "_blank" : undefined}
                                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                  padding: "8px 16px",
                                  backgroundColor: "#1a9edb",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  fontSize: "13px",
                                  fontWeight: "bold",
                                  textDecoration: "none",
                                }}
                              >
                                {method.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
