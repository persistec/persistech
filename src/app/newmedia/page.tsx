import type { Metadata } from "next";

import PageHero from "@/components/newmedia/PageHero";
import PortfolioSection from "@/components/newmedia/PortfolioSection";
import ServicesSection from "@/components/newmedia/ServicesSection";
import CTABand from "@/components/ui/CTABand";

const description =
  "Serviços NewMedia da Persistech: criação e gestão da identidade visual e da presença digital — websites, plataformas de gestão e comunicação.";

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
        url: "/images/og/og-newmedia.webp",
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
        title="Tem um projeto digital em mente?"
        description="Fale connosco sobre o seu website, identidade visual ou plataforma — avaliamos a melhor abordagem para o seu projeto."
        primary={{ label: "Falar com a equipa", href: "/contactos" }}
        secondary={{ label: "Ver serviços", href: "/servicos" }}
      />
    </>
  );
}
