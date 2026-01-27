import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import {
  siteConfig,
  navItems,
  footerSections,
  companyInfo,
  headerConfig,
  relatedSites,
  socialLinks,
  partnerLogos,
} from "../lib/site-config";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "石垣島 青の洞窟ツアーズ | 石垣島青の洞窟専門のツアー/アクティビティ予約サイト",
    template: "%s | 石垣島 青の洞窟ツアーズ",
  },
  description:
    "石垣島の人気スポット「青の洞窟」ツアー特化サイト。場所・行き方の解説や、個人での事故を防ぐ安全なツアーをランキングで掲載。会員登録不要で簡単予約！シュノーケルなどのアクティビティを楽しもう。",
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
          catchphrase={headerConfig.catchphrase}
          contactUrl={headerConfig.contactUrl}
          historyUrl={headerConfig.historyUrl}
          reservationCheckUrl={headerConfig.reservationCheckUrl}
        />
        <main>{children}</main>
        <Footer
          siteName={siteConfig.siteName}
          sections={footerSections}
          companyInfo={companyInfo}
          relatedSites={relatedSites}
          socialLinks={socialLinks}
          partnerLogos={partnerLogos}
          decorativeImageUrls={[
            "/images/footer/footer-01.webp",
            "/images/footer/footer-02.webp",
            "/images/footer/footer-03.webp",
            "/images/footer/footer-04.webp",
            "/images/footer/footer-05.jpg",
            "/images/footer/footer-06.jpg",
            "/images/footer/footer-07.webp",
          ]}
        />
      </body>
    </html>
  );
}
