import SharedPageHero from "@/components/ui/PageHero";

export default function NewmediaHero() {
  return (
    <SharedPageHero
      title="Serviços NewMedia"
      lead="Criação e gestão da identidade visual e da presença digital da sua empresa: websites, plataformas de gestão, logotipo e comunicação."
      image={{
        src: "/images/heroes/hero-newmedia.webp",
        alt: "Ambiente digital e desenvolvimento de plataformas web",
        priority: true,
      }}
      proof={{ value: "3", label: "Áreas de serviço" }}
      actions={[
        { label: "Falar com a equipa", href: "/contactos" },
        { label: "Ver projetos", href: "#projetos", variant: "outline" },
      ]}
    />
  );
}
