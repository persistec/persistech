import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/newmedia/PageHero";
import PortfolioSection from "@/components/newmedia/PortfolioSection";
import ServicesSection from "@/components/newmedia/ServicesSection";

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
