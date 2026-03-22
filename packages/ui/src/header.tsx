"use client";

import type { FC } from "react";
import { useState, useEffect, useRef } from "react";

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
  menuSections?: MenuSection[];
  menuQuickLinks?: MenuLink[];
  menuExternalSites?: MenuLink[];
  menuBannerUrl?: string;
  menuBannerHref?: string;
  menuSliderImages?: string[];
}

/** CSS製×アイコン（2本の赤い線を45度回転） */
const CssCloseIcon: FC<{ size?: number }> = ({ size = 30 }) => (
  <div style={{ width: size, height: size, position: "relative" }}>
    <span style={{
      display: "block", width: size, height: 2, backgroundColor: "#ed3434",
      position: "absolute", top: "50%", left: 0,
      transform: "rotate(45deg)", transformOrigin: "center",
    }} />
    <span style={{
      display: "block", width: size, height: 2, backgroundColor: "#ed3434",
      position: "absolute", top: "50%", left: 0,
      transform: "rotate(-45deg)", transformOrigin: "center",
    }} />
  </div>
);

/** フッタースライダー: 画像が左にゆっくり流れる */
const FooterSlider: FC<{ images: string[]; isLg?: boolean }> = ({ images, isLg }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.5;
    const animate = () => {
      pos -= speed;
      const totalWidth = el.scrollWidth / 2;
      if (Math.abs(pos) >= totalWidth) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const imgW = isLg ? 190 : 169;
  const imgH = isLg ? 95 : 101;
  const doubled = [...images, ...images];
  return (
    <div style={{ overflow: "hidden", padding: "10px 0" }}>
      <div ref={ref} style={{ display: "flex", gap: "4px", willChange: "transform" }}>
        {doubled.map((src, i) => (
          <img key={i} src={src} alt="" style={{ width: imgW, height: imgH, objectFit: "cover", borderRadius: 4, flexShrink: 0 }} />
        ))}
      </div>
    </div>
  );
};

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
  menuSliderImages,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsLg(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 600,
    color: "#666",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  // ドロワー内アイコンサイズ: SP 45px / PC 15px
  const menuIconSize = isLg ? "15px" : "45px";
  // ドロワー内ロゴ: PC時はmaxWidth制限
  const menuLogoStyle: React.CSSProperties = isLg
    ? { height: "40px", maxWidth: "89px", objectFit: "contain" as const, marginBottom: "5px" }
    : { height: "40px", objectFit: "contain" as const, marginBottom: "5px" };

  return (
    <>
    <header className="lg:sticky lg:top-0 z-50">
      {/* トップバー - 既存: height 43px(padding 5px 0), bg #1a9edb, fontSize 11px */}
      <div style={{ backgroundColor: "#1a9edb" }}>
        <div className="mx-auto px-1" style={{ maxWidth: "1020px" }}>
          <div
            className="flex items-center text-white"
            style={{ height: "43px", padding: "5px 0", fontSize: "11px", fontWeight: 300 }}
          >
            <span className="truncate">
              {catchphrase ||
                `青の洞窟専門のアクティビティ予約サイト "${siteName}"`}
            </span>
          </div>
        </div>
      </div>

      {/* メインヘッダー - 既存: height 59px, box-shadow あり */}
      <div className="bg-white" style={{ borderBottom: "1px solid #e5e5e5", boxShadow: "rgb(191, 191, 191) 0px 1px 5px 0px" }}>
        <div className="mx-auto px-1" style={{ maxWidth: "1020px" }}>
          <div
            className="flex items-center justify-between"
            style={{ height: "59px" }}
          >
            {/* ロゴ - 既存SP: 110x27px */}
            <a href="/" className="flex items-center shrink-0">
              {logoUrl ? (
                <img src={logoUrl} alt={siteName} style={{ height: "27px" }} />
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

            {/* アクションアイコン群 - 既存: padding 5px 0, fontSize 10px, icon 20px高 */}
            <div className="flex items-center">
              {contactUrl && (
                <a
                  href={contactUrl}
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "5px 0" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 22"
                    fill="#1a9edb"
                  >
                    <path d="M12 0C5.4 0 0 4.4 0 9.8c0 3.1 1.7 5.8 4.4 7.6L3 21.5c-.1.3.1.5.4.5.1 0 .2 0 .3-.1l5-3.2c1 .2 2.1.3 3.3.3 6.6 0 12-4.4 12-9.8S18.6 0 12 0zm-4 12a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm4 0a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm4 0a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
                  </svg>
                  <span className="whitespace-nowrap" style={{ fontSize: "10px", marginTop: "2px", color: "#333" }}>
                    各種 お問い合わせ
                  </span>
                </a>
              )}

              {saleUrl && (
                <a
                  href={saleUrl}
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "5px 0" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#1a9edb"
                  >
                    <path d="M4 1a1 1 0 00-1 1v16a1 1 0 102 0v-5h10.5a1 1 0 00.8-1.6L13 7l3.3-4.4A1 1 0 0015.5 1H4z" />
                  </svg>
                  <span className="whitespace-nowrap" style={{ fontSize: "10px", marginTop: "2px", color: "#333" }}>
                    SALE・特集
                  </span>
                </a>
              )}

              {reservationCheckUrl && (
                <a
                  href={reservationCheckUrl}
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "5px 0" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="#1a9edb"
                  >
                    <path d="M18.5 2h-1V.5a.5.5 0 00-1 0V2h-10V.5a.5.5 0 00-1 0V2h-1A3.5 3.5 0 001 5.5v11A3.5 3.5 0 004.5 20h14a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0018.5 2zm-14 1h14A2.5 2.5 0 0121 5.5V7H2V5.5A2.5 2.5 0 014.5 3zM18.5 19h-14A2.5 2.5 0 012 16.5V8h19v8.5A2.5 2.5 0 0118.5 19z" />
                    <rect x="5" y="10" width="2.5" height="2" rx=".3" />
                    <rect x="10" y="10" width="2.5" height="2" rx=".3" />
                    <rect x="15" y="10" width="2.5" height="2" rx=".3" />
                    <rect x="5" y="14" width="2.5" height="2" rx=".3" />
                    <rect x="10" y="14" width="2.5" height="2" rx=".3" />
                  </svg>
                  <span className="whitespace-nowrap" style={{ fontSize: "10px", marginTop: "2px", color: "#333" }}>
                    予約確認
                  </span>
                </a>
              )}

              <button
                type="button"
                className="flex flex-col items-center justify-center"
                style={{ padding: "5px 12px" }}
                aria-label="メニューを開く"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div
                  style={{ width: "20px", height: "20px" }}
                  className="flex flex-col justify-center gap-[4px]"
                >
                  <span style={{ display: "block", width: "20px", height: "3px", backgroundColor: "#ed3434", borderRadius: "1px" }} />
                  <span style={{ display: "block", width: "20px", height: "3px", backgroundColor: "#ed3434", borderRadius: "1px" }} />
                  <span style={{ display: "block", width: "20px", height: "3px", backgroundColor: "#ed3434", borderRadius: "1px" }} />
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

      {/* オーバーレイ - 既存: SP rgba(0,0,0,0.6) z-100 / PC なし */}
      {!isLg && (
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 100,
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
          transition: "opacity 300ms ease-in-out",
        }}
        onClick={() => setIsMenuOpen(false)}
      />
      )}
      {/* パネル - 既存: SP top:0 / PC top:94px, z-index:10000 */}
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
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms ease-in-out",
        }}
      >
            {/* 閉じるボタン（上部） - 既存: SP top:15px right:15px / PC 非表示 */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
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

            {/* ヘッダーメッセージ - 既存: 18px/600/#666, left, SP paddingTop 80px / PC 20px */}
            <div style={{ paddingTop: isLg ? "20px" : "80px", paddingLeft: "15px", paddingRight: "15px", paddingBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
              <img src="/images/menu/title-icon-a.png" alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
              <span style={{ fontSize: "18px", fontWeight: 600, color: "#666", lineHeight: "24px" }}>
                会員登録不要！ご予約はお早めに
              </span>
            </div>

            {/* クイックリンク 3カラム - 既存: boxShadow rgba(204,204,204,0.32) 0px 1px 10px 3px */}
            {menuQuickLinks && menuQuickLinks.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
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
                      boxShadow: "rgba(204, 204, 204, 0.32) 0px 1px 10px 3px",
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

            {/* 写真無料プランバナー - 既存: SP icon 45px / PC icon 15px */}
            <div style={{ padding: "0 15px 25px" }}>
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
                  color: "#666",
                }}
              >
                <img src="/images/menu/icon-camera.png" alt="" style={{ width: menuIconSize, height: menuIconSize, objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#666" }}>心に残る瞬間を写真に残そう！</div>
                  <div style={{ fontWeight: 700, fontSize: "18px", color: "#666" }}>写真無料プラン</div>
                </div>
              </a>
            </div>

            {/* メニューセクション */}
            {menuSections && menuSections.map((section) => (
              <div key={section.title} style={{ padding: "0 15px 25px" }}>
                <div style={sectionTitleStyle}>
                  <img src="/images/menu/title-icon-c.png" alt="" style={{ width: "20px", height: "20px" }} />
                  {section.title}
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
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

            {/* 外部サイトリンク - PC時ロゴmaxWidth:89px */}
            {menuExternalSites && menuExternalSites.length > 0 && (
              <div style={{ padding: "0 15px 15px" }}>
                <div style={sectionTitleStyle}>
                  <img src="/images/menu/icon-other-island.png" alt="" style={{ width: "20px", height: "20px" }} />
                  他の島のツアーもチェック
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                }}>
                  {menuExternalSites.map((site) => (
                    <a
                      key={site.href}
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 10px 5px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                      }}
                    >
                      {site.iconUrl ? (
                        <img src={site.iconUrl} alt={site.label} style={menuLogoStyle} />
                      ) : null}
                      <span style={{ fontSize: "10px", fontWeight: 600, color: "#666" }}>{site.label.includes("石垣") ? "石垣島専門" : "小浜島専門"}</span>
                      <span style={{ fontSize: "9px", color: "#999" }}>（外部サイト）</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 離島フェリー予約受付中 - SP icon 45px / PC icon 15px */}
            <div style={{ padding: "0 15px 25px" }}>
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
                  color: "#666",
                }}
              >
                <img src="/images/menu/icon-ferry.png" alt="" style={{ width: menuIconSize, height: menuIconSize, objectFit: "contain" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#666" }}>【各便40席限定】石垣島から離島へ！</div>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#666" }}>（乗船時間までキャンセル料無料）</div>
                  <div style={{ fontWeight: 700, fontSize: "18px", color: "#666", marginTop: "2px" }}>離島フェリー予約受付中</div>
                </div>
              </a>
            </div>

            {/* 初めて行く方へ！お役立ち情報 */}
            <div style={{ padding: "0 15px 25px" }}>
              <div style={sectionTitleStyle}>
                <img src="/images/menu/icon-info.png" alt="" style={{ width: "20px", height: "20px" }} />
                初めて行く方へ！お役立ち情報
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                <a
                  href="https://ishigaki-tours.com/popular-spot/bluecave.html"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                    padding: "10px 5px", backgroundColor: "#fff", borderRadius: "10px",
                    textDecoration: "none", color: "#666", fontSize: "10px", fontWeight: 600, lineHeight: "1.3",
                  }}
                >
                  <img src="/images/menu/icon-bluecave.png" alt="" style={{ width: "40px", height: "40px", objectFit: "contain", marginBottom: "4px" }} />
                  {"青の洞窟とは？\n基本情報紹介"}
                </a>
                <a
                  href="/column"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                    padding: "10px 5px", backgroundColor: "#fff", borderRadius: "10px",
                    textDecoration: "none", color: "#666", fontSize: "10px", fontWeight: 600, lineHeight: "1.3",
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

            {/* フッタースライダー - SP 169x101 / PC 190x95 */}
            {menuSliderImages && menuSliderImages.length > 0 && (
              <FooterSlider images={menuSliderImages} isLg={isLg} />
            )}

            {/* 閉じるボタン（下部） - 既存: 60px, bg #eee, テキスト「×」 */}
            <div style={{ height: "60px", backgroundColor: "#eee" }}>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
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
