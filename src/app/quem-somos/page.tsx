import type { Metadata } from "next";

import MissionSection from "@/components/quem-somos/MissionSection";
import PageHero from "@/components/quem-somos/PageHero";
import PartnersSection from "@/components/quem-somos/PartnersSection";
import TimelineSection from "@/components/quem-somos/TimelineSection";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a nossa história, missão e valores. Uma empresa angolana dedicada a transformar organizações através da tecnologia.",
  keywords: ["Empresa IT Angola", "Sobre a Persistec", "Equipa Persistec", "Tecnologia Luanda"],
  openGraph: {
    title: "Quem Somos",
    description:
      "Conheça a nossa história, missão e valores. Uma empresa angolana dedicada a transformar organizações através da tecnologia.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-quem-somos.jpg",
        width: 1200,
        height: 630,
        alt: "Persistec — Quem Somos",
      },
    ],
  },
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero />
      <MissionSection />
      <TimelineSection />
      <PartnersSection />
    </>
  );
}
