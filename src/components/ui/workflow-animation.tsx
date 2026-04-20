"use client";

import { useState, useEffect } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Clock,
  Hourglass,
  Circle,
  Users,
  ChevronRight,
  Lock,
  Check,
} from "lucide-react";

// Cumulative ms from animation start at which each phase transition fires
const PHASE_TIMES = [
  400,   // 0 → 1  critical event appear
  1200,  // 1 → 2  client informed
  2200,  // 2 → 3  finding caregiver
  3000,  // 3 → 4  1 contacted
  3600,  // 4 → 5  2 contacted
  4200,  // 5 → 6  3 contacted • 1 replied
  5200,  // 6 → 7  caregiver confirmed
  6800,  // 7 → 8  care scheduled ✓ + 100%
  9500,  // 8 → 0  restart
];

const PROGRESS = [0, 14, 28, 42, 52, 60, 68, 82, 100];

export function WorkflowAnimation() {
  const [phase, setPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    setPhase(0);
    const timers = PHASE_TIMES.map((delay, i) =>
      setTimeout(() => {
        if (i < 8) {
          setPhase(i + 1);
        } else {
          setCycleKey((k) => k + 1);
        }
      }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [cycleKey]);

  const show = (minPhase: number) =>
    phase >= minPhase
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-3 pointer-events-none";

  const slideUp = (minPhase: number) =>
    phase >= minPhase
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-[100px]";

  const progress = PROGRESS[Math.min(phase, 8)];
  const contacted = phase >= 6 ? 3 : phase >= 5 ? 2 : phase >= 4 ? 1 : 0;
  const replied = phase >= 6 ? 1 : 0;

  return (
    <div className="w-full h-full bg-white overflow-hidden select-none flex flex-col">
      <div className="px-4 pt-[22%] pb-4 flex flex-col gap-3 flex-1">

        {/* Back button */}
        <button className="flex items-center gap-1 text-[#020817] mb-1 w-fit">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-sans text-[12px] font-medium">Back</span>
        </button>

        {/* Label */}
        <p className="font-sans text-[11px] font-light text-slate-500 uppercase tracking-widest">
          Live Care Coordination
        </p>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="font-sans text-[10px] font-light uppercase tracking-widest text-slate-500">
              Workflow Progress
            </span>
            <span className="font-sans text-[10px] font-medium text-[#020817] tabular-nums transition-all duration-700">
              {progress}%
            </span>
          </div>
          <div className="h-[4px] w-full bg-black/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gray-800 transition-[width] duration-700 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Critical Event */}
        <div className={`transition-all duration-700 ease-out ${slideUp(1)}`}>
          <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-end mb-2">
              <span className="font-sans px-2 py-[3px] bg-red-100 text-red-700 text-[9px] font-light uppercase rounded-md leading-none">
                Call Out Detected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <div>
                  <p className="font-sans text-[14px] font-medium text-[#020817] leading-[1.43]">
                    Caregiver called out
                  </p>
                  <span className="font-sans inline-block mt-1 px-2 py-[3px] bg-green-100 text-green-800 text-[9px] font-light uppercase rounded-full leading-none">
                    Done
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-200" />
            </div>
          </div>
        </div>

        {/* Checklist — always visible, state transitions via phase */}
        <div className="flex flex-col gap-2 flex-1">

          {/* Client informed */}
          <div className={`bg-white px-3.5 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between transition-all duration-700 ${slideUp(2)}`}>
            <div className="flex items-center gap-2">
              {phase >= 2 ? (
                <CheckCircle2 className="w-4 h-4 text-green-500 transition-all duration-500" />
              ) : (
                <Circle className="w-4 h-4 text-gray-300 transition-all duration-500" />
              )}
              <span className="font-sans text-[14px] font-medium text-[#020817]">
                Client informed
              </span>
              <span className={`font-sans px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
                phase >= 2 ? "bg-green-100 text-green-800" : "bg-gray-100 text-slate-500"
              }`}>
                {phase >= 2 ? "Done" : "Not started"}
              </span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-gray-200" />
          </div>

          {/* Finding caregiver */}
          <div className={`bg-white px-3.5 py-4 rounded-2xl border border-gray-100 shadow-sm transition-all duration-700 ${slideUp(3)}`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                {phase >= 7 ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500 transition-all duration-500" />
                ) : phase >= 3 ? (
                  <Clock className="w-4 h-4 text-orange-400 animate-pulse transition-all duration-500" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-300 transition-all duration-500" />
                )}
                <span className="font-sans text-[14px] font-medium text-[#020817]">
                  Finding caregiver
                </span>
                <span className={`font-sans px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
                  phase >= 7
                    ? "bg-green-100 text-green-800"
                    : phase >= 3
                    ? "bg-orange-100 text-orange-800"
                    : "bg-gray-100 text-slate-500"
                }`}>
                  {phase >= 7 ? "Done" : phase >= 3 ? "In progress" : "Not started"}
                </span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-200" />
            </div>
            <div className={`font-sans flex items-center gap-1.5 ml-6 text-[12px] font-light text-slate-500 leading-[1.33] transition-all duration-400 ${contacted > 0 ? "opacity-100" : "opacity-0"}`}>
              <Users className="w-3.5 h-3.5 flex-shrink-0" />
              <span>
                <span className="font-sans font-medium text-[#020817] tabular-nums">{contacted}</span>{" "}contacted
                {replied > 0 && (
                  <span className="transition-all duration-300">
                    {" "}•{" "}
                    <span className="font-sans font-medium text-[#020817]">{replied}</span>{" "}replied
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Caregiver confirmed */}
          <div className={`bg-white px-3.5 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between transition-all duration-700 ${slideUp(7)}`}>
            <div className="flex items-center gap-2">
              {phase >= 8 ? (
                <CheckCircle2 className="w-4 h-4 text-green-500 transition-all duration-500" />
              ) : phase >= 7 ? (
                <Hourglass className="w-4 h-4 text-orange-400 animate-pulse transition-all duration-500" />
              ) : (
                <Lock className="w-4 h-4 text-gray-300 transition-all duration-500" />
              )}
              <span className="font-sans text-[14px] font-medium text-[#020817]">
                Caregiver confirmed
              </span>
              <span className={`font-sans px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
                phase >= 8
                  ? "bg-green-100 text-green-800"
                  : phase >= 7
                  ? "bg-orange-100 text-orange-800"
                  : "bg-gray-100 text-slate-500"
              }`}>
                {phase >= 8 ? "Done" : phase >= 7 ? "In progress" : "Not started"}
              </span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-gray-200" />
          </div>

          {/* Care done */}
          <div className={`px-3.5 py-4 rounded-2xl border shadow-sm flex items-center justify-between transition-all duration-700 ${slideUp(8)} ${
            phase >= 8
              ? "bg-white border-green-100"
              : "bg-white border-gray-100"
          }`}>
            <div className="flex items-center gap-2">
              {phase >= 8 ? (
                <CheckCircle2 className="w-4 h-4 text-green-500 transition-all duration-500" />
              ) : (
                <Circle className="w-4 h-4 text-gray-300 transition-all duration-500" />
              )}
              <span className="font-sans text-[14px] font-medium text-[#020817]">
                Care Scheduled
              </span>
              <span className={`font-sans px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
                phase >= 8 ? "bg-green-100 text-green-800" : "bg-gray-100 text-slate-500"
              }`}>
                {phase >= 8 ? "Done ✓" : "Not started"}
              </span>
            </div>
            {phase >= 8 ? (
              <Check className="w-3.5 h-3.5 text-green-400 transition-all duration-500" />
            ) : (
              <Lock className="w-3.5 h-3.5 text-gray-200 transition-all duration-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
