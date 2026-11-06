import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  "HP Silver Partner",
  "Microsoft",
  "Google Workspace",
  "VMware",
  "Kaspersky",
  "Veeam",
];

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-executive">
      <div className="executive-rule" aria-hidden="true" />

      <div className="container-aurum section-rhythm">
        <SectionHeading
          eyebrow="Tecnologia"
          title="Parceiros & Certificações"
          description="Trabalhamos com fabricantes e plataformas reconhecidas para entregar soluções suportadas e conformes."
          align="center"
          tone="dark"
        />

        <div className="mt-12 grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex min-h-[140px] flex-col justify-between border-b border-r border-white/10 p-5"
            >
              <span className="type-label text-gold-pale">Parceiro</span>
              <p className="mt-6 font-display text-lg font-semibold leading-tight text-ivory">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
