import { Check } from "lucide-react";

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
    <section className="bg-canvas">
      <div className="container-aurum section-rhythm">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Como trabalhamos"
                title="Valores que orientam cada solução"
                description="Atuamos com integridade, compromisso com a conformidade e foco na melhoria contínua."
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              {values.map(({ title, description }, index) => (
                <Reveal key={title} className={revealDelays[index]}>
                  <div className="grid grid-cols-[auto_1fr_auto] items-start gap-5 border-t border-hairline py-6">
                    <span className="font-mono text-[11px] leading-6 tracking-[0.14em] text-gold-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="type-headline-sm text-ink">{title}</h3>
                      <p className="mt-2 max-w-[52ch] type-body-sm text-graphite">
                        {description}
                      </p>
                    </div>
                    <Check
                      className="mt-1 h-4 w-4 text-gold"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
