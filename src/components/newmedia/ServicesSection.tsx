import { Code, Layout, Lightbulb, Palette, Share2, TrendingUp } from "lucide-react";

import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Web Design",
    description: "Websites modernos, responsivos e otimizados para conversão.",
    icon: Layout,
  },
  {
    title: "Desenvolvimento Web",
    description: "Plataformas e aplicações web construídas com tecnologias modernas.",
    icon: Code,
  },
  {
    title: "SEO & Performance",
    description: "Otimização para motores de busca e performance técnica.",
    icon: TrendingUp,
  },
  {
    title: "Identidade Visual",
    description: "Branding, logotipos e sistemas de identidade visual para a sua marca.",
    icon: Palette,
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Estratégia, criação de conteúdo e gestão de presença nas redes sociais.",
    icon: Share2,
  },
  {
    title: "Consultoria Digital",
    description: "Estratégia digital alinhada aos objetivos do seu negócio.",
    icon: Lightbulb,
  },
];

export default function ServicesSection() {
  return (
    <section className="grid-bg bg-background-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="O que criamos"
          title="Soluções Digitais"
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
