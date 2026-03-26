import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl border border-border-default bg-background-card p-6 shadow-card transition-all duration-300 ease-out",
        hover && "hover:-translate-y-[3px] hover:border-[rgba(26,127,212,0.3)] hover:shadow-glow-blue",
        className,
      )}
    >
      {children}
    </div>
  );
}
