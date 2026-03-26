import { Eye, Heart, Target } from "lucide-react";

import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    title: "Missão",
    description:
      "Fornecer soluções tecnológicas de excelência que impulsionem a competitividade das empresas angolanas.",
    icon: Target,
  },
  {
    title: "Visão",
    description:
      "Ser a empresa de referência em soluções IT em Angola, reconhecida pela inovação e qualidade do serviço.",
    icon: Eye,
  },
  {
    title: "Valores",
    description:
      "Profissionalismo, integridade, inovação e compromisso total com a satisfação dos nossos clientes.",
    icon: Heart,
  },
];

const revealDelays = ["delay-[0ms]", "delay-[100ms]", "delay-[200ms]"];

export default function MissionSection() {
  return (
    <section className="bg-background-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} className={revealDelays[index]}>
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
      </div>
    </section>
  );
}
