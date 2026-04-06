import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@repo/ui/header";
import {
  siteConfig,
  navItems,
  headerConfig,
  menuConfig,
} from "../lib/site-config";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "石垣島シュノーケリングツアーズ │ 石垣島シュノーケリング専門のツアー/アクティビティ予約サイト",
    template: "%s | 石垣島シュノーケリングツアーズ",
  },
  description:
    "石垣島シュノーケリング専門のツアー/アクティビティ予約サイト",
  metadataBase: new URL(siteConfig.siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header
          siteName={siteConfig.siteName}
          logoUrl="/images/header/logo.png"
          navItems={navItems}
          navColor="#007CDB"
          catchphrase={headerConfig.catchphrase}
          contactUrl={headerConfig.contactUrl}
          saleUrl={headerConfig.saleUrl}
          reservationCheckUrl={headerConfig.reservationCheckUrl}
          menuQuickLinks={menuConfig.quickLinks}
          menuSections={menuConfig.sections}
          menuExternalSites={menuConfig.externalSites}
          menuSliderImages={[]}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
