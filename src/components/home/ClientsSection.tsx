import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { persistecClients } from "@/data/clients";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ClientsSection() {
  return (
    <section
      className="border-y border-hairline bg-sand"
      aria-labelledby="clientes-title"
    >
      <div className="container-aurum section-rhythm">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Eyebrow>Clientes</Eyebrow>
          <h2 id="clientes-title" className="mt-4 type-headline-md text-ink">
            Algumas organizações que confiaram na Persistech
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-1 border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {persistecClients.map((client, index) => (
            <li
              key={client.id}
              className="flex min-h-[76px] items-center gap-4 border-b border-r border-hairline px-5 py-4"
            >
              <span className="font-mono text-[10px] tracking-[0.14em] text-gold-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-5 text-graphite">{client.name}</span>
            </li>
          ))}
          <li className="flex min-h-[76px] items-center border-b border-r border-hairline px-5 py-4 lg:col-span-2">
            <Link
              href="/contactos"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-deep transition-colors hover:text-ink"
            >
              A sua organização pode ser a próxima
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
