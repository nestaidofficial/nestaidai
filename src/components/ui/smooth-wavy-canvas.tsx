"use client";

import { useEffect, useRef } from "react";

interface SmoothWavyCanvasProps {
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  lineOpacity?: number;
  animationSpeed?: number;
}

export default function SmoothWavyCanvas({
  backgroundColor = "#F8F8F7",
  primaryColor = "45, 45, 45",
  secondaryColor = "80, 80, 80",
  accentColor = "120, 120, 120",
  lineOpacity = 1,
  animationSpeed = 0.004,
}: SmoothWavyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let time = 0;
    let rafId: number | null = null;
    let visible = false;
    let pageVisible = !document.hidden;
    let width = parent.clientWidth;
    let height = parent.clientHeight;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const mouseInfluence = (x: number, y: number) => {
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const d2 = dx * dx + dy * dy;
      if (d2 > 19600) return 0; // 140^2
      return 1 - Math.sqrt(d2) / 140;
    };

    const drawFrame = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      const t = time;

      const numPrimary = 14;
      for (let i = 0; i < numPrimary; i++) {
        const yPos = (i / numPrimary) * height;
        const infl = mouseInfluence(width / 2, yPos);
        const amplitude = 14 + 8 * Math.sin(t * 0.25 + i * 0.18) + infl * 8;
        const frequency = 0.02 + 0.005 * Math.sin(t * 0.16 + i * 0.11);
        const speed = t * (0.9 + 0.2 * Math.sin(i * 0.13));
        const thickness = 0.45 + 0.2 * Math.sin(t + i * 0.25);
        const opacity =
          (0.06 + 0.04 * Math.abs(Math.sin(t * 0.3 + i * 0.17))) * lineOpacity;

        ctx.beginPath();
        ctx.lineWidth = thickness;
        ctx.strokeStyle = `rgba(${primaryColor}, ${opacity})`;
        for (let x = 0; x <= width; x += 4) {
          const y = yPos + amplitude * Math.sin(x * frequency + speed);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      const numSecondary = 9;
      for (let i = 0; i < numSecondary; i++) {
        const xPos = (i / numSecondary) * width;
        const infl = mouseInfluence(xPos, height / 2);
        const amplitude = 12 + 6 * Math.sin(t * 0.19 + i * 0.16) + infl * 6;
        const frequency = 0.02 + 0.004 * Math.cos(t * 0.15 + i * 0.1);
        const speed = t * (0.8 + 0.15 * Math.cos(i * 0.18));
        const thickness = 0.35 + 0.15 * Math.sin(t + i * 0.35);
        const opacity =
          (0.04 + 0.03 * Math.abs(Math.sin(t * 0.26 + i * 0.2))) * lineOpacity;

        ctx.beginPath();
        ctx.lineWidth = thickness;
        ctx.strokeStyle = `rgba(${secondaryColor}, ${opacity})`;
        for (let y = 0; y <= height; y += 4) {
          const x = xPos + amplitude * Math.sin(y * frequency + speed);
          if (y === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      const numAccent = 6;
      for (let i = 0; i < numAccent; i++) {
        const offset = (i / numAccent) * width * 1.2 - width * 0.1;
        const amplitude = 10 + 6 * Math.cos(t * 0.22 + i * 0.12);
        const phase = t * (0.55 + 0.15 * Math.sin(i * 0.12));
        const thickness = 0.3 + 0.14 * Math.sin(t + i * 0.24);
        const opacity =
          (0.03 + 0.02 * Math.abs(Math.sin(t * 0.24 + i * 0.15))) * lineOpacity;

        ctx.beginPath();
        ctx.lineWidth = thickness;
        ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;
        const steps = 30;
        for (let j = 0; j <= steps; j++) {
          const progress = j / steps;
          const x = offset + progress * width;
          const y = progress * height + amplitude * Math.sin(progress * 6 + phase);
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const tick = () => {
      time += animationSpeed;
      drawFrame();
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId != null || reduceMotion) return;
      if (!visible || !pageVisible) return;
      rafId = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    resize();

    if (reduceMotion) {
      // Single static frame, then bail out of any animation work.
      drawFrame();
      return () => {};
    }

    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible = entry.isIntersecting;
        }
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

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [accentColor, animationSpeed, backgroundColor, lineOpacity, primaryColor, secondaryColor]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none" style={{ backgroundColor }}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
