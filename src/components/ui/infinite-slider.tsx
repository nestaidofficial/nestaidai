"use client";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = React.ComponentProps<"div"> & {
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
};

export function InfiniteSlider({
  children,
  className,
  gap = 40,
  speed = 60,
  speedOnHover,
  reverse = false,
  ...props
}: InfiniteSliderProps) {
  const duration = `${speed}s`;
  const hoverDuration = speedOnHover ? `${speedOnHover}s` : undefined;

  return (
    <div
      {...props}
      className={cn("group flex overflow-hidden", className)}
      style={
        {
          "--gap": `${gap}px`,
          "--duration": duration,
        } as React.CSSProperties
      }
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            hoverDuration &&
              `[animation-play-state:running] group-hover:[animation-duration:var(--hover-duration)]`
          )}
          style={{
            gap: "var(--gap)",
            ...(hoverDuration
              ? ({ "--hover-duration": hoverDuration } as React.CSSProperties)
              : {}),
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
