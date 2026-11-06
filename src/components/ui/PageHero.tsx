import Image from "next/image";
import type { ReactNode } from "react";

import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image?: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  aside?: ReactNode;
  proof?: {
    value: string;
    label: string;
  };
  actions?: HeroAction[];
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  aside,
  proof,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="container-aurum grid grid-cols-1 items-center gap-12 py-14 md:py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="min-w-0 lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 type-display-lg text-ink">{title}</h1>
          <p className="mt-6 max-w-[62ch] type-body-lg text-graphite">{lead}</p>

          {children}

          {actions?.length ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant ?? "primary"}
                  size="lg"
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  arrow={action.variant !== "outline"}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="min-w-0 lg:col-span-5">
          {aside ? (
            aside
          ) : image ? (
            <div className="relative">
              <div className="image-chamfer relative aspect-[4/3] overflow-hidden border border-hairline bg-parchment">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={image.priority}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover saturate-[.9]"
                />
                <div className="absolute inset-0 bg-canvas/10" aria-hidden="true" />
              </div>

              {proof ? (
                <div className="absolute -bottom-5 left-4 border border-white/10 bg-executive px-5 py-4 lg:-left-6">
                  <p className="font-display text-3xl font-semibold leading-none text-ivory">
                    {proof.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-pale">
                    {proof.label}
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
