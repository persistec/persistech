"use client";

import { useEffect, useRef, useState } from "react";

import Card from "@/components/ui/Card";
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

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * The spine draws downward with scroll position and does not retract.
 * Each dot fills when the line reaches it; its card enters from its own
 * side 100 ms later.
 */
export default function TimelineSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [marks, setMarks] = useState<number[]>([]);

  // Measure each dot's position along the spine once.
  useEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      if (!wrap) {
        return;
      }
      const wrapTop = wrap.getBoundingClientRect().top;
      const height = wrap.offsetHeight;
      setMarks(
        dotRefs.current.map((dot) => {
          if (!dot) {
            return 1;
          }
          const center = dot.getBoundingClientRect().top + dot.offsetHeight / 2 - wrapTop;
          return Math.min(1, Math.max(0, center / height));
        }),
      );
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) {
      return undefined;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (reduce) {
        setProgress(1);
        return;
      }
      const rect = wrap.getBoundingClientRect();
      const drawFrom = window.innerHeight * 0.7;
      setProgress(Math.min(1, Math.max(0, (drawFrom - rect.top) / rect.height)));
    };

    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <section className="border-y border-hairline bg-sand">
      <div className="container-aurum section-rhythm">
        <SectionHeading
          title="A Nossa Jornada"
          description="Da fundação em Luanda, em 2014, à entrega de soluções digitais para organizações em Angola."
        />

        <div ref={wrapRef} className="relative mt-12">
          <div
            className="absolute bottom-0 left-2 top-0 w-px bg-hairline md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="tl-spine absolute left-2 top-0 w-px bg-gold md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-2">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const filled = progress >= (marks[index] ?? 1);

              return (
                <div key={item.title} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16">
                  <div
                    className={cn(
                      "pl-8 md:pl-0",
                      isEven ? "md:col-start-1 md:pr-16" : "md:col-start-2 md:pl-16",
                    )}
                  >
                    <div
                      className={cn(
                        "tl-card",
                        isEven ? "tl-from-left" : "tl-from-right",
                        filled && "tl-active",
                      )}
                    >
                      <Card hover={false} className="p-6">
                        <p className="type-label text-gold-deep">{item.marker}</p>
                        <h3 className="mt-3 type-headline-sm text-ink">{item.title}</h3>
                        <p className="mt-2 type-body-sm text-graphite">{item.description}</p>
                      </Card>
                    </div>
                  </div>

                  <span
                    ref={(node) => {
                      dotRefs.current[index] = node;
                    }}
                    className={cn(
                      "tl-dot absolute left-2 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sand bg-gold md:left-1/2",
                      filled && "tl-dot-active",
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
