import type { Metadata } from "next";

import LicensingContent from "@/components/licenciamento/LicensingContent";
import PageHero from "@/components/solucoes/PageHero";

const pageDescription =
  "Soluções de licenciamento para empresas, incluindo Microsoft, Telefonia VoIP, Malwarebytes, Kaspersky e Google.";

export const metadata: Metadata = {
  title: "Soluções de Licenciamento",
  description: pageDescription,
  openGraph: {
    title: "Soluções de Licenciamento",
    description: pageDescription,
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-solucoes.jpg",
        width: 1200,
        height: 630,
        alt: "Persistech — Soluções de Licenciamento",
      },
    ],
  },
};

export default function LicenciamentoPage() {
  return (
    <>
      <PageHero
        badge="Licenciamento"
        title="Soluções de Licenciamento"
        subtitle="Licenciamento de soluções empresariais para produtividade, comunicação, proteção de endpoints, ferramentas cloud e ambientes corporativos."
      />
      <LicensingContent />
    </>
  );
}
