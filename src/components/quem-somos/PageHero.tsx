import PageHero from "@/components/ui/PageHero";

export default function QuemSomosHero() {
  return (
    <PageHero
      eyebrow="Sobre a Persistech"
      title="Quem Somos"
      lead="Na Persistech, acreditamos que a tecnologia tem o poder de transformar negócios e impulsionar o crescimento. Capacitamos empresas com soluções inovadoras, seguras e de alta qualidade, desenvolvidas por uma equipa experiente e certificada."
      image={{
        src: "/images/heroes/hero-quem-somos.jpg",
        alt: "Equipa e ambiente de trabalho da Persistech",
        priority: true,
      }}
      proof={{ value: "10+", label: "Anos a expandir limites" }}
      actions={[
        { label: "Fale connosco", href: "/contactos" },
        { label: "Ver soluções", href: "/solucoes", variant: "outline" },
      ]}
    />
  );
}
