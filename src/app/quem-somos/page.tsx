export default function AboutPage() {
  const values = [
    { name: "Integridade", icon: <path d="M12 2L3 7v9c0 5 9 8 9 8s9-3 9-8V7l-9-5z" /> },
    { name: "Honestidade", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
    { name: "Compromisso", icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></> },
    { name: "Paixão por tecnologia", icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /> },
    { name: "Honra de compromissos", icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></> },
    { name: "Entrega de resultados", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
    { name: "Qualidade", icon: <path d="M12 15l-2 5L9 14l-6-1 5-2L7 5l5 4 5-4-1 6 5 1-6 1-1 6z" /> },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-persistec-charcoal sm:text-5xl lg:text-6xl">
              Quem Somos
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Fundada em 2011, a <span className="font-semibold text-persistec-charcoal">Persistec</span> nasceu com o propósito de elevar os padrões de tecnologia e infraestrutura no mercado empresarial.
              </p>
              <p>
                Contamos com uma equipa de profissionais altamente qualificados e certificados, dedicados a entregar soluções de hardware, software e serviços que garantem a continuidade e o crescimento do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-persistec-light py-16">
        <div className="container mx-auto px-4">
          {/* Mission */}
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-persistec-charcoal/50">
              A Nossa Missão
            </h2>
            <p className="mt-6 text-2xl font-medium leading-relaxed text-persistec-gold md:text-3xl lg:text-4xl">
              "Prover serviços e produtos de qualidade mundialmente reconhecida."
            </p>
          </div>

          {/* Values Grid */}
          <div>
            <h2 className="mb-10 text-center text-2xl font-bold text-persistec-charcoal">
              Valores que nos Guiam
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="flex flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <svg 
                    className="mb-4 h-8 w-8 text-persistec-charcoal" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    {value.icon}
                  </svg>
                  <span className="text-sm font-bold text-persistec-charcoal md:text-base">
                    {value.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
