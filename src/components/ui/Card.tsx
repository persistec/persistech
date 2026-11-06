import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  featured?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({
  children,
  className,
  hover = true,
  featured = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[4px] border border-hairline bg-paper p-8 transition-colors duration-200 ease-out before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gold before:opacity-0 before:transition-opacity before:content-['']",
        featured && "before:opacity-100",
        hover && "hover:border-gold-bright/60 hover:before:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
