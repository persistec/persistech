import { Eye, Heart, Target } from "lucide-react";

import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const principles = [
  {
    title: "Missão",
    description:
      "Capacitar empresas a alcançar seu potencial máximo com soluções tecnológicas inovadoras, seguras e de alta qualidade, impulsionando crescimento, confiança e melhoria contínua.",
    icon: Target,
  },
  {
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
const valueDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
];

export default function MissionSection() {
  return (
    <section className="bg-background-secondary py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {principles.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} className={principleDelays[index]}>
              <Card hover={false} className="h-full">
                <div className="flex h-full flex-col gap-6">
                  <Icon className="h-10 w-10 text-accent-primary" />
                  <h2 className="gradient-text text-2xl font-semibold">{title}</h2>
                  <p className="text-sm leading-7 text-text-secondary">{description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="space-y-8">
          <Reveal className="delay-[200ms]">
            <div className="flex items-center gap-4">
              <Heart className="h-10 w-10 text-accent-primary" />
              <h2 className="gradient-text text-2xl font-semibold">Valores</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
            {values.map(({ title, description }, index) => (
              <Reveal key={title} className={valueDelays[index]}>
                <Card hover={false} className="h-full">
                  <h3 className="text-base font-semibold text-text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
