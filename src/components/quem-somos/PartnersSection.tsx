import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Partner = {
  name: string;
  slug: string;
  width: number;
  height: number;
  frameClassName?: string;
  imageClassName?: string;
};

const partners: Partner[] = [
  {
    name: "HP Business Partner",
    slug: "hp",
    width: 800,
    height: 364,
    frameClassName: "px-2",
    imageClassName: "max-h-16 w-auto max-w-[190px]",
  },
  {
    name: "3CX Partner",
    slug: "3cx",
    width: 716,
    height: 600,
    frameClassName: "rounded-[4px] bg-[#333333] px-5 py-2.5",
    imageClassName: "max-h-14 w-auto max-w-[150px]",
  },
  {
    name: "Google Cloud Partner",
    slug: "google-cloud",
    width: 460,
    height: 504,
    frameClassName: "rounded-[4px] bg-paper px-6 py-2.5",
    imageClassName: "max-h-14 w-auto max-w-[150px]",
  },
  {
    name: "ThreatDown · Malwarebytes",
    slug: "threatdown",
    width: 686,
    height: 400,
    frameClassName: "rounded-[4px] bg-paper px-4 py-2.5",
    imageClassName: "max-h-14 w-auto max-w-[170px]",
  },
];

const revealDelays = [
  "delay-[0ms]",
  "delay-[80ms]",
  "delay-[160ms]",
  "delay-[240ms]",
];

/**
 * Resolves `public/partners/<slug>.(webp|png|svg)` at build time; falls back
 * to the partner name if an image file is not present.
 */
function logoFor(slug: string): string | null {
  try {
    for (const ext of ["webp", "png", "svg"]) {
      if (fs.existsSync(path.join(process.cwd(), "public", "partners", `${slug}.${ext}`))) {
        return `/partners/${slug}.${ext}`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-executive">
      <div className="executive-rule" aria-hidden="true" />

      <div className="container-aurum section-rhythm">
        <SectionHeading
          title="Parceiros & Certificações"
          description="Trabalhamos com fabricantes e plataformas reconhecidas para entregar soluções suportadas e conformes."
          align="center"
          tone="dark"
        />

        <div className="mt-12 grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map(({ name, slug, width, height, frameClassName, imageClassName }, index) => {
            const logo = logoFor(slug);

            return (
              <Reveal key={slug} className={revealDelays[index]}>
                <div className="group flex h-full min-h-[168px] flex-col items-center justify-center gap-4 border-b border-r border-white/10 p-6 transition-colors duration-200 hover:bg-white/[0.04]">
                  {logo ? (
                    <>
                      <div
                        className={`flex h-20 items-center justify-center transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 ${frameClassName ?? ""}`}
                      >
                        <Image
                          src={logo}
                          alt={name}
                          width={width}
                          height={height}
                          className={`object-contain ${imageClassName ?? "max-h-14 w-auto max-w-[160px]"}`}
                        />
                      </div>
                      <span className="type-label text-center text-on-executive-muted transition-colors duration-200 group-hover:text-gold-pale">
                        {name}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="type-label text-gold-pale transition-colors duration-200 group-hover:text-gold-bright">
                        Parceiro
                      </span>
                      <p className="text-center font-display text-lg font-semibold leading-tight text-ivory">
                        {name}
                      </p>
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
