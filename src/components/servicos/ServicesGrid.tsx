import { Check, Cpu, Headphones, Monitor } from "lucide-react";

import Badge from "@/components/ui/Badge";
import CTABand from "@/components/ui/CTABand";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Suporte Técnico",
    category: "Suporte",
    description:
      "A nossa equipa responde com rapidez e proximidade para manter os seus sistemas operacionais sem interrupções.",
    icon: Headphones,
    bullets: [
      "Helpdesk on-site e remoto",
      "SLA garantido",
      "Técnicos certificados",
      "Gestão de ativos IT",
    ],
  },
  {
    title: "Web Design & Newmedia",
    category: "Digital",
    description:
      "Desenvolvemos presença digital com foco em performance, comunicação clara e experiência alinhada à sua marca.",
    icon: Monitor,
    bullets: [
      "Design e desenvolvimento web",
      "SEO e marketing digital",
      "Gestão de redes sociais",
      "Identidade visual e branding",
    ],
  },
  {
    title: "Hardware & Equipamento",
    category: "Hardware",
    description:
      "Fornecemos e mantemos equipamentos fiáveis para equipas que precisam de produtividade e estabilidade no dia a dia.",
    icon: Cpu,
    bullets: [
      "Fornecimento HP certificado",
      "Manutenção preventiva e corretiva",
      "Upgrades e reposição de componentes",
      "Impressoras, scanners e periféricos",
    ],
  },
];

const revealDelays = ["delay-[0ms]", "delay-[100ms]", "delay-[200ms]"];

export default function ServicesGrid() {
  return (
    <>
      <section className="bg-canvas">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            eyebrow="Portfólio"
            title="Os Nossos Serviços"
            description="Suporte, presença digital e equipamento para manter a operação da sua empresa estável e produtiva."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map(
              ({ title, category, description, icon: Icon, bullets }, index) => (
                <Reveal key={title} className={revealDelays[index]}>
                  <Card featured={index === 0} className="h-full">
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                          <Icon
                            className="h-6 w-6"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>
                        <Badge>{category}</Badge>
                      </div>

                      <h2 className="mt-6 type-headline-md text-ink">{title}</h2>
                      <p className="mt-3 max-w-[54ch] type-body-md text-graphite">
                        {description}
                      </p>

                      <ul className="mt-6 space-y-2.5 border-t border-hairline pt-5">
                        {bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                            <span className="type-body-sm text-graphite">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Pronto para avançar"
        title="Encontre a solução certa para si"
        description="A nossa equipa está pronta para analisar as necessidades da sua empresa e propor a melhor solução."
        primary={{ label: "Solicitar proposta", href: "/contactos" }}
        secondary={{ label: "Explorar soluções", href: "/solucoes" }}
      />
    </>
  );
}
