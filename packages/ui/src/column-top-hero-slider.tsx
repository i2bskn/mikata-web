"use client";

import type { FC } from "react";
import { useCallback, useEffect, useState } from "react";

export type ColumnTopHeroSlide = {
  href: string;
  image: string;
  title: string;
  views: number;
};

export type ColumnTopHeroSliderProps = {
  slides: ColumnTopHeroSlide[];
  /** 自動再生間隔（ms）。0 で無効。既定 5000 */
  autoPlayInterval?: number;
};

export const ColumnTopHeroSlider: FC<ColumnTopHeroSliderProps> = ({
  slides,
  autoPlayInterval = 5000,
}) => {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (autoPlayInterval <= 0 || slides.length <= 1) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, goNext, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <div
        className="flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 500ms ease",
        }}
      >
        {slides.map((slide, i) => (
          <a
            key={`${slide.href}-${i}`}
            href={slide.href}
            style={{
              flex: "0 0 100%",
              position: "relative",
              display: "block",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "16px 20px",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%)",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  marginBottom: "4px",
                }}
              >
                {slide.title}
              </p>
              <span
                className="flex items-center gap-1"
                style={{ fontSize: "13px", justifyContent: "flex-end" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {slide.views}
              </span>
            </div>
          </a>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              goPrev();
            }}
            aria-label="前のスライド"
            style={{
              position: "absolute",
              top: "50%",
              left: "8px",
              transform: "translateY(-50%)",
              width: "32px",
              height: "64px",
              backgroundColor: "rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              goNext();
            }}
            aria-label="次のスライド"
            style={{
              position: "absolute",
              top: "50%",
              right: "8px",
              transform: "translateY(-50%)",
              width: "32px",
              height: "64px",
              backgroundColor: "rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
