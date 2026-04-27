import type { FC } from "react";

export type ColumnShareButtonsProps = {
  /** シェア対象のページの絶対 URL */
  shareUrl: string;
  /** シェア時のタイトル */
  shareTitle: string;
};

const ICON_BUTTON_BASE = {
  width: "40px",
  height: "40px",
  borderRadius: "4px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
} as const;

const FacebookIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);

const XIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
    <path d="M18.244 2H21.5l-7.49 8.563L23 22h-6.93l-5.42-7.107L4.4 22H1.14l8.01-9.157L1 2h7.06l4.9 6.5L18.244 2zm-2.43 18h1.83L7.27 4H5.32l10.494 16z" />
  </svg>
);

const LineIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755a.629.629 0 1 1 0 1.26h-2.386a.631.631 0 0 1-.629-.63V8.108a.63.63 0 0 1 .629-.631h2.386a.629.629 0 1 1 0 1.26H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.631.63.62.62 0 0 1-.51-.255l-2.443-3.317v2.942a.629.629 0 1 1-1.26 0V8.108a.628.628 0 0 1 .628-.63c.196 0 .391.1.512.257l2.444 3.32V8.108a.63.63 0 1 1 1.26 0v4.771zm-5.741 0a.629.629 0 1 1-1.26 0V8.108a.629.629 0 1 1 1.26 0v4.771zm-2.561.629H4.822a.628.628 0 0 1-.629-.63V8.108a.629.629 0 1 1 1.258 0v4.141h1.756a.629.629 0 1 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const EmailIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PlusIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const ColumnShareButtons: FC<ColumnShareButtonsProps> = ({ shareUrl, shareTitle }) => {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const xHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const lineHref = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  return (
    <section
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "32px",
        marginBottom: "32px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          color: "#555",
          marginBottom: "12px",
          letterSpacing: "0.05em",
        }}
      >
        -この記事をシェアする-
      </p>
      <div className="flex items-center justify-center" style={{ gap: "10px" }}>
        <a
          href={fbHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook でシェア"
          style={{ ...ICON_BUTTON_BASE, backgroundColor: "#1877f2" }}
        >
          <FacebookIcon />
        </a>
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X でシェア"
          style={{ ...ICON_BUTTON_BASE, backgroundColor: "#000" }}
        >
          <XIcon />
        </a>
        <a
          href={lineHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINE でシェア"
          style={{ ...ICON_BUTTON_BASE, backgroundColor: "#06c755" }}
        >
          <LineIcon />
        </a>
        <a
          href={mailHref}
          aria-label="メールで共有"
          style={{ ...ICON_BUTTON_BASE, backgroundColor: "#9aa0a6" }}
        >
          <EmailIcon />
        </a>
        <a
          href="#"
          aria-label="その他のシェア"
          style={{ ...ICON_BUTTON_BASE, backgroundColor: "#3a86ff" }}
        >
          <PlusIcon />
        </a>
      </div>
    </section>
  );
};
