import { MessageCircle } from "lucide-react";

import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/site";

type CTAStat = {
  value: number;
  suffix?: string;
  label: string;
};

type CTAAction = {
  label: string;
  href: string;
  external?: boolean;
};

type CTABandProps = {
  title: string;
  description: string;
  primary: CTAAction;
  secondary?: CTAAction;
  stats?: CTAStat[];
  /** Shows a WhatsApp action next to the primary buttons on the dark band. */
  whatsapp?: boolean;
};

export default function CTABand({
  title,
  description,
  primary,
  secondary,
  stats,
  whatsapp = false,
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-executive">
      <div className="executive-rule" aria-hidden="true" />

      <div className="container-aurum section-rhythm">
        {stats?.length ? (
          <Reveal>
            <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-executive px-5 py-6 md:px-6">
                  <p className="font-mono text-3xl font-medium tracking-tight text-gold-bright md:text-4xl">
                    <CountUp to={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase leading-4 tracking-[0.16em] text-on-executive-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal className="delay-[100ms]">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="type-headline-lg text-ivory">
              {title}
            </h2>
            <p className="mt-4 max-w-[60ch] type-body-md text-on-executive-muted">
              {description}
            </p>

            <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                href={primary.href}
                target={primary.external ? "_blank" : undefined}
                rel={primary.external ? "noopener noreferrer" : undefined}
                arrow
              >
                {primary.label}
              </Button>
              {secondary ? (
                <Button
                  variant="outline-light"
                  size="lg"
                  href={secondary.href}
                  target={secondary.external ? "_blank" : undefined}
                  rel={secondary.external ? "noopener noreferrer" : undefined}
                >
                  {secondary.label}
                </Button>
              ) : null}
              {whatsapp ? (
                <Button
                  variant="outline-light"
                  size="lg"
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </span>
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
