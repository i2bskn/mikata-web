"use client";

import type { FC } from "react";
import { useState, useEffect, useCallback, useRef } from "react";

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
   * スライダーの高さ（px）。デフォルト: 460
   */
  height?: number;
  className?: string;
}

const SLIDE_WIDTH = 1000;

/**
 * ヒーローバナー（スライダー）コンポーネント
 * 旧サイト準拠: Slick centerMode + infinite 相当の無限ループスライダー
 */
export const HeroBanner: FC<HeroBannerProps> = ({
  slides,
  autoPlayInterval = 5000,
  height = 460,
  className = "",
}) => {
  // クローン分のオフセット: 先頭にslidesのクローンを追加するため、初期位置はslidesの長さ分ずれる
  const [position, setPosition] = useState(slides.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // 実際のインデックス（0〜slides.length-1）
  const realIndex = ((position % slides.length) + slides.length) % slides.length;

  // クローン付きスライド配列: [clone...] + [original...] + [clone...]
  const extendedSlides = [...slides, ...slides, ...slides];

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPosition((prev) => prev + 1);
  }, [isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPosition((prev) => prev - 1);
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPosition(slides.length + index);
  }, [isTransitioning, slides.length]);

  // トランジション終了時: クローン領域にいたら実スライド領域に瞬時ジャンプ
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    setPosition((prev) => {
      if (prev < slides.length) {
        return prev + slides.length;
      }
      if (prev >= slides.length * 2) {
        return prev - slides.length;
      }
      return prev;
    });
  }, [slides.length]);

  // 自動再生
  useEffect(() => {
    if (autoPlayInterval <= 0 || slides.length <= 1) return;

    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, goToNext, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  // クローン領域へのジャンプ時はトランジションを無効化
  const needsJump = position < slides.length || position >= slides.length * 2;
  const translateX = -(position * SLIDE_WIDTH);

  const renderSlide = (slide: BannerSlide, key: number) => (
    <div key={key} className="flex-shrink-0" style={{ width: `${SLIDE_WIDTH}px`, height: "100%" }}>
      {slide.href ? (
        <a href={slide.href} className="block" style={{ height: "100%" }}>
          <img
            src={slide.imageUrl}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </a>
      ) : (
        <img
          src={slide.imageUrl}
          alt={slide.alt}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      {/* スライダーコンテナ - 旧サイト準拠: max-width: 1000px, 中央配置, overflow: visible で前後スライドが見切れる */}
      <div style={{ maxWidth: `${SLIDE_WIDTH}px`, margin: "0 auto", height: "100%", position: "relative", overflow: "visible" }}>
        {/* スライドトラック */}
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: !isTransitioning && needsJump ? "none" : "transform 500ms ease-in-out",
            height: "100%",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => renderSlide(slide, index))}
        </div>
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
                index === realIndex
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
          {realIndex + 1} / {slides.length}
        </div>
      )}
    </div>
  );
};
