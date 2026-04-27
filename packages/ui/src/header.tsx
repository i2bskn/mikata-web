"use client";

import type { FC, ReactNode } from "react";
import { useState } from "react";
import { DrawerShell } from "./drawer-shell";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export type {
  MenuLink,
  MenuSection,
  MenuFeaturedBanner,
  MenuInfoLinksSection,
  MenuMainBanner,
  MenuStatusBanner,
} from "./drawer-parts/types";

export interface HeaderProps {
  siteName: string;
  logoUrl?: string;
  navItems: NavItem[];
  catchphrase?: string;
  phoneNumber?: string;
  reservationCheckUrl?: string;
  historyUrl?: string;
  contactUrl?: string;
  saleUrl?: string;
  navColor?: string;
  /** ドロワーメニュー本体。サイト毎に組み立てて渡す */
  drawerContent?: ReactNode;
}

export const Header: FC<HeaderProps> = ({
  siteName,
  logoUrl,
  navItems,
  catchphrase,
  reservationCheckUrl,
  contactUrl,
  saleUrl,
  navColor = "#1a9edb",
  drawerContent,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="lg:sticky lg:top-0 z-50">
        <div style={{ backgroundColor: navColor }}>
          <div className="mx-auto px-1" style={{ maxWidth: "1020px" }}>
            <div
              className="flex items-center justify-between text-white"
              style={{ minHeight: "36px", padding: "5px 0", fontSize: "12px", fontWeight: 300, lineHeight: "18px" }}
            >
              <span className="lg:truncate">
                {catchphrase ||
                  `青の洞窟専門のアクティビティ予約サイト "${siteName}"`}
              </span>
              <span
                className="inline-flex items-center shrink-0"
                style={{
                  backgroundColor: "#fff",
                  color: "#333",
                  fontSize: "12px",
                  padding: "4px 12px",
                  borderRadius: "3px",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                Japanese
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white" style={{ borderBottom: "1px solid #e5e5e5", boxShadow: "rgb(191, 191, 191) 0px 1px 5px 0px" }}>
          <div className="mx-auto px-1" style={{ maxWidth: "1020px" }}>
            <div className="flex items-center justify-between" style={{ height: "59px" }}>
              <a href="/" className="flex items-center shrink-0">
                {logoUrl ? (
                  <img src={logoUrl} alt={siteName} className="h-[27px] lg:h-[37px]" />
                ) : (
                  <span className="font-bold" style={{ color: "#1a9edb", fontSize: "18px" }}>
                    {siteName}
                  </span>
                )}
              </a>

              <nav className="hidden lg:flex items-center gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      color: "#333",
                      fontSize: "12px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      lineHeight: "18px",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center">
                {contactUrl && (
                  <a
                    href={contactUrl}
                    className="flex flex-col items-center justify-center px-1 lg:px-2"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 22" fill={navColor}>
                      <path d="M12 0C5.4 0 0 4.4 0 9.8c0 3.1 1.7 5.8 4.4 7.6L3 21.5c-.1.3.1.5.4.5.1 0 .2 0 .3-.1l5-3.2c1 .2 2.1.3 3.3.3 6.6 0 12-4.4 12-9.8S18.6 0 12 0zm-4 12a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm4 0a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm4 0a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
                    </svg>
                    <span className="whitespace-nowrap" style={{ fontSize: "10px", marginTop: "2px", color: "#333", fontWeight: 400 }}>
                      各種 お問い合わせ
                    </span>
                  </a>
                )}

                {saleUrl && (
                  <a
                    href={saleUrl}
                    className="flex flex-col items-center justify-center px-1 lg:px-2"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill={navColor}>
                      <path d="M4 1a1 1 0 00-1 1v16a1 1 0 102 0v-5h10.5a1 1 0 00.8-1.6L13 7l3.3-4.4A1 1 0 0015.5 1H4z" />
                    </svg>
                    <span className="whitespace-nowrap" style={{ fontSize: "10px", marginTop: "2px", color: "#333", fontWeight: 400 }}>
                      SALE・特集
                    </span>
                  </a>
                )}

                {reservationCheckUrl && (
                  <a
                    href={reservationCheckUrl}
                    className="flex flex-col items-center justify-center px-1 lg:px-2"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 23 20" fill={navColor}>
                      <path d="M18.5 2h-1V.5a.5.5 0 00-1 0V2h-10V.5a.5.5 0 00-1 0V2h-1A3.5 3.5 0 001 5.5v11A3.5 3.5 0 004.5 20h14a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0018.5 2zm-14 1h14A2.5 2.5 0 0121 5.5V7H2V5.5A2.5 2.5 0 014.5 3zM18.5 19h-14A2.5 2.5 0 012 16.5V8h19v8.5A2.5 2.5 0 0118.5 19z" />
                      <rect x="5" y="10" width="2.5" height="2" rx=".3" />
                      <rect x="10" y="10" width="2.5" height="2" rx=".3" />
                      <rect x="15" y="10" width="2.5" height="2" rx=".3" />
                      <rect x="5" y="14" width="2.5" height="2" rx=".3" />
                      <rect x="10" y="14" width="2.5" height="2" rx=".3" />
                    </svg>
                    <span className="whitespace-nowrap" style={{ fontSize: "10px", marginTop: "2px", color: "#333", fontWeight: 400 }}>
                      予約確認
                    </span>
                  </a>
                )}

                <button
                  type="button"
                  className="flex flex-col items-center justify-center px-2 lg:px-3"
                  style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  aria-label="メニューを開く"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div style={{ width: "20px", height: "20px" }} className="flex flex-col justify-center gap-[4px]">
                    <span style={{ display: "block", width: "20px", height: "3px", backgroundColor: "var(--color-danger)", borderRadius: "1px" }} />
                    <span style={{ display: "block", width: "20px", height: "3px", backgroundColor: "var(--color-danger)", borderRadius: "1px" }} />
                    <span style={{ display: "block", width: "20px", height: "3px", backgroundColor: "var(--color-danger)", borderRadius: "1px" }} />
                  </div>
                  <span className="whitespace-nowrap" style={{ fontSize: "10px", marginTop: "2px", color: "#333", fontWeight: 400 }}>
                    メニュー
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {drawerContent && (
        <DrawerShell isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          {drawerContent}
        </DrawerShell>
      )}
    </>
  );
};
