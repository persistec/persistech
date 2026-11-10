import PageHero from "@/components/ui/PageHero";

export default function QuemSomosHero() {
  return (
    <PageHero
      title="Quem Somos"
      lead="Na Persistech, acreditamos que a tecnologia tem o poder de transformar negócios e impulsionar o crescimento. Capacitamos empresas com soluções inovadoras, seguras e de alta qualidade, desenvolvidas por uma equipa experiente e certificada."
      image={{
        src: "/images/heroes/hero-quem-somos.webp",
        alt: "Equipa Persistech reunida à volta de um portátil em reunião de trabalho",
        priority: true,
      }}
      proof={{ value: "12+", label: "Anos a expandir limites" }}
      actions={[
        { label: "Fale connosco", href: "/contactos" },
        { label: "Ver soluções", href: "/solucoes", variant: "outline" },
      ]}
    />
  );
}
