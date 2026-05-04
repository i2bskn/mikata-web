"use client";

import { useState, type FC } from "react";

export type VisitorAccordionItem = { title: string; text: string };

export interface VisitorAccordionListProps {
  items: VisitorAccordionItem[];
  themeColor: string;
}

export const VisitorAccordionList: FC<VisitorAccordionListProps> = ({ items, themeColor }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <li
            key={index}
            style={{
              marginBottom: "12px",
              border: `1px solid ${themeColor}`,
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
                padding: "12px 36px 12px 12px",
                color: themeColor,
                fontWeight: 700,
                fontSize: "16.8px",
                background: "transparent",
                border: "none",
                position: "relative",
                lineHeight: 1.5,
              }}
            >
              {index + 1}．{item.title}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: `translateY(-50%) rotate(${isOpen ? 180 : 0}deg)`,
                  transition: "transform 0.2s",
                  fontSize: "12px",
                }}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "15px 12px", backgroundColor: "#f2fbfc" }}>
                <p style={{ margin: 0 }}>{item.text}</p>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};
