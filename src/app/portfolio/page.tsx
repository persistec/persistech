import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import CTABand from "@/components/ui/CTABand";
import Card from "@/components/ui/Card";
import PageHero from "@/components/ui/PageHero";
import ProjectMockup from "@/components/ui/ProjectMockup";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

const description =
  "Portefólio de projetos digitais desenvolvidos pela Persistech: websites institucionais, plataformas e presença online.";

export const metadata: Metadata = {
  title: "Portefólio",
  description,
  keywords: ["Portefólio Persistech", "Projetos Web", "Websites Angola"],
};

const revealDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[0ms]",
  "delay-[100ms]",
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portefólio"
        lead="Projetos digitais desenvolvidos e acompanhados pela equipa Persistech."
        proof={{ value: String(projects.length), label: "Projetos" }}
      />

      <section className="border-t border-hairline bg-canvas">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            title="Projetos"
            description="Cada projeto é apresentado com o âmbito do trabalho realizado."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} className={revealDelays[index]}>
                <Card
                  hover={false}
                  className="group h-full p-6 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
                >
                  <ProjectMockup url={project.href} />

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <Badge>{project.category}</Badge>
                      <h3 className="mt-3 type-headline-sm text-ink">
                        {project.name}
                      </h3>
                      <p className="mt-2 type-body-sm text-graphite">
                        {project.description}
                      </p>
                      <p className="mt-3 truncate font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                        {project.href.replace(/^https?:\/\//, "")}
                      </p>
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
          </div>
        </div>
      </section>

      <CTABand
        title="O seu projeto pode ser o próximo"
        description="Fale connosco sobre o website ou plataforma que precisa — avaliamos a melhor abordagem."
        primary={{ label: "Falar com a equipa", href: "/contactos" }}
        secondary={{ label: "Ver serviços", href: "/servicos" }}
      />
    </>
  );
}
