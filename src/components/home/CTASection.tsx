import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CTASection() {
  return (
    <section className="bg-background-primary py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-blue rounded-[2rem] px-6 py-16 shadow-glow-gold md:px-12">
          <SectionHeading
            eyebrow="Pronto para começar"
            title="Vamos transformar o seu negócio"
            description="Contacte-nos hoje e descubra como a Persistech pode elevar a infraestrutura tecnológica da sua empresa."
            align="center"
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="/contactos">
              Contactar Agora
            </Button>
            <Button variant="outline" size="lg" href="/solucoes">
              Ver Soluções
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
