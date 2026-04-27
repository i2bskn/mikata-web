import type { FC } from "react";

export const PickupIcon: FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7a8794"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="14 3 14 9 20 9" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);

export const CrownIcon: FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="#f5b210"
    stroke="#f5b210"
    strokeWidth="1"
    strokeLinejoin="round"
  >
    <path d="M2 8l4.5 4L12 4l5.5 8L22 8l-2 12H4z" />
  </svg>
);
