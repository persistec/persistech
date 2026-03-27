import type { Metadata } from "next";

import PageHero from "@/components/newmedia/PageHero";
import PortfolioSection from "@/components/newmedia/PortfolioSection";
import ServicesSection from "@/components/newmedia/ServicesSection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Newmedia & Estratégia Digital em Angola | Persistec",
  description:
    "Desenvolvimento de websites, SEO, web design, venda de domínios e marketing digital para empresas em Angola.",
  keywords: [
    "Web Design Angola",
    "Desenvolvimento Web Luanda",
    "SEO Angola",
    "Venda de Domínios",
    "Estratégia Digital",
    "Marketing Digital Luanda",
  ],
  openGraph: {
    title: "Newmedia & Estratégia Digital em Angola | Persistec",
    description:
      "Desenvolvimento de websites, SEO, web design, venda de domínios e marketing digital para empresas em Angola.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/newmedia.png",
        width: 1200,
        height: 630,
        alt: "Newmedia e Estratégia Digital - Persistec",
      },
    ],
  },
};

export default function NewmediaPage() {
  return (
    <>
      <PageHero />
      <ServicesSection />
      <PortfolioSection />

      <section className="bg-background-primary py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-blue rounded-[2rem] px-6 py-16 shadow-glow-blue md:px-12">
            <SectionHeading
              eyebrow="Vamos criar"
              title="Tem um projeto em mente?"
              description="Conte-nos a sua ideia e desenvolvemos juntos a solução digital ideal para o seu negócio."
              align="center"
            />

            <div className="mt-10 flex justify-center">
              <Button variant="primary" size="lg" href="/contactos">
                Falar com a Equipa
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
