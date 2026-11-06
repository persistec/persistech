import type { Metadata } from "next";

import PageHero from "@/components/newmedia/PageHero";
import PortfolioSection from "@/components/newmedia/PortfolioSection";
import ServicesSection from "@/components/newmedia/ServicesSection";
import CTABand from "@/components/ui/CTABand";

const description =
  "Serviços NewMedia da Persistech para plataformas web, plataformas de gestão e soluções digitais personalizadas.";

export const metadata: Metadata = {
  title: "Serviços NewMedia",
  description,
  keywords: [
    "Serviços NewMedia",
    "Plataformas Web",
    "Plataformas de Gestão",
    "Criação de Websites",
    "Soluções Digitais",
  ],
  openGraph: {
    title: "Serviços NewMedia",
    description,
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-newmedia.jpg",
        width: 1200,
        height: 630,
        alt: "Persistech — Serviços NewMedia",
      },
    ],
  },
};

export default function NewmediaPage() {
  return (
    <>
      <PageHero />
      <ServicesSection />
      <PortfolioSection />
      <CTABand
        eyebrow="Vamos conversar"
        title="Tem uma solução digital em mente?"
        description="Conte-nos a sua necessidade e avaliamos a melhor abordagem para o seu projeto."
        primary={{ label: "Falar com a equipa", href: "/contactos" }}
        secondary={{ label: "Ver serviços", href: "/servicos" }}
      />
    </>
  );
}
