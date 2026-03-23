"use client";

import { useState, useEffect } from "react";

export function FloatingBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 50,
        backgroundColor: "#ed3434",
        color: "#fff",
        padding: "12px 16px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "bold",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: "1.4",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ fontSize: "11px", fontWeight: "normal" }}>＼ 会員登録不要 ／</div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        予約・<br />空き状況を見る
      </div>
    </a>
  );
}
