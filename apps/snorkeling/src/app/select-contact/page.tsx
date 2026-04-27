import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { ContactAccordion } from "@repo/ui/contact-accordion";
import { siteConfig, categoryNavItems } from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "お問い合わせ内容を選択してください 既にご予約されたお客様",
};

const contactCategories = [
  {
    title: "既にご予約されたお客様",
    subItems: [
      {
        title: "ご予約内容の確認・集合場所等のお問い合わせ",
        description:
          "ご予約確定メールに記載の連絡方法にて、担当ガイドまたは施設へ直接ご連絡ください。",
        methods: [
          {
            type: "link" as const,
            label: "予約確認ページ",
            href: "https://mikata.in/yaeyama-tour/subscribers/confirm",
          },
        ],
      },
      {
        title: "キャンセル・変更のお問い合わせ",
        description:
          "ご予約確定メールをご確認ください。キャンセル料については「よくある質問＆注意事項」ページもご参照ください。",
        methods: [
          {
            type: "faq" as const,
            label: "よくある質問＆注意事項",
            href: "/faq",
          },
        ],
      },
    ],
  },
  {
    title: "これからご予約されるお客様",
    subItems: [
      {
        title: "当日予約の空き確認",
        description:
          "当日予約はサイト内で空きのあるプランを検索いただけます。",
        methods: [
          {
            type: "link" as const,
            label: "プランを探す",
            href: "/",
          },
        ],
      },
      {
        title: "その他のご予約に関するお問い合わせ",
        description:
          "24時間WEB予約受付中、会員登録不要でご予約いただけます。トップページからプランを選んでお申し込みください。",
        methods: [
          {
            type: "link" as const,
            label: "トップページ",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "その他のお問い合わせやご相談",
    subItems: [
      {
        title: "領収書発行をご希望のお客様",
        description:
          "現地決済の場合はツアーガイド・施設が発行いたします。事前決済の場合は領収書発行ページから発行いただけます。",
        methods: [
          {
            type: "link" as const,
            label: "領収書発行ページ",
            href: "https://ishigaki-tours.com/receipt",
          },
        ],
      },
      {
        title: "アクティビティ参加後のお問い合わせ",
        description:
          "忘れ物・写真データ等のお問い合わせは、担当ガイドへ直接ご連絡ください。連絡先が不明な場合は予約確認ページからご確認いただけます。",
        methods: [
          {
            type: "link" as const,
            label: "予約確認ページ",
            href: "https://mikata.in/yaeyama-tour/subscribers/confirm",
          },
        ],
      },
      {
        title: "その他一般的なご質問",
        description:
          "よくある質問をご確認ください。解決しない場合は、お気軽にお問い合わせください。",
        methods: [
          {
            type: "faq" as const,
            label: "よくある質問＆注意事項",
            href: "/faq",
          },
        ],
      },
    ],
  },
];

export default function SelectContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "お問い合わせ",
            url: `${siteConfig.siteUrl}/select-contact`,
          },
        ]}
      />

      <div
        className="mx-auto"
        style={{ maxWidth: "1020px", padding: "0 10px" }}
      >
        <div className="flex gap-5" style={{ marginTop: "20px" }}>
          <Sidebar categoryNavItems={categoryNavItems} />

          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#212529",
                marginBottom: "12px",
              }}
            >
              お問い合わせ
            </h1>

            <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#212529" }}>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "32px",
                }}
              >
                <h2
                  style={{
                    fontSize: "16.8px",
                    fontWeight: "400",
                    color: "#212529",
                    lineHeight: "1.6",
                    display: "inline-block",
                    borderBottom: "3px solid #007CDB",
                    paddingBottom: "8px",
                  }}
                >
                  お問い合わせ内容を
                  <br />
                  選択してください
                </h2>
              </div>

              <ContactAccordion
                items={contactCategories}
                themeColor="#007CDB"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
