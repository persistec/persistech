import { Check, Cloud, Server, Shield } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Infraestrutura IT",
    category: "Redes",
    description:
      "Planeamos, implementamos e gerimos infraestruturas críticas para garantir desempenho, segurança e continuidade operacional.",
    icon: Server,
    bullets: [
      "Implementação de redes LAN/WAN",
      "Gestão de servidores físicos e virtuais",
      "Monitorização e manutenção contínua",
      "Disaster recovery e backup",
    ],
  },
  {
    title: "Cibersegurança",
    category: "Segurança",
    description:
      "Protegemos o seu ambiente digital com soluções robustas, políticas de controlo e acompanhamento técnico especializado.",
    icon: Shield,
    bullets: [
      "Soluções antivírus e endpoint Kaspersky",
      "Auditorias de segurança",
      "Firewalls e VPNs",
      "Formação em boas práticas",
    ],
  },
  {
    title: "Cloud & Virtualização",
    category: "Cloud",
    description:
      "Apoiamos a modernização da infraestrutura com arquiteturas cloud e ambientes virtualizados preparados para crescer.",
    icon: Cloud,
    bullets: [
      "Migração para cloud",
      "Implementação VMware e Hyper-V",
      "Google Workspace e Microsoft 365",
      "Gestão de ambientes híbridos",
    ],
  },
];

const revealDelays = ["delay-[0ms]", "delay-[100ms]", "delay-[200ms]"];

export default function ServicesGrid() {
  return (
    <>
      <section className="grid-bg bg-background-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Portfólio"
            title="As Nossas Soluções"
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map(({ title, category, description, icon: Icon, bullets }, index) => (
              <Reveal key={title} className={revealDelays[index]}>
                <Card className="h-full">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-accent bg-background-elevated text-accent-primary">
                        <Icon className="h-10 w-10" />
                      </div>
                      <Badge>{category}</Badge>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
                      <p className="text-sm leading-7 text-text-secondary">{description}</p>
                    </div>

                    <ul className="space-y-3">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary" />
                          <span className="text-sm text-text-secondary">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-blue rounded-[2rem] px-6 py-16 shadow-glow-gold md:px-12">
            <SectionHeading
              eyebrow="Pronto para avançar"
              title="Encontre a solução certa para si"
              description="A nossa equipa está pronta para analisar as necessidades da sua empresa e propor a melhor solução."
              align="center"
            />

            <div className="mt-10 flex justify-center">
              <Button variant="primary" size="lg" href="/contactos">
                Solicitar Proposta
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
