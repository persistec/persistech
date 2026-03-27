"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

import useInView from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Reveal({
  children,
  className,
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, threshold);

  return (
    <div ref={ref} className={cn("reveal", isInView && "in-view", className)}>
      {children}
    </div>
  );
}
