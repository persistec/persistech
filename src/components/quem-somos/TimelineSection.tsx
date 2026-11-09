import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    marker: "2014",
    title: "Fundação",
    description:
      "Fundação da Persistech em Luanda com foco em suporte técnico e hardware.",
  },
  {
    marker: "02",
    title: "Expansão",
    description: "Expansão para soluções de rede e infraestrutura empresarial.",
  },
  {
    marker: "03",
    title: "Parcerias",
    description: "Estabelecimento de parcerias com HP, Microsoft e Kaspersky.",
  },
  {
    marker: "04",
    title: "Newmedia",
    description: "Lançamento da divisão de Web Design e comunicação digital.",
  },
  {
    marker: "Hoje",
    title: "Hoje",
    description: "Desde 2014, mais de uma década de excelência tecnológica ao serviço de Angola.",
  },
];

const revealDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function TimelineSection() {
  return (
    <section className="border-y border-hairline bg-sand">
      <div className="container-aurum section-rhythm">
        <SectionHeading
          title="A Nossa Jornada"
          description="Da fundação em Luanda, em 2014, à entrega de soluções digitais para organizações em Angola."
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
                <Reveal key={item.title} className={revealDelays[index]}>
                  <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16">
                    <div
                      className={cn(
                        "pl-8 md:pl-0",
                        isEven
                          ? "md:col-start-1 md:pr-16"
                          : "md:col-start-2 md:pl-16",
                      )}
                    >
                      <Card hover={false} className="p-6">
                        <p className="type-label text-gold-deep">{item.marker}</p>
                        <h3 className="mt-3 type-headline-sm text-ink">{item.title}</h3>
                        <p className="mt-2 type-body-sm text-graphite">
                          {item.description}
                        </p>
                      </Card>
                    </div>

                    <span
                      className="timeline-dot absolute left-2 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sand bg-gold md:left-1/2"
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
