import Image from "next/image";

import { persistecClients } from "@/data/clients";

const marqueeClients = [...persistecClients, ...persistecClients];

export default function ClientsSection() {
  return (
    <section className="bg-background-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm uppercase tracking-widest text-text-muted">
          Empresas que confiam em nós
        </p>

        <div
          className="mt-8 overflow-hidden"
          role="region"
          aria-label="Clientes da Persistech"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max items-center gap-6">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-border-default bg-background-primary/40 px-5 transition-all duration-300 ease-out hover:border-border-accent"
              >
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  width={140}
                  height={64}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-12 w-auto opacity-50 grayscale transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
