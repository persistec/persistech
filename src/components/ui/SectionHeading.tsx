import Eyebrow from "@/components/ui/Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCentered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 type-headline-lg",
          isDark ? "text-ivory" : "text-ink",
          isCentered ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 type-body-md",
            isCentered ? "mx-auto" : "",
            isDark ? "text-on-executive-muted" : "text-graphite",
          )}
          style={{ maxWidth: "68ch" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
