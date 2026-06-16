import { persistecClients } from "@/data/clients";

export default function ClientsSection() {
  return (
    <section className="bg-background-secondary py-16" aria-labelledby="clientes-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-widest text-text-muted">Clientes</p>
          <h2
            id="clientes-title"
            className="mt-4 text-3xl font-semibold text-text-primary md:text-4xl"
          >
            Algumas organizações que confiaram na Persistech
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {persistecClients.map((client) => (
            <div
              key={client.id}
              className="flex min-h-24 items-center rounded-xl border border-border-default bg-background-primary/40 px-5 py-5 text-center transition-colors duration-200 ease-out hover:border-border-accent"
            >
              <p className="w-full text-sm font-medium leading-6 text-text-secondary">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
