export default function NewmediaPage() {
  const categories = [
    "Sites Corporativos",
    "Institucionais",
    "Mobile",
    "Portais Temáticos",
    "Páginas de Produto",
    "Aplicações de Gestão/CRM",
    "Lojas Online",
    "Gestores de Conteúdos",
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-persistec-charcoal py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Newmedia
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Design, Comunicação, Marketing Digital e Desenvolvimento Web. Unimos criatividade e tecnologia para criar experiências digitais memoráveis e eficazes.
            </p>
          </div>
        </div>
      </section>

      {/* Project Typology Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-persistec-charcoal">
            Tipologia de Projetos
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="flex items-center justify-center rounded-lg border border-gray-200 p-6 text-center transition-all duration-300 hover:border-persistec-gold hover:shadow-sm"
              >
                <span className="text-sm font-medium text-persistec-charcoal md:text-base">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section (Optional but good for context) */}
      <section className="bg-persistec-light py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-persistec-charcoal mb-4">A Nossa Abordagem</h2>
            <p className="text-gray-600">
              Focamos na usabilidade e nos resultados. Cada projeto é único e desenvolvido à medida das necessidades específicas de cada cliente, garantindo um posicionamento digital robusto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
