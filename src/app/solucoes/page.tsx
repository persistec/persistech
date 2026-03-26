import type { Metadata } from "next";

import PageHero from "@/components/solucoes/PageHero";
import ServicesGrid from "@/components/solucoes/ServicesGrid";

export const metadata: Metadata = {
  title: "Soluções & Serviços | Persistec",
  description:
    "Infraestrutura IT, cloud, cibersegurança, suporte técnico e web design em Angola.",
  openGraph: {
    title: "Soluções & Serviços | Persistec",
    description:
      "Infraestrutura IT, cloud, cibersegurança, suporte técnico e web design em Angola.",
    type: "website",
    locale: "pt_AO",
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
