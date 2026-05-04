"use client";

import type { FC } from "react";

export interface CategoryItem {
  label: string;
  href: string;
  iconUrl: string;
  isActive?: boolean;
}

export interface CategoryNavProps {
  items: CategoryItem[];
  className?: string;
  /** 親カードに埋め込まれる場合true（自身の背景・ボーダーを非表示） */
  embedded?: boolean;
}

/**
 * カテゴリナビゲーション - 既存サイト: 8つのアイコンナビ横並び
 */
export const CategoryNav: FC<CategoryNavProps> = ({ items, className = "", embedded = false }) => {
  return (
    <nav
      className={className}
      style={embedded ? {
        padding: "5px 0",
      } : {
        backgroundColor: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "4px",
        padding: "12px 0",
      }}
    >
      <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        {items.map((item, idx) => (
          <a
            key={`${item.href}-${idx}`}
            href={item.href}
            className="flex flex-col items-center text-center shrink-0 w-[70px] md:w-[10%] text-[10px] md:text-[12px]"
            style={{
              padding: "0px 0px 5px",
              color: "#333",
              borderBottom: item.isActive ? "4px solid #1a9edb" : "4px solid transparent",
              fontWeight: "normal",
              textDecoration: "none",
            }}
          >
            <span className="mb-1">
              <img
                src={item.iconUrl}
                alt={item.label}
                width={65}
                height={38}
                className="w-[65px] h-[38px]"
                style={{ objectFit: "contain" }}
              />
            </span>
            <span style={{ lineHeight: "1.3", whiteSpace: "pre-line" }}>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
