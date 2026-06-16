import Image from "next/image";

import Badge from "@/components/ui/Badge";

export default function PageHero() {
  return (
    <section className="circuit-bg relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-background-primary px-6 py-20 text-center">
      <Image
        src="/images/heroes/hero-quem-somos.jpg"
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-glow)_0%,transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Badge>Sobre a Persistech</Badge>
        <div className="mt-8 space-y-4">
          <h1 className="gradient-text text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Quem Somos
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-text-secondary md:text-xl md:leading-9">
            Na Persistech, acreditamos que a tecnologia tem o poder de transformar
            negócios e impulsionar o crescimento. Nosso propósito é capacitar empresas
            a alcançar o seu potencial máximo através de soluções tecnológicas
            inovadoras, seguras e de alta qualidade, desenvolvidas por uma equipa
            experiente e certificada. Com integridade, compromisso com a conformidade
            e foco na melhoria contínua, entregamos produtos e serviços que atendem
            aos mais altos padrões internacionais, gerando confiança, tranquilidade
            e crescimento para nossos clientes e parceiros.
          </p>
        </div>
      </div>
    </section>
  );
}
