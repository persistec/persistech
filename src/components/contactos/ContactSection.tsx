"use client";

import { useActionState, useState } from "react";
import {
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { sendContactMessage } from "@/app/contactos/actions";
import { CONTACT } from "@/data/site";
import { initialContactState, type ContactState } from "@/app/contactos/contact-form";

const contactChannels = [
  {
    label: "Escritório",
    value: CONTACT.address,
    icon: MapPin,
    href: undefined as string | undefined,
  },
  {
    label: "Telefone",
    value: CONTACT.phoneDisplay,
    icon: Phone,
    href: CONTACT.telHref,
  },
  {
    label: "WhatsApp",
    value: "Fale connosco por mensagem",
    icon: MessageCircle,
    href: CONTACT.whatsappHref,
  },
  {
    label: "Email",
    value: CONTACT.email,
    icon: Mail,
    href: `mailto:${CONTACT.email}`,
  },
  {
    label: "Horário",
    value: "Segunda a sexta, horário de expediente",
    icon: Clock,
    href: undefined as string | undefined,
  },
  {
    label: "Website",
    value: CONTACT.website,
    icon: Globe,
    href: CONTACT.websiteHref,
  },
];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="text-[13px] text-error">
      {message}
    </p>
  );
}

function ContactForm({ onSentAgain }: { onSentAgain: () => void }) {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    sendContactMessage,
    initialContactState,
  );

  if (state.status === "success") {
    return (
      <Card className="p-6 md:p-8">
        <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
          <CheckCircle
            className="h-12 w-12 text-gold-deep"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <h2 className="mt-6 type-headline-md text-ink">Mensagem enviada</h2>
          <p className="mt-3 max-w-sm type-body-sm text-graphite">
            Obrigado pelo contacto. Recebemos a sua mensagem e entraremos em
            contacto brevemente.
          </p>
          <button
            type="button"
            onClick={onSentAgain}
            className="link-underline mt-6 pb-1 text-sm font-medium text-gold-deep transition-colors hover:text-ink"
          >
            Enviar outra mensagem
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8">
      <h2 className="type-headline-md text-ink">Envie-nos uma mensagem</h2>
      <p className="mt-2 type-body-sm text-graphite">
        Preencha os campos abaixo e respondemos com a informação necessária.
      </p>

      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="mt-6 rounded-[4px] border border-error/30 bg-[#f7e6e2] px-4 py-3 type-body-sm text-error"
        >
          {state.message}
        </div>
      ) : null}

      <form className="mt-8 space-y-5" action={formAction} noValidate>
        {/* Honeypot: hidden from humans, filled by bots */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-[13px] font-medium text-graphite"
            >
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(state.errors.name)}
              aria-describedby={state.errors.name ? "name-error" : undefined}
              className="field"
            />
            <FieldError id="name-error" message={state.errors.name} />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-[13px] font-medium text-graphite"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(state.errors.email)}
              aria-describedby={state.errors.email ? "email-error" : undefined}
              className="field"
            />
            <FieldError id="email-error" message={state.errors.email} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="block text-[13px] font-medium text-graphite"
            >
              Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="field"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block text-[13px] font-medium text-graphite"
            >
              Assunto
            </label>
            <select id="subject" name="subject" defaultValue="Infraestrutura IT" className="field">
              <option value="Infraestrutura IT">Infraestrutura IT</option>
              <option value="Cibersegurança">Cibersegurança</option>
              <option value="Cloud & Virtualização">
                Cloud & Virtualização
              </option>
              <option value="Web Design & Newmedia">
                Web Design & Newmedia
              </option>
              <option value="Suporte Técnico">Suporte Técnico</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-[13px] font-medium text-graphite"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(state.errors.message)}
            aria-describedby={state.errors.message ? "message-error" : undefined}
            className="field"
          />
          <FieldError id="message-error" message={state.errors.message} />
        </div>

        <Button variant="primary" size="lg" className="w-full" type="submit" disabled={isPending}>
          <span className="flex items-center justify-center gap-2">
            {isPending ? "A enviar…" : "Enviar mensagem"}
            <Send
              className={`h-4 w-4${isPending ? " motion-safe:animate-spin" : ""}`}
              aria-hidden="true"
            />
          </span>
        </Button>
      </form>
    </Card>
  );
}

export default function ContactSection() {
  const [formKey, setFormKey] = useState(0);

  return (
    <section id="formulario" className="border-y border-hairline bg-sand">
      <div className="container-aurum section-rhythm">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              title="Como nos encontrar"
              description="Estamos em Luanda, disponíveis para analisar as necessidades da sua empresa e apresentar a solução adequada."
            />

            <div className="mt-10 border-t border-hairline">
              {contactChannels.map(({ label, value, icon: Icon, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 border-b border-hairline py-5"
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="type-label text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-2 block type-body-sm text-graphite transition-colors hover:text-gold-deep"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-2 max-w-[46ch] type-body-sm text-graphite">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="delay-[100ms] lg:col-span-7" key={formKey}>
            <ContactForm onSentAgain={() => setFormKey((current) => current + 1)} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
