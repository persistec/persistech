import { Cloud, Cpu, Headphones, Monitor, Server, Shield } from "lucide-react";

import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Infraestrutura IT",
    description: "Design, implementação e gestão de infraestruturas de rede e servidores.",
    icon: Server,
  },
  {
    title: "Cibersegurança",
    description:
      "Proteção avançada dos seus sistemas com soluções Kaspersky e auditorias de segurança.",
    icon: Shield,
  },
  {
    title: "Cloud & Virtualização",
    description:
      "Migração e gestão de ambientes cloud com VMware, Microsoft Azure e Google Workspace.",
    icon: Cloud,
  },
  {
    title: "Suporte Técnico",
    description: "Técnicos certificados disponíveis para suporte on-site e remoto.",
    icon: Headphones,
  },
  {
    title: "Web Design & Newmedia",
    description: "Criação de websites, plataformas e estratégias de comunicação digital.",
    icon: Monitor,
  },
  {
    title: "Hardware & Equipamento",
    description: "Fornecimento e manutenção de equipamento HP, servidores e periféricos.",
    icon: Cpu,
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
          title="Serviços de Excelência"
          description="Soluções completas para a transformação digital da sua empresa."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} className={revealDelays[index]}>
              <Card>
                <div className="flex flex-col gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border-accent bg-background-elevated text-accent-primary shadow-neon">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
                    <p className="text-sm leading-6 text-text-secondary">{description}</p>
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
