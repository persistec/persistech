import type { Metadata } from "next";

import PageHero from "@/components/solucoes/PageHero";
import ServicesGrid from "@/components/solucoes/ServicesGrid";

export const metadata: Metadata = {
  title: "Soluções Técnicas",
  description:
    "Soluções técnicas para produtividade, nuvem, Microsoft 365, infraestrutura, suporte e serviços de tecnologia empresarial.",
  openGraph: {
    title: "Soluções Técnicas",
    description:
      "Soluções técnicas para produtividade, nuvem, Microsoft 365, infraestrutura, suporte e serviços de tecnologia empresarial.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-solucoes.jpg",
        width: 1200,
        height: 630,
        alt: "Persistech — Soluções",
      },
    ],
  },
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        badge="Soluções Técnicas"
        title="Soluções Técnicas"
        subtitle="Produtividade, nuvem, Microsoft 365, infraestrutura e suporte técnico para empresas."
      />
      <ServicesGrid />
    </>
  );
}
