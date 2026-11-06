import { Eye, Target } from "lucide-react";

import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    index: "01",
    title: "Missão",
    description:
      "Capacitar empresas a alcançar seu potencial máximo com soluções tecnológicas inovadoras, seguras e de alta qualidade, impulsionando crescimento, confiança e melhoria contínua.",
    icon: Target,
  },
  {
    index: "02",
    title: "Visão",
    description:
      "Ser referência em habilitar empresas a atingir o seu potencial máximo por meio de soluções tecnológicas inovadoras, seguras e de excelência.",
    icon: Eye,
  },
];

const values = [
  {
    title: "Integridade",
    description: "Agimos com ética e transparência, criando confiança duradoura.",
  },
  {
    title: "Compromisso",
    description:
      "Trabalhamos lado a lado com clientes e parceiros, procurando superar expectativas.",
  },
  {
    title: "Inovação Segura",
    description:
      "Implementamos soluções tecnológicas criativas, seguras e orientadas para resultados reais.",
  },
  {
    title: "Qualidade e Conformidade",
    description:
      "Cumprimos padrões de excelência e boas práticas aplicáveis aos serviços prestados.",
  },
  {
    title: "Melhoria Contínua",
    description:
      "Aprimoramos processos, competências e soluções de forma permanente.",
  },
];

const principleDelays = ["delay-[0ms]", "delay-[100ms]"];

export default function MissionSection() {
  return (
    <section className="bg-canvas">
      <div className="container-aurum section-rhythm">
        <SectionHeading
          eyebrow="Propósito"
          title="Missão, visão e valores"
          description="A forma como trabalhamos é tão importante quanto a tecnologia que entregamos."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {principles.map(({ index, title, description, icon: Icon }, i) => (
            <Reveal key={title} className={principleDelays[i]}>
              <Card featured={i === 0} className="h-full">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                      {index}
                    </span>
                  </div>
                  <h3 className="mt-6 type-headline-md text-ink">{title}</h3>
                  <p className="mt-3 max-w-[54ch] type-body-md text-graphite">
                    {description}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h3 className="type-headline-md text-ink">Valores</h3>
            <p className="mt-3 max-w-[42ch] type-body-sm text-graphite">
              Cinco princípios que orientam as decisões, os projetos e as relações
              com clientes e parceiros.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {values.map(({ title, description }, index) => (
                <div
                  key={title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-t border-hairline py-5"
                >
                  <span className="font-mono text-[10px] leading-6 tracking-[0.14em] text-gold-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">
                      {title}
                    </h4>
                    <p className="mt-1 type-body-sm text-graphite">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
