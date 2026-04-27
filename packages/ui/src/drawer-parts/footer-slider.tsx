"use client";

import type { FC } from "react";
import { useEffect, useRef } from "react";

type FooterSliderProps = {
  images: string[];
  isLg?: boolean;
};

export const FooterSlider: FC<FooterSliderProps> = ({ images, isLg }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.5;
    const animate = () => {
      pos -= speed;
      const totalWidth = el.scrollWidth / 2;
      if (Math.abs(pos) >= totalWidth) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (!images || images.length === 0) return null;

  const imgW = isLg ? 190 : 169;
  const imgH = isLg ? 95 : 101;
  const doubled = [...images, ...images];

  return (
    <div style={{ overflow: "hidden", padding: "10px 0" }}>
      <div ref={ref} style={{ display: "flex", gap: "4px", willChange: "transform" }}>
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              width: imgW,
              height: imgH,
              objectFit: "cover",
              borderRadius: 4,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};
