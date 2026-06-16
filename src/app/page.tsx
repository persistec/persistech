import type { Metadata } from "next";

import {
  CTASection,
  ClientsSection,
  HeroSection,
  ServicesSection,
  WhyUsSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Soluções tecnológicas para empresas",
  description:
    "A Persistech capacita empresas com soluções tecnológicas seguras, produtivas e alinhadas às necessidades do negócio.",
  keywords: [
    "Persistech",
    "tecnologia",
    "Angola",
    "Microsoft 365",
    "soluções técnicas",
    "licenciamento empresarial",
    "Serviços NewMedia",
    "consultoria em TI",
  ],
  openGraph: {
    title: "Soluções tecnológicas para empresas",
    description:
      "A Persistech capacita empresas com soluções tecnológicas seguras, produtivas e alinhadas às necessidades do negócio.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Persistech — Soluções tecnológicas para empresas",
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
