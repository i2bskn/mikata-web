"use client";

import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";

const CssCloseIcon: FC<{ size?: number }> = ({ size = 30 }) => (
  <div style={{ width: size, height: size, position: "relative" }}>
    <span
      style={{
        display: "block",
        width: size,
        height: 2,
        backgroundColor: "var(--color-danger)",
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "rotate(45deg)",
        transformOrigin: "center",
      }}
    />
    <span
      style={{
        display: "block",
        width: size,
        height: 2,
        backgroundColor: "var(--color-danger)",
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "rotate(-45deg)",
        transformOrigin: "center",
      }}
    />
  </div>
);

type DrawerShellProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const DrawerShell: FC<DrawerShellProps> = ({ isOpen, onClose, children }) => {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsLg(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      {!isLg && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 100,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transition: "opacity 300ms ease-in-out",
          }}
          onClick={onClose}
        />
      )}
      <div
        style={{
          position: "fixed",
          top: isLg ? "94px" : 0,
          right: 0,
          bottom: 0,
          width: "min(380px, 90vw)",
          backgroundColor: "#eff4ff",
          zIndex: 10000,
          overflowY: "auto",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms ease-in-out",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="メニューを閉じる"
          hidden={isLg}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 1,
            padding: 0,
          }}
        >
          <CssCloseIcon size={30} />
        </button>

        {children}

        <div style={{ height: "60px", backgroundColor: "#eee" }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: "100%",
              height: "60px",
              backgroundColor: "#eee",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              fontSize: "16px",
              color: "#666",
            }}
          >
            メニューを閉じる
            <span style={{ color: "#666", fontSize: "16px" }}>×</span>
          </button>
        </div>
      </div>
    </>
  );
};
