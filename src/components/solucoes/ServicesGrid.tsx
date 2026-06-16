import {
  Camera,
  Check,
  Cloud,
  Globe,
  Headphones,
  Mail,
  Network,
  PhoneCall,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const microsoftHighlights = [
  {
    title: "Segurança e Produtividade",
    description:
      "Soluções modernas que aumentam a produtividade com segurança de nível corporativo.",
    icon: ShieldCheck,
  },
  {
    title: "Suporte Técnico Especializado",
    description:
      "Atendimento dedicado e suporte contínuo para produtos Microsoft.",
    icon: Headphones,
  },
  {
    title: "Microsoft 365",
    description:
      "Conjunto de ferramentas de produtividade com Word, Excel, Outlook, Teams e mais.",
    icon: Cloud,
  },
];

const microsoftCapabilities = [
  "E-mail corporativo profissional",
  "Armazenamento no OneDrive e SharePoint",
  "Videoconferências com Microsoft Teams",
  "Colaboração em tempo real nos documentos",
  "Segurança e conformidade para empresas",
];

const technicalServices = [
  {
    title: "CCTV",
    description: "Instalação e configuração de câmaras de vídeo vigilância.",
    icon: Camera,
  },
  {
    title: "Servidores",
    description: "Instalação e configuração de servidores.",
    icon: Server,
  },
  {
    title: "Assistência Remota",
    description: "Assistência remota, help desk e servidores.",
    icon: Headphones,
  },
  {
    title: "Telefonia VoIP",
    description: "Instalação de telefonia VoIP.",
    icon: PhoneCall,
  },
  {
    title: "Hardware",
    description: "Reparação de computadores e hardware.",
    icon: Wrench,
  },
  {
    title: "Redes de Dados",
    description: "Dimensionamento, instalação e manutenção de redes de dados.",
    icon: Network,
  },
  {
    title: "Domínios",
    description: "Registo de domínios.",
    icon: Globe,
  },
  {
    title: "E-mails Corporativos",
    description: "Alojamento e gestão de e-mails corporativos.",
    icon: Mail,
  },
  {
    title: "Consultoria em TI",
    description: "Consultoria em TI.",
    icon: Check,
  },
];

const microsoftDelays = ["delay-[0ms]", "delay-[100ms]", "delay-[200ms]"];

const serviceDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
  "delay-[500ms]",
  "delay-[600ms]",
  "delay-[700ms]",
  "delay-[800ms]",
];

export default function ServicesGrid() {
  return (
    <>
      <section className="grid-bg bg-background-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Produtividade e Nuvem"
            title="Microsoft 365 para empresas"
            description="Somos uma empresa parceira da Microsoft, com expertise em soluções de produtividade e nuvem para empresas de todos os tamanhos. Atuamos na implantação, configuração e suporte completo das soluções Microsoft 365."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {microsoftHighlights.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} className={microsoftDelays[index]}>
                <Card className="h-full">
                  <div className="flex h-full flex-col gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-accent bg-background-elevated text-accent-primary">
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
                      <p className="text-sm leading-7 text-text-secondary">{description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border-default bg-background-card p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl space-y-3">
                <Badge>Microsoft 365</Badge>
                <h3 className="text-2xl font-semibold text-text-primary">
                  Ferramentas para colaboração, comunicação e segurança
                </h3>
              </div>

              <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                {microsoftCapabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary" />
                    <span className="text-sm text-text-secondary">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Serviços Técnicos"
            title="Áreas de atuação"
            description="Serviços técnicos para implementação, suporte e gestão de tecnologia empresarial."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalServices.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} className={serviceDelays[index]}>
                <Card className="h-full">
                  <div className="flex h-full flex-col gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border-accent bg-background-elevated text-accent-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
                      <p className="text-sm leading-7 text-text-secondary">{description}</p>
                    </div>
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
              title="Encontre a solução técnica certa para si"
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
