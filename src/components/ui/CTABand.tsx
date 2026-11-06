import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

type CTAStat = {
  value: string;
  label: string;
};

type CTAAction = {
  label: string;
  href: string;
  external?: boolean;
};

type CTABandProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: CTAAction;
  secondary?: CTAAction;
  stats?: CTAStat[];
};

export default function CTABand({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  stats,
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-executive">
      <div className="executive-rule" aria-hidden="true" />

      <div className="container-aurum section-rhythm">
        {stats?.length ? (
          <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-executive px-5 py-6 md:px-6">
                <p className="font-mono text-3xl font-medium tracking-tight text-gold-bright md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase leading-4 tracking-[0.16em] text-on-executive-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h2 className="mt-5 type-headline-lg text-ivory">{title}</h2>
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
          </div>
        </div>
      </div>
    </section>
  );
}
