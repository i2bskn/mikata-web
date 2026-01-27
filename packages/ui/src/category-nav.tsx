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
      <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-center"
            style={{
              width: "12.5%",
              minWidth: "80px",
              padding: "8px 4px",
              color: "#333",
              borderBottom: item.isActive ? "4px solid #1a9edb" : "4px solid transparent",
              fontSize: "11px",
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
                style={{ width: "65px", height: "38px", objectFit: "contain" }}
              />
            </span>
            <span style={{ lineHeight: "1.3" }}>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
