import { Building2, ClipboardList, Eye, FileCheck2, Globe2 } from "lucide-react";

import Card from "@/components/ui/Card";
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

export default function ServicesSection() {
  return (
    <section className="grid-bg bg-background-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="O que desenvolvemos"
          title="Soluções digitais e plataformas"
          description="Serviços NewMedia focados em plataformas de gestão, aplicações web e presença digital."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <div className="flex flex-col gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border-accent bg-background-elevated text-accent-primary shadow-neon">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
                  <p className="text-sm leading-6 text-text-secondary">{description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
