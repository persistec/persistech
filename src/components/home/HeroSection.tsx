import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

const partnerLine = ["Microsoft", "HP Silver", "Kaspersky", "Veeam"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="container-aurum grid grid-cols-1 items-center gap-12 py-14 md:py-16 lg:min-h-[640px] lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="min-w-0 lg:col-span-7">
          <Eyebrow>Tecnologia empresarial · Angola</Eyebrow>

          <h1 className="mt-6 type-display-xl text-ink">
            Soluções tecnológicas{" "}
            <span className="relative inline-block">
              para empresas
              <span
                className="absolute -bottom-2 left-0 h-1 w-16 bg-gold"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mt-8 max-w-[56ch] type-body-lg text-graphite">
            A Persistech capacita empresas com soluções tecnológicas seguras,
            produtivas e alinhadas às necessidades do negócio.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" href="/solucoes" arrow>
              Conheça as nossas soluções
            </Button>
            <Button variant="outline" size="lg" href="/contactos">
              Fale connosco
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-hairline pt-6">
            <span className="type-label text-muted">Parceiros</span>
            {partnerLine.map((partner) => (
              <span key={partner} className="text-sm font-medium text-graphite">
                {partner}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <div className="relative lg:ml-4">
            <div className="image-chamfer relative aspect-[4/5] overflow-hidden border border-hairline bg-parchment">
              <Image
                src="/images/heroes/hero-home.jpg"
                alt="Placa de circuitos com detalhes em ouro, representando infraestrutura tecnológica"
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
                10+
                <span className="ml-2 font-sans text-base font-medium text-on-executive-muted">
                  anos
                </span>
              </p>
              <p className="mt-3 type-body-sm text-on-executive-muted">
                a expandir limites em Angola
              </p>
            </div>

            <ArrowUpRight
              className="absolute -right-2 -top-2 hidden h-6 w-6 text-gold lg:block"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
