"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
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
            <span>Q．{item.question}</span>
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
                whiteSpace: "pre-line",
              }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
