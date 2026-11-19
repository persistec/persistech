import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="container-aurum grid place-items-center py-24 md:py-32">
        <div className="max-w-xl text-center">
          <p className="font-mono text-[64px] font-semibold leading-none text-gold md:text-[80px]">
            404
          </p>
          <h1 className="mt-6 type-headline-lg text-ink">
            A página que procura não foi encontrada
          </h1>
          <p className="mt-4 type-body-md text-graphite">
            O endereço pode ter mudado ou a página já não existe. Regresse ao
            início ou fale connosco para encontrar o que precisa.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" href="/" arrow>
              Voltar ao início
            </Button>
            <Button variant="outline" size="lg" href="/contactos">
              Contactos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
