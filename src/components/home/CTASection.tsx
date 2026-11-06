import CTABand from "@/components/ui/CTABand";

const stats = [
  { value: "10+", label: "Anos de experiência" },
  { value: "13", label: "Clientes" },
  { value: "5", label: "Áreas de serviço" },
  { value: "4", label: "Parceiros certificados" },
];

export default function CTASection() {
  return (
    <CTABand
      eyebrow="Pronto para começar"
      title="Vamos encontrar a solução certa para a sua empresa"
      description="Fale connosco para analisarmos as necessidades da sua empresa e indicarmos o caminho mais adequado."
      primary={{ label: "Contactos", href: "/contactos" }}
      secondary={{ label: "Ver soluções", href: "/solucoes" }}
      stats={stats}
    />
  );
}
