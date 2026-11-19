import {
  ArrowUpRight,
  Check,
  Cloud,
  FileText,
  MonitorCog,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import CTABand from "@/components/ui/CTABand";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const microsoftProducts = [
  "Microsoft Office 365 Home",
  "Microsoft Family 365",
  "Office Profissional 2021",
  "Microsoft 365 Business Premium",
  "Microsoft 365 Business Standard",
  "Microsoft 365 Enterprise E1",
  "Power B.I",
  "Windows 11",
];

const voipProducts = ["3CX Enterprise", "3CX Profissional"];

const malwarebytesPoints = [
  {
    title: "Proteção contra ameaças avançadas",
    description:
      "Detecção e bloqueio de ransomware, malware, exploits e ataques de dia zero em tempo real.",
  },
  {
    title: "Console de gestão centralizada (Nebula)",
    description:
      "Plataforma cloud para monitorar, configurar e aplicar políticas de segurança nos dispositivos da empresa.",
  },
  {
    title: "Resposta e correção automatizada",
    description:
      "Isolamento automático de endpoints infectados e correção de ameaças.",
  },
  {
    title: "Flexível e escalável",
    description:
      "Planos ajustáveis de acordo com o número de dispositivos e necessidades de segurança.",
  },
];

const malwarebytesProducts = [
  "Malwarebytes Premium – 1 dispositivo",
  "Malwarebytes Premium – 5 dispositivos",
  "Malwarebytes Nebula – Licenciamento Corporativo",
];

const kasperskySolutions = [
  {
    title: "Kaspersky Total Security for Business",
    description:
      "Proteção completa para endpoints, servidores e dispositivos móveis, com gestão centralizada e recursos avançados de controle e criptografia.",
  },
  {
    title: "Kaspersky Small Office Security",
    description:
      "Para pequenas empresas que precisam de proteção robusta, fácil de usar e em tempo real para PCs, Macs e servidores.",
  },
  {
    title: "Kaspersky Endpoint Security for Business Advanced",
    description:
      "Camadas adicionais de proteção com criptografia de dados, controle de dispositivos, firewall e defesa contra exploits.",
  },
  {
    title: "Kaspersky Cloud Endpoint Security",
    description:
      "Proteção baseada na nuvem para gestão simplificada, adequada a equipas híbridas ou distribuídas.",
  },
  {
    title: "Kaspersky Endpoint Security Cloud Plus",
    description:
      "Solução cloud avançada com recursos adicionais de controle, visibilidade e automação de políticas de segurança.",
  },
];

const googleProducts = ["Google Workspace", "Google Chrome", "Google Education"];

const quickGroups = [
  {
    title: "Microsoft",
    description:
      "Licenciamento de soluções Microsoft para produtividade, sistemas operativos e ambientes empresariais.",
    products: microsoftProducts,
    icon: FileText,
  },
  {
    title: "Telefonia VoIP",
    description: "Licenciamento de soluções 3CX para comunicação empresarial.",
    products: voipProducts,
    icon: PhoneCall,
  },
  {
    title: "Google",
    description:
      "Licenciamento de soluções Google para produtividade, navegador e ambientes educacionais.",
    products: googleProducts,
    icon: Cloud,
  },
];

const licensingSections = [
  { label: "Microsoft · 3CX · Google", href: "#licencas" },
  { label: "Malwarebytes", href: "#malwarebytes" },
  { label: "Kaspersky", href: "#kaspersky" },
];

const revealDelays = ["delay-[0ms]", "delay-[100ms]", "delay-[200ms]"];

function ProductList({ products }: { products: string[] }) {
  return (
    <ul className="space-y-2.5">
      {products.map((product) => (
        <li key={product} className="flex items-start gap-3">
          <Check
            className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="text-[15px] font-medium leading-6 text-graphite">
            {product}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function LicensingContent() {
  return (
    <>
      <section id="licencas" className="bg-canvas">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            title="Licenciamento de soluções empresariais"
            description="Venda, recomendação e suporte técnico para ferramentas de produtividade, comunicação, segurança e gestão cloud."
          />

          <nav
            aria-label="Secções de licenciamento"
            className="mt-8 flex flex-wrap gap-2"
          >
            {licensingSections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="rounded-[2px] border border-hairline bg-paper px-3 py-2 font-mono text-[10px] font-medium uppercase leading-none tracking-[0.16em] text-graphite transition-colors hover:border-gold/60 hover:text-gold-deep"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {quickGroups.map(({ title, description, products, icon: Icon }, index) => (
              <Reveal key={title} className={revealDelays[index]}>
                <Card
                  hover={false}
                  className="h-full motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-parchment text-gold-deep">
                        <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <Badge>{title}</Badge>
                    </div>

                    <h2 className="mt-6 type-headline-sm text-ink">{title}</h2>
                    <p className="mt-3 type-body-sm text-graphite">{description}</p>

                    <div className="mt-6 border-t border-hairline pt-5">
                      <ProductList products={products} />
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="malwarebytes" className="border-y border-hairline bg-sand">
        <div className="container-aurum section-rhythm">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Badge>Malwarebytes</Badge>
              <h2 className="mt-5 type-headline-lg text-ink">
                Proteção avançada com gestão centralizada
              </h2>
              <p className="mt-4 max-w-[54ch] type-body-md text-graphite">
                A Persistech disponibiliza licenciamento para soluções Malwarebytes
                for Business, focadas na proteção contra ameaças digitais avançadas
                com gestão centralizada.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <ProductList products={malwarebytesProducts} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
              {malwarebytesPoints.map(({ title, description }) => (
                <Card
                  key={title}
                  hover={false}
                  className="h-full p-6 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
                >
                  <ShieldCheck
                    className="h-6 w-6 text-gold-deep"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 type-body-sm text-graphite">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kaspersky" className="bg-canvas">
        <div className="container-aurum section-rhythm">
          <SectionHeading
            title="Segurança empresarial e profissional"
            description="Licenciamento, venda, recomendação e suporte técnico para soluções Kaspersky orientadas à proteção de endpoints, servidores e dados corporativos."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {kasperskySolutions.map(({ title, description }) => (
              <Card
                key={title}
                hover={false}
                className="h-full motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_-24px_rgba(20,18,12,0.45)]"
              >
                <div className="flex h-full flex-col">
                  <MonitorCog
                    className="h-6 w-6 text-gold-deep"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-base font-semibold leading-6 text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 type-body-sm text-graphite">{description}</p>

                  <Link
                    href="/contactos"
                    className="link-underline link-arrow-group mt-4 inline-flex items-center gap-2 pb-1 pt-2 text-sm font-medium text-gold-deep transition-colors hover:text-ink"
                  >
                    Explorar
                    <ArrowUpRight className="link-arrow h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Encontre a licença certa para a sua empresa"
        description="A nossa equipa está pronta para orientar a escolha das soluções de licenciamento adequadas às necessidades do seu negócio."
        primary={{ label: "Solicitar proposta", href: "/contactos" }}
        secondary={{ label: "Ver soluções técnicas", href: "/solucoes" }}
      />
    </>
  );
}
