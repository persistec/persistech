import Image from "next/image";
import { persistecClients } from "@/data/clients";

export default function ClientsBanner() {
  return (
    <section 
      aria-label="Nossos Clientes" 
      className="bg-persistec-light py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-16">
          {persistecClients.map((client) => (
            <div 
              key={client.id}
              className="relative h-12 w-32 transition-all duration-300 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
            >
              <Image
                src={client.logoUrl}
                alt={`Logótipo da ${client.name}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
