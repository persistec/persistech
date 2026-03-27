import type { Metadata } from "next";

import PageHero from "@/components/solucoes/PageHero";
import ServicesGrid from "@/components/solucoes/ServicesGrid";

export const metadata: Metadata = {
  title: "Soluções & Serviços IT em Angola | Persistec",
  description:
    "Google Workspace, Microsoft 365, 3CX, cibersegurança, infraestrutura IT e suporte técnico. Soluções completas para empresas em Luanda.",
  keywords: [
    "Google Workspace Angola",
    "Microsoft 365 Luanda",
    "3CX Angola",
    "Venda de Produtos Eletrónicos",
    "Reparação de Computadores",
    "Emails Corporativos",
    "Suporte Técnico Luanda",
  ],
  openGraph: {
    title: "Soluções & Serviços IT em Angola | Persistec",
    description:
      "Google Workspace, Microsoft 365, 3CX, cibersegurança, infraestrutura IT e suporte técnico. Soluções completas para empresas em Luanda.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/solucoes.png",
        width: 1200,
        height: 630,
        alt: "Soluções e Serviços - Persistec",
      },
    ],
  },
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
    </>
  );
}
