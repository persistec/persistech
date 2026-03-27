import Badge from "@/components/ui/Badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("flex flex-col gap-4", isCentered ? "items-center text-center" : "items-start text-left")}>
      <Badge className="gradient-text text-sm font-semibold uppercase tracking-widest">
        {eyebrow}
      </Badge>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "text-lg text-text-secondary",
              isCentered ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
