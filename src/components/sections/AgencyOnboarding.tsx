import { cn } from "@/lib/utils";
import {
  MessageCircle, Settings2, GitBranch, BrainCircuit, Zap, TrendingUp,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    subtitle: "We listen first",
    description: "We start by understanding how your agency runs today — your current process, pain points, and what matters most to your team.",
  },
  {
    id: "02",
    icon: Settings2,
    title: "Tailored Setup",
    subtitle: "Your process or ours",
    description: "If you have an existing workflow, we fit around it. If not, we help you define one that works — built specifically for home care.",
  },
  {
    id: "03",
    icon: GitBranch,
    title: "Pipeline Built",
    subtitle: "Everything connected",
    description: "Your intake, onboarding steps, documents, and compliance checkpoints are all wired together into a clean, automated pipeline.",
  },
  {
    id: "04",
    icon: BrainCircuit,
    title: "AI Takes Over",
    subtitle: "Agents activated",
    description: "Our AI agents begin handling call-outs, scheduling coordination, caregiver outreach, and daily operations — 24/7.",
  },
  {
    id: "05",
    icon: Zap,
    title: "Automations Live",
    subtitle: "Zero manual follow-up",
    description: "Reminders, document expiry alerts, SMS, email, and call automations run in the background so your admin team never chases anything.",
  },
  {
    id: "06",
    icon: TrendingUp,
    title: "Scale Lean",
    subtitle: "Grow without overhead",
    description: "Your agency grows — more clients, more caregivers — without adding headcount. The system absorbs the operational load.",
  },
];

const VIEW_W = 1200;
const VIEW_H = 480;
const STATION_X = [100, 300, 500, 700, 900, 1100];
const PATH_D =
  "M 100 240 Q 200 140 300 240 Q 400 340 500 240 Q 600 140 700 240 Q 800 340 900 240 Q 1000 140 1100 240";
const DISCOVERY_GRID_STYLE = {
  backgroundImage:
    "linear-gradient(to right, #F8F8F7 1px, transparent 1px), linear-gradient(to bottom, #F8F8F7 1px, transparent 1px)",
  backgroundSize: "12px 12px",
};

export function AgencyOnboarding() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="mb-14">
          <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
            How Nestaid complements your operations
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From your first call to full automation — a clear path with no guesswork.
          </p>
        </div>

        {/* Desktop journey (lg+) */}
        <div className="hidden lg:block relative h-[480px]">
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={PATH_D}
              fill="none"
              stroke="black"
              strokeOpacity={0.1}
              strokeWidth={2}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={PATH_D}
              fill="none"
              stroke="#F4C6AC"
              strokeWidth={2.5}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {steps.map((step, i) => {
            const isAbove = i % 2 === 0;
            const xPct = (STATION_X[i] / VIEW_W) * 100;
            const Icon = step.icon;

            return (
              <div
                key={`card-${step.id}`}
                className={cn(
                  "absolute w-[160px] xl:w-[180px] rounded-2xl border border-black/10 bg-white p-4 shadow-sm",
                  isAbove ? "top-0" : "bottom-0"
                )}
                style={{
                  left: `${xPct}%`,
                  transform: "translateX(-50%)",
                  ...DISCOVERY_GRID_STYLE,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-black/8">
                    <Icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium leading-tight text-[#F4C6AC]">
                    {step.subtitle}
                  </span>
                </div>
                <p className="font-heading text-sm leading-snug mb-1">{step.title}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}

          {steps.map((step, i) => {
            const xPct = (STATION_X[i] / VIEW_W) * 100;
            return (
              <div
                key={`node-${step.id}`}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center text-xs font-semibold bg-black text-white"
                style={{ left: `${xPct}%` }}
              >
                <span className="relative">{step.id}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet */}
        <div className="relative lg:hidden">
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-[#F4C6AC]" aria-hidden="true" />

          <div className="flex flex-col gap-0">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex gap-4 relative">
                  <div className="flex flex-col items-center pt-4 z-10">
                    <span className="w-3.5 h-3.5 rounded-full flex-shrink-0 bg-[#F4C6AC]" />
                  </div>
                  <div
                    className="flex-1 rounded-2xl border border-black/10 bg-white p-4 mb-3"
                    style={DISCOVERY_GRID_STYLE}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/8">
                        <Icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-heading text-base">{step.title}</p>
                        <p className="text-xs font-medium text-[#F4C6AC]">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
