import type { FC } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface PartnerLogo {
  name: string;
  imageUrl: string;
  href?: string;
  description?: string;
}

export interface RelatedSite {
  name: string;
  href: string;
}

export interface FooterProps {
  siteName: string;
  sections?: FooterSection[];
  companyInfo?: {
    name: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
  };
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    line?: string;
  };
  copyright?: string;
  partnerLogos?: PartnerLogo[];
  relatedSites?: RelatedSite[];
  decorativeImageUrl?: string;
  decorativeImageUrls?: string[];
}

export const Footer: FC<FooterProps> = ({
  siteName,
  sections,
  socialLinks,
  copyright,
  partnerLogos,
  relatedSites,
  decorativeImageUrl,
  decorativeImageUrls,
}) => {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = sections?.flatMap((s) => s.links) || [];
  const stripImages = decorativeImageUrls || (decorativeImageUrl ? [decorativeImageUrl] : []);

  return (
    <footer>
      {/* 装飾画像帯 - 既存サイト: footer-slider, Slick ticker (autoplaySpeed:0, speed:5000, cssEase:linear) */}
      {stripImages.length > 0 && (
        <div style={{ marginTop: "40px", height: "169px", width: "100%", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "footer-ticker 30s linear infinite",
              height: "100%",
            }}
          >
            {/* 2セット配置してシームレスループ */}
            {[...stripImages, ...stripImages].map((url, i) => (
              <img
                key={i}
                src={url}
                alt=""
                style={{ height: "100%", width: "auto", objectFit: "cover", flexShrink: 0 }}
              />
            ))}
          </div>
          <style>{`
            @keyframes footer-ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      )}

      {/* フッターナビ - 既存サイト: bg #f9f9f2, テキストリンク中央揃え */}
      <div style={{ backgroundColor: "#f9f9f2", padding: "20px 0" }}>
        <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 5px" }}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2" style={{ fontSize: "14px" }}>
            {footerNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: "#333", textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* パートナーロゴセクション */}
      {partnerLogos && partnerLogos.length > 0 && (
        <div style={{ backgroundColor: "#fff", padding: "30px 0" }}>
          <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 5px" }}>
            <p className="text-center" style={{ fontSize: "14px", color: "#333", marginBottom: "16px" }}>
              {siteName}は数多くの団体や公的機関との連携を通じて、地域の発展に貢献していきます。
            </p>
            <div style={{ borderTop: "3px solid #1a9edb", paddingTop: "20px" }}>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {partnerLogos.map((partner) => (
                  <div key={partner.name} className="flex flex-col items-center" style={{ maxWidth: "140px" }}>
                    {partner.href ? (
                      <a href={partner.href} target="_blank" rel="noopener noreferrer">
                        <img src={partner.imageUrl} alt={partner.name} style={{ height: "50px", width: "auto" }} />
                      </a>
                    ) : (
                      <img src={partner.imageUrl} alt={partner.name} style={{ height: "50px", width: "auto" }} />
                    )}
                    {partner.description && (
                      <span style={{ fontSize: "10px", color: "#666", textAlign: "center", marginTop: "4px" }}>
                        {partner.description}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 運営サイト一覧 */}
      {relatedSites && relatedSites.length > 0 && (
        <div style={{ backgroundColor: "#fff", padding: "20px 0", borderTop: "1px solid #e5e5e5" }}>
          <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 5px" }}>
            <p className="text-center" style={{ fontSize: "14px", color: "#333", marginBottom: "12px" }}>
              沖縄を中心に各地の旅をサポートする
              <br />
              当社運営サイトのご紹介
            </p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1" style={{ fontSize: "12px" }}>
              {relatedSites.map((site, index) => (
                <span key={site.href}>
                  {index > 0 && <span style={{ color: "#ccc", marginRight: "6px" }}>|</span>}
                  <a href={site.href} target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none" }}>
                    {site.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Instagram */}
      {socialLinks?.instagram && (
        <div style={{ backgroundColor: "#fff", padding: "16px 0", borderTop: "1px solid #e5e5e5" }}>
          <div className="flex justify-center">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      )}

      {/* コピーライト - 既存サイト: 濃い背景 */}
      <div style={{ backgroundColor: "rgb(88, 88, 88)", padding: "16px 0" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "1020px", padding: "0 5px" }}>
          <p style={{ fontSize: "13px", color: "#fff" }}>
            {copyright || `(c) ${currentYear} ${siteName} All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};
