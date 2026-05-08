"use client";

import { useCallback, useEffect, useRef } from "react";

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
  const requestIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const width = parent.clientWidth;
    const height = parent.clientHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const getMouseInfluence = useCallback((x: number, y: number) => {
    const dx = x - mouseRef.current.x;
    const dy = y - mouseRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 140;
    return Math.max(0, 1 - distance / maxDistance);
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    timeRef.current += animationSpeed;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    const numPrimaryLines = 16;
    for (let i = 0; i < numPrimaryLines; i++) {
      const yPos = (i / numPrimaryLines) * height;
      const mouseInfl = getMouseInfluence(width / 2, yPos);

      const amplitude = 14 + 8 * Math.sin(timeRef.current * 0.25 + i * 0.18) + mouseInfl * 8;
      const frequency = 0.02 + 0.005 * Math.sin(timeRef.current * 0.16 + i * 0.11);
      const speed = timeRef.current * (0.9 + 0.2 * Math.sin(i * 0.13));
      const thickness = 0.45 + 0.2 * Math.sin(timeRef.current + i * 0.25);
      const opacity = (0.06 + 0.04 * Math.abs(Math.sin(timeRef.current * 0.3 + i * 0.17))) * lineOpacity;

      ctx.beginPath();
      ctx.lineWidth = thickness;
      ctx.strokeStyle = `rgba(${primaryColor}, ${opacity})`;

      for (let x = 0; x <= width; x += 2) {
        const y = yPos + amplitude * Math.sin(x * frequency + speed);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    const numSecondaryLines = 11;
    for (let i = 0; i < numSecondaryLines; i++) {
      const xPos = (i / numSecondaryLines) * width;
      const mouseInfl = getMouseInfluence(xPos, height / 2);

      const amplitude = 12 + 6 * Math.sin(timeRef.current * 0.19 + i * 0.16) + mouseInfl * 6;
      const frequency = 0.02 + 0.004 * Math.cos(timeRef.current * 0.15 + i * 0.1);
      const speed = timeRef.current * (0.8 + 0.15 * Math.cos(i * 0.18));
      const thickness = 0.35 + 0.15 * Math.sin(timeRef.current + i * 0.35);
      const opacity = (0.04 + 0.03 * Math.abs(Math.sin(timeRef.current * 0.26 + i * 0.2))) * lineOpacity;

      ctx.beginPath();
      ctx.lineWidth = thickness;
      ctx.strokeStyle = `rgba(${secondaryColor}, ${opacity})`;

      for (let y = 0; y <= height; y += 2) {
        const x = xPos + amplitude * Math.sin(y * frequency + speed);
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    const numAccentLines = 7;
    for (let i = 0; i < numAccentLines; i++) {
      const offset = (i / numAccentLines) * width * 1.2 - width * 0.1;
      const amplitude = 10 + 6 * Math.cos(timeRef.current * 0.22 + i * 0.12);
      const phase = timeRef.current * (0.55 + 0.15 * Math.sin(i * 0.12));
      const thickness = 0.3 + 0.14 * Math.sin(timeRef.current + i * 0.24);
      const opacity = (0.03 + 0.02 * Math.abs(Math.sin(timeRef.current * 0.24 + i * 0.15))) * lineOpacity;

      ctx.beginPath();
      ctx.lineWidth = thickness;
      ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;

      const steps = 40;
      for (let j = 0; j <= steps; j++) {
        const progress = j / steps;
        const x = offset + progress * width;
        const y = progress * height + amplitude * Math.sin(progress * 6 + phase);
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    requestIdRef.current = requestAnimationFrame(animate);
  }, [accentColor, animationSpeed, backgroundColor, getMouseInfluence, lineOpacity, primaryColor, secondaryColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    const observer = new ResizeObserver(() => resizeCanvas());
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
      requestIdRef.current = null;
      timeRef.current = 0;
    };
  }, [animate, handleMouseMove, resizeCanvas]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none" style={{ backgroundColor }}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
