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
import CTABand from "@/components/ui/CTABand";
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
    description: "Atendimento dedicado e suporte contínuo para produtos Microsoft.",
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
      <section className="bg-canvas">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            eyebrow="Produtividade e Nuvem"
            title="Microsoft 365 para empresas"
            description="Somos uma empresa parceira da Microsoft, com expertise em soluções de produtividade e nuvem para empresas de todos os tamanhos. Atuamos na implantação, configuração e suporte completo das soluções Microsoft 365."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {microsoftHighlights.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} className={microsoftDelays[index]}>
                <Card featured={index === 0} className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 type-headline-sm text-ink">{title}</h2>
                  <p className="mt-3 type-body-sm text-graphite">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 rounded-[4px] border border-hairline bg-paper p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <Badge>Microsoft 365</Badge>
                <h3 className="mt-4 type-headline-md text-ink">
                  Ferramentas para colaboração, comunicação e segurança
                </h3>
              </div>

              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:col-span-7">
                {microsoftCapabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className="type-body-sm text-graphite">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-sand">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            eyebrow="Serviços Técnicos"
            title="Áreas de atuação"
            description="Serviços técnicos para implementação, suporte e gestão de tecnologia empresarial."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalServices.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} className={serviceDelays[index]}>
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {title}
                      </h3>
                      <p className="mt-2 type-body-sm text-graphite">{description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Pronto para avançar"
        title="Encontre a solução técnica certa para si"
        description="A nossa equipa está pronta para analisar as necessidades da sua empresa e propor a melhor solução."
        primary={{ label: "Solicitar proposta", href: "/contactos" }}
        secondary={{ label: "Ver licenciamento", href: "/licenciamento" }}
      />
    </>
  );
}
