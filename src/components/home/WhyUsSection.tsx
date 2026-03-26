import { Check } from "lucide-react";

import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const differentiators = [
  "Parceiros certificados HP, Microsoft e Google",
  "Técnicos especializados e certificados",
  "Suporte rápido e personalizado",
  "Soluções escaláveis para qualquer dimensão de empresa",
];

const stats = [
  { value: "+10", label: "Anos de experiência" },
  { value: "+50", label: "Clientes ativos" },
  { value: "24/7", label: "Suporte disponível" },
  { value: "100%", label: "Compromisso com qualidade" },
];

export default function WhyUsSection() {
  return (
    <section className="bg-background-secondary py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Porquê nós"
            title="Tecnologia que move negócios"
            description="Há mais de uma década a servir empresas em Angola com soluções IT de referência."
            align="left"
          />

          <div className="space-y-4">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-accent bg-background-elevated text-accent-primary">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-base text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              hover={false}
              className="flex min-h-40 items-center justify-center bg-background-card"
            >
              <div className="text-center">
                <p className="gradient-text text-4xl font-bold">{stat.value}</p>
                <p className="mt-3 text-sm text-text-secondary">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
