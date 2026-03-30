"use client";

import type { FC, ReactNode } from "react";
import { useState, useEffect, useCallback, useRef } from "react";

export interface SliderSlide {
  imageUrl: string;
  alt: string;
  href?: string;
}

export interface ImageSliderProps {
  slides: SliderSlide[];
  /**
   * 自動再生の間隔（ミリ秒）。0で自動再生無効
   */
  autoPlayInterval?: number;
  /**
   * スライダーの高さ（px）。デフォルト: 460
   */
  height?: number;
  className?: string;
  /**
   * ドットナビゲーションの表示。デフォルト: true
   */
  showDots?: boolean;
  /**
   * カウンターの表示位置。デフォルト: "right"
   */
  counterPosition?: "left" | "right";
  /**
   * 矢印ボタンのスタイル。デフォルト: "dark"
   */
  arrowVariant?: "dark" | "light";
  /**
   * カウンター表示の総数を上書き（実画像枚数と表示を変えたい場合）
   */
  totalSlides?: number;
  /**
   * スライダー上に重ねるオーバーレイコンテンツ
   */
  children?: ReactNode;
}

const DESKTOP_SLIDE_WIDTH = 1000;

/**
 * 画像スライダーコンポーネント
 * 無限ループ対応（Slick centerMode + infinite 相当）
 */
export const ImageSlider: FC<ImageSliderProps> = ({
  slides,
  autoPlayInterval = 5000,
  height = 460,
  className = "",
  showDots = true,
  counterPosition = "right",
  arrowVariant = "dark",
  totalSlides,
  children,
}) => {
  // クローン分のオフセット: 先頭にslidesのクローンを追加するため、初期位置はslidesの長さ分ずれる
  const [position, setPosition] = useState(slides.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(DESKTOP_SLIDE_WIDTH);

  // レスポンシブ: コンテナ幅に応じてスライド幅を変更
  useEffect(() => {
    const updateSlideWidth = () => {
      const vw = window.innerWidth;
      setSlideWidth(vw < 768 ? vw : DESKTOP_SLIDE_WIDTH);
    };
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

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
  const translateX = -(position * slideWidth);

  const renderSlide = (slide: SliderSlide, key: number) => (
    <div key={key} className="flex-shrink-0" style={{ width: `${slideWidth}px`, height: "100%" }}>
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
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={{ height: slideWidth < 768 ? "auto" : `${height}px`, aspectRatio: slideWidth < 768 ? "16/9" : undefined }}>
      {/* スライダーコンテナ - 旧サイト準拠: max-width: 1000px, 中央配置, overflow: visible で前後スライドが見切れる */}
      <div style={{ maxWidth: slideWidth < 768 ? "100%" : `${DESKTOP_SLIDE_WIDTH}px`, margin: "0 auto", height: "100%", position: "relative", overflow: "visible" }}>
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
            className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition-colors ${
              arrowVariant === "light"
                ? "bg-white/80 text-gray-700 hover:bg-white"
                : "bg-black/40 text-white hover:bg-black/60"
            }`}
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
            className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition-colors ${
              arrowVariant === "light"
                ? "bg-white/80 text-gray-700 hover:bg-white"
                : "bg-black/40 text-white hover:bg-black/60"
            }`}
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
      {showDots && slides.length > 1 && (
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
        <div className={`absolute bottom-3 ${counterPosition === "left" ? "left-3" : "right-3"} rounded bg-black/50 px-2 py-1 text-xs text-white`}>
          {realIndex + 1} / {totalSlides ?? slides.length}
        </div>
      )}

      {/* オーバーレイコンテンツ */}
      {children}
    </div>
  );
};
