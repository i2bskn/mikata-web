"use client";

import type { FC } from "react";
import { useState, useEffect, useCallback } from "react";

export interface BannerSlide {
  imageUrl: string;
  alt: string;
  href?: string;
}

export interface HeroBannerProps {
  slides: BannerSlide[];
  /**
   * 自動再生の間隔（ミリ秒）。0で自動再生無効
   */
  autoPlayInterval?: number;
  /**
   * 高さ（デフォルト: aspect-[16/9]）
   */
  className?: string;
}

/**
 * ヒーローバナー（スライダー）コンポーネント
 */
export const HeroBanner: FC<HeroBannerProps> = ({
  slides,
  autoPlayInterval = 5000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // 自動再生
  useEffect(() => {
    if (autoPlayInterval <= 0 || slides.length <= 1) return;

    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, goToNext, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* スライド */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide.href ? (
              <a href={slide.href} className="block">
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="h-full w-full object-cover aspect-[16/9]"
                />
              </a>
            ) : (
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="h-full w-full object-cover aspect-[16/9]"
              />
            )}
          </div>
        ))}
      </div>

      {/* 左右矢印ナビゲーション */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors"
            aria-label="前のスライド"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors"
            aria-label="次のスライド"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* インジケーター（ドット） */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`スライド ${index + 1} へ移動`}
            />
          ))}
        </div>
      )}

      {/* スライドカウンター */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 text-xs text-white">
          {currentIndex + 1} / {slides.length}
        </div>
      )}
    </div>
  );
};
