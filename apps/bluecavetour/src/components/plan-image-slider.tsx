"use client";

import { useState } from "react";

interface PlanImageSliderProps {
  images: string[];
  alt: string;
  totalCount?: number;
}

export function PlanImageSlider({ images, alt, totalCount }: PlanImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = totalCount ?? images.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "470px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Premium Planバッジ */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#f08300",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "1.3",
          }}
        >
          Premium<br />Plan
        </div>
        {/* 左矢印 */}
        <button
          type="button"
          onClick={goToPrev}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.8)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#333",
          }}
        >
          ‹
        </button>
        {/* 右矢印 */}
        <button
          type="button"
          onClick={goToNext}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.8)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#333",
          }}
        >
          ›
        </button>
        {/* カウンター */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            backgroundColor: "rgba(255,255,255,0.9)",
            padding: "4px 12px",
            borderRadius: "4px",
            fontSize: "14px",
            color: "#333",
            fontWeight: "500",
          }}
        >
          {currentIndex + 1} / {displayCount}
        </div>
      </div>
    </div>
  );
}
