"use client";

import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
};

export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  return <div className={className}>{children}</div>;
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
};

export function RevealItem({ children, className }: RevealItemProps) {
  return <div className={className}>{children}</div>;
}
