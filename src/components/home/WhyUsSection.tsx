import { Check } from "lucide-react";

import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

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
    description: "Aprimoramos processos, competências e soluções de forma permanente.",
  },
];

const revealDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
];

export default function WhyUsSection() {
  return (
    <section className="bg-background-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Valores que orientam cada solução"
          description="Atuamos com integridade, compromisso com a conformidade e foco na melhoria contínua."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ title, description }, index) => (
            <Reveal key={title} className={revealDelays[index]}>
              <Card hover={false} className="h-full bg-background-card">
                <div className="flex h-full items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-accent bg-background-elevated text-accent-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
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
