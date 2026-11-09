"use client";

import Button from "@/components/ui/Button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="container-aurum grid place-items-center py-24 md:py-32">
        <div className="max-w-xl text-center">
          <p className="font-mono text-[64px] font-semibold leading-none text-gold md:text-[80px]">
            Erro
          </p>
          <h1 className="mt-6 type-headline-lg text-ink">
            Algo correu mal do nosso lado
          </h1>
          <p className="mt-4 type-body-md text-graphite">
            Ocorreu um erro inesperado ao carregar esta página. Tente
            novamente ou contacte-nos se o problema persistir.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" type="button" onClick={reset} arrow>
              Tentar novamente
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
