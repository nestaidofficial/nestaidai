import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProductKey = "scheduling" | "management" | "ai-onboarding";

const products: Record<ProductKey, { href: string; title: string; desc: string }> = {
  scheduling: {
    href: "/scheduling",
    title: "AI Scheduling & Call-Outs",
    desc: "Fill open shifts in under 5 minutes with 24/7 AI coordination.",
  },
  management: {
    href: "/management",
    title: "Agency Management",
    desc: "Client records, caregiver credentials, and compliance in one place.",
  },
  "ai-onboarding": {
    href: "/ai-onboarding",
    title: "AI Caregiver Onboarding",
    desc: "Collect forms, verify compliance, and book interviews automatically.",
  },
};

const order: ProductKey[] = ["scheduling", "management", "ai-onboarding"];

export function ProductCrossLinks({ current }: { current: ProductKey }) {
  const others = order.filter((key) => key !== current);

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="border-t border-black/10 pt-12">
          <h2 className="text-xl sm:text-2xl font-body font-bold tracking-tight mb-6">
            More of the Nestaid platform
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {others.map((key) => {
              const p = products[key];
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group rounded-2xl border border-black/10 bg-white/60 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h3 className="text-lg font-body font-semibold tracking-tight mb-1.5 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    {p.title}
                    <ArrowUpRight className="w-4 h-4 text-[#C97B5B]" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
