import {
  ArrowUpRight,
  Cloud,
  FileText,
  Handshake,
  Headphones,
  Monitor,
  Server,
} from "lucide-react";
import Link from "next/link";

import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Soluções Técnicas",
    description:
      "Produtividade, cloud, Microsoft 365, infraestrutura, redes, suporte e serviços de tecnologia empresarial.",
    href: "/solucoes",
    icon: Server,
  },
  {
    title: "Soluções de Licenciamento",
    description:
      "Licenciamento de soluções empresariais para produtividade, comunicação, segurança e ambientes corporativos.",
    href: "/licenciamento",
    icon: FileText,
  },
  {
    title: "Serviços NewMedia",
    description:
      "Plataformas de gestão, plataformas web e websites personalizados para necessidades digitais.",
    href: "/newmedia",
    icon: Monitor,
  },
  {
    title: "Consultoria em TI",
    description:
      "Apoio técnico para avaliar necessidades, orientar decisões e alinhar tecnologia aos objetivos do negócio.",
    href: "/solucoes",
    icon: Cloud,
  },
  {
    title: "Suporte Técnico",
    description:
      "Assistência remota, help desk e suporte técnico para produtos, servidores e ambientes empresariais.",
    href: "/solucoes",
    icon: Headphones,
  },
  {
    title: "Parceiros certificados",
    description:
      "Tecnologia suportada por parcerias e certificações com Microsoft, HP, Kaspersky, Veeam e Google Workspace.",
    href: "/quem-somos",
    icon: Handshake,
  },
];

const revealDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
  "delay-[500ms]",
];

export default function ServicesSection() {
  return (
    <section className="bg-sand">
      <div className="container-aurum section-rhythm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="O que fazemos"
            title="Soluções alinhadas ao seu negócio"
            description="Atuamos em consultoria em TI, produtividade e cloud, infraestrutura, licenciamento empresarial, plataformas digitais e suporte técnico."
          />
          <Link
            href="/solucoes"
            className="inline-flex shrink-0 items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-ink transition-colors hover:text-gold-deep"
          >
            Ver todas as soluções
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, href, icon: Icon }, index) => (
            <Reveal key={title} className={revealDelays[index]}>
              <Card featured={index === 0} className="h-full">
                <div className="flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 type-headline-sm text-ink">{title}</h3>
                  <p className="mt-3 type-body-sm text-graphite">{description}</p>

                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-2 pt-1 text-sm font-medium text-gold-deep transition-colors hover:text-ink"
                  >
                    Explorar
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
