import { Cloud, FileText, Headphones, Monitor, Server } from "lucide-react";

import Button from "@/components/ui/Button";
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
    description: "Plataformas de gestão, plataformas web e websites personalizados para necessidades digitais.",
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
    <section className="grid-bg bg-background-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Soluções alinhadas ao seu negócio"
          description="Atuamos em consultoria em TI, produtividade e cloud, infraestrutura, licenciamento empresarial, plataformas digitais e suporte técnico."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, href, icon: Icon }, index) => (
            <Reveal key={title} className={revealDelays[index]}>
              <Card className="h-full">
                <div className="flex h-full flex-col gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border-accent bg-background-elevated text-accent-primary shadow-neon">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex flex-1 flex-col space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
                    <p className="text-sm leading-6 text-text-secondary">{description}</p>
                    <div className="pt-3">
                      <Button variant="outline" size="sm" href={href}>
                        Ver detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
