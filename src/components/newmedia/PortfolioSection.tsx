import { ExternalLink, Globe } from "lucide-react";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
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

export default function PortfolioSection() {
  return (
    <section className="bg-background-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Trabalhos"
          title="Projetos Recentes"
          description="Uma seleção dos projetos que desenvolvemos para os nossos clientes."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="space-y-5">
                <div className="glass-blue aspect-video rounded-xl">
                  <div className="flex h-full items-center justify-center text-accent-primary">
                    <Globe className="h-10 w-10" />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <Badge>{project.category}</Badge>
                    <h2 className="text-xl font-semibold text-text-primary">{project.name}</h2>
                  </div>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir projeto ${project.name}`}
                    className="text-text-muted transition-colors duration-200 ease-out hover:text-accent-light"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
