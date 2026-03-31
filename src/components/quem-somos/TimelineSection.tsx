import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    title: "Fundação",
    description:
      "Fundação da Persistech em Luanda com foco em suporte técnico e hardware.",
  },
  {
    title: "Expansão",
    description:
      "Expansão para soluções de rede e infraestrutura empresarial.",
  },
  {
    title: "Parcerias",
    description:
      "Estabelecimento de parcerias com HP, Microsoft e Kaspersky.",
  },
  {
    title: "Newmedia",
    description:
      "Lançamento da divisão de Web Design e comunicação digital.",
  },
  {
    title: "Hoje",
    description:
      "Mais de uma década de excelência tecnológica ao serviço de Angola.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function TimelineSection() {
  return (
    <section className="grid-bg bg-background-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Percurso" title="A Nossa Jornada" align="center" />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border-accent md:block" />

          <div className="space-y-10">
            {milestones.map((item, index) => (
              <div
                key={item.title}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={cn(
                    "pl-14 md:pl-0",
                    index % 2 === 0 ? "md:pr-14" : "md:order-2 md:pl-14",
                  )}
                >
                  <div className="glass-blue rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={cn("hidden md:block", index % 2 === 0 ? "" : "md:order-1")} />

                <div className="absolute left-5 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background-primary bg-accent-primary shadow-glow-gold md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
