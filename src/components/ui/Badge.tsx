import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-border-accent bg-[rgba(212,175,55,0.1)] px-3 py-1 text-xs font-medium text-accent-light",
        className,
      )}
    >
      {children}
    </span>
  );
}
