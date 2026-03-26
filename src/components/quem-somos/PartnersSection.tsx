import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
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
    <section className="bg-background-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Tecnologia"
          title="Parceiros & Certificações"
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <Card
              key={partner}
              hover={false}
              className="flex min-h-48 items-center justify-center"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <Badge>Parceiro Certificado</Badge>
                <p className="text-base font-medium text-text-secondary">{partner}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
