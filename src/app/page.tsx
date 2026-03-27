import type { Metadata } from "next";

import {
  CTASection,
  ClientsSection,
  HeroSection,
  ServicesSection,
  WhyUsSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Soluções Tecnológicas de Confiança",
  description:
    "Infraestrutura IT, cibersegurança, cloud e soluções digitais para empresas em Angola. Mais de uma década de excelência tecnológica.",
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
    title: "Soluções Tecnológicas de Confiança",
    description:
      "Infraestrutura IT, cibersegurança, cloud e soluções digitais para empresas em Angola. Mais de uma década de excelência tecnológica.",
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
