import { Building2, ClipboardList, Eye, FileCheck2, Globe2 } from "lucide-react";

import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Plataforma de Gestão",
    description:
      "Soluções de software personalizadas para apoiar processos internos, gestão de equipas, finanças e operações.",
    icon: ClipboardList,
  },
  {
    title: "Plataforma de gestão de obras",
    description:
      "Plataformas digitais orientadas para o acompanhamento de obras, documentação, equipas e etapas de execução.",
    icon: Building2,
  },
  {
    title: "Plataforma de gestão das candidaturas dos projectos a financiar",
    description:
      "Soluções para organizar a submissão, avaliação e acompanhamento de candidaturas de projectos a financiar.",
    icon: FileCheck2,
  },
  {
    title: "Plataforma Ótica",
    description:
      "Serviço de plataforma ótica apresentado por consulta, sem subtemas publicados nesta fase.",
    icon: Eye,
  },
  {
    title: "Criação de Websites",
    description:
      "Criação de websites personalizados, responsivos e alinhados às necessidades de comunicação de cada negócio.",
    icon: Globe2,
  },
];

const revealDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
];

export default function ServicesSection() {
  return (
    <section className="bg-canvas">
      <div className="container-aurum section-rhythm">
        <SectionHeading
          eyebrow="O que desenvolvemos"
          title="Soluções digitais e plataformas"
          description="Serviços NewMedia focados em plataformas de gestão, aplicações web e presença digital."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} className={revealDelays[index]}>
              <Card featured={index === 0} className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="mt-6 type-headline-sm text-ink">{title}</h2>
                <p className="mt-3 type-body-sm text-graphite">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
