"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PixelGridProps {
  bgColor?: string;
  pixelColor?: string;
  numPixelsX?: number;
  numPixelsY?: number;
  pixelSize?: number;
  pixelSpacing?: number;
  pixelDeathFade?: number;
  pixelBornFade?: number;
  pixelMaxLife?: number;
  pixelMinLife?: number;
  pixelMaxOffLife?: number;
  pixelMinOffLife?: number;
  className?: string;
  glow?: boolean;
}

interface Pixel {
  xPos: number;
  yPos: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  offLife: number;
  isLit: boolean;
  dying: boolean;
  deathFade: number;
  bornFade: number;
  randomizeSelf: () => void;
}

export function PixelGrid({
  bgColor = "transparent",
  pixelColor = "#0000ff",
  numPixelsX,
  numPixelsY,
  pixelSize = 3,
  pixelSpacing = 3,
  pixelDeathFade = 10,
  pixelBornFade = 50,
  pixelMaxLife = 500,
  pixelMinLife = 250,
  pixelMaxOffLife = 500,
  pixelMinOffLife = 200,
  glow = false,
  className,
}: PixelGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const c2d = canvas.getContext("2d", { alpha: true });
    if (!c2d) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let visible = false;
    let pageVisible = !document.hidden;

    const randomAlpha = () => {
      const rand = Math.random() * 100;
      if (rand > 90) return 1;
      if (rand > 80) return 0.5;
      return 0.1;
    };

    const randomizePixelAttrs = (x: number, y: number): Pixel => {
      const alpha = randomAlpha();
      const lit = alpha !== 0.1;
      return {
        xPos: x * (pixelSize + pixelSpacing),
        yPos: y * (pixelSize + pixelSpacing),
        alpha: 0,
        maxAlpha: alpha,
        life:
          Math.floor(Math.random() * (pixelMaxLife - pixelMinLife + 1)) +
          pixelMinLife,
        offLife:
          Math.floor(Math.random() * (pixelMaxOffLife - pixelMinOffLife + 1)) +
          pixelMinOffLife,
        isLit: lit,
        dying: false,
        deathFade: pixelDeathFade,
        bornFade: pixelBornFade,
        randomizeSelf() {
          const newAlpha = randomAlpha();
          this.alpha = 0;
          this.maxAlpha = newAlpha;
          this.life =
            Math.floor(Math.random() * (pixelMaxLife - pixelMinLife + 1)) +
            pixelMinLife;
          this.offLife =
            Math.floor(Math.random() * (pixelMaxOffLife - pixelMinOffLife + 1)) +
            pixelMinOffLife;
          this.isLit = newAlpha !== 0.1;
          this.dying = false;
          this.deathFade = pixelDeathFade;
          this.bornFade = pixelBornFade;
        },
      };
    };

    const getHexWithAlpha = (base: string, alpha: number) => {
      const normalized = base.startsWith("#") ? base : `#${base}`;
      const alphaHex = Math.floor(alpha * 255)
        .toString(16)
        .padStart(2, "0");
      if (normalized.length === 7) return `${normalized}${alphaHex}`;
      if (normalized.length === 9) return `${normalized.slice(0, 7)}${alphaHex}`;
      return normalized;
    };

    const initPixels = (width: number, height: number) => {
      const cols =
        numPixelsX ?? Math.ceil(width / Math.max(1, pixelSize + pixelSpacing));
      const rows =
        numPixelsY ?? Math.ceil(height / Math.max(1, pixelSize + pixelSpacing));
      pixelsRef.current = [];

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          pixelsRef.current.push(randomizePixelAttrs(x, y));
        }
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      c2d.setTransform(dpr, 0, 0, dpr, 0, 0);

      initPixels(width, height);
    };

    const drawPixel = (pixel: Pixel) => {
      pixel.alpha = Math.min(Math.max(pixel.alpha, 0.1), pixel.maxAlpha);
      c2d.fillStyle = getHexWithAlpha(pixelColor, pixel.alpha);
      c2d.fillRect(pixel.xPos, pixel.yPos, pixelSize, pixelSize);

      if (pixel.isLit) {
        if (pixel.bornFade <= 0) {
          if (pixel.life <= 0) {
            pixel.dying = true;
            if (pixel.deathFade <= 0) pixel.randomizeSelf();
            else {
              pixel.alpha = (pixel.deathFade / pixelDeathFade) * pixel.maxAlpha;
              pixel.deathFade--;
            }
          } else {
            pixel.life--;
          }
        } else {
          pixel.alpha = pixel.maxAlpha - pixel.bornFade / pixelBornFade;
          pixel.bornFade--;
        }
      } else {
        if (pixel.offLife <= 0) pixel.isLit = true;
        pixel.offLife--;
      }
    };

    const renderLoop = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (bgColor === "transparent") c2d.clearRect(0, 0, width, height);
      else {
        c2d.fillStyle = bgColor;
        c2d.fillRect(0, 0, width, height);
      }

      // shadowBlur is set once outside the per-pixel loop — applying it per
      // fillRect was the dominant cost on this canvas.
      c2d.shadowBlur = 0;

      for (const pixel of pixelsRef.current) drawPixel(pixel);
      frameRef.current = requestAnimationFrame(renderLoop);
    };

    const start = () => {
      if (frameRef.current != null || reduceMotion) return;
      if (!visible || !pageVisible) return;
      frameRef.current = requestAnimationFrame(renderLoop);
    };
    const stop = () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    resizeCanvas();

    if (reduceMotion) {
      // Render a single still frame so the panel isn't blank.
      for (const pixel of pixelsRef.current) {
        c2d.fillStyle = getHexWithAlpha(pixelColor, pixel.maxAlpha);
        c2d.fillRect(pixel.xPos, pixel.yPos, pixelSize, pixelSize);
      }
      const resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(parent);
      return () => resizeObserver.disconnect();
    }

    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible = entry.isIntersecting;
        if (visible && pageVisible) start();
        else stop();
      },
      { rootMargin: "100px" }
    );
    intersection.observe(canvas);

    const onVisibility = () => {
      pageVisible = !document.hidden;
      if (visible && pageVisible) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(parent);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    bgColor,
    glow,
    numPixelsX,
    numPixelsY,
    pixelBornFade,
    pixelColor,
    pixelDeathFade,
    pixelMaxLife,
    pixelMaxOffLife,
    pixelMinLife,
    pixelMinOffLife,
    pixelSize,
    pixelSpacing,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        glow && "[filter:drop-shadow(0_0_4px_currentColor)]",
        className
      )}
      style={{ display: "block", backgroundColor: "transparent", color: pixelColor }}
    />
  );
}
