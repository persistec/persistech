import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  { name: "HP Silver Partner", slug: "hp" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Google Workspace", slug: "google-workspace" },
  { name: "VMware", slug: "vmware" },
  { name: "Kaspersky", slug: "kaspersky" },
  { name: "Veeam", slug: "veeam" },
];

const revealDelays = [
  "delay-[0ms]",
  "delay-[80ms]",
  "delay-[160ms]",
  "delay-[240ms]",
  "delay-[320ms]",
  "delay-[400ms]",
];

/**
 * Renders a white logo when `public/partners/<slug>.png` exists (checked at
 * build time); falls back to the partner name until the files are added.
 */
function logoFor(slug: string): string | null {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "partners", `${slug}.png`))
      ? `/partners/${slug}.png`
      : null;
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

        <div className="mt-12 grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {partners.map(({ name, slug }, index) => {
            const logo = logoFor(slug);

            return (
              <Reveal key={slug} className={revealDelays[index]}>
                <div className="group flex h-full min-h-[140px] flex-col items-center justify-center gap-4 border-b border-r border-white/10 p-5 transition-colors duration-200 hover:bg-white/[0.04]">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={name}
                      width={140}
                      height={48}
                      className="max-h-10 w-auto max-w-[140px] object-contain opacity-60 brightness-0 invert transition-opacity duration-200 group-hover:opacity-100"
                    />
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
