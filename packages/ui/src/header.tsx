"use client";

import type { FC } from "react";
import { useState } from "react";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MenuLink {
  label: string;
  href: string;
  iconUrl?: string;
}

export interface MenuSection {
  title: string;
  iconUrl?: string;
  items: MenuLink[];
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
  /** ドロワーメニューのセクション設定 */
  menuSections?: MenuSection[];
  /** ドロワーメニューのクイックリンク（上部3カラム） */
  menuQuickLinks?: MenuLink[];
  /** ドロワーメニューの外部サイトリンク */
  menuExternalSites?: MenuLink[];
  /** ドロワーメニューの下部バナー画像URL */
  menuBannerUrl?: string;
  /** ドロワーメニューの下部バナーリンク */
  menuBannerHref?: string;
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
  menuSections,
  menuQuickLinks,
  menuExternalSites,
  menuBannerUrl,
  menuBannerHref,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
    </header>

      {/* ドロワーメニュー - 既存サイト準拠: 右側スライドインパネル */}
      {/* オーバーレイ */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 9998,
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
          transition: "opacity 300ms ease-in-out",
        }}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* パネル */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(360px, 90vw)",
          backgroundColor: "#eff4ff",
          zIndex: 9999,
          overflowY: "auto",
          boxShadow: "-4px 0 12px rgba(0,0,0,0.15)",
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms ease-in-out",
        }}
      >
            {/* 閉じるボタン */}
            <div style={{ textAlign: "right", padding: "40px 12px 0" }}>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "28px",
                  color: "#f08300",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
                aria-label="メニューを閉じる"
              >
                ×
              </button>
            </div>

            {/* ヘッダーメッセージ - 既存: 14px/600 */}
            <div style={{ textAlign: "center", padding: "4px 15px 8px", fontSize: "14px", fontWeight: 600, color: "#212529", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <img src="/images/menu/title-icon-a.png" alt="" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              会員登録不要！ご予約はお早めに
            </div>

            {/* クイックリンク 3カラム - 既存: 白bg/枠線なし/95x89px */}
            {menuQuickLinks && menuQuickLinks.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "6px",
                padding: "0 15px 15px",
              }}>
                {menuQuickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "10px 5px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      textDecoration: "none",
                      color: "#666",
                      fontSize: "10px",
                      fontWeight: 600,
                      lineHeight: "1.3",
                    }}
                  >
                    {link.iconUrl && (
                      <img src={link.iconUrl} alt="" style={{ width: "40px", height: "40px", objectFit: "contain", marginBottom: "4px" }} />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* 写真無料プランバナー - 既存: カメラアイコン画像 */}
            <div style={{ padding: "0 15px 12px" }}>
              <a
                href="/scene-time/freetourphotos.html"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "#212529",
                }}
              >
                <img src="/images/menu/icon-camera.png" alt="" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "11px", color: "#666" }}>心に残る瞬間を写真に残そう！</div>
                  <div style={{ fontWeight: "bold", fontSize: "13px" }}>写真無料プラン</div>
                </div>
              </a>
            </div>

            {/* メニューセクション - 既存: 白bg/枠線なし */}
            {menuSections && menuSections.map((section) => (
              <div key={section.title} style={{ padding: "0 15px 12px" }}>
                <div style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#212529",
                  marginBottom: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}>
                  <img src="/images/menu/title-icon-c.png" alt="" style={{ width: "20px", height: "20px" }} />
                  {section.title}
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "6px",
                }}>
                  {section.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "10px 5px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                        color: "#666",
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "1.3",
                      }}
                    >
                      {item.iconUrl && (
                        <img src={item.iconUrl} alt="" style={{ width: "40px", height: "40px", objectFit: "contain", marginBottom: "4px" }} />
                      )}
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* 外部サイトリンク - 既存: 白bg/枠線なし */}
            {menuExternalSites && menuExternalSites.length > 0 && (
              <div style={{ padding: "0 15px 12px" }}>
                <div style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#212529",
                  marginBottom: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}>
                  <img src="/images/menu/icon-other-island.png" alt="" style={{ width: "20px", height: "20px" }} />
                  他の島のツアーもチェック
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "6px",
                }}>
                  {menuExternalSites.map((site) => (
                    <a
                      key={site.href}
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                      }}
                    >
                      {site.iconUrl ? (
                        <img src={site.iconUrl} alt={site.label} style={{ height: "24px", objectFit: "contain" }} />
                      ) : (
                        <span style={{ fontSize: "12px", color: "#333" }}>{site.label}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 離島フェリー予約受付中 - 既存サイト準拠 */}
            <div style={{ padding: "0 15px 8px" }}>
              <a
                href="https://ishigaki-tours.com/tours-ferry"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "#212529",
                }}
              >
                <img src="/images/menu/icon-ferry.png" alt="" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "11px", color: "#666" }}>【各便40席限定】石垣島から離島へ！</div>
                  <div style={{ fontSize: "11px", color: "#666" }}>（乗船時間までキャンセル料無料）</div>
                  <div style={{ fontWeight: "bold", fontSize: "13px", color: "#1a9edb", marginTop: "2px", borderBottom: "2px solid #f5c518", display: "inline-block" }}>離島フェリー予約受付中</div>
                </div>
              </a>
            </div>

            {/* 初めて行く方へ！お役立ち情報 - 既存サイト準拠 */}
            <div style={{ padding: "0 15px 12px" }}>
              <div style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#212529",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}>
                <img src="/images/menu/icon-info.png" alt="" style={{ width: "20px", height: "20px" }} />
                初めて行く方へ！お役立ち情報
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px" }}>
                <a
                  href="https://ishigaki-tours.com/popular-spot/bluecave.html"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "10px 5px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    textDecoration: "none",
                    color: "#666",
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "1.3",
                  }}
                >
                  <img src="/images/menu/icon-bluecave.png" alt="" style={{ width: "40px", height: "40px", objectFit: "contain", marginBottom: "4px" }} />
                  {"青の洞窟とは？\n基本情報紹介"}
                </a>
                <a
                  href="/column"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "10px 5px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    textDecoration: "none",
                    color: "#666",
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "1.3",
                  }}
                >
                  <img src="/images/menu/icon-column.png" alt="" style={{ width: "40px", height: "40px", objectFit: "contain", marginBottom: "4px" }} />
                  コラム一覧
                </a>
              </div>
            </div>

            {/* 青の洞窟ツアーKVバナー */}
            <div style={{ padding: "0 15px 12px" }}>
              <a
                href="https://ishigaki-tours.com/popular-spot/bluecave.html"
                onClick={() => setIsMenuOpen(false)}
                style={{ display: "block" }}
              >
                <img src="/images/menu/bluecave-kv.png" alt="青の洞窟ツアー" style={{ width: "100%", borderRadius: "4px" }} />
              </a>
            </div>

            {/* 閉じるボタン（下部） - 既存: 赤×＋テキスト */}
            <div style={{ padding: "4px 15px 12px", textAlign: "center" }}>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "14px",
                  color: "#666",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                メニューを閉じる
                <span style={{ color: "#ed3434", fontSize: "18px", fontWeight: "bold" }}>×</span>
              </button>
            </div>
          </div>
    </>
  );
};
