"use client";

import { useState } from "react";

export interface ContactMethod {
  type: "line" | "phone" | "email" | "faq" | "link";
  label: string;
  href: string;
}

export interface ContactSubItem {
  title: string;
  /**
   * 説明文。HTML 文字列として描画されるため、文中の `<a href="...">` でインラインリンクを表現できる。
   * `\n` は改行として表示される。
   */
  description: string;
  methods: ContactMethod[];
}

export interface ContactCategory {
  title: string;
  subItems: ContactSubItem[];
}

export interface ContactAccordionProps {
  items: ContactCategory[];
  themeColor?: string;
  accentColor?: string;
  /** サブ項目タイトル・矢印・枠線の色（未指定時は accentColor） */
  subItemAccentColor?: string;
  /** 展開時にサブ項目群の背景に敷く色（未指定時は背景なし） */
  expandedBg?: string;
  /** 初期表示で全カテゴリを開いた状態にするか */
  defaultAllOpen?: boolean;
}

export function ContactAccordion({
  items,
  themeColor = "#1a9edb",
  accentColor = "#f08300",
  subItemAccentColor,
  expandedBg,
  defaultAllOpen = false,
}: ContactAccordionProps) {
  const subAccent = subItemAccentColor ?? accentColor;
  const [openCategories, setOpenCategories] = useState<Set<number>>(
    () => (defaultAllOpen ? new Set(items.map((_, i) => i)) : new Set()),
  );
  const [openSubItems, setOpenSubItems] = useState<Set<string>>(() => {
    if (!defaultAllOpen) return new Set();
    const initial = new Set<string>();
    items.forEach((cat, ci) =>
      cat.subItems.forEach((_, si) => initial.add(`${ci}-${si}`)),
    );
    return initial;
  });

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
    setOpenSubItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
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
          <h3
            style={{
              fontSize: "16.8px",
              fontWeight: "600",
              color: "#363636",
              margin: 0,
            }}
          >
            <button
              type="button"
              onClick={() => toggleCategory(catIndex)}
              aria-expanded={openCategories.has(catIndex)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                font: "inherit",
                color: "inherit",
                textAlign: "left",
              }}
            >
              <span>{category.title}</span>
              <span
                style={{
                  fontSize: "20px",
                  lineHeight: 1,
                  color: "#333",
                  flexShrink: 0,
                  marginLeft: "12px",
                }}
              >
                {openCategories.has(catIndex) ? "−" : "＋"}
              </span>
            </button>
          </h3>

          {openCategories.has(catIndex) && (
            <div
              style={{
                marginTop: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                background: expandedBg ?? "transparent",
                padding: expandedBg ? "15px 20px" : 0,
              }}
            >
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
                        border: `1px solid ${subAccent}`,
                        borderRadius: "6px",
                        background: expandedBg ? "transparent" : "#fff",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "700",
                        color: subAccent,
                        textAlign: "left",
                      }}
                    >
                      <span>{subItem.title}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={subAccent}
                        strokeWidth="2"
                        style={{
                          flexShrink: 0,
                          transform: openSubItems.has(subKey) ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openSubItems.has(subKey) && (
                      <div
                        style={{
                          padding: "16px 20px",
                          fontSize: "14px",
                          lineHeight: "1.8",
                          color: "#333",
                          borderLeft: `1px solid ${subAccent}`,
                          borderRight: `1px solid ${subAccent}`,
                          borderBottom: `1px solid ${subAccent}`,
                          borderRadius: "0 0 6px 6px",
                          background: "#fff",
                        }}
                      >
                        <ContactDescriptionWithButtons
                          description={subItem.description}
                          methods={subItem.methods}
                          themeColor={themeColor}
                        />
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

const LINE_GREEN = "#06C755";

/**
 * 説明文（HTML）と methods を `[[BUTTON_N]]` プレースホルダで合成して描画する。
 * - description 内の `[[BUTTON_0]]` 等は対応する methods[N] を本文中インラインで表示
 * - プレースホルダで参照されなかった methods は説明文末尾に縦並びで表示（後方互換）
 */
function ContactDescriptionWithButtons({
  description,
  methods,
  themeColor,
}: {
  description: string;
  methods: ContactMethod[];
  themeColor: string;
}) {
  const placeholderRe = /\[\[BUTTON_(\d+)\]\]/g;
  const usedMethodIndexes = new Set<number>();
  const parts: Array<{ type: "html"; html: string } | { type: "method"; method: ContactMethod }> = [];

  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = placeholderRe.exec(description)) !== null) {
    if (m.index > lastIndex) {
      parts.push({ type: "html", html: description.slice(lastIndex, m.index) });
    }
    const idx = Number(m[1]);
    const method = methods[idx];
    if (method) {
      usedMethodIndexes.add(idx);
      parts.push({ type: "method", method });
    }
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < description.length) {
    parts.push({ type: "html", html: description.slice(lastIndex) });
  }

  const trailingMethods = methods.filter((_, i) => !usedMethodIndexes.has(i));

  return (
    <div
      className="contact-description"
      style={{
        ["--contact-link-color" as string]: themeColor,
      }}
    >
      {parts.map((part, i) =>
        part.type === "html" ? (
          <div
            key={i}
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: part.html }}
          />
        ) : (
          <div key={i} style={{ margin: "8px 0" }}>
            <ContactMethodButton method={part.method} themeColor={themeColor} />
          </div>
        ),
      )}
      {trailingMethods.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
          {trailingMethods.map((method, i) => (
            <ContactMethodButton key={i} method={method} themeColor={themeColor} />
          ))}
        </div>
      )}
    </div>
  );
}

function ContactMethodButton({ method, themeColor }: { method: ContactMethod; themeColor: string }) {
  const isExternal = method.href.startsWith("http");
  const isLine = method.type === "line";
  const bg = isLine ? LINE_GREEN : themeColor;
  return (
    <a
      href={method.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "10px 24px",
        backgroundColor: bg,
        color: "#fff",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        textDecoration: "none",
        alignSelf: "flex-start",
      }}
    >
      {isLine && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "999px",
            background: "#fff",
            color: LINE_GREEN,
            fontSize: "10px",
            fontWeight: "900",
            letterSpacing: "0.5px",
          }}
          aria-hidden="true"
        >
          LINE
        </span>
      )}
      {method.label}
    </a>
  );
}
