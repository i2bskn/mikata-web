import Link from "next/link";
import { PlanCard } from "@repo/ui/plan-card";
import { ImageSlider } from "@repo/ui/image-slider";
import { CategoryNav } from "@repo/ui/category-nav";
import { OrganizationJsonLd } from "@repo/seo/json-ld";
import { getPopularPlans } from "../lib/data/plans";
import { siteConfig, categoryNavItems } from "../lib/site-config";
import { Sidebar } from "../components/sidebar";

// ヒーローバナーのスライドデータ（旧サイト準拠: 4枚）
const heroSlides = [
  {
    imageUrl: "/images/banner/hero-kv.png",
    alt: "石垣島・青の洞窟専門 厳選ツアーがいっぱい！",
    href: "/",
  },
  {
    imageUrl: "/images/banner/hero-ferry.webp",
    alt: "離島フェリー予約",
    href: "https://ishigaki-tours.com/ferry/",
  },
  {
    imageUrl: "/images/banner/hero-premium.webp",
    alt: "ツアーズ厳選プレミアムプラン",
    href: "/campaign/premium-plan.html",
  },
  {
    imageUrl: "/images/banner/hero-bluecave.jpg",
    alt: "石垣島 青の洞窟",
    href: "/",
  },
];


export default function HomePage() {
  const popularPlans = getPopularPlans(6);

  return (
    <>
      <OrganizationJsonLd
        data={{
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/logo.png`,
          description:
            "石垣島の人気スポット「青の洞窟」ツアー特化サイト。シュノーケリング、SUP、カヤックなど多彩なアクティビティを提供。",
        }}
      />

      {/* ヒーローバナー - フルワイド */}
      <ImageSlider slides={heroSlides} autoPlayInterval={5000} />

      {/* 検索エリア - 既存サイト: フルワイド薄い青背景(#eff4ff)、白カード */}
      <div
        style={{
          backgroundColor: "#eff4ff",
          padding: "25px 0",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 10px" }}>
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "rgb(204, 204, 204) 0px 1px 6px 0px",
              padding: "15px",
            }}>
              {/* カテゴリナビ（タブ） - 白カード内 */}
              <CategoryNav items={categoryNavItems} embedded />

              {/* 検索フォーム - 白カード内 */}
              <div style={{ marginTop: "10px" }}>
          {/* 1行目: プラン選択 + 日付 + チェックボックス + 絞り込み */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* プラン選択 */}
            <div className="w-full sm:w-auto sm:flex-1" style={{ minWidth: "120px" }}>
              <select
                style={{
                  width: "100%",
                  padding: "10px 38px 10px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                  backgroundColor: "transparent",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
              >
                <option value="">全てのプラン</option>
                <option value="bluecave">青の洞窟シュノーケリング</option>
                <option value="kayak">カヤック</option>
                <option value="setplan">セットプラン</option>
                <option value="charter">チャーター</option>
                <option value="marine-sports">マリンスポーツ</option>
              </select>
            </div>

            {/* 日付選択 */}
            <div className="flex-1 relative" style={{ minWidth: "100px" }}>
              <input
                type="text"
                placeholder="日付未定"
                readOnly
                style={{
                  width: "100%",
                  padding: "10px 36px 10px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px 0 0 4px",
                  fontSize: "16px",
                  backgroundColor: "#ecf3f5",
                }}
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                className="absolute"
                style={{ right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>

            {/* 今日・明日チェックボックス */}
            <div className="flex items-center gap-3" style={{ fontSize: "14px", color: "#333" }}>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" style={{ width: "16px", height: "16px" }} />
                <span>今日</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" style={{ width: "16px", height: "16px" }} />
                <span>明日</span>
              </label>
            </div>

            {/* さらに絞り込む */}
            <button
              type="button"
              style={{
                fontSize: "12px",
                color: "#666",
                background: "none",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              ＋さらに<br />絞り込む
            </button>
          </div>

          {/* 該当プラン数 + 検索ボタン */}
          <div className="flex items-center justify-between" style={{ marginTop: "16px" }}>
            <div style={{ color: "#666", fontSize: "14px" }}>
              該当プラン数{" "}
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#333" }}>17</span>
              <span style={{ fontSize: "16px", color: "#333" }}>件</span>
            </div>
            <button
              type="button"
              className="text-base sm:text-[24px] px-6 sm:w-[195px] py-2.5 sm:py-3.5"
              style={{
                backgroundColor: "#ed3434",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                whiteSpace: "nowrap",
              }}
            >
              検索する
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
              </div>
            </div>
          </div>
        </div>

      {/* メインコンテンツ - 1020px幅 */}
      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 5px" }}>
        {/* 2カラムレイアウト - 既存サイト: 左サイドバー225px + 右メインコンテンツ */}
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          {/* メインコンテンツ */}
          <div className="flex-1 min-w-0">
            {/* 人気プランランキング */}
            <section>
              <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
                <h2 className="flex items-center gap-2" style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2" }}>
                  <img src="/images/icons/crown.svg" alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                  人気プランランキング
                </h2>
                <Link
                  href="/ranking"
                  style={{
                    backgroundColor: "#ed3434",
                    color: "#fff",
                    padding: "2px 10px",
                    borderRadius: "3px",
                    fontSize: "16.8px",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  一覧を見る
                </Link>
              </div>

              {/* プランカード横スクロール - 既存サイトは5つ横並び */}
              <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollSnapType: "x mandatory" }}>
                {popularPlans.map((plan, index) => (
                  <div
                    key={plan.slug}
                    className="shrink-0"
                    style={{ width: "160px", scrollSnapAlign: "start", position: "relative" }}
                  >
                    {/* ランキングバッジ */}
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        zIndex: 10,
                        backgroundColor: ["#E3AF3A", "#ADADAD", "#AA845E"][index] ?? "#34e5d3",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "2px 10px",
                        borderRadius: "0 0 8px 0",
                      }}
                    >
                      {index + 1}位
                    </div>
                    <PlanCard
                      name={plan.name}
                      description={plan.description}
                      imageUrl={plan.imageUrl}
                      href={`/plan/${plan.slug}`}
                      price={plan.price}
                      originalPrice={plan.originalPrice}
                      tags={plan.tags}
                      rating={plan.rating}
                      reviewCount={plan.reviewCount}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* おすすめ観光情報＆キャンペーン - 旧サイト: 横スクロール7カード */}
            <section style={{ marginTop: "20px" }}>
              <h2 className="flex items-center gap-2" style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2", marginBottom: "12px" }}>
                <img src="/images/icons/flag.svg" alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                おすすめ観光情報＆キャンペーン
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollSnapType: "x mandatory" }}>
                {[
                  { href: "/ferry/tours", image: "/images/campaign/ferry.jpg", title: "【各便40席限定】簡単！便利！離島フェリーチケットの予約＆詳細はこちら" },
                  { href: "/popular-spot/bluecave.html", image: "/images/campaign/bluecave-spot.png", title: "一生モノの絶景体験！石垣島『青の洞窟』で神秘のシュノーケリングツアー" },
                  { href: "/scene-time/rental-car.html", image: "/images/campaign/rental-car.png", title: "【石垣空港送迎付き】人気の石垣島レンタカー特集！" },
                  { href: "/campaign/premium-plan.html", image: "/images/campaign/premium-plan.webp", title: "【ツアーズ厳選】安心＆満足度No.1のおすすめプラン特集！" },
                  { href: "/scene-time/freetourphotos.html", image: "/images/campaign/freetourphotos.webp", title: "【写真無料】絶景と感動を写真でプレゼント！" },
                  { href: "/scene-time/setplan.html", image: "/images/campaign/setplan.jpg", title: "お得な割引セットプラン特集" },
                  { href: "/scene-time/same_day_booking.html", image: "/images/campaign/same-day-booking.webp", title: "前日・当日予約可能な青の洞窟ツアー" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block shrink-0 overflow-hidden"
                    style={{ width: "160px", scrollSnapAlign: "start", borderRadius: "4px", border: "1px solid #e5e5e5" }}
                  >
                    <div style={{ width: "160px", height: "89px", overflow: "hidden" }}>
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "8px", fontSize: "12px", fontWeight: "bold", color: "#333", lineHeight: "1.4" }}>{item.title}</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* シーン・時間帯から探す - 既存サイト: SP 2x2グリッド、PC 4列 */}
            <section style={{ marginTop: "20px" }}>
              <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
                <h2 className="flex items-center gap-2" style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2" }}>
                  <img src="/images/icons/icon-time.webp" alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                  シーン・時間帯から探す
                </h2>
                <Link
                  href="/category/scene-time"
                  style={{
                    backgroundColor: "#ed3434",
                    color: "#fff",
                    padding: "2px 10px",
                    borderRadius: "3px",
                    fontSize: "16.8px",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  一覧を見る
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { href: "/scene-time/half-day.html", image: "/images/scene/half-day.jpg", title: "お手軽！半日ツアー" },
                  { href: "/scene-time/one-day.html", image: "/images/scene/one-day.jpg", title: "満喫！1日ツアー" },
                  { href: "/scene-time/freetourphotos.html", image: "/images/scene/free-photo.webp", title: "写真無料サービス付きツアー" },
                  { href: "/scene-time/same_day_booking.html", image: "/images/scene/same-day.webp", title: "前日・当日予約可能な青の洞窟ツアー" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block overflow-hidden"
                    style={{ borderRadius: "4px", border: "1px solid #e5e5e5" }}
                  >
                    <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "8px", fontSize: "12px", fontWeight: "bold", color: "#333", lineHeight: "1.4" }}>{item.title}</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* 人気の組み合わせから探す */}
            <section style={{ marginTop: "20px", padding: "16px" }}>
              <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
                <h2 className="flex items-center gap-2" style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2" }}>
                  <img src="/images/icons/icon-activity.png" alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                  人気の組み合わせから探す
                </h2>
                <Link
                  href="/category/setplan"
                  style={{
                    backgroundColor: "#ed3434",
                    color: "#fff",
                    padding: "2px 10px",
                    borderRadius: "3px",
                    fontSize: "16.8px",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  一覧を見る
                </Link>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible">
                {[
                  { href: "/setplan/bluecave-kabirabay.html", title: "青の洞窟×川平湾ツアー", image: "/images/setplan/bluecave-kabirabay.webp" },
                  { href: "/setplan/bluecave-mangrove.html", title: "青の洞窟×マングローブツアー", image: "/images/setplan/bluecave-mangrove.webp" },
                  { href: "/setplan/bluecave-sup-kayak.html", title: "石垣島青の洞窟×SUP・カヤック", image: "/images/setplan/bluecave-sup-kayak.webp" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block overflow-hidden shrink-0 w-[150px] sm:w-auto"
                    style={{ borderRadius: "4px", backgroundColor: "#fff", border: "1px solid #e5e5e5" }}
                  >
                    <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "10px", fontSize: "13px", fontWeight: "bold", color: "#333" }}>{item.title}</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* 条件から探す */}
            <section style={{ marginTop: "20px" }}>
              <h2 className="flex items-center gap-2" style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2", marginBottom: "12px" }}>
                <img src="/images/icons/loupe.svg" alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                条件から探す
              </h2>
              {["スポットから探す", "見れるものから探す", "シーンから探す", "シーズンから探す", "時間帯から探す", "こだわり条件から探す"].map((label) => (
                <details
                  key={label}
                  style={{
                    borderBottom: "1px solid #e5e5e5",
                    padding: "14px 0",
                  }}
                >
                  <summary
                    style={{
                      fontSize: "16px",
                      color: "#333",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                </details>
              ))}

              {/* 条件検索ボタン - 旧サイト準拠: width 300px, fontSize 28.8px */}
              <div style={{ marginTop: "24px", textAlign: "center" }}>
                <button
                  type="button"
                  className="w-full sm:w-[300px] text-xl sm:text-[24px]"
                  style={{
                    backgroundColor: "#ed3434",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "8px 0",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  検索する
                </button>
              </div>
            </section>

            {/* ツアーズコラム - 旧サイト: 3記事、サムネ+タイトル+日付+PV数 */}
            <section style={{ marginTop: "20px", padding: "16px" }}>
              <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
                <h2 className="flex items-center gap-2" style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2" }}>
                  <img src="/images/icons/pen.svg" alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                  ツアーズコラム
                </h2>
                <Link
                  href="/column"
                  style={{
                    backgroundColor: "#ed3434",
                    color: "#fff",
                    padding: "2px 10px",
                    borderRadius: "3px",
                    fontSize: "16.8px",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                >
                  一覧を見る
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  {
                    href: "/column/okinawa-bluecave",
                    image: "/images/column/okinawa-bluecave.webp",
                    title: "【沖縄・青の洞窟】行く前に知りたい！場所・アクセス・おすすめツアーまとめ",
                    date: "2025年11月10日",
                    views: 213,
                  },
                  {
                    href: "/column/marine",
                    image: "/images/column/marine.webp",
                    title: "石垣島で人気のマリンスポーツ完全ガイド！初心者でも楽しめるSUP・ダイビング・パラセーリング",
                    date: "2025年11月4日",
                    views: 106,
                  },
                  {
                    href: "/column/activity",
                    image: "/images/column/activity.webp",
                    title: "石垣島のアクティビティの魅力とは？後悔しないための楽しみ方＆ツアー選びのコツ",
                    date: "2025年10月31日",
                    views: 124,
                  },
                ].map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="flex gap-4"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    <div className="shrink-0" style={{ width: "120px", height: "75px", borderRadius: "4px", overflow: "hidden" }}>
                      <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "1.4", marginBottom: "6px" }}>{article.title}</p>
                      <div className="flex items-center justify-between" style={{ fontSize: "12px", color: "#999" }}>
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* 関連情報 - 旧サイト: 2x3グリッドのバナー */}
            <section style={{ marginTop: "20px" }}>
              <h2 style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2", marginBottom: "16px", borderBottom: "4px solid #1a9edb", paddingBottom: "10px" }}>
                関連情報
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { href: "/campaign/premium-plan.html", image: "/images/related/premium-plan.png", alt: "ツアーズ厳選プレミアムプラン" },
                  { href: "https://ishigaki-tours.com/ferry/", image: "/images/related/ferry.webp", alt: "離島フェリー予約" },
                  { href: "https://ishigaki-tours.com/", image: "/images/related/bluecavetour.webp", alt: "石垣島ツアーズ" },
                  { href: "https://kohama-tours.com/", image: "/images/related/kohama.webp", alt: "小浜島ツアーズ" },
                  { href: "https://iriomote-tours.com/", image: "/images/related/iriomote.png", alt: "西表島ツアーズ" },
                  { href: "/affiliate-programs/", image: "/images/related/affiliate.png", alt: "アフィリエイトパートナー募集" },
                ].map((item) => (
                  <a
                    key={item.alt}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block overflow-hidden"
                    style={{ borderRadius: "4px" }}
                  >
                    <img src={item.image} alt={item.alt} style={{ width: "100%", height: "auto", display: "block" }} />
                  </a>
                ))}
              </div>
            </section>

            {/* 予約から参加の流れ - 既存サイト: 4ステップ横並び */}
            <section style={{ marginTop: "20px", paddingBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#212529",
                  lineHeight: "21.6px",
                  paddingBottom: "10px",
                  borderBottom: "4px solid #1a9edb",
                  marginBottom: "20px",
                }}
              >
                予約から参加の流れ
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    step: 1,
                    image: "/images/flow/flow01.webp",
                    title: "ツアーを探す",
                    text: "シーンや時間帯から参加したいツアーを探してみましょう\u266a",
                  },
                  {
                    step: 2,
                    image: "/images/flow/flow02.webp",
                    title: "予約プランの申し込み",
                    text: "申し込みたいプランを決めたら、日付と時間帯を選んで申し込み開始！",
                  },
                  {
                    step: 3,
                    image: "/images/flow/flow03.webp",
                    title: "予約確定",
                    text: "予約が完了すると、石垣島ツアーズから連絡がきます\u266a",
                  },
                  {
                    step: 4,
                    image: "/images/flow/flow04.webp",
                    title: "ツアーに参加",
                    text: "あとは当日参加するだけ！思いっきり楽しんじゃおう！！",
                  },
                ].map((item) => (
                  <div key={item.step} style={{ paddingBottom: "10px" }}>
                    <div style={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          backgroundColor: "#1a9edb",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: "bold",
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "2px",
                          zIndex: 1,
                        }}
                      >
                        {item.step}
                      </span>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: "16.8px",
                        fontWeight: 600,
                        color: "#ed3434",
                        marginTop: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14.4px",
                        color: "#333",
                        lineHeight: "1.4",
                        marginTop: "4px",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* フローティングボタン - 既存サイト: PC右下に「特集・SALE情報を見る」 */}
      <a
        href="/pickup_item"
        className="hidden lg:flex fixed flex-col items-center"
        style={{
          bottom: "20px",
          right: "20px",
          backgroundColor: "#ed3434",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          textDecoration: "none",
          zIndex: 50,
          gap: "4px",
        }}
      >
        <span style={{ fontSize: "10px", fontWeight: "bold" }}>＼ 会員登録不要 ／</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>特集・SALE</span>
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>情報を見る</span>
      </a>

      {/* スティッキーバナー - 既存サイト: SP画面下部に「写真撮影付きツアー」 */}
      <a
        href="/scene-time/freetourphotos.html"
        className="lg:hidden fixed left-0 right-0 flex items-center justify-center"
        style={{
          bottom: 0,
          backgroundColor: "#1a9edb",
          color: "#fff",
          padding: "8px 16px",
          fontSize: "13px",
          fontWeight: "bold",
          textDecoration: "none",
          zIndex: 50,
          gap: "8px",
        }}
      >
        <span>📷 写真撮影付きツアー</span>
        <span style={{ fontSize: "11px", backgroundColor: "#f08300", padding: "2px 8px", borderRadius: "3px" }}>
          高画質データ無料プレゼント！
        </span>
      </a>
    </>
  );
}
