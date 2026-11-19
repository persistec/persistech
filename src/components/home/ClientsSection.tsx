import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { persistecClients } from "@/data/clients";
import Reveal from "@/components/ui/Reveal";

export default function ClientsSection() {
  return (
    <section
      className="border-y border-hairline/80 bg-sand"
      aria-labelledby="clientes-title"
    >
      <div className="container-aurum section-rhythm">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 id="clientes-title" className="type-headline-md text-ink">
              Algumas organizações que confiaram na Persistech
            </h2>
          </div>
        </Reveal>

        <Reveal className="delay-[100ms]">
          <ul className="mt-10 grid grid-cols-2 border-l border-t border-hairline/80 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {persistecClients.map((client) => (
              <li
                key={client.id}
                title={client.name}
                className="group flex h-24 items-center justify-center border-b border-r border-hairline/80 bg-paper p-4 md:h-28"
              >
                <Image
                  src={client.image}
                  alt={`Logótipo ${client.name}`}
                  width={210}
                  height={150}
                  className="max-h-10 w-auto max-w-[110px] object-contain mix-blend-multiply grayscale transition-[filter] duration-200 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="delay-[200ms]">
          <div className="mt-10 flex justify-center">
            <Link
              href="/contactos"
              className="link-underline link-arrow-group inline-flex items-center gap-2 pb-1 text-sm font-medium text-gold-deep transition-colors hover:text-ink"
            >
              A sua organização pode ser a próxima
              <ArrowUpRight className="link-arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
