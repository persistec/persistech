import type { Metadata } from "next";

import MissionSection from "@/components/quem-somos/MissionSection";
import PageHero from "@/components/quem-somos/PageHero";
import PartnersSection from "@/components/quem-somos/PartnersSection";
import TimelineSection from "@/components/quem-somos/TimelineSection";

export const metadata: Metadata = {
  title: "Quem Somos | Persistec",
  description:
    "Conheça a Persistec, empresa angolana dedicada a transformar organizações através da tecnologia.",
  openGraph: {
    title: "Quem Somos | Persistec",
    description:
      "Conheça a Persistec, empresa angolana dedicada a transformar organizações através da tecnologia.",
    type: "website",
    locale: "pt_AO",
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
