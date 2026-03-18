export default function SolutionsPage() {
  const partners = [
    {
      name: "Microsoft",
      tech: "Exchange Server, Windows Server",
      color: "#00a4ef",
    },
    {
      name: "VMWARE",
      tech: "Soluções de virtualização",
      color: "#607078",
    },
    {
      name: "Kaspersky",
      tech: "Proteção contra ameaças",
      color: "#006d5d",
    },
    {
      name: "Google Workspace",
      tech: "Serviço de Emails Corporativos",
      color: "#4285f4",
    },
  ];

  const infrastructureServices = [
    "Web Hosting",
    "Registo de Domínios",
    "Alojamento Profissional",
    "Gestão de Websites",
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-persistec-charcoal sm:text-5xl">
            Soluções de Excelência
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Oferecemos soluções tecnológicas customizáveis e robustas, desenhadas para potenciar a eficiência e a segurança da sua infraestrutura empresarial.
          </p>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* 2px colored bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg"
                  style={{ backgroundColor: partner.color }}
                />
                
                <h3 className="text-xl font-bold text-persistec-charcoal">
                  {partner.name}
                </h3>
                <p className="mt-4 text-sm text-gray-500">
                  {partner.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Hosting Section */}
      <section className="bg-persistec-light py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <h2 className="mb-8 text-2xl font-bold text-persistec-charcoal underline underline-offset-8 decoration-persistec-gold decoration-4">
              Infraestrutura e Alojamento
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {infrastructureServices.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-persistec-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg font-medium text-persistec-charcoal">
                    {service}
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
