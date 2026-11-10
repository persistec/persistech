"use client";

import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ProjectMockup from "@/components/ui/ProjectMockup";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

const featured = projects.slice(0, 3);

const revealDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
];

export default function PortfolioSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollRow = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: direction * 424,
      behavior: "smooth",
    });
  };

  return (
    <section id="projetos" className="border-y border-hairline bg-sand">
      <div className="container-aurum section-rhythm">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            title="Projetos Recentes"
            description="Uma seleção dos projetos que desenvolvemos para os nossos clientes."
          />

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollRow(-1)}
              aria-label="Ver projetos anteriores"
              title="Mais projetos — deslize para o lado"
              className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-hairline bg-paper text-graphite transition-[color,border-color,transform] duration-200 hover:border-gold/60 hover:text-gold-deep active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollRow(1)}
              aria-label="Ver mais projetos"
              title="Mais projetos — deslize para o lado"
              className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-hairline bg-paper text-graphite transition-[color,border-color,transform] duration-200 hover:border-gold/60 hover:text-gold-deep active:scale-95"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((project, index) => (
            <Reveal
              key={project.name}
              className={`w-[85%] shrink-0 snap-start sm:w-[400px] ${revealDelays[index]}`}
            >
              <Card
                hover={false}
                className="group h-full p-6 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
              >
                <ProjectMockup url={project.href} />

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <Badge>{project.category}</Badge>
                    <h3 className="mt-3 type-headline-sm text-ink">
                      {project.name}
                    </h3>
                  </div>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir projeto ${project.name}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-hairline text-graphite transition-[color,border-color,transform] duration-200 group-hover:border-gold/60 group-hover:text-gold-deep group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}

          <Reveal
            className={`w-[85%] shrink-0 snap-start sm:w-[400px] ${revealDelays[3]}`}
          >
            <Card
              hover={false}
              className="group h-full p-6 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
            >
              <div className="flex aspect-[16/8] items-center justify-center rounded-[2px] border border-hairline bg-gradient-to-br from-parchment to-stone/40">
                <ArrowRight
                  className="h-9 w-9 text-gold-deep transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </div>

              <div className="mt-5">
                <Badge>Portefólio</Badge>
                <h3 className="mt-3 type-headline-sm text-ink">
                  Ver todos os projetos
                </h3>
                <p className="mt-2 type-body-sm text-graphite">
                  Explore o portefólio completo, com informação detalhada.
                </p>
                <Link
                  href="/portfolio"
                  className="link-underline link-arrow-group mt-4 inline-flex items-center gap-2 pb-1 pt-2 text-sm font-medium text-gold-deep transition-colors hover:text-ink"
                >
                  Abrir portefólio
                  <ArrowRight className="link-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
