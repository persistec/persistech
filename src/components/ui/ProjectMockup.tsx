import Image from "next/image";
import { Globe } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectMockup({
  url,
  name,
  screenshot,
  className,
}: {
  url: string;
  name?: string;
  screenshot?: string;
  className?: string;
}) {
  const cleanHost = url.replace(/^https?:\/\//, "");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2px] border border-hairline bg-gradient-to-br from-parchment to-stone/40",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-paper/70 px-4 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-stone" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone" />
        <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
          {cleanHost}
        </span>
      </div>
      <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-parchment">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`Página inicial de ${name ?? cleanHost}`}
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 440px, 90vw"
            className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
          />
        ) : (
          <Globe
            className="h-9 w-9 text-gold-deep transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.25}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
