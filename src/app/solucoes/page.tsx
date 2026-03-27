import type { Metadata } from "next";

import PageHero from "@/components/solucoes/PageHero";
import ServicesGrid from "@/components/solucoes/ServicesGrid";

export const metadata: Metadata = {
  title: "Soluções | Persistec",
  description:
    "Infraestrutura IT, cibersegurança e cloud para empresas em Angola.",
  openGraph: {
    title: "Soluções | Persistec",
    description:
      "Infraestrutura IT, cibersegurança e cloud para empresas em Angola.",
    type: "website",
    locale: "pt_AO",
    images: [{ url: "/images/og/og-solucoes.jpg", width: 1200, height: 630 }],
  },
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        badge="Soluções Tecnológicas"
        title="Soluções"
        subtitle="Infraestrutura robusta, cibersegurança e cloud para empresas que exigem o melhor."
      />
      <ServicesGrid />
    </>
  );
}
