import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, ...props }: AnimatedListProps) => {
    const items = React.Children.toArray(children).reverse();
    return (
      <div className={cn("flex flex-col gap-3", className)} {...props}>
        {items.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key}>
            {item}
          </AnimatedListItem>
        ))}
      </div>
    );
  }
);
AnimatedList.displayName = "AnimatedList";
