import Image from "next/image";
import { ArrowDown } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="circuit-bg relative flex min-h-screen items-center justify-center overflow-hidden bg-background-primary px-6">
      <Image
        src="/images/heroes/hero-home.jpg"
        alt=""
        role="presentation"
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in srgb, var(--color-accent-primary) 8%, transparent) 0%, transparent 62%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <Badge>Persistech</Badge>
        <div className="mt-8 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-text-primary md:text-7xl lg:text-8xl">
            <span className="block">Soluções tecnológicas</span>
            <span className="gradient-text glow-text block">para empresas</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
            A Persistech capacita empresas com soluções tecnológicas seguras,
            produtivas e alinhadas às necessidades do negócio.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" href="/solucoes">
            Conheça as nossas soluções
          </Button>
          <Button variant="outline" size="lg" href="/contactos">
            Fale connosco
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-accent-primary">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
