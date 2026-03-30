import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  role: string;
  avatar: string;
  avatarColor: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Comp = href ? "a" : "div";

  return (
    <Comp
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex w-[320px] flex-col gap-4 rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6",
        href && "transition-shadow hover:shadow-md",
        className
      )}
    >
      {/* Quote */}
      <p className="text-sm leading-relaxed text-muted-foreground flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold flex-shrink-0",
            author.avatarColor
          )}
        >
          {author.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold">{author.name}</p>
          <p className="text-xs text-muted-foreground">{author.role}</p>
        </div>
      </div>
    </Comp>
  );
}
