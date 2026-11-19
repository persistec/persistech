"use client";

import { useEffect, useRef, useState } from "react";

import useInView from "@/hooks/useInView";

type CountUpProps = {
  to: number;
  durationMs?: number;
  className?: string;
};

export default function CountUp({ to, durationMs = 1200, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = reduce ? 1 : Math.min((now - startedAt) / durationMs, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setValue(Math.round(eased * to));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [durationMs, isInView, to]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
    </span>
  );
}
