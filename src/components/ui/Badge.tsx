import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Badge({ children, className, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[2px] border px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase leading-none tracking-[0.16em]",
        tone === "light"
          ? "border-hairline bg-paper text-graphite"
          : "border-white/15 bg-executive-surface text-gold-pale",
        className,
      )}
    >
      {children}
    </span>
  );
}
