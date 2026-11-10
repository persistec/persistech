import { Globe } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectMockup({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2px] border border-hairline bg-gradient-to-br from-parchment to-stone/40",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-stone" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone" />
        <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
          {url.replace(/^https?:\/\//, "")}
        </span>
      </div>
      <div className="flex aspect-[16/8] items-center justify-center">
        <Globe
          className="h-9 w-9 text-gold-deep transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.25}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
