"use client";

import type { FC } from "react";
import { useState } from "react";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

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
}

/**
 * 共通ヘッダーコンポーネント
 * 既存サイト: 水色トップバー + 白メインヘッダー + アクションアイコン
 */
export const Header: FC<HeaderProps> = ({
  siteName,
  logoUrl,
  navItems,
  catchphrase,
  reservationCheckUrl,
  historyUrl,
  contactUrl,
  saleUrl,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="lg:sticky lg:top-0 z-50">
      {/* トップバー（水色背景） - 既存サイト: height 35px, bg #1a9edb */}
      <div style={{ backgroundColor: "#1a9edb" }}>
        <div className="mx-auto px-1" style={{ maxWidth: "1020px" }}>
          <div
            className="flex items-center text-white"
            style={{ height: "35px", fontSize: "12px", fontWeight: 300 }}
          >
            <span className="truncate">
              {catchphrase ||
                `青の洞窟専門のアクティビティ予約サイト "${siteName}"`}
            </span>
          </div>
        </div>
      </div>

      {/* メインヘッダー（白背景） - 既存サイト: height 59px */}
      <div className="bg-white" style={{ borderBottom: "1px solid #e5e5e5" }}>
        <div className="mx-auto px-1" style={{ maxWidth: "1020px" }}>
          <div
            className="flex items-center justify-between"
            style={{ height: "59px" }}
          >
            {/* ロゴ */}
            <a href="/" className="flex items-center shrink-0">
              {logoUrl ? (
                <img src={logoUrl} alt={siteName} className="h-10" />
              ) : (
                <span
                  className="font-bold"
                  style={{ color: "#1a9edb", fontSize: "18px" }}
                >
                  {siteName}
                </span>
              )}
            </a>

            {/* デスクトップナビゲーション */}
            <nav className="hidden lg:flex items-center gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-semibold"
                  style={{ color: "#333", fontSize: "12px" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* アクションアイコン群 - 既存サイト: 全て#1a9edb fill、メニューのみ#ed3434 */}
            <div className="flex items-center">
              {/* 各種 お問い合わせ */}
              {contactUrl && (
                <a
                  href={contactUrl}
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "4px 6px" }}
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 24 22"
                    fill="#1a9edb"
                    className="sm:w-[23px] sm:h-[20px]"
                  >
                    <path d="M12 0C5.4 0 0 4.4 0 9.8c0 3.1 1.7 5.8 4.4 7.6L3 21.5c-.1.3.1.5.4.5.1 0 .2 0 .3-.1l5-3.2c1 .2 2.1.3 3.3.3 6.6 0 12-4.4 12-9.8S18.6 0 12 0zm-4 12a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm4 0a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm4 0a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
                  </svg>
                  <span className="whitespace-nowrap" style={{ fontSize: "9px", marginTop: "2px", color: "#333" }}>
                    各種 お問い合わせ
                  </span>
                </a>
              )}

              {/* SALE・特集 - 既存サイト: 旗アイコン */}
              {saleUrl && (
                <a
                  href={saleUrl}
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "4px 6px" }}
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="#1a9edb"
                    className="sm:w-[23px] sm:h-[20px]"
                  >
                    <path d="M4 1a1 1 0 00-1 1v16a1 1 0 102 0v-5h10.5a1 1 0 00.8-1.6L13 7l3.3-4.4A1 1 0 0015.5 1H4z" />
                  </svg>
                  <span className="whitespace-nowrap" style={{ fontSize: "9px", marginTop: "2px", color: "#333" }}>
                    SALE・特集
                  </span>
                </a>
              )}

              {/* 予約確認 - 既存サイト: 青のカレンダーアイコン */}
              {reservationCheckUrl && (
                <a
                  href={reservationCheckUrl}
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "4px 6px" }}
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 23 20"
                    fill="#1a9edb"
                    className="sm:w-[23px] sm:h-[20px]"
                  >
                    <path d="M18.5 2h-1V.5a.5.5 0 00-1 0V2h-10V.5a.5.5 0 00-1 0V2h-1A3.5 3.5 0 001 5.5v11A3.5 3.5 0 004.5 20h14a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0018.5 2zm-14 1h14A2.5 2.5 0 0121 5.5V7H2V5.5A2.5 2.5 0 014.5 3zM18.5 19h-14A2.5 2.5 0 012 16.5V8h19v8.5A2.5 2.5 0 0118.5 19z" />
                    <rect x="5" y="10" width="2.5" height="2" rx=".3" />
                    <rect x="10" y="10" width="2.5" height="2" rx=".3" />
                    <rect x="15" y="10" width="2.5" height="2" rx=".3" />
                    <rect x="5" y="14" width="2.5" height="2" rx=".3" />
                    <rect x="10" y="14" width="2.5" height="2" rx=".3" />
                  </svg>
                  <span className="whitespace-nowrap" style={{ fontSize: "9px", marginTop: "2px", color: "#333" }}>
                    予約確認
                  </span>
                </a>
              )}

              {/* メニューボタン - 既存サイト: #ed3434の3本線 */}
              <button
                type="button"
                className="flex flex-col items-center justify-center"
                style={{ padding: "4px 12px" }}
                aria-label="メニューを開く"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div
                  style={{ width: "20px", height: "20px" }}
                  className="flex flex-col justify-center gap-[4px]"
                >
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "3px",
                      backgroundColor: "#ed3434",
                      borderRadius: "1px",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "3px",
                      backgroundColor: "#ed3434",
                      borderRadius: "1px",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "3px",
                      backgroundColor: "#ed3434",
                      borderRadius: "1px",
                    }}
                  />
                </div>
                <span style={{ fontSize: "10px", marginTop: "2px", color: "#333" }}>
                  メニュー
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* モバイル/ドロワーメニュー */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg" style={{ borderTop: "1px solid #e5e5e5" }}>
          <nav className="mx-auto px-4 py-4" style={{ maxWidth: "1020px" }}>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-3 px-2"
                    style={{ color: "#333", borderBottom: "1px solid #eee" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li style={{ borderBottom: "1px solid #eee" }}>
                {contactUrl && (
                  <a href={contactUrl} className="block py-3 px-2" style={{ color: "#333" }}>
                    各種 お問い合わせ
                  </a>
                )}
              </li>
              <li style={{ borderBottom: "1px solid #eee" }}>
                {historyUrl && (
                  <a href={historyUrl} className="block py-3 px-2" style={{ color: "#333" }}>
                    履歴・お気に入り
                  </a>
                )}
              </li>
              <li>
                {reservationCheckUrl && (
                  <a href={reservationCheckUrl} className="block py-3 px-2" style={{ color: "#333" }}>
                    予約確認
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
