import type { Metadata } from "next";

import {
  CTASection,
  ClientsSection,
  HeroSection,
  ServicesSection,
  WhyUsSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Persistec — Soluções Tecnológicas de Confiança em Angola",
  description:
    "Soluções de excelência tecnológica e infraestrutura IT em Angola. Parceiros Google e Microsoft. Revendedores Google Workspace, Microsoft 365, Cibersegurança e Cloud.",
  keywords: [
    "Persistec",
    "Tecnologia",
    "Angola",
    "Google Workspace",
    "Microsoft 365",
    "Cibersegurança",
    "Infraestrutura IT",
    "Cloud",
    "Virtualização",
    "Revendedor Google Workspace",
    "Suporte Técnico Luanda",
  ],
  openGraph: {
    title: "Persistec — Soluções Tecnológicas de Confiança em Angola",
    description:
      "Soluções de excelência tecnológica e infraestrutura IT em Angola. Parceiros Google e Microsoft. Revendedores Google Workspace, Microsoft 365, Cibersegurança e Cloud.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Persistec - Soluções Tecnológicas de Confiança",
      },
    ],
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
