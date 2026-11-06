import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Eyebrow({
  children,
  tone = "light",
  className,
}: EyebrowProps) {
  return (
    <span className={cn("eyebrow", tone === "dark" && "eyebrow-dark", className)}>
      {children}
    </span>
  );
}
