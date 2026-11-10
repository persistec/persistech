import {
  BarChart3,
  Building2,
  Check,
  ClipboardList,
  Eye,
  FileCheck2,
  Globe,
  Globe2,
  Headphones,
  LayoutDashboard,
  MailCheck,
  Network,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const digitalServices = [
  {
    title: "Sites Institucionais e Promocionais",
    description:
      "Criação de sites institucionais e promocionais para a presença online da sua marca.",
    icon: Globe,
  },
  {
    title: "Plataformas de Gestão e Intranets",
    description:
      "Plataformas de gestão e intranets para apoiar os processos internos da sua organização.",
    icon: Network,
  },
  {
    title: "Gestor de Conteúdos (Backoffice)",
    description:
      "Gestor de conteúdos em backoffice para manter o seu website atualizado e organizado.",
    icon: LayoutDashboard,
  },
  {
    title: "Relatório de Acessos e Estatísticas",
    description:
      "Relatórios de acessos e estatísticas para acompanhar a utilização do seu website.",
    icon: BarChart3,
  },
  {
    title: "Alojamento Profissional Web e Emails",
    description:
      "Alojamento profissional de websites e e-mails para a sua empresa.",
    icon: MailCheck,
  },
  {
    title: "Suporte Técnico e Assistência Online",
    description:
      "Suporte técnico e assistência online para manter os seus serviços a funcionar.",
    icon: Headphones,
  },
];

// Descrições adaptadas do briefing Asana (SERVIÇOS NEWMEDIA); não acrescentar
// funcionalidades, prazos ou condições que não constam da fonte.
const platforms = [
  {
    title: "Plataforma de Gestão",
    description:
      "Soluções de software personalizadas para otimizar processos internos, melhorar a eficiência e apoiar a tomada de decisões — da gestão de projectos aos recursos humanos, finanças e cadeia de abastecimento. Adaptamos as ferramentas às necessidades de cada organização, com implementação, personalização e suporte contínuo.",
    icon: ClipboardList,
  },
  {
    title: "Plataforma de Gestão de Obras",
    description:
      "Soluções digitais especializadas para a gestão de projectos de construção: coordenação de equipas, controlo de custos e gestão de cronogramas e documentos, melhorando a eficiência e a transparência em cada etapa da obra e facilitando a colaboração entre todas as partes envolvidas.",
    icon: Building2,
  },
  {
    title: "Gestão das Candidaturas de Projectos a Financiar",
    description:
      "Plataforma que simplifica a submissão e o acompanhamento de propostas de financiamento, cobrindo todo o ciclo das candidaturas — da criação e submissão à avaliação e acompanhamento — com mais eficiência, transparência e conformidade.",
    icon: FileCheck2,
  },
  {
    title: "Criação de Websites",
    description:
      "Websites personalizados, atractivos, funcionais e responsivos, adaptados a dispositivos móveis, com uma boa experiência do utilizador e optimização para motores de busca, para reforçar a presença online da sua marca.",
    icon: Globe2,
  },
  {
    title: "Plataforma Ótica",
    description: "Serviço disponível por consulta.",
    icon: Eye,
    onConsultation: true,
  },
];

const digitalDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
  "delay-[500ms]",
];

const platformDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
];

const families = [
  {
    title: "Logotipo e Estacionário",
    items: [
      "Criação de Logotipo",
      "Cartões de Visita",
      "Papel de Carta e Envelopes",
      "Estacionário Digital",
      "Manual de Normas",
    ],
  },
  {
    title: "Comunicação e Marketing",
    items: [
      "Brochura de Apresentação",
      "Folhetos Promocionais",
      "Campanhas de Comunicação",
      "Web-Marketing e Redes Sociais",
      "Newsletters",
    ],
  },
];

export default function ServicesSection() {
  return (
    <>
      <section className="bg-canvas">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            title="Plataformas digitais e websites"
            description="A Newmedia cobre a criação e gestão da identidade visual e da presença digital da sua empresa, com um conjunto completo de serviços digitais."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {digitalServices.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} className={digitalDelays[index]}>
                <Card
                  hover={false}
                  className="h-full p-6 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 type-body-sm text-graphite">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-sand">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            title="Plataformas de gestão"
            description="Soluções digitais distintas, cada uma com o seu próprio âmbito de aplicação."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map(({ title, description, icon: Icon, onConsultation }, index) => (
              <Reveal key={title} className={platformDelays[index]}>
                <Card
                  hover={false}
                  className="h-full motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 type-headline-sm text-ink">{title}</h3>
                  {onConsultation ? (
                    <div className="mt-3">
                      <Badge>Por consulta</Badge>
                    </div>
                  ) : null}
                  <p className="mt-3 type-body-sm text-graphite">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            title="Identidade e comunicação"
            description="Identidade visual e comunicação da sua marca, do logotipo aos suportes digitais."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {families.map(({ title, items }, index) => (
              <Reveal key={title} className={platformDelays[index]}>
                <Card
                  hover={false}
                  className="h-full motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
                >
                  <h3 className="type-headline-sm text-ink">{title}</h3>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span className="type-body-sm text-graphite">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
