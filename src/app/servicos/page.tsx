import Link from "next/link";

export default function ServicesPage() {
  const technicalServices = [
    {
      title: "Redes de Dados e Voz",
      description: "Projecto, instalação e manutenção de infraestruturas de rede estruturada, garantindo conectividade estável e segura para a sua empresa.",
    },
    {
      title: "Serviço de Apoio a Usuários (HelpDesk)",
      description: "Suporte técnico especializado, remoto e presencial, focado na resolução rápida de incidentes e na continuidade do trabalho dos seus colaboradores.",
    },
    {
      title: "Serviço de Emails Corporativos",
      description: "Implementação e gestão de sistemas de correio eletrónico profissional, com alta disponibilidade, segurança e filtros anti-spam avançados.",
    },
    {
      title: "Administração de Sistemas",
      description: "Gestão proativa e monitorização de servidores (Windows e Linux) e bases de dados, assegurando o desempenho e a integridade das plataformas críticas.",
    },
    {
      title: "Consultoria em IT",
      description: "Planeamento estratégico e aconselhamento técnico para alinhar os seus sistemas de informação com os objetivos de crescimento do seu negócio.",
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-persistec-charcoal sm:text-5xl">
              Serviços
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Soluções integradas desenhadas para potenciar a eficiência operacional e a rentabilidade do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics Highlight Banner */}
      <section className="bg-persistec-charcoal py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-persistec-gold/20 p-3">
                <svg className="h-8 w-8 text-persistec-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Loja Online</h3>
                <p className="text-gray-300">Serviço de Entrega gratuito em 24h (Luanda)</p>
              </div>
            </div>
            <Link 
              href="https://loja.persistec.com/" 
              target="_blank"
              className="rounded-lg bg-persistec-gold px-8 py-3 font-bold transition-all hover:bg-[#b08b3a] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-persistec-gold focus:ring-offset-2 focus:ring-offset-persistec-charcoal"
            >
              Visitar Loja
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Services Catalog */}
      <section className="bg-persistec-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-persistec-charcoal">
            Catálogo de Serviços Técnicos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {technicalServices.map((service) => (
              <div 
                key={service.title}
                className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md border-l-4 border-persistec-gold"
              >
                <h3 className="mb-4 text-xl font-bold text-persistec-charcoal">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
