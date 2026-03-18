import ClientsBanner from "@/components/ui/ClientsBanner";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section Placeholder */}
      <section className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-persistec-charcoal sm:text-6xl">
          Soluções Tecnológicas de <span className="text-persistec-gold">Confiança</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl px-4">
          Ajudamos empresas a prosperar na era digital com infraestrutura robusta e serviços especializados.
        </p>
      </section>

      {/* Social Proof Section */}
      <ClientsBanner />

      {/* Other sections placeholders */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-persistec-charcoal">Nossos Serviços</h2>
          <p className="mt-4 text-gray-500">Brevemente mais detalhes sobre o nosso portfólio.</p>
        </div>
      </section>
    </div>
  );
}
