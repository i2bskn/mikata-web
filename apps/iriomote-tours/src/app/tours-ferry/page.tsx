import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@repo/seo/json-ld";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { ImageSlider, type SliderSlide } from "@repo/ui/image-slider";
import {
  siteConfig,
  categoryNavItems,
  themeColor,
  accentColor,
} from "../../lib/site-config";
import { Sidebar } from "../../components/sidebar";
import { FerryTabs } from "../../components/ferry-tabs";

export const metadata: Metadata = {
  title: "石垣島⇔離島フェリー予約/運航状況・時刻表・料金",
  description:
    "石垣島⇔離島の往復フェリーチケットをオンラインで予約。竹富島、西表島（上原港・大原港）、小浜島、黒島、鳩間島の運航状況・時刻表・料金を一括チェック。乗船時間までのキャンセルは無料。",
};

const KV_SLIDES: SliderSlide[] = [
  { imageUrl: "/images/tours-ferry/kv-1.png", alt: "石垣島⇔離島フェリー予約" },
  { imageUrl: "/images/tours-ferry/kv-2.png", alt: "チケットレスで快適な船旅" },
  { imageUrl: "/images/tours-ferry/kv-3.png", alt: "事前予約で行列＆混雑を回避" },
];

export default function ToursFerryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.siteUrl },
          {
            name: "石垣島⇔離島フェリー予約",
            url: `${siteConfig.siteUrl}/tours-ferry`,
          },
        ]}
      />

      <PageWithSidebarTemplate
        sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
        mainSlot={
          <div>
            {/* KVスライダー */}
            <div style={{ marginBottom: "16px" }}>
              <ImageSlider
                slides={KV_SLIDES}
                autoPlayInterval={0}
                height={360}
                objectFit="contain"
                arrowVariant="light"
                showDots
                dotsPosition="below"
                responsive
              />
            </div>

            {/* 注意喚起バナー（旧サイト準拠の太赤枠） */}
            <div
              role="alert"
              style={{
                border: "8px solid #b71c1c",
                borderRadius: "6px",
                backgroundColor: "#fff",
                padding: "12px 16px",
                display: "flex",
                gap: "14px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="/images/tours-ferry/warning.png"
                alt=""
                width={48}
                height={48}
                style={{ flexShrink: 0, display: "block" }}
              />
              <div style={{ minWidth: 0, flex: 1 }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#212529",
                    margin: "0 0 2px",
                    lineHeight: 1.4,
                  }}
                >
                  チケットの売り切れにご注意ください
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#333",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  【40席限定】満席により当日窓口でチケット購入できない日が続出しております。早めのご予約を推奨いたします。
                </p>
              </div>
            </div>

            {/* タブ + 各タブのコンテンツ + FAQ */}
            <FerryTabs themeColor={themeColor} accentColor={accentColor} />
          </div>
        }
      />
    </>
  );
}
