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
  /**
   * キャッチコピー（トップバーに表示）
   */
  catchphrase?: string;
  /**
   * 電話番号（表示する場合）
   */
  phoneNumber?: string;
  /**
   * 予約確認URL
   */
  reservationCheckUrl?: string;
  /**
   * 履歴・お気に入りURL
   */
  historyUrl?: string;
  /**
   * お問い合わせURL
   */
  contactUrl?: string;
}

/**
 * 共通ヘッダーコンポーネント
 * 既存サイトのデザインに合わせたトップバー付きヘッダー
 */
export const Header: FC<HeaderProps> = ({
  siteName,
  logoUrl,
  navItems,
  catchphrase,
  phoneNumber,
  reservationCheckUrl,
  historyUrl,
  contactUrl,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* トップバー（水色） */}
      <div className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-8 items-center justify-between text-xs sm:text-sm">
            <span className="truncate">
              {catchphrase || `青の洞窟専門のアクティビティ予約サイト "${siteName}"`}
            </span>
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber.replace(/-/g, "")}`}
                className="hidden sm:flex items-center gap-1 hover:opacity-80"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {phoneNumber}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* メインヘッダー（白背景） */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* ロゴ */}
            <a href="/" className="flex items-center gap-2 shrink-0">
              {logoUrl ? (
                <img src={logoUrl} alt={siteName} className="h-9" />
              ) : (
                <span className="text-lg font-bold text-primary">{siteName}</span>
              )}
            </a>

            {/* デスクトップナビゲーション */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* アクションボタン群 */}
            <div className="flex items-center gap-2">
              {/* お問い合わせ */}
              {contactUrl && (
                <a
                  href={contactUrl}
                  className="hidden sm:flex flex-col items-center justify-center px-2 py-1 text-gray-600 hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs mt-0.5">お問合せ</span>
                </a>
              )}

              {/* 履歴・お気に入り */}
              {historyUrl && (
                <a
                  href={historyUrl}
                  className="hidden sm:flex flex-col items-center justify-center px-2 py-1 text-gray-600 hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs mt-0.5">履歴</span>
                </a>
              )}

              {/* 予約確認ボタン */}
              {reservationCheckUrl && (
                <a
                  href={reservationCheckUrl}
                  className="flex items-center gap-1 rounded bg-danger px-3 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  <span className="hidden sm:inline">予約確認</span>
                </a>
              )}

              {/* モバイルメニューボタン */}
              <button
                type="button"
                className="lg:hidden flex flex-col items-center justify-center px-2 py-1 text-gray-600"
                aria-label="メニューを開く"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
                <span className="text-xs mt-0.5">メニュー</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="border-t pt-2 mt-2">
                {contactUrl && (
                  <a
                    href={contactUrl}
                    className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    お問合せ
                  </a>
                )}
              </li>
              <li>
                {historyUrl && (
                  <a
                    href={historyUrl}
                    className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    履歴・お気に入り
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
