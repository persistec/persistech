import type { Metadata } from "next";

import PageHero from "@/components/servicos/PageHero";
import ServicesGrid from "@/components/servicos/ServicesGrid";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Suporte técnico certificado, web design e fornecimento de hardware para manter o seu negócio sempre a funcionar.",
  openGraph: {
    title: "Serviços",
    description:
      "Suporte técnico certificado, web design e fornecimento de hardware para manter o seu negócio sempre a funcionar.",
    type: "website",
    locale: "pt_AO",
    images: [{ url: "/images/og/og-solucoes.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicosPage() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
    </>
  );
}
