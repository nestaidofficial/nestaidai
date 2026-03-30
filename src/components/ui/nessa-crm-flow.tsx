"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, BadgeCheck, MapPinned, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import "./nessa-crm-flow.css";

interface NessaCrmFlowProps {
  className?: string;
  title?: string;
  centerText?: string;
  bottomBadges?: { first: string; second: string };
  bottomIcons?: { first: LucideIcon; second: LucideIcon };
}

// Each badge: x (left edge), width (rect width), path (animateMotion path from badge center → card center)
// Badge centers: 20, 73, 127, 177 — all paths converge near (100, 50)
const FLOW_ITEMS = [
  {
    label: "Clients",
    x: 6,
    width: 28,
    dur: "3.6s",
    begin: "0s",
    path: "M 20 10 v 22 q 0 5 5 5 h 70 q 5 0 5 5 v 18",
  },
  {
    label: "Caregivers",
    x: 54,
    width: 38,
    dur: "1.8s",
    begin: "0.9s",
    path: "M 73 10 v 16 q 0 5 5 5 h 17 q 5 0 5 5 v 18",
  },
  {
    label: "Scheduling",
    x: 108,
    width: 38,
    dur: "1.8s",
    begin: "1.8s",
    path: "M 127 10 v 16 q 0 5 -5 5 h -17 q -5 0 -5 5 v 18",
  },
  {
    label: "Care Agencies",
    x: 158,
    width: 38,
    dur: "3.5s",
    begin: "2.7s",
    path: "M 177 10 v 22 q 0 5 -5 5 h -67 q -5 0 -5 5 v 18",
  },
];

const NessaCrmFlow = ({
  className,
  title = "Connected care operations",
  centerText = "Nessa",
  bottomBadges = { first: "Live scheduling", second: "Verified visits" },
  bottomIcons = { first: BadgeCheck, second: MapPinned },
}: NessaCrmFlowProps) => {
  const FirstIcon = bottomIcons.first;
  const SecondIcon = bottomIcons.second;
  return (
    <div
      className={cn(
        "relative flex h-[540px] w-full max-w-[640px] flex-col items-center",
        className
      )}
    >
      {/* ─── Mobile SVG (portrait 200×280, paths extend to card) ─── */}
      <svg
        className="h-full w-full lg:hidden"
        width="100%"
        height="100%"
        viewBox="0 0 200 280"
        overflow="visible"
      >
        {/* Static connector paths — 4 distinct non-overlapping routes */}
        <g
          stroke="#d4d4d4"
          fill="none"
          strokeWidth="0.45"
          strokeDasharray="100 100"
          pathLength="100"
        >
          {/* Clients (far-left, row 1) → arrives x=85 */}
          <path d="M 19 10 v 46 q 0 6 6 6 h 54 q 6 0 6 6 v 100" />
          {/* Caregivers (center-right, row 1) → arrives x=115 */}
          <path d="M 137 10 v 46 q 0 6 -6 6 h -10 q -6 0 -6 6 v 100" />
          {/* Scheduling (center-left, row 2) → arrives x=92 at lower level */}
          <path d="M 61 26 v 36 q 0 6 6 6 h 19 q 6 0 6 6 v 94" />
          {/* Care Agencies (far-right, row 2) → arrives x=108 at lower level */}
          <path d="M 168 26 v 36 q 0 6 -6 6 h -48 q -6 0 -6 6 v 94" />
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1.4s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>

        {/* Mobile traveling lights */}
        <g mask="url(#mob-mask-1)">
          <circle className="nessa-mob-light-1" cx="0" cy="0" r="26" fill="url(#mob-light-grad)" />
        </g>
        <g mask="url(#mob-mask-2)">
          <circle className="nessa-mob-light-2" cx="0" cy="0" r="26" fill="url(#mob-light-grad)" />
        </g>
        <g mask="url(#mob-mask-3)">
          <circle className="nessa-mob-light-3" cx="0" cy="0" r="26" fill="url(#mob-light-grad)" />
        </g>
        <g mask="url(#mob-mask-4)">
          <circle className="nessa-mob-light-4" cx="0" cy="0" r="26" fill="url(#mob-light-grad)" />
        </g>

        {/* Top badge pills — spread across 4 distinct x positions, 2 rows */}
        {[
          { label: "Clients",        x: 5,   y: 3.5, w: 28 },  // far-left,    row 1
          { label: "Caregivers",     x: 118, y: 3.5, w: 38 },  // center-right, row 1
          { label: "Scheduling",     x: 42,  y: 20,  w: 38 },  // center-left,  row 2
          { label: "Care Agencies",  x: 147, y: 20,  w: 42 },  // far-right,    row 2
        ].map(({ label, x, y, w }) => (
          <g key={`mob-badge-${label}`} stroke="none">
            <rect x={x} y={y} width={w} height="12" rx="3" fill="#EAEAE3" />
            <text
              x={x + w / 2}
              y={y + 6.3}
              fill="#18181b"
              fontSize="4.8"
              fontWeight="500"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {label}
            </text>
          </g>
        ))}

        <defs>
          <mask id="mob-mask-1">
            <path d="M 19 10 v 46 q 0 6 6 6 h 54 q 6 0 6 6 v 100" strokeWidth="0.8" stroke="white" fill="none" />
          </mask>
          <mask id="mob-mask-2">
            <path d="M 137 10 v 46 q 0 6 -6 6 h -10 q -6 0 -6 6 v 100" strokeWidth="0.8" stroke="white" fill="none" />
          </mask>
          <mask id="mob-mask-3">
            <path d="M 61 26 v 36 q 0 6 6 6 h 19 q 6 0 6 6 v 94" strokeWidth="0.8" stroke="white" fill="none" />
          </mask>
          <mask id="mob-mask-4">
            <path d="M 168 26 v 36 q 0 6 -6 6 h -48 q -6 0 -6 6 v 94" strokeWidth="0.8" stroke="white" fill="none" />
          </mask>
          <radialGradient id="mob-light-grad" fx="1">
            <stop offset="0%" stopColor="#F4C6AC" stopOpacity="1" />
            <stop offset="100%" stopColor="#F4C6AC" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* ─── Desktop SVG (landscape 200×100, original) ─── */}
      <svg
        className="h-full w-full hidden lg:block"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
        overflow="visible"
      >
        {/* Static connector paths */}
        <g
          stroke="#d4d4d4"
          fill="none"
          strokeWidth="0.45"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 20 10 v 22 q 0 5 5 5 h 70 q 5 0 5 5 v 18" />
          <path d="M 73 10 v 16 q 0 5 5 5 h 17 q 5 0 5 5 v 18" />
          <path d="M 127 10 v 16 q 0 5 -5 5 h -17 q -5 0 -5 5 v 18" />
          <path d="M 177 10 v 22 q 0 5 -5 5 h -67 q -5 0 -5 5 v 18" />
          {/* Draw-on animation (runs once on mount) */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1.2s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>

        {/* Traveling lights */}
        <g mask="url(#nessa-mask-1)">
          <circle className="nessa-light-1" cx="0" cy="0" r="18" fill="url(#nessa-light-grad)" />
        </g>
        <g mask="url(#nessa-mask-2)">
          <circle className="nessa-light-2" cx="0" cy="0" r="18" fill="url(#nessa-light-grad)" />
        </g>
        <g mask="url(#nessa-mask-3)">
          <circle className="nessa-light-3" cx="0" cy="0" r="18" fill="url(#nessa-light-grad)" />
        </g>
        <g mask="url(#nessa-mask-4)">
          <circle className="nessa-light-4" cx="0" cy="0" r="18" fill="url(#nessa-light-grad)" />
        </g>

        {/* Top badge pills */}
        {FLOW_ITEMS.map((item) => (
          <g key={`badge-${item.label}`} stroke="none">
            <rect x={item.x} y="3.5" width={item.width} height="12" rx="3" fill="#EAEAE3" />
            <text
              x={item.x + item.width / 2}
              y="9.8"
              fill="#18181b"
              fontSize="4.8"
              fontWeight="500"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {item.label}
            </text>
          </g>
        ))}

        <defs>
          <mask id="nessa-mask-1">
            <path d="M 20 10 v 22 q 0 5 5 5 h 70 q 5 0 5 5 v 18" strokeWidth="1.3" stroke="white" fill="none" />
          </mask>
          <mask id="nessa-mask-2">
            <path d="M 73 10 v 16 q 0 5 5 5 h 17 q 5 0 5 5 v 18" strokeWidth="1.3" stroke="white" fill="none" />
          </mask>
          <mask id="nessa-mask-3">
            <path d="M 127 10 v 16 q 0 5 -5 5 h -17 q -5 0 -5 5 v 18" strokeWidth="1.3" stroke="white" fill="none" />
          </mask>
          <mask id="nessa-mask-4">
            <path d="M 177 10 v 22 q 0 5 -5 5 h -67 q -5 0 -5 5 v 18" strokeWidth="1.3" stroke="white" fill="none" />
          </mask>
          <radialGradient id="nessa-light-grad" fx="1">
            <stop offset="0%" stopColor="#F4C6AC" stopOpacity="1" />
            <stop offset="100%" stopColor="#F4C6AC" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Main card — positioned inside the lower half of the SVG space */}
      <div className="absolute bottom-20 sm:bottom-10 lg:bottom-0 flex w-full flex-col items-center">
        {/* Soft glow behind card */}
        <div className="absolute -bottom-4 h-[90px] w-[55%] rounded-[28px] bg-black/5 blur-2xl" />

        {/* Top label badge */}
        <div className="absolute -top-5 z-20 flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 nessa-badge-glow">
          <SparklesIcon className="size-3.5 text-black/60" />
          <span className="text-xs font-medium text-black/70">{title}</span>
        </div>

        {/* Center circle */}
        <div className="absolute -bottom-9 z-30 grid h-[70px] w-[70px] place-items-center rounded-full border border-black/10 bg-[#18181b] text-xs font-semibold text-white shadow-lg">
          {centerText}
        </div>

        {/* Main card */}
        <div className="relative z-10 flex h-[260px] w-full items-start justify-center overflow-hidden rounded-2xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.07)] bg-white">
          {/* Subtle top gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.03),_transparent_60%)]" />

          {/* Heading */}
          <div className="mt-10 text-center px-4">
            <h3 className="text-base font-semibold text-black leading-snug">
              Care, staff, and visits in sync
            </h3>
            <p className="mt-2 text-[13px] text-black/50 leading-relaxed">
              Intake to scheduling to EVV — all connected.
            </p>
          </div>

          {/* Bottom badges */}
          <div className="absolute bottom-7 left-7 z-10 flex h-8 items-center gap-2 rounded-full bg-[#EAEAE3] px-4 text-xs text-[#18181b] shadow-sm">
            <FirstIcon className="size-3.5" />
            <span>{bottomBadges.first}</span>
          </div>
          <div className="absolute bottom-7 right-7 z-10 hidden h-8 items-center gap-2 rounded-full bg-[#EAEAE3] px-4 text-xs text-[#18181b] shadow-sm sm:flex">
            <SecondIcon className="size-3.5" />
            <span>{bottomBadges.second}</span>
          </div>

          {/* Sonar rings — staggered pulsing */}
          <motion.div
            className="absolute -bottom-16 h-[120px] w-[120px] rounded-full border-2 border-black/15 bg-black/[0.04]"
            animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-[88px] h-[170px] w-[170px] rounded-full border-2 border-black/12 bg-black/[0.03]"
            animate={{ scale: [1, 0.96, 1.04, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
          />
          <motion.div
            className="absolute -bottom-[118px] h-[220px] w-[220px] rounded-full border-2 border-black/10 bg-black/[0.025]"
            animate={{ scale: [1.03, 0.97, 1.03], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          />
          <motion.div
            className="absolute -bottom-[146px] h-[270px] w-[270px] rounded-full border-2 border-black/8 bg-black/[0.02]"
            animate={{ scale: [1, 1.03, 0.97, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.35 }}
          />
        </div>
      </div>
    </div>
  );
};

export default NessaCrmFlow;
