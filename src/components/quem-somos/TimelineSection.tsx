import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    title: "Fundação",
    description:
      "Fundação da Persistech em Luanda com foco em suporte técnico e hardware.",
  },
  {
    title: "Expansão",
    description: "Expansão para soluções de rede e infraestrutura empresarial.",
  },
  {
    title: "Parcerias",
    description: "Estabelecimento de parcerias com HP, Microsoft e Kaspersky.",
  },
  {
    title: "Newmedia",
    description: "Lançamento da divisão de Web Design e comunicação digital.",
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
    <section className="border-y border-hairline bg-sand">
      <div className="container-aurum section-rhythm">
        <SectionHeading
          eyebrow="Percurso"
          title="A Nossa Jornada"
          description="Da fundação em Luanda à entrega de soluções digitais para organizações em Angola."
        />

        <div className="relative mt-12">
          <div
            className="absolute bottom-0 left-2 top-0 w-px bg-hairline md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-2">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16"
                >
                  <div
                    className={cn(
                      "pl-8 md:pl-0",
                      isEven
                        ? "md:col-start-1 md:pr-16"
                        : "md:col-start-2 md:pl-16",
                    )}
                  >
                    <Reveal>
                      <Card hover={false} className="p-6">
                        <p className="type-label text-gold-deep">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 type-headline-sm text-ink">{item.title}</h3>
                        <p className="mt-2 type-body-sm text-graphite">
                          {item.description}
                        </p>
                      </Card>
                    </Reveal>
                  </div>

                  <span
                    className={cn(
                      "absolute left-2 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sand bg-gold md:left-1/2",
                    )}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
