import {
  Check,
  Cloud,
  FileText,
  MonitorCog,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
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

const revealDelays = ["delay-[0ms]", "delay-[100ms]", "delay-[200ms]"];

function ProductList({ products }: { products: string[] }) {
  return (
    <ul className="space-y-3">
      {products.map((product) => (
        <li key={product} className="flex items-start gap-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary" />
          <span className="text-sm text-text-secondary">{product}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LicensingContent() {
  return (
    <>
      <section className="grid-bg bg-background-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Portfólio"
            title="Licenciamento de soluções empresariais"
            description="Venda, recomendação e suporte técnico para ferramentas de produtividade, comunicação, segurança e gestão cloud."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {quickGroups.map(({ title, description, products, icon: Icon }, index) => (
              <Reveal key={title} className={revealDelays[index]}>
                <Card className="h-full">
                  <div className="flex h-full flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-accent bg-background-elevated text-accent-primary">
                        <Icon className="h-10 w-10" />
                      </div>
                      <Badge>{title}</Badge>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
                      <p className="text-sm leading-7 text-text-secondary">{description}</p>
                    </div>

                    <ProductList products={products} />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <Badge>Malwarebytes</Badge>
              <h2 className="gradient-text text-3xl font-semibold md:text-4xl">
                Proteção avançada com gestão centralizada
              </h2>
              <p className="text-sm leading-7 text-text-secondary">
                A Persistech disponibiliza licenciamento para soluções Malwarebytes
                for Business, focadas na proteção contra ameaças digitais avançadas
                com gestão centralizada.
              </p>
              <ProductList products={malwarebytesProducts} />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {malwarebytesPoints.map(({ title, description }) => (
                <Card key={title} hover={false} className="h-full">
                  <div className="flex h-full flex-col gap-4">
                    <ShieldCheck className="h-8 w-8 text-accent-primary" />
                    <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
                    <p className="text-sm leading-7 text-text-secondary">{description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Kaspersky"
            title="Segurança empresarial e profissional"
            description="Licenciamento, venda, recomendação e suporte técnico para soluções Kaspersky orientadas à proteção de endpoints, servidores e dados corporativos."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
            {kasperskySolutions.map(({ title, description }) => (
              <Card key={title} hover={false} className="h-full">
                <div className="flex h-full flex-col gap-4">
                  <MonitorCog className="h-8 w-8 text-accent-primary" />
                  <h3 className="text-base font-semibold text-text-primary">{title}</h3>
                  <p className="text-sm leading-7 text-text-secondary">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-blue rounded-[2rem] px-6 py-16 shadow-glow-gold md:px-12">
            <SectionHeading
              eyebrow="Pronto para avançar"
              title="Encontre a licença certa para a sua empresa"
              description="A nossa equipa está pronta para orientar a escolha das soluções de licenciamento adequadas às necessidades do seu negócio."
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
