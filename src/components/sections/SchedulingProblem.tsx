
import { X, Check } from "lucide-react";

const withoutItems = [
  "Manual outreach",
  "Slow response times",
  "No live status",
  "More chasing",
];

const withItems = [
  "AI starts outreach",
  "Faster coordination",
  "Live workflow updates",
  "Less admin work",
];

type Variant = "without" | "with";

function ComparisonItem({ label, variant }: { label: string; variant: Variant }) {
  const isWith = variant === "with";
  const Icon = isWith ? Check : X;
  return (
    <div className="flex items-center gap-3 rounded-sm bg-white p-2.5 sm:p-3">
      {/* Icon box */}
      <div
        className={
          isWith
            ? "flex size-10 shrink-0 items-center justify-center rounded-sm border border-black/5 bg-[#F4F4F2]"
            : "flex size-10 shrink-0 items-center justify-center rounded-sm border border-black/10 bg-white"
        }
      >
        <Icon
          className={isWith ? "size-[18px] text-[#16A34A]" : "size-[18px] text-[#DC2626]"}
          strokeWidth={2}
        />
      </div>

      {/* Label */}
      <p className="min-w-0 flex-1 font-body font-bold text-[13px] sm:text-sm text-foreground leading-tight">
        {label}
      </p>
    </div>
  );
}

function ComparisonColumn({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: Variant;
}) {
  return (
    <div
      className="flex-1 rounded-sm p-4 sm:p-6"
      style={{ backgroundColor: "#FAF9F7" }}
    >
      <h3 className="font-heading text-xl sm:text-2xl mb-4">{title}</h3>
      <div className="rounded-sm bg-[#F1EEE9] p-3 sm:p-4">
        <div className="flex flex-col gap-2.5">
          {items.map((item) => (
            <ComparisonItem key={item} label={item} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SchedulingProblem() {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
            Scheduling gets messy when everything depends on manual follow-up
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A single shift change can mean calls, texts, outreach, updates, and back-and-forth. Nestaid adds an AI layer that helps your team respond faster and keep coverage moving.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-6 lg:flex-row">
          <ComparisonColumn title="Without Nestaid" items={withoutItems} variant="without" />
          <ComparisonColumn title="With Nestaid" items={withItems} variant="with" />
        </div>
      </div>
    </section>
  );
}
