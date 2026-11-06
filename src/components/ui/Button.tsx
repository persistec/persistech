import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  arrow?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-chamfer border border-gold-bright/70 bg-gold text-executive shadow-[inset_0_1px_0_rgba(240,208,96,0.7)] hover:bg-gold-deep",
  outline:
    "border border-ink/80 bg-transparent text-ink hover:bg-ink hover:text-ivory",
  "outline-light":
    "border border-ivory/40 bg-transparent text-ivory hover:border-ivory hover:bg-ivory hover:text-executive",
  ghost: "bg-transparent text-ink hover:text-gold-deep",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-[13px]",
  md: "h-12 px-5 text-sm",
  lg: "h-[52px] px-6 text-sm",
};

const sharedClasses =
  "inline-flex items-center justify-center gap-2 rounded-[4px] font-sans font-semibold tracking-[0.01em] transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50";

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  href,
  target,
  rel,
  type = "button",
  arrow = false,
}: BaseButtonProps) {
  const classes = cn(sharedClasses, variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      {children}
      {arrow ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
