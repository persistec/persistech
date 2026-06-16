import { persistecClients } from "@/data/clients";

export default function ClientsBanner() {
  return (
    <section aria-label="Clientes" className="bg-background-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {persistecClients.map((client) => (
            <div
              key={client.id}
              className="flex min-h-20 items-center justify-center rounded-xl border border-border-default bg-background-primary/40 px-5 py-4 text-center"
            >
              <span className="text-sm font-medium leading-6 text-text-secondary">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
