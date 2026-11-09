import { ExternalLink, Globe } from "lucide-react";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    name: "Ripro",
    category: "Web Design",
    href: "http://www.ripro.co.ao",
  },
  {
    name: "Interscorp",
    category: "Programação",
    href: "http://www.interscorp.net",
  },
  {
    name: "Dental Clinic",
    category: "Web Design",
    href: "http://www.dentalclinic.co.ao",
  },
  {
    name: "DDM Angola",
    category: "Programação",
    href: "http://www.ddmangola.com",
  },
];

const revealDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
];

export default function PortfolioSection() {
  return (
    <section id="projetos" className="border-y border-hairline bg-sand">
      <div className="container-aurum section-rhythm">
        <SectionHeading
          title="Projetos Recentes"
          description="Uma seleção dos projetos que desenvolvemos para os nossos clientes."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} className={revealDelays[index]}>
              <Card
                featured={index === 0}
                className="group h-full p-6 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
              >
                <div className="overflow-hidden rounded-[2px] border border-hairline bg-gradient-to-br from-parchment to-stone/40">
                  <div className="flex items-center gap-2 border-b border-hairline px-4 py-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone" />
                    <span className="h-1.5 w-1.5 rounded-full bg-stone" />
                    <span className="h-1.5 w-1.5 rounded-full bg-stone" />
                    <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                      {project.href.replace(/^https?:\/\//, "")}
                    </span>
                  </div>
                  <div className="flex aspect-[16/8] items-center justify-center">
                    <Globe
                      className="h-9 w-9 text-gold-deep transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <Badge>{project.category}</Badge>
                    <h2 className="mt-3 type-headline-sm text-ink">{project.name}</h2>
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
  );
}
