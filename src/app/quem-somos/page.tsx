import type { Metadata } from "next";

import MissionSection from "@/components/quem-somos/MissionSection";
import PageHero from "@/components/quem-somos/PageHero";

const pageDescription =
  "Na Persistech, acreditamos que a tecnologia tem o poder de transformar negócios e impulsionar o crescimento. Nosso propósito é capacitar empresas a alcançar o seu potencial máximo através de soluções tecnológicas inovadoras, seguras e de alta qualidade, desenvolvidas por uma equipa experiente e certificada.";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: pageDescription,
  keywords: ["Empresa IT Angola", "Sobre a Persistech", "Quem Somos Persistech", "Tecnologia Luanda"],
  openGraph: {
    title: "Quem Somos",
    description: pageDescription,
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-quem-somos.jpg",
        width: 1200,
        height: 630,
        alt: "Persistech — Quem Somos",
      },
    ],
  },
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero />
      <MissionSection />
    </>
  );
}
