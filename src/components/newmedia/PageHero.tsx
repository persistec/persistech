import SharedPageHero from "@/components/ui/PageHero";

export default function NewmediaHero() {
  return (
    <SharedPageHero
      eyebrow="Serviços NewMedia"
      title="Serviços NewMedia"
      lead="Desenvolvemos plataformas web, plataformas de gestão e soluções digitais personalizadas para apoiar processos e presença digital."
      image={{
        src: "/images/heroes/hero-newmedia.jpg",
        alt: "Ambiente digital e desenvolvimento de plataformas web",
        priority: true,
      }}
      proof={{ value: "4", label: "Projetos recentes" }}
      actions={[
        { label: "Falar com a equipa", href: "/contactos" },
        { label: "Ver projetos", href: "#projetos", variant: "outline" },
      ]}
    />
  );
}
