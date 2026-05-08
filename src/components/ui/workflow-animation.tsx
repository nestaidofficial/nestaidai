"use client";

import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  Hourglass,
  Circle,
  Users,
  ChevronRight,
  Lock,
  Check,
  PhoneOff,
  Mic,
  Sparkles,
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
];

const PROGRESS = [0, 14, 28, 42, 52, 60, 68, 82, 100];

// Incoming-call (Sarah → Nessa) timing
const CALL_CONNECT_AT = 700;

const SARAH_LINE = "Hi, I can't make my 9am shift today caring for Mrs. Smith.";
const SARAH_WORDS = SARAH_LINE.split(" ");
const SARAH_WORD_INTERVAL = 110;

// Nessa first acknowledges immediately, then sends a final update after outreach.
const NESSA_ACK_LINE = "Noted, thanks for letting us know. You're called out for the shift today from 9am - 4pm.";
const NESSA_ACK_WORDS = NESSA_ACK_LINE.split(" ");
const NESSA_ACK_WORD_INTERVAL = 125;

const NESSA_FINAL_LINE = "We've found coverage for the shift. Take care, Sarah.";
const NESSA_FINAL_WORDS = NESSA_FINAL_LINE.split(" ");
const NESSA_FINAL_WORD_INTERVAL = 100;

const NESSA_ACK_DELAY = 550;           // delay after Sarah finishes before Nessa acknowledges
const HOLD_AFTER_ACK = 1200;           // pause after acknowledgment before workflow starts
const HOLD_AFTER_WORKFLOW = 1800;      // pause on Care Scheduled before final update
const NESSA_FINAL_THINKING = 900;      // small delay before final message starts
const HOLD_AFTER_FINAL_REPLY = 2600;   // hold on completed thread before restart

export function WorkflowAnimation() {
  const [view, setView] = useState<"call" | "workflow">("call");
  const [callConnected, setCallConnected] = useState(false);
  const [sarahCount, setSarahCount] = useState(0);
  const [nessaAckCount, setNessaAckCount] = useState(0);
  const [nessaFinalCount, setNessaFinalCount] = useState(0);
  const [showNessaAck, setShowNessaAck] = useState(false);
  const [showNessaFinal, setShowNessaFinal] = useState(false);
  const [phase, setPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    setView("call");
    setCallConnected(false);
    setSarahCount(0);
    setNessaAckCount(0);
    setNessaFinalCount(0);
    setShowNessaAck(false);
    setShowNessaFinal(false);
    setPhase(0);

    const timers: ReturnType<typeof setTimeout>[] = [];

    // --- Incoming call from Sarah ---
    timers.push(setTimeout(() => setCallConnected(true), CALL_CONNECT_AT));
    SARAH_WORDS.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => setSarahCount(i + 1),
          CALL_CONNECT_AT + 250 + i * SARAH_WORD_INTERVAL
        )
      );
    });

    // --- Nessa immediate acknowledgment on the same call thread ---
    const SARAH_END_AT = CALL_CONNECT_AT + 250 + SARAH_WORDS.length * SARAH_WORD_INTERVAL;
    const NESSA_ACK_BUBBLE_AT = SARAH_END_AT + NESSA_ACK_DELAY;
    const NESSA_ACK_WORD_START = NESSA_ACK_BUBBLE_AT + 220;

    timers.push(setTimeout(() => setShowNessaAck(true), NESSA_ACK_BUBBLE_AT));

    NESSA_ACK_WORDS.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => setNessaAckCount(i + 1),
          NESSA_ACK_WORD_START + i * NESSA_ACK_WORD_INTERVAL
        )
      );
    });

    // --- Switch to workflow view (after acknowledgment is delivered) ---
    const NESSA_ACK_END_AT =
      NESSA_ACK_WORD_START + NESSA_ACK_WORDS.length * NESSA_ACK_WORD_INTERVAL;
    const WORKFLOW_START_AT = NESSA_ACK_END_AT + HOLD_AFTER_ACK;

    timers.push(
      setTimeout(() => {
        setView("workflow");
        setPhase(1);
      }, WORKFLOW_START_AT)
    );

    PHASE_TIMES.forEach((delay, i) => {
      timers.push(
        setTimeout(() => setPhase(i + 1), WORKFLOW_START_AT + delay)
      );
    });

    // --- Return to call thread for final update after outreach completes ---
    const WORKFLOW_DONE_AT = WORKFLOW_START_AT + PHASE_TIMES[PHASE_TIMES.length - 1];
    const RETURN_TO_CALL_AT = WORKFLOW_DONE_AT + HOLD_AFTER_WORKFLOW;
    const NESSA_FINAL_BUBBLE_AT = RETURN_TO_CALL_AT + NESSA_FINAL_THINKING;
    const NESSA_FINAL_WORD_START = NESSA_FINAL_BUBBLE_AT + 250;

    timers.push(
      setTimeout(() => {
        setView("call");
        setSarahCount(SARAH_WORDS.length);
        setNessaAckCount(NESSA_ACK_WORDS.length);
        setCallConnected(true);
      }, RETURN_TO_CALL_AT)
    );

    timers.push(setTimeout(() => setShowNessaFinal(true), NESSA_FINAL_BUBBLE_AT));

    NESSA_FINAL_WORDS.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => setNessaFinalCount(i + 1),
          NESSA_FINAL_WORD_START + i * NESSA_FINAL_WORD_INTERVAL
        )
      );
    });

    const NESSA_FINAL_END_AT =
      NESSA_FINAL_WORD_START + NESSA_FINAL_WORDS.length * NESSA_FINAL_WORD_INTERVAL;
    const RESTART_AT = NESSA_FINAL_END_AT + HOLD_AFTER_FINAL_REPLY;

    timers.push(setTimeout(() => setCycleKey((k) => k + 1), RESTART_AT));

    return () => timers.forEach(clearTimeout);
  }, [cycleKey]);

  const slideUp = (minPhase: number) =>
    phase >= minPhase
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-[100px]";

  const progress = PROGRESS[Math.min(phase, 8)];
  const contacted = phase >= 6 ? 3 : phase >= 5 ? 2 : phase >= 4 ? 1 : 0;
  const replied = phase >= 6 ? 1 : 0;

  return (
    <div className="w-full h-full bg-white overflow-hidden select-none flex flex-col">
      {view === "call" ? (
        <CallScreen
          callConnected={callConnected}
          sarahCount={sarahCount}
          showNessaAck={showNessaAck}
          nessaAckCount={nessaAckCount}
          showNessaFinal={showNessaFinal}
          nessaFinalCount={nessaFinalCount}
        />
      ) : (
        <div className="px-4 pt-[22%] pb-4 flex flex-col gap-3 flex-1">
          {/* Back button */}
          <button className="flex items-center gap-1 text-[#020817] mb-1 w-fit">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-body text-[12px] font-medium">Back</span>
          </button>

          {/* Label */}
          <p className="font-body text-[11px] font-light text-slate-500 uppercase tracking-widest">
            Live Care Coordination
          </p>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-body text-[10px] font-light uppercase tracking-widest text-slate-500">
                Workflow Progress
              </span>
              <span className="font-body text-[10px] font-medium text-[#020817] tabular-nums transition-all duration-700">
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
                <span className="font-body px-2 py-[3px] bg-red-100 text-red-700 text-[9px] font-light uppercase rounded-md leading-none">
                  Call Out Detected
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-body text-[14px] font-medium text-[#020817] leading-[1.43]">
                      Caregiver called out
                    </p>
                    <span className="font-body inline-block mt-1 px-2 py-[3px] bg-green-100 text-green-800 text-[9px] font-light uppercase rounded-full leading-none">
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
                <span className="font-body text-[14px] font-medium text-[#020817]">
                  Client informed
                </span>
                <span className={`font-body px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
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
                  <span className="font-body text-[14px] font-medium text-[#020817]">
                    Finding caregiver
                  </span>
                  <span className={`font-body px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
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
              <div className={`font-body flex items-center gap-1.5 ml-6 text-[12px] font-light text-slate-500 leading-[1.33] transition-all duration-400 ${contacted > 0 ? "opacity-100" : "opacity-0"}`}>
                <Users className="w-3.5 h-3.5 flex-shrink-0" />
                <span>
                  <span className="font-body font-medium text-[#020817] tabular-nums">{contacted}</span>{" "}contacted
                  {replied > 0 && (
                    <span className="transition-all duration-300">
                      {" "}•{" "}
                      <span className="font-body font-medium text-[#020817]">{replied}</span>{" "}replied
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
                <span className="font-body text-[14px] font-medium text-[#020817]">
                  Caregiver confirmed
                </span>
                <span className={`font-body px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
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
                <span className="font-body text-[14px] font-medium text-[#020817]">
                  Care Scheduled
                </span>
                <span className={`font-body px-2 py-[3px] text-[9px] font-light uppercase rounded-full leading-none transition-colors duration-500 ${
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
      )}
    </div>
  );
}

function CallScreen({
  callConnected,
  sarahCount,
  showNessaAck,
  nessaAckCount,
  showNessaFinal,
  nessaFinalCount,
}: {
  callConnected: boolean;
  sarahCount: number;
  showNessaAck: boolean;
  nessaAckCount: number;
  showNessaFinal: boolean;
  nessaFinalCount: number;
}) {
  const sarahDone = sarahCount >= SARAH_WORDS.length;
  const nessaAckDone = nessaAckCount >= NESSA_ACK_WORDS.length;
  const nessaFinalDone = nessaFinalCount >= NESSA_FINAL_WORDS.length;
  const sarahStarted = sarahCount > 0;
  const hasNessaReply = showNessaAck || showNessaFinal;

  // When replies appear, reduce avatar/header footprint so the thread fits naturally.
  const compact = hasNessaReply;

  return (
    <div
      className={`w-full h-full flex flex-col items-center px-5 ${
        compact ? "pt-[23%]" : "pt-[27%]"
      } pb-4 animate-[fadeIn_300ms_ease-out]`}
    >
      {/* Status label */}
      <div className="flex items-center gap-1.5">
        {callConnected && (
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        )}
        <p className="font-body text-[10px] font-light uppercase tracking-widest text-slate-500">
          {callConnected ? "Live call · Nessa AI" : "Incoming call"}
        </p>
      </div>

      {/* Avatar */}
      <div className={`relative ${compact ? "mt-3 mb-2" : "mt-5 mb-3"}`}>
        {!callConnected && (
          <>
            <span className="absolute inset-0 -m-2 rounded-full border-2 border-orange-200 animate-ping" />
            <span className="absolute inset-0 -m-4 rounded-full border-2 border-orange-100 animate-ping [animation-delay:300ms]" />
          </>
        )}
        <div
          className={`relative ${
            compact ? "w-14 h-14" : "w-20 h-20"
          } rounded-full overflow-hidden ring-2 ring-white shadow-sm transition-all duration-500`}
        >
          <Image
            src="/sarahavatar.png"
            alt="Sarah Miller"
            fill
            sizes="80px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Caller info */}
      <p
        className={`font-body font-semibold text-[#020817] leading-tight ${
          compact ? "text-[15px]" : "text-[18px]"
        } transition-all duration-500`}
      >
        Sarah Miller
      </p>
      <p className="font-body text-[12px] font-light text-slate-500 mt-0.5">
        Caregiver · Mobile
      </p>

      {/* Conversation thread */}
      <div className="mt-4 w-full flex flex-col gap-2">
        {/* Sarah's message — left aligned */}
        <div
          className={`flex justify-start transition-all duration-500 ease-out ${
            sarahStarted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <div className="max-w-[82%] bg-white rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm px-3.5 py-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <Mic className="w-2.5 h-2.5 text-slate-500" />
              <span className="font-body text-[8.5px] font-light uppercase tracking-widest text-slate-500">
                Sarah · Live transcript
              </span>
            </div>
            <p className="font-body text-[12.5px] font-medium text-[#020817] leading-snug">
              <span>&ldquo;</span>
              <TypingWords words={SARAH_WORDS} count={sarahCount} />
              {!sarahDone && callConnected && (
                <span className="inline-block w-[2px] h-[11px] bg-[#020817] align-middle ml-0.5 animate-pulse" />
              )}
              {sarahDone && <span>&rdquo;</span>}
            </p>
          </div>
        </div>

        {/* Nessa's reply — right aligned, branded dark bubble */}
        <div
          className={`flex justify-end transition-all duration-500 ease-out ${
            showNessaAck ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="max-w-[82%] bg-[#34C759] rounded-2xl rounded-tr-sm shadow-sm px-3.5 py-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="w-2.5 h-2.5 text-white/70" />
              <span className="font-body text-[8.5px] font-light uppercase tracking-widest text-white/70">
                Nessa
              </span>
            </div>
            <p className="font-body text-[12.5px] font-medium text-white leading-snug">
              <span>&ldquo;</span>
              <TypingWords words={NESSA_ACK_WORDS} count={nessaAckCount} />
              {showNessaAck && !nessaAckDone && (
                <span className="inline-block w-[2px] h-[11px] bg-white align-middle ml-0.5 animate-pulse" />
              )}
              {nessaAckDone && <span>&rdquo;</span>}
            </p>
          </div>
        </div>

        {/* Nessa final confirmation — appears after outreach flow */}
        <div
          className={`flex justify-end transition-all duration-500 ease-out ${
            showNessaFinal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="max-w-[82%] bg-[#34C759] rounded-2xl rounded-tr-sm shadow-sm px-3.5 py-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="w-2.5 h-2.5 text-white/70" />
              <span className="font-body text-[8.5px] font-light uppercase tracking-widest text-white/70">
                Nessa
              </span>
            </div>
            <p className="font-body text-[12.5px] font-medium text-white leading-snug">
              <span>&ldquo;</span>
              <TypingWords words={NESSA_FINAL_WORDS} count={nessaFinalCount} />
              {showNessaFinal && !nessaFinalDone && (
                <span className="inline-block w-[2px] h-[11px] bg-white align-middle ml-0.5 animate-pulse" />
              )}
              {nessaFinalDone && <span>&rdquo;</span>}
            </p>
          </div>
        </div>
      </div>

      {/* Audio waveform — only while it's just Sarah talking, then collapses */}
      <div
        className={`mt-4 flex items-end gap-[3px] h-5 transition-all duration-300 ${
          callConnected && !hasNessaReply ? "opacity-100" : "opacity-0 h-0 mt-0"
        }`}
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-[#020817]/70 animate-[wave_900ms_ease-in-out_infinite]"
            style={{
              animationDelay: `${i * 90}ms`,
              height: `${30 + ((i * 17) % 60)}%`,
            }}
          />
        ))}
      </div>

      {/* End-call button */}
      <div className="mt-auto pt-3">
        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-md">
          <PhoneOff className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}

// Renders the first `count` words of `words`, fading & sliding each new
// word in smoothly as it becomes visible. Existing words are stable across
// re-renders because each span is keyed by its index — only the newly
// mounted span runs its `wordIn` animation, so the typing reads as a
// continuous flow rather than chunky jumps.
function TypingWords({ words, count }: { words: string[]; count: number }) {
  return (
    <>
      {words.slice(0, count).map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="inline-block animate-[wordIn_220ms_ease-out]">
            {word}
          </span>
        </Fragment>
      ))}
    </>
  );
}
