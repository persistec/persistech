import { ArrowDown } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="circuit-bg relative flex min-h-screen items-center justify-center overflow-hidden bg-background-primary px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in srgb, var(--color-accent-primary) 8%, transparent) 0%, transparent 62%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <Badge>Soluções Tecnológicas</Badge>
        <div className="mt-8 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-text-primary md:text-7xl lg:text-8xl">
            <span className="block">Expandimos</span>
            <span className="gradient-text glow-text block">Limites</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
            Infraestrutura robusta, cibersegurança e soluções digitais para empresas que
            não param.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" href="/contactos">
            Fale Connosco
          </Button>
          <Button variant="outline" size="lg" href="/servicos">
            Os Nossos Serviços
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent-primary">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
