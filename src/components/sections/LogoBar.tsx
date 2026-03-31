import { InfiniteSlider } from "@/components/ui/infinite-slider";

const iconClass = "h-7 w-7 shrink-0 text-black/35";

/** Placeholder marks only — not real agency brands. */
const agencies = [
  {
    name: "Meridian Home Care",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M16 5L6 14v12a2 2 0 002 2h6v-8h4v8h6a2 2 0 002-2V14L16 5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Harborlight Companion Care",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 22c4-6 8-6 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 18h12M16 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Willow Grove Home Health",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M16 6c-4 4-6 8-6 12s2.5 6 6 6 6-2 6-6-2-8-6-12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 18v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Riverside Family Care",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M4 20c4-2 8-2 12 0s8 2 12 0M6 24c4-1 8-1 12 0s8 1 12 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Cedar Lane Visiting Nurse",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M16 8c-4 0-7 3-7 7 0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="15" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Golden Hour Care",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 4v3M16 25v3M28 16h-3M7 16H4M24.5 7.5l-2 2M9.5 22.5l-2 2M24.5 24.5l-2-2M9.5 9.5l-2-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Northbridge Senior Support",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 22h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 22V14c4 0 7-3 10-6 3 3 6 6 10 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Summit Valley Home Care",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 22l6-10 4 6 4-8 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M4 22h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Magnolia Comfort Care",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 9v-3M16 26v-3M23 16h3M6 16h3M21.2 10.8l2.1-2.1M8.7 23.3l-2.1 2.1M21.2 21.2l2.1 2.1M8.7 8.7l-2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Clearview Care Partners",
    icon: (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="8" y="10" width="16" height="12" rx="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function LogoBar() {
  return (
    <section className="py-12 border-y border-black/10">
      <div className="container-max">
        <p className="text-center text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight text-muted-foreground mb-8">
          Helping home care teams run smoother
        </p>
      </div>
      <div className="overflow-hidden max-w-4xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <InfiniteSlider gap={96} speed={50}>
          {agencies.map((agency) => (
            <div
              key={agency.name}
              className="flex shrink-0 items-center gap-3 px-7 text-black/30"
              title={agency.name}
            >
              {agency.icon}
              <span className="text-base font-semibold tracking-wide select-none whitespace-nowrap">
                {agency.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
