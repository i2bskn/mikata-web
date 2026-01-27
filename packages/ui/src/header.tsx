import type { FC } from "react";

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
   * 電話番号（表示する場合）
   */
  phoneNumber?: string;
  /**
   * 予約ボタンのリンク先
   */
  reservationUrl?: string;
}

/**
 * 共通ヘッダーコンポーネント
 *
 * 各サイトでカスタマイズする場合は、このコンポーネントをラップして使用
 */
export const Header: FC<HeaderProps> = ({
  siteName,
  logoUrl,
  navItems,
  phoneNumber,
  reservationUrl,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <a href="/" className="flex items-center gap-2">
            {logoUrl ? (
              <img src={logoUrl} alt={siteName} className="h-10" />
            ) : (
              <span className="text-xl font-bold text-blue-600">{siteName}</span>
            )}
          </a>

          {/* ナビゲーション（デスクトップ） */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAエリア */}
          <div className="flex items-center gap-4">
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber.replace(/-/g, "")}`}
                className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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

            {reservationUrl && (
              <a
                href={reservationUrl}
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
              >
                予約する
              </a>
            )}

            {/* モバイルメニューボタン */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-700"
              aria-label="メニューを開く"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
