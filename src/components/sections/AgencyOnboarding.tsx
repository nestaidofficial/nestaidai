import {
  PhoneCall,
  SlidersHorizontal,
  Workflow,
  Bot,
  Zap,
  TrendingUp,
  ArrowDown,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Step = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: "done" | "pending";
};

const setupSteps: Step[] = [
  {
    id: "01",
    title: "Discovery Call",
    description: "We listen first — understanding how your agency runs today, your pain points, and what matters most.",
    icon: PhoneCall,
    status: "done",
  },
  {
    id: "02",
    title: "Tailored Setup",
    description: "Your process or ours. If you have a workflow, we fit around it. If not, we help you define one.",
    icon: SlidersHorizontal,
    status: "done",
  },
  {
    id: "03",
    title: "Pipeline Built",
    description: "Intake, onboarding, documents, and compliance checkpoints wired into one automated pipeline.",
    icon: Workflow,
    status: "pending",
  },
];

const aiSteps: Step[] = [
  {
    id: "04",
    title: "AI Takes Over",
    description: "AI agents handle call-outs, scheduling coordination, and caregiver outreach — 24/7.",
    icon: Bot,
    status: "done",
  },
  {
    id: "05",
    title: "Automations Live",
    description: "Reminders, expiry alerts, SMS, email, and call automations run in the background.",
    icon: Zap,
    status: "done",
  },
  {
    id: "06",
    title: "Scale Lean",
    description: "Grow — more clients, more caregivers — without adding headcount. The system absorbs the load.",
    icon: TrendingUp,
    status: "pending",
  },
];

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  const isDone = step.status === "done";
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-2.5 sm:p-3">
      {/* Meaningful per-step icon */}
      <div
        className={
          isDone
            ? "flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-[#F4F4F2]"
            : "flex size-10 shrink-0 items-center justify-center rounded-xl border border-dashed border-black/15 bg-white"
        }
      >
        <Icon className="size-[18px] text-[#C2410C]" strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className="font-body font-bold text-[13px] sm:text-sm text-foreground leading-tight truncate">
          {step.title}
        </p>
        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-2">
          {step.description}
        </p>
      </div>

      {/* Step pill */}
      <span className="shrink-0 self-start rounded-md bg-[#F58D42] px-2 py-0.5 text-[10px] font-bold text-white">
        {step.id}
      </span>
    </div>
  );
}

function StepConnector({ withNode }: { withNode: boolean }) {
  if (!withNode) {
    return <div className="h-2.5" aria-hidden="true" />;
  }
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <span className="h-3 w-px border-l border-dashed border-black/25" />
      <span className="my-0.5 flex size-7 items-center justify-center rounded-full bg-[#F58D42]">
        <ArrowDown className="size-3.5 text-white" strokeWidth={2.5} />
      </span>
      <span className="h-3 w-px border-l border-dashed border-black/25" />
    </div>
  );
}

function StepContainer({ steps }: { steps: Step[] }) {
  return (
    <div
      className="flex-1 rounded-[1.75rem] p-4 sm:p-6"
      style={{ backgroundColor: "#FAF9F7" }}
    >
      <div className="rounded-[1.25rem] bg-[#F1EEE9] p-3 sm:p-4">
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.id}>
              <StepCard step={step} />
              {i < steps.length - 1 && <StepConnector withNode={i === 0} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AgencyOnboarding() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="mb-14 text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-black/20 px-4 py-1.5 font-sans text-xs font-light tracking-wide text-muted-foreground">
              <span className="inline-flex items-center justify-center rounded-md bg-[#FFDAB9] px-2 py-0.5 text-xs font-semibold text-black">
                Onboarding
              </span>
              <span className="text-foreground">From first call to full automation</span>
            </div>
          </div>
          <h2 className="mx-auto max-w-3xl text-[2.1rem] font-body font-bold leading-tight tracking-tight sm:text-[2.7rem] lg:text-[50px]">
            How Nestaid complements your operations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A clear path with no guesswork — we plug into how your agency already runs.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-stretch lg:flex-row lg:items-center">
          {/* Setup phase — left */}
          <StepContainer steps={setupSteps} />

          {/* AI Sync connector */}
          <div className="flex flex-col items-center justify-center py-2 lg:flex-row lg:px-1 lg:py-0">
            <span className="h-4 w-px border-l border-dashed border-black/25 lg:h-px lg:w-6 lg:border-l-0 lg:border-t" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#FFDAB9] px-3.5 py-1.5 text-xs font-semibold text-[#7A3B12]">
              <Sparkles className="size-3.5 text-[#F58D42]" strokeWidth={2.5} />
              AI Sync
            </span>
            <span className="h-4 w-px border-l border-dashed border-black/25 lg:h-px lg:w-6 lg:border-l-0 lg:border-t" aria-hidden="true" />
          </div>

          {/* AI phase — right */}
          <StepContainer steps={aiSteps} />
        </div>
      </div>
    </section>
  );
}
