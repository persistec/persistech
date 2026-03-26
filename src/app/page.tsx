import type { Metadata } from "next";

import {
  CTASection,
  ClientsSection,
  HeroSection,
  ServicesSection,
  WhyUsSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Persistec — Soluções Tecnológicas de Confiança",
  description:
    "Infraestrutura IT, cibersegurança e soluções digitais para empresas em Angola.",
  openGraph: {
    title: "Persistec — Soluções Tecnológicas de Confiança",
    description:
      "Infraestrutura IT, cibersegurança e soluções digitais para empresas em Angola.",
    type: "website",
    locale: "pt_AO",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
