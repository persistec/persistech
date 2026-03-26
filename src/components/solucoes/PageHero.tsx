import Badge from "@/components/ui/Badge";

export default function PageHero() {
  return (
    <section className="circuit-bg relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-background-primary px-6 py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-glow)_0%,transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Badge>O Que Fazemos</Badge>
        <div className="mt-8 space-y-4">
          <h1 className="gradient-text text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Soluções &amp; Serviços
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
            Cobertura completa das necessidades tecnológicas da sua empresa do
            hardware à cloud.
          </p>
        </div>
      </div>
    </section>
  );
}
