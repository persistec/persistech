import { persistecClients } from "@/data/clients";

export default function ClientsBanner() {
  return (
    <section aria-label="Clientes" className="border-y border-hairline bg-sand py-12">
      <div className="container-aurum">
        <ul className="grid grid-cols-1 border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {persistecClients.map((client) => (
            <li
              key={client.id}
              className="flex min-h-[68px] items-center border-b border-r border-hairline px-5 py-4"
            >
              <span className="text-sm leading-5 text-graphite">{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
