import Image from "next/image";

import Button from "@/components/ui/Button";

const partnerLine = ["Microsoft", "HP Silver", "Kaspersky", "Veeam"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="container-aurum grid grid-cols-1 items-center gap-12 py-14 md:py-16 lg:min-h-[640px] lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="min-w-0 lg:col-span-7">
          <h1 className="hero-rise type-display-xl text-ink">
            Soluções tecnológicas para{" "}
            <span className="underline decoration-gold decoration-4 underline-offset-[10px]">
              empresas
            </span>
          </h1>

          <p
            className="hero-rise mt-8 max-w-[56ch] type-body-lg text-graphite"
            style={{ animationDelay: "120ms" }}
          >
            A Persistech capacita empresas com soluções tecnológicas seguras,
            produtivas e alinhadas às necessidades do negócio.
          </p>

          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button variant="primary" size="lg" href="/solucoes" arrow>
              Conheça as nossas soluções
            </Button>
            <Button variant="outline" size="lg" href="/contactos">
              Fale connosco
            </Button>
          </div>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-hairline pt-6"
            style={{ animationDelay: "360ms" }}
          >
            <span className="type-label mr-4 text-muted">Parceiros</span>
            {partnerLine.map((partner) => (
              <span
                key={partner}
                className="rounded-[2px] border border-transparent px-2 py-1 text-sm font-medium text-graphite transition-colors duration-150 hover:border-hairline hover:bg-paper hover:text-ink"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-rise min-w-0 lg:col-span-5" style={{ animationDelay: "240ms" }}>
          <div className="relative lg:ml-4">
            <div className="image-chamfer relative aspect-[1038/1515] overflow-hidden border border-hairline bg-parchment">
              <Image
                src="/images/heroes/hero-home.webp"
                alt="Cruzamento urbano ensolarado de Luanda com edifícios modernos e sinalética hoteleira"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover saturate-[.85]"
              />
              <div className="absolute inset-0 bg-canvas/10" aria-hidden="true" />
            </div>

            <div className="absolute -bottom-6 left-4 w-56 border border-white/10 bg-executive p-5 lg:-left-8">
              <p className="type-label text-gold-pale">Experiência</p>
              <p className="mt-3 font-display text-4xl font-semibold leading-none text-ivory">
                12+
                <span className="ml-2 font-sans text-base font-medium text-on-executive-muted">
                  anos
                </span>
              </p>
              <p className="mt-3 type-body-sm text-on-executive-muted">
                a expandir limites em Angola
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
