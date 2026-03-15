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
      <div className="flex overflow-x-auto md:flex-wrap md:justify-center" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-center shrink-0 md:shrink w-[70px] md:w-[12.5%] md:min-w-[80px] text-[10px] md:text-[11px]"
            style={{
              padding: "8px 4px",
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
                className="w-[50px] h-[32px] md:w-[65px] md:h-[38px]"
                style={{ objectFit: "contain" }}
              />
            </span>
            <span style={{ lineHeight: "1.3" }}>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
