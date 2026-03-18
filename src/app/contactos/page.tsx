export default function ContactPage() {
  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-persistec-charcoal sm:text-5xl">
            Contactos
          </h1>
          <p className="mt-4 text-gray-600">Estamos aqui para o ajudar. Entre em contacto connosco.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-persistec-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Information Column (Left) */}
            <div className="space-y-12">
              {/* Service Desk */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <svg className="h-6 w-6 text-persistec-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-persistec-charcoal">Service Desk</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <span className="block font-bold text-persistec-charcoal">Horário de Funcionamento:</span>
                    Segunda a Sexta: 08:30 - 17:30<br />
                    Sábado: 09:00 - 13:00
                  </p>
                  <p>
                    <span className="block font-bold text-persistec-charcoal">Email de Suporte:</span>
                    <a href="mailto:suporte@persistec.com" className="hover:text-persistec-gold transition-colors">suporte@persistec.com</a>
                  </p>
                </div>
              </div>

              {/* General Contacts */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <svg className="h-6 w-6 text-persistec-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-persistec-charcoal">Contactos Gerais</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <span className="block font-bold text-persistec-charcoal">Endereço:</span>
                    Rua Major Kanhangulo, Prédio Ambriz, 3º Andar, Luanda, Angola.
                  </p>
                  <p>
                    <span className="block font-bold text-persistec-charcoal">Email Corporativo:</span>
                    <a href="mailto:contacto@persistec.com" className="hover:text-persistec-gold transition-colors">contacto@persistec.com</a>
                  </p>
                  <p>
                    <span className="block font-bold text-persistec-charcoal">Telefones:</span>
                    +244 923 000 000<br />
                    +244 222 000 000
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column (Right) */}
            <div className="rounded-2xl bg-white p-8 shadow-sm lg:p-10">
              <h3 className="mb-6 text-2xl font-bold text-persistec-charcoal">Pedir Informações</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-persistec-gold focus:ring-persistec-gold sm:text-sm"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-persistec-gold focus:ring-persistec-gold sm:text-sm"
                      placeholder="o-seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-persistec-gold focus:ring-persistec-gold sm:text-sm"
                    placeholder="Em que podemos ajudar?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-persistec-gold focus:ring-persistec-gold sm:text-sm"
                    placeholder="Escreva aqui a sua mensagem..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-persistec-gold px-6 py-4 text-lg font-bold text-white shadow-sm transition-all hover:bg-[#b08b3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persistec-gold"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
