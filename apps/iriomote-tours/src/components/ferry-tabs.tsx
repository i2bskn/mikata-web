"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

type TabKey = "booking" | "timetable" | "method" | "islands";

const PORT_OPTIONS = [
  "石垣島",
  "竹富島",
  "西表島（上原港）",
  "西表島（大原港）",
  "小浜島",
  "鳩間島",
  "黒島",
];

const merits = [
  {
    title: "オンライン決済＆\nチケットレス",
    description:
      "八重山諸島でフェリーチケットをオンラインで購入できるのは当サイトだけ。スマホ提示でそのまま乗船できます。",
    iconUrl: "/images/tours-ferry/merit-1.png",
  },
  {
    title: "非接触で安心",
    description:
      "窓口での購入が不要なので、接触機会を最小限に。旅の時間も大幅に節約できます。",
    iconUrl: "/images/tours-ferry/merit-2.png",
  },
  {
    title: "ツアー割引特典",
    description:
      "フェリーチケットご購入の方は、当サイト掲載ツアーの料金が割引価格でご利用いただけます。",
    iconUrl: "/images/tours-ferry/merit-3.png",
  },
];

const steps = [
  "サイトで航路の運航状況を確認しましょう",
  "航路を選択して、オンラインで購入！",
  "予約・購入完了メールが届きます",
  "当日、現地の桟橋（フェリー乗り場）に直接お越し下さい",
  "予約メールに添付されたURLを開き、QRコードを提示して楽々乗船！",
];

const reviews = [
  {
    name: "まいまい",
    profile: "20代/女性",
    text: "カヌーツアーに参加する前日、ガイドさんにフェリーもオンラインで予約できると教えてもらいました。当日は窓口に並ぶ必要がなく、とてもスムーズに乗船できました。",
  },
  {
    name: "のり",
    profile: "30代/女性",
    text: "予約後にスケジュール変更を何度かお願いしたのですが、スピーディかつ柔軟に対応していただけて本当に助かりました。次回も利用したいです。",
  },
  {
    name: "和彦",
    profile: "40代/男性",
    text: "電子チケットなので接触が少なく、感染症対策がしっかりされている印象で安心して乗船できました。家族旅行にぴったりです。",
  },
  {
    name: "たかやん",
    profile: "20代/男性",
    text: "お盆の時期にフェリー乗り場が大混雑していて、事前にネットで予約しておいて本当によかったと感じました。",
  },
];

const ferryRoutes = [
  {
    name: "竹富島",
    description: "石垣島から最も近い離島。赤瓦の集落と星砂の浜が魅力。",
    imageUrl: "/images/tours-ferry/island-taketomi.png",
    href: "https://ishigaki-tours.com/special/taketomi",
  },
  {
    name: "西表島（上原港）",
    description: "ジャングルクルーズやマングローブカヤックの拠点。",
    imageUrl: "/images/tours-ferry/island-iriomote-uehara.png",
    href: "https://ishigaki-tours.com/special/iriomote-uehara",
  },
  {
    name: "西表島（大原港）",
    description: "由布島観光やピナイサーラの滝へのアクセスに便利。",
    imageUrl: "/images/tours-ferry/island-iriomote-ohara.png",
    href: "https://ishigaki-tours.com/special/iriomote-ohara",
  },
  {
    name: "小浜島",
    description: "ドラマの舞台でも有名な、のどかなサトウキビ畑の島。",
    imageUrl: "/images/tours-ferry/island-kohama.png",
    href: "https://ishigaki-tours.com/special/kohama",
  },
  {
    name: "黒島",
    description: "牛が人より多いと言われるハート形の小さな島。",
    imageUrl: "/images/tours-ferry/island-kuroshima.png",
    href: "https://ishigaki-tours.com/special/kuroshima",
  },
  {
    name: "鳩間島",
    description: "周囲約4kmの素朴な離島。透明度抜群の海が広がる。",
    imageUrl: "/images/tours-ferry/island-hatoma.png",
    href: "https://ishigaki-tours.com/special/hatoma",
  },
];

const TIMETABLE_PORTS: { name: string; imageUrl: string }[] = [
  { name: "竹富島", imageUrl: "/images/tours-ferry/island-taketomi.png" },
  { name: "西表島\n（上原港）", imageUrl: "/images/tours-ferry/island-iriomote-uehara.png" },
  { name: "西表島\n（大原港）", imageUrl: "/images/tours-ferry/island-iriomote-ohara.png" },
  { name: "小浜島", imageUrl: "/images/tours-ferry/island-kohama.png" },
  { name: "黒島", imageUrl: "/images/tours-ferry/island-kuroshima.png" },
  { name: "鳩間島", imageUrl: "/images/tours-ferry/island-hatoma.png" },
];

type FerryFaqItem = { question: string; body: ReactNode };

const STRONG_RED: CSSProperties = { color: "#b71c1c", fontWeight: 700 };
const FAQ_LINK: CSSProperties = { color: "#1f72c1", textDecoration: "underline" };

// 旧サイトの各FAQに付くイラスト画像。中央寄せ・固定最大幅で表示。
function FaqIllust({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        display: "block",
        width: "auto",
        maxWidth: "260px",
        height: "auto",
        margin: "0 auto 12px",
      }}
    />
  );
}

// 旧サイトの各FAQに付くイラスト画像のプレースホルダ。画像URL確定後 <img> に差し替え予定。
function FaqImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "260px",
        aspectRatio: "4 / 3",
        margin: "0 auto 12px",
        backgroundColor: "#e9eef2",
        color: "#888",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        textAlign: "center",
        padding: "8px",
      }}
    >
      （{label}：画像取得待ち）
    </div>
  );
}

const faqCategories: { title: string; items: FerryFaqItem[] }[] = [
  {
    title: "予約・運賃について",
    items: [
      {
        question: "そもそもオンラインで予約するメリットはありますか？",
        body: (
          <>
            <img
              src="/images/tours-ferry/faq-terminal.jpg"
              alt="石垣港離島ターミナルのチケット購入窓口の混雑の様子"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                marginBottom: "12px",
                display: "block",
              }}
            />
            <p style={{ margin: "0 0 12px" }}>
              <span aria-hidden="true" style={{ marginRight: "4px" }}>⚠️</span>
              <strong style={STRONG_RED}>【各便40席限定】</strong>
              満席により当日窓口でチケット購入できない日が続出しております。早めのご予約を推奨いたします。
            </p>
            <p style={{ margin: "0 0 12px" }}>
              また、石垣港離島ターミナルのフェリーチケット購入窓口は
              <strong style={STRONG_RED}>混雑</strong>
              しますのでWEB上での事前予約がおすすめです。
            </p>
            <p style={{ margin: "0 0 12px" }}>
              事前にオンライン予約しておくことで、当日窓口に行く必要ありません。行列に並ぶストレスから解放され、余裕をもって乗船できます。
            </p>
            <p style={{ margin: 0 }}>
              また、
              <strong style={STRONG_RED}>当社限定</strong>
              のお得な
              <a
                href="https://ishigaki-tours.com/activitys/setplan-activity-ferry.html"
                style={FAQ_LINK}
              >
                フェリーチケット付きツアー
              </a>
              も人気ですのでご検討ください。
            </p>
          </>
        ),
      },
      {
        question: "予約はどこで確認できますか？",
        body: (
          <>
            <img
              src="/images/tours-ferry/faq-mail.png"
              alt="スマートフォンで予約確定メールを確認するイラスト"
              width={269}
              height={300}
              style={{
                width: "auto",
                maxWidth: "240px",
                height: "auto",
                margin: "0 auto 12px",
                display: "block",
              }}
            />
            <p style={{ margin: 0 }}>
              予約完了後に送信される
              <strong style={STRONG_RED}>予約確定メール</strong>
              で確認できます。
            </p>
          </>
        ),
      },
      {
        question: "フェリー以外で離島に行く方法はありますか？(西表島、竹富島など)",
        body: (
          <>
            <p style={{ margin: "0 0 12px" }}>
              <strong>A. 原則として、定期船(フェリー)での移動となります。</strong>
              {" "}ただし、ダイビングやシュノーケリングなどの一部ツアーに参加される場合は、ショップの送迎ボートで直接ポイントや島へ向かうケースもございます。
            </p>
            <p style={{ margin: 0 }}>
              <strong>対象の島：</strong>西表島、竹富島、小浜島、黒島、鳩間島
            </p>
          </>
        ),
      },
      {
        question: "小人料金は何歳から何歳までですか?",
        body: (
          <>
            <p style={{ margin: "0 0 12px" }}>
              小学生のお子様は小人料金、中学生以上で大人料金となります。
            </p>
            <p style={{ margin: "0 0 12px" }}>
              幼児（未就学）のお子様は大人1名につき1名
              <strong style={STRONG_RED}>膝上無料</strong>
              となります。
            </p>
            <p style={{ margin: 0 }}>
              幼児（未就学）のお子様でも席を使用される場合は
              <strong style={STRONG_RED}>小人料金</strong>
              でのご予約をお願いしております。
            </p>
          </>
        ),
      },
      {
        question: "障がい者割引・団体割引・離島割引は使えますか?",
        body: (
          <p style={{ margin: 0 }}>
            当サイトからの予約では障がい者割引・団体割引・離島割引は適用できません。ご了承ください。
          </p>
        ),
      },
    ],
  },
  {
    title: "フェリーについて",
    items: [
      {
        question: "出船時刻にちょっとぐらい遅れても大丈夫ですか？",
        body: (
          <>
            <FaqIllust src="/images/tours-ferry/faq-late.png" alt="フェリーに乗り遅れて桟橋で困っている人のイラスト" />
            <p style={{ margin: 0 }}>
              フェリーは出船時刻の定刻にきっちり出船します。時間には余裕をもって桟橋にお越しください。
            </p>
          </>
        ),
      },
      {
        question: "石垣島-西表島上原港のフェリーが欠航した場合はどうすればいいですか？",
        body: (
          <>
            <p style={{ margin: "0 0 12px" }}>以下の手順で、上原港に行くことが可能です。</p>
            <p style={{ margin: "0 0 12px" }}>
              ①石垣港から西表島大原港（おおはらこう）を経由してバスで大原港から上原港まで行くことができます。
            </p>
            <p style={{ margin: "0 0 12px" }}>
              ②予約内容の変更はせず（予約は上原航路のまま）に、石垣港離島ターミナル内の
              <strong style={STRONG_RED}>八重山観光フェリーカウンターまでお越しください。</strong>
              バス乗車券を無料でお渡しします。
            </p>
            <p style={{ margin: "0 0 12px" }}>
              ③帰りは逆の手順で、上原港から大原港までバスに乗って行き、大原港からフェリーに乗って石垣島へ帰ってきます。
            </p>
            <p style={{ margin: "0 0 8px", fontSize: "12px" }}>
              ※石垣島-西表島大原港も欠航の場合は西表島へ行く手段がなくなるため、無料でのキャンセルとなります。
            </p>
            <p style={{ margin: "0 0 8px", fontSize: "12px" }}>
              ※上原港行きのフェリー乗船券を購入済みの方は、大原港行きのフェリー乗船券を再購入する必要はありません。追加料金なしでバス乗車券を受け取ることができます。
            </p>
            <p style={{ margin: "0 0 12px", fontSize: "12px" }}>
              ※2025年11月から、石垣発09:00便と15:30便に対応する送迎バスの運行はございません。ご注意ください。
            </p>
            <p style={{ margin: 0 }}>
              ➡フェリー欠航時の詳細は{" "}
              <a
                href="https://ishigaki-tours.com/cancellation-2"
                target="_blank"
                rel="noopener noreferrer"
                style={FAQ_LINK}
              >
                こちら
              </a>
            </p>
          </>
        ),
      },
      {
        question: "フェリーチケットはどのフェリー会社でも使えますか？",
        body: (
          <>
            <FaqIllust src="/images/tours-ferry/faq-ferry.png" alt="フェリーに乗船する人々のイラスト" />
            <p style={{ margin: "0 0 12px" }}>
              石垣島ツアーズで取り扱っているフェリーチケットは、八重山観光フェリーさんになります。
            </p>
            <p style={{ margin: 0 }}>
              <strong style={STRONG_RED}>八重山観光フェリーさんの便のみ</strong>ご乗船いただけます。
            </p>
          </>
        ),
      },
      {
        question: "船内にトイレはありますか？",
        body: (
          <>
            <FaqIllust src="/images/tours-ferry/faq-toilet.png" alt="男女のトイレマーク" />
            <p style={{ margin: 0 }}>
              すべての船舶にございますが、揺れたり混み合ったりする場合もございますので、可能な限りご乗船前にお済ませください。
            </p>
          </>
        ),
      },
      {
        question: "船内は飲食可能ですか？",
        body: (
          <>
            <FaqIllust src="/images/tours-ferry/faq-no-food.png" alt="飲食禁止マーク" />
            <p style={{ margin: 0 }}>
              船内の食事は<strong style={STRONG_RED}>原則禁止</strong>となっております。
            </p>
          </>
        ),
      },
      {
        question: "服が濡れているのですが乗船できますか？",
        body: (
          <>
            <FaqIllust src="/images/tours-ferry/faq-wet.png" alt="ずぶ濡れになった人のイラスト" />
            <p style={{ margin: 0 }}>
              濡れた状態の乗船は<strong style={STRONG_RED}>お断り</strong>させていただく場合がございます。
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "予約の変更・キャンセルについて",
    items: [
      {
        question: "予約後にフェリーの日時変更は可能ですか？",
        body: (
          <>
            <p style={{ margin: "0 0 12px" }}>
              可能です。ご予約された便の乗船時刻前であれば変更可能です。
            </p>
            <p style={{ margin: "0 0 12px" }}>
              ➡お問い合わせは{" "}
              <a href="/select-contact" style={FAQ_LINK}>
                こちら
              </a>
            </p>
            <p style={{ margin: 0, fontSize: "12px" }}>
              ※航路変更または人数変更はできません。ご了承ください。
            </p>
          </>
        ),
      },
      {
        question: "キャンセル料はいつから発生しますか？",
        body: (
          <>
            <p style={{ margin: "0 0 12px" }}>
              予約している<strong style={STRONG_RED}>乗船時間前</strong>にキャンセルのご連絡をいただければ、キャンセル料は発生しません。
            </p>
            <p style={{ margin: 0 }}>
              搭乗時間を過ぎていたり、無断キャンセルの場合は<strong style={STRONG_RED}>キャンセル料100%発生</strong>します。
            </p>
          </>
        ),
      },
      {
        question: "往復で予約しましたが、片道に変更することはできますか？",
        body: (
          <>
            <p style={{ margin: "0 0 12px" }}>システム上、変更できません。</p>
            <p style={{ margin: "0 0 12px" }}>
              一度ご予約をキャンセルした後に改めて正しい内容でお客様自身でWEBからご予約をお願いしております。
            </p>
            <p style={{ margin: 0, fontSize: "12px" }}>
              ※既に行き（往路）のフェリーに乗船した場合、帰り（復路）のみのキャンセルは受け付けておりません。ご了承ください。
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "駐車場・アクセスについて",
    items: [
      {
        question: "ユーグレナ石垣港離島ターミナル周辺には駐車場はありますか？",
        body: (
          <>
            <FaqIllust src="/images/tours-ferry/faq-parking.png" alt="駐車場マークのイラスト" />
            <p style={{ margin: 0 }}>
              あります！石垣港離島ターミナル周辺には、有料のコインパーキングが複数ありレンタカーをとめることができます。
            </p>
          </>
        ),
      },
      {
        question: "空港から離島ターミナルまで何分くらいですか？",
        body: (
          <>
            <FaqIllust src="/images/tours-ferry/faq-drive.png" alt="ドライブする男女のイラスト" />
            <p style={{ margin: 0 }}>
              目安として、タクシー・レンタカーで約30分、路線バスで約30〜40分程です。
            </p>
          </>
        ),
      },
      {
        question: " ユーグレナ石垣港離島ターミナルの場所が分かりません。目印はありますか？",
        body: (
          <>
            <p style={{ margin: "0 0 12px" }}>下記ページをご参照ください。</p>
            <a
              href="https://ishigaki-tours.com/special/directions-to-terminal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                gap: "12px",
                border: "1px solid #e6e6e6",
                borderRadius: "4px",
                padding: "10px",
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#fff",
                alignItems: "flex-start",
              }}
            >
              <img
                src="/images/tours-ferry/faq-terminal-card.jpg"
                alt="ユーグレナ石垣港離島ターミナルの外観"
                style={{
                  flexShrink: 0,
                  width: "120px",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: "2px",
                  display: "block",
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#b71c1c",
                    margin: "0 0 4px",
                    lineHeight: 1.5,
                  }}
                >
                  石垣港離島ターミナルへの行き方＆周辺情報
                </h4>
                <p style={{ fontSize: "11px", color: "#666", margin: 0, lineHeight: 1.6 }}>
                  目次1 石垣港離島ターミナルの利用について2 石垣港離島ターミナルとは？3 石垣港離島ターミナルの場所・アクセス4 石垣港離島ターミナルへの経路・目印5 石垣港離島ターミナルの駐車場6 ターミナルを利用する際の注意点7 […]
                </p>
              </div>
            </a>
          </>
        ),
      },
    ],
  },
];

const SET_PLAN_BANNER_URL = "/images/tours-ferry/setplan-banner.png";

const TabIcon = ({ name }: { name: TabKey }) => {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "booking":
      return (
        <svg {...common}>
          <rect x="6" y="2.5" width="12" height="19" rx="2" />
          <line x1="10" y1="18.5" x2="14" y2="18.5" />
        </svg>
      );
    case "timetable":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
          <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
          <line x1="8" y1="3" x2="8" y2="6.5" />
          <line x1="16" y1="3" x2="16" y2="6.5" />
        </svg>
      );
    case "method":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
          <polyline points="8 12.5 11 15.5 16.5 9" />
        </svg>
      );
    case "islands":
      return (
        <svg {...common}>
          <path d="M12 11 C9 5 4 7 4 9 M12 11 C15 5 20 7 20 9 M12 11 C8 7 6 13 7 16 M12 11 C16 7 18 13 17 16" />
          <line x1="12" y1="11" x2="12" y2="22" />
        </svg>
      );
  }
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "booking", label: "フェリー予約" },
  { key: "timetable", label: "時刻表\n運航情報" },
  { key: "method", label: "予約方法\nメリット" },
  { key: "islands", label: "人気の離島" },
];

const TAB_BG_COLOR = "#1f4d6e";
const TAB_INACTIVE_OVERLAY = "rgba(31, 77, 110, 0.55)";
const TAB_ACCENT = "#f08300";

interface FerryTabsProps {
  themeColor: string;
  accentColor: string;
}

export function FerryTabs({ themeColor, accentColor }: FerryTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("booking");
  const [selectedPort, setSelectedPort] = useState<string>(TIMETABLE_PORTS[0]!.name);
  const [openFaqCategories, setOpenFaqCategories] = useState<Set<number>>(() => new Set());
  const toggleFaqCategory = (i: number) => {
    setOpenFaqCategories((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const sectionHeading = (label: string): CSSProperties => ({
    fontSize: "18px",
    fontWeight: 700,
    borderBottom: `3px solid ${themeColor}`,
    paddingBottom: "6px",
    marginBottom: "16px",
    color: "#212529",
  });

  return (
    <>
      {/* タブナビゲーション */}
      <div
        role="tablist"
        aria-label="フェリーページタブ"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          marginBottom: "32px",
          backgroundColor: TAB_BG_COLOR,
          backgroundImage: "url(/images/tours-ferry/tab-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {TABS.map((t) => {
          const active = t.key === activeTab;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`tab-panel-${t.key}`}
              onClick={() => setActiveTab(t.key)}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px 8px 18px",
                backgroundColor: active ? TAB_ACCENT : TAB_INACTIVE_OVERLAY,
                color: "#fff",
                border: "none",
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: 1.3,
                whiteSpace: "pre-line",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <TabIcon name={t.key} />
              <span>{t.label}</span>
              {active && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "-12px",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderTop: `12px solid ${TAB_ACCENT}`,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* タブパネル */}
      {activeTab === "booking" && (
        <TabPanel id="booking">
          {/* フェリー検索・予約フォーム（モックUI、旧サイト準拠） */}
          <section
            aria-labelledby="ferry-search-heading"
            style={{
              backgroundColor: "#fff",
              padding: "24px 20px 28px",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {/* 見出し */}
            <h2
              id="ferry-search-heading"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: themeColor,
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <span aria-hidden="true" style={{ color: themeColor, opacity: 0.6 }}>〰</span>
              フェリー検索・予約
              <span aria-hidden="true" style={{ color: themeColor, opacity: 0.6 }}>〰</span>
            </h2>
            <p style={{ fontSize: "14px", color: "#333", margin: "6px 0 22px" }}>
              旅行者の8割が利用！
            </p>

            {/* 往復/片道 タブ */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "26px",
              }}
            >
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "var(--color-danger)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 12px",
                    borderRadius: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  片道より約5%お得
                </span>
                <button
                  type="button"
                  aria-pressed="true"
                  style={{
                    width: "150px",
                    padding: "12px 0",
                    backgroundColor: "#fff",
                    color: "var(--color-danger)",
                    border: "2px solid var(--color-danger)",
                    borderRadius: "4px",
                    fontSize: "18px",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  往復
                  <span style={{ color: "#3b9b3b", fontSize: "20px", lineHeight: 1 }} aria-hidden="true">✓</span>
                </button>
              </div>
              <button
                type="button"
                aria-pressed="false"
                style={{
                  width: "150px",
                  padding: "12px 0",
                  backgroundColor: "#fff",
                  color: themeColor,
                  border: `2px solid ${themeColor}`,
                  borderRadius: "4px",
                  fontSize: "18px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                片道
              </button>
            </div>

            {/* 発・着セレクト */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                maxWidth: "560px",
                margin: "0 auto 22px",
                textAlign: "left",
              }}
            >
              <div style={{ flex: 1, display: "grid", gap: "8px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ minWidth: "20px", color: themeColor, fontWeight: 700, fontSize: "14px" }}>発</span>
                  <select
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      fontSize: "14px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      backgroundColor: "#fff",
                      color: "#666",
                    }}
                  >
                    <option>出発地を選択してください</option>
                    {PORT_OPTIONS.map((p) => (
                      <option key={`from-${p}`}>{p}</option>
                    ))}
                  </select>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ minWidth: "20px", color: themeColor, fontWeight: 700, fontSize: "14px" }}>着</span>
                  <select
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      fontSize: "14px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      backgroundColor: "#fff",
                      color: "#666",
                    }}
                  >
                    <option>　</option>
                    {PORT_OPTIONS.map((p) => (
                      <option key={`to-${p}`}>{p}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                type="button"
                aria-label="出発地と到着地を入れ替える"
                style={{
                  width: "48px",
                  padding: "10px 4px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  color: "#555",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                  fontSize: "10px",
                  lineHeight: 1.2,
                  cursor: "pointer",
                }}
              >
                <span>往復</span>
                <span>切替</span>
                <span style={{ fontSize: "16px", marginTop: "2px" }}>⇅</span>
              </button>
            </div>

            {/* 予約ボタン */}
            <button
              type="submit"
              style={{
                width: "min(420px, 100%)",
                backgroundColor: "#f5b89c",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                padding: "14px 24px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
              }}
            >
              予約・空き状況を見る
            </button>

            {/* 注釈 */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "16px 0 0",
                fontSize: "12px",
                color: "var(--color-danger)",
                lineHeight: 1.8,
              }}
            >
              <li>※当サイトを利用した旅行者のうち80％が予約(2025年実績)</li>
              <li>※乗船時間までのキャンセルであれば、キャンセル料は発生しません。</li>
              <li>※【40席限定】座席数には限りがございます。ご予約はお早めに。</li>
            </ul>
          </section>

          {/* 7/1〜以降のご予約案内（旧サイト準拠） */}
          <section
            style={{
              border: "1px solid #cce4f6",
              borderRadius: "6px",
              backgroundColor: "#fff",
              marginBottom: "8px",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#1a4b7a",
                backgroundColor: "#d8ebf7",
                padding: "10px 16px",
                margin: 0,
              }}
            >
              7/1〜以降のご予約をご検討中の方へ
            </h2>
            <div style={{ padding: "20px 24px" }}>
              <p style={{ fontSize: "14px", color: "#212529", lineHeight: 1.8, margin: "0 0 16px" }}>
                現在、燃油サーチャージの変動が多いため7/1〜以降のフェリーの時刻及び料金が決定しておらず、受付を停止しております。
              </p>
              <p style={{ fontSize: "14px", color: "#212529", lineHeight: 1.8, margin: "0 0 16px" }}>
                7/1〜以降の予約開始通知をご希望のお客様は下記フォームへご入力をお願い致します。メールにてご連絡をさせていただきます。
              </p>
              <p style={{ textAlign: "center", margin: 0 }}>
                <a
                  href="https://forms.gle/LmB6euKq7Y8GKcNJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#1f72c1",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  【7月以降販売開始連絡フォーム】
                </a>
              </p>
            </div>
          </section>

          {/* 予約メリットを動画でチェック */}
          <section style={{ marginTop: "32px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#212529",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              <span aria-hidden="true" style={{ color: themeColor, marginRight: "10px", opacity: 0.6 }}>〰</span>
              予約メリットを動画でチェック
              <span aria-hidden="true" style={{ color: themeColor, marginLeft: "10px", opacity: 0.6 }}>〰</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px" }}>
              {[
                {
                  title: "船員にスマホの画面（電子チケット）を見せて",
                  youtubeId: "MsMEO219AIM",
                },
                {
                  title: "フェリー乗り場の注意点とオンラインチケット購入方法をご紹介！",
                  youtubeId: "r31VXWlMLUk",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "6px",
                    overflow: "hidden",
                    backgroundColor: "#000",
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* オンラインチケットの使い方 */}
          <section style={{ marginTop: "32px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#212529",
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              <span aria-hidden="true" style={{ color: themeColor, marginRight: "10px", opacity: 0.6 }}>〰</span>
              オンラインチケットの使い方
              <span aria-hidden="true" style={{ color: themeColor, marginLeft: "10px", opacity: 0.6 }}>〰</span>
            </h2>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "14px" }}>
              {steps.map((s, i) => (
                <li
                  key={s}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#dff1f5",
                      color: themeColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: "14px", color: "#333", lineHeight: 1.7 }}>{s}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* お得なフェリーチケット付きツアー */}
          <section style={{ marginTop: "32px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#212529",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <span aria-hidden="true" style={{ color: themeColor, marginRight: "10px", opacity: 0.6 }}>〰</span>
              【40席限定】お得なフェリーチケット付きツアー
              <span aria-hidden="true" style={{ color: themeColor, marginLeft: "10px", opacity: 0.6 }}>〰</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px", alignItems: "center" }}>
              <a
                href="https://ishigaki-tours.com/activitys/setplan-activity-ferry.html"
                style={{ display: "block" }}
              >
                <img
                  src={SET_PLAN_BANNER_URL}
                  alt="フェリーチケット付きセットプラン"
                  style={{ width: "100%", height: "auto", borderRadius: "6px", display: "block" }}
                />
              </a>
              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "10px",
                  fontSize: "14px",
                  color: "#fff",
                }}
              >
                {[
                  "セットで予約するほうがお得",
                  "予約の手間を省ける",
                  "フェリー窓口に並ぶ必要なし",
                ].map((t, i) => (
                  <li
                    key={t}
                    style={{
                      backgroundColor: "#b71c1c",
                      padding: "12px 16px",
                      borderRadius: "4px",
                      fontWeight: 700,
                    }}
                  >
                    {`①②③`[i]} {t}
                  </li>
                ))}
              </ol>
            </div>
            <div
              style={{
                marginTop: "16px",
                border: "1px solid #cce4f6",
                borderRadius: "6px",
                padding: "16px 20px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#212529",
                lineHeight: 1.8,
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0 }}>
                石垣島⇄西表島の往復フェリーチケットとアクティビティが
                <strong style={{ color: "var(--color-danger)" }}>セット</strong>
                になったプランを大好評発売中！
              </p>
              <p style={{ margin: "4px 0 0" }}>
                <strong style={{ color: "var(--color-danger)" }}>お得</strong>
                に西表島を満喫されたい方は{" "}
                <a
                  href="https://ishigaki-tours.com/activitys/setplan-activity-ferry.html"
                  style={{ color: "#1f72c1", fontWeight: 700, textDecoration: "underline" }}
                >
                  こちら
                </a>
                {" "}をチェック！
              </p>
            </div>
          </section>
        </TabPanel>
      )}

      {activeTab === "timetable" && (
        <TabPanel id="timetable">
          <section style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: themeColor,
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              <span aria-hidden="true" style={{ color: themeColor, marginRight: "10px", opacity: 0.6 }}>〰</span>
              航路別 離島フェリー時刻表
              <span aria-hidden="true" style={{ color: themeColor, marginLeft: "10px", opacity: 0.6 }}>〰</span>
            </h2>
            <div
              role="tablist"
              aria-label="航路別タブ"
              className="grid grid-cols-3 sm:grid-cols-6"
              style={{ gap: "6px", marginBottom: "16px" }}
            >
              {TIMETABLE_PORTS.map((p) => {
                const active = p.name === selectedPort;
                return (
                  <button
                    key={p.name}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedPort(p.name)}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "6px",
                      border: active ? "2px solid #f08300" : "1px solid #cce4f6",
                      padding: 0,
                      height: "60px",
                      cursor: "pointer",
                      background: "transparent",
                    }}
                  >
                    <img
                      src={p.imageUrl}
                      alt=""
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: active ? "rgba(255, 255, 255, 0.78)" : "rgba(31, 114, 193, 0.55)",
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        color: active ? "#f08300" : "#fff",
                        fontSize: "13px",
                        fontWeight: 700,
                        whiteSpace: "pre-line",
                        lineHeight: 1.3,
                        textAlign: "center",
                        textShadow: active ? "none" : "0 1px 2px rgba(0,0,0,0.3)",
                      }}
                    >
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>
            <div
              style={{
                backgroundColor: "#fafafa",
                border: "1px dashed #ccc",
                borderRadius: "6px",
                padding: "24px",
                textAlign: "center",
                color: "#666",
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              「{selectedPort.replace(/\n/g, "")}」航路の運航状況・時刻表は準備中です。
              <br />
              最新の運航情報は各社の公式サイトをご確認ください。
            </div>
          </section>
        </TabPanel>
      )}

      {activeTab === "method" && (
        <TabPanel id="method">
          {/* ツアーズ予約のメリット 3カラム */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={sectionHeading("ツアーズ予約のメリット")}>ツアーズ予約のメリット</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "16px" }}>
              {merits.map((m) => (
                <div
                  key={m.title}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e6e6e6",
                    borderRadius: "8px",
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={m.iconUrl}
                    alt=""
                    style={{ width: "64px", height: "64px", objectFit: "contain", margin: "0 auto 8px" }}
                  />
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: themeColor,
                      whiteSpace: "pre-line",
                      marginBottom: "8px",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#333", lineHeight: 1.7, margin: 0 }}>
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* お客様からの声 */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={sectionHeading("お客様からの声")}>お客様からの声</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px" }}>
              {reviews.map((r) => (
                <div
                  key={r.name}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e6e6e6",
                    borderRadius: "8px",
                    padding: "14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: themeColor,
                      marginBottom: "4px",
                    }}
                  >
                    {r.name}{" "}
                    <span style={{ fontSize: "12px", color: "#666", fontWeight: 400 }}>
                      （{r.profile}）
                    </span>
                  </p>
                  <p style={{ fontSize: "13px", color: "#333", lineHeight: 1.7, margin: 0 }}>
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </TabPanel>
      )}

      {activeTab === "islands" && (
        <TabPanel id="islands">
          <section style={{ marginBottom: "16px" }}>
            <h2 style={sectionHeading("人気の離島")}>八重山諸島の人気の離島</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: "12px" }}>
              {ferryRoutes.map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  style={{
                    display: "block",
                    backgroundColor: "#fff",
                    border: "1px solid #e6e6e6",
                    borderRadius: "8px",
                    overflow: "hidden",
                    color: "#212529",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={r.imageUrl}
                    alt={r.name}
                    style={{ width: "100%", height: "120px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ padding: "10px" }}>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: themeColor,
                        marginBottom: "4px",
                      }}
                    >
                      {r.name}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#666", lineHeight: 1.6, margin: 0 }}>
                      {r.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <p style={{ marginTop: "12px", textAlign: "right", fontSize: "14px" }}>
              <a
                href="https://ishigaki-tours.com/activitys/remote-island-tour.html"
                style={{ color: accentColor, fontWeight: 600 }}
              >
                効率的に離島を観光！離島巡りツアーはこちら ＞
              </a>
            </p>
          </section>
        </TabPanel>
      )}

      {/* タブ外: FAQ */}
      <section style={{ marginTop: "32px", marginBottom: "16px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#212529",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          <span aria-hidden="true" style={{ color: themeColor, marginRight: "10px", opacity: 0.6 }}>〰</span>
          よくある質問
          <span aria-hidden="true" style={{ color: themeColor, marginLeft: "10px", opacity: 0.6 }}>〰</span>
        </h2>
        <p style={{ fontSize: "15px", color: "#333", lineHeight: 1.8, marginBottom: "20px" }}>
          フェリーオンライン予約や当日のフェリー乗船、港についてお客様からよく寄せられるご相談や質問をまとめました。
        </p>
        <div style={{ display: "grid", gap: "8px" }}>
          {faqCategories.map((cat, i) => {
            const open = openFaqCategories.has(i);
            return (
              <div
                key={cat.title}
                style={{
                  border: "1px solid #cce4f6",
                  borderRadius: "6px",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaqCategory(i)}
                  aria-expanded={open}
                  aria-controls={`faq-cat-${i}`}
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    color: "#1a4b7a",
                    border: "none",
                    padding: "14px 18px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <span>{cat.title}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      color: "#1a4b7a",
                      fontSize: "14px",
                      display: "inline-block",
                      transition: "transform 200ms ease",
                      transform: open ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    ▼
                  </span>
                </button>
                {open && (
                  <div
                    id={`faq-cat-${i}`}
                    style={{ padding: "12px 14px 14px", borderTop: "1px solid #e6eff6" }}
                  >
                    <FerryFaqList items={cat.items} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div role="tabpanel" id={`tab-panel-${id}`} aria-labelledby={`tab-${id}`}>
      {children}
    </div>
  );
}

function FerryFaqList({ items }: { items: { question: string; body: ReactNode }[] }) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set());
  const toggle = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "6px" }}>
      {items.map((item, i) => {
        const open = openIndices.has(i);
        return (
          <li
            key={item.question}
            style={{
              backgroundColor: "#eef7fc",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={open}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                padding: "10px 14px",
                fontSize: "14px",
                color: "#1a4b7a",
                fontWeight: 600,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                textAlign: "left",
                lineHeight: 1.5,
              }}
            >
              <span>Q.{item.question}</span>
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  color: "#1a4b7a",
                  fontSize: "12px",
                  display: "inline-block",
                  transition: "transform 200ms ease",
                  transform: open ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                ▼
              </span>
            </button>
            {open && (
              <div
                style={{
                  padding: "12px 14px 14px",
                  fontSize: "13px",
                  color: "#333",
                  lineHeight: 1.8,
                  backgroundColor: "#fff",
                  borderTop: "1px solid #e0eef7",
                }}
              >
                {item.body}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
