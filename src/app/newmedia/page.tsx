import type { Metadata } from "next";

import PageHero from "@/components/newmedia/PageHero";
import ServicesSection from "@/components/newmedia/ServicesSection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const description =
  "Serviços NewMedia da Persistech para plataformas web, plataformas de gestão e soluções digitais personalizadas.";

export const metadata: Metadata = {
  title: "Serviços NewMedia",
  description,
  keywords: [
    "Serviços NewMedia",
    "Plataformas Web",
    "Plataformas de Gestão",
    "Criação de Websites",
    "Soluções Digitais",
  ],
  openGraph: {
    title: "Serviços NewMedia",
    description,
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-newmedia.jpg",
        width: 1200,
        height: 630,
        alt: "Persistech — Serviços NewMedia",
      },
    ],
  },
};

export default function NewmediaPage() {
  return (
    <>
      <PageHero />
      <ServicesSection />

      <section className="bg-background-primary py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-blue rounded-[2rem] px-6 py-16 shadow-glow-gold md:px-12">
            <SectionHeading
              eyebrow="Vamos conversar"
              title="Tem uma solução digital em mente?"
              description="Conte-nos a sua necessidade e avaliamos a melhor abordagem para o seu projeto."
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
