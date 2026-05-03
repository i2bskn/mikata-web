import type { Metadata } from "next";
import { PageWithSidebarTemplate } from "@repo/ui/page-with-sidebar-template";
import { categoryNavItems, siteConfig } from "../lib/site-config";
import { Sidebar } from "../components/sidebar";

export const metadata: Metadata = {
  title: siteConfig.siteName,
};

export default function HomePage() {
  return (
    <PageWithSidebarTemplate
      sidebarSlot={<Sidebar categoryNavItems={categoryNavItems} />}
      mainSlot={
        <div
          style={{
            padding: "48px 16px",
            textAlign: "center",
            color: "#212529",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "12px",
              lineHeight: 1.5,
            }}
          >
            ただいま準備中です
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#666" }}>
            「{siteConfig.siteName}」のサイトをただいま準備中です。
            <br />
            公開までもう少々お待ちください。
          </p>
        </div>
      }
    />
  );
}
