import SharedPageHero from "@/components/ui/PageHero";

type PageHeroProps = {
  title: string;
  subtitle: string;
  proof?: {
    value: string;
    label: string;
  };
};

export default function PageHero({ title, subtitle, proof }: PageHeroProps) {
  return (
    <SharedPageHero
      title={title}
      lead={subtitle}
      image={{
        src: "/images/heroes/hero-solucoes.webp",
        alt: "Técnico a instalar cablagem de rede num armário de servidores",
        priority: true,
      }}
      proof={proof ?? { value: "5", label: "Áreas de serviço" }}
      actions={[
        { label: "Solicitar proposta", href: "/contactos" },
        { label: "Ver serviços", href: "/servicos", variant: "outline" },
      ]}
    />
  );
}
