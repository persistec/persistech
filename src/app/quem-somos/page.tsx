import type { Metadata } from "next";

import MissionSection from "@/components/quem-somos/MissionSection";
import PageHero from "@/components/quem-somos/PageHero";
import PartnersSection from "@/components/quem-somos/PartnersSection";
import TimelineSection from "@/components/quem-somos/TimelineSection";

export const metadata: Metadata = {
  title: "Quem Somos | Persistec",
  description:
    "Saiba mais sobre a Persistec, o seu parceiro tecnológico em Angola. Especialistas em infraestrutura IT, parceiros Google e Microsoft.",
  keywords: ["Empresa IT Angola", "Sobre a Persistec", "Equipa Persistec", "Tecnologia Luanda"],
  openGraph: {
    title: "Quem Somos | Persistec",
    description:
      "Saiba mais sobre a Persistec, o seu parceiro tecnológico em Angola. Especialistas em infraestrutura IT, parceiros Google e Microsoft.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/quem-somos.png",
        width: 1200,
        height: 630,
        alt: "Quem Somos - Persistec",
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
