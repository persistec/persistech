"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle, Clock, Globe, Mail, MapPin, Send } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type FormValues = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  subject: "Infraestrutura IT",
  message: "",
};

const contactDetails = [
  {
    label: "Escritório",
    value:
      "Rua da Índia nº 12, 1º Andar, Zona 8, Bairro do Cruzeiro, Município das Ingombotas, Luanda – Angola",
    icon: MapPin,
    href: undefined,
  },
  {
    label: "Email",
    value: "info@persistec.com",
    icon: Mail,
    href: "mailto:info@persistec.com",
  },
  {
    label: "Horário",
    value: "Segunda a sexta, horário de expediente",
    icon: Clock,
    href: undefined,
  },
  {
    label: "Website",
    value: "www.persistec.com",
    icon: Globe,
    href: "https://www.persistec.com",
  },
];

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "O nome é obrigatório.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "O email é obrigatório.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "A mensagem é obrigatória.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="formulario" className="border-y border-hairline bg-sand">
      <div className="container-aurum section-rhythm">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Localização"
              title="Como nos encontrar"
              description="Estamos em Luanda, disponíveis para analisar as necessidades da sua empresa e apresentar a solução adequada."
            />

            <div className="mt-10 border-t border-hairline">
              {contactDetails.map(({ label, value, icon: Icon, href }) => (
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

          <Reveal className="delay-[100ms] lg:col-span-7">
            <Card className="p-6 md:p-8">
              {submitted ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <CheckCircle
                    className="h-12 w-12 text-gold-deep"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h2 className="mt-6 type-headline-md text-ink">
                    Mensagem enviada
                  </h2>
                  <p className="mt-3 max-w-sm type-body-sm text-graphite">
                    Obrigado pelo contacto. Entraremos em contacto brevemente.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="type-headline-md text-ink">
                    Envie-nos uma mensagem
                  </h2>
                  <p className="mt-2 type-body-sm text-graphite">
                    Preencha os campos abaixo e respondemos com a informação
                    necessária.
                  </p>

                  <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
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
                          value={values.name}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className="field"
                        />
                        {errors.name ? (
                          <p id="name-error" className="text-[13px] text-error">
                            {errors.name}
                          </p>
                        ) : null}
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
                          value={values.email}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className="field"
                        />
                        {errors.email ? (
                          <p id="email-error" className="text-[13px] text-error">
                            {errors.email}
                          </p>
                        ) : null}
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
                          value={values.company}
                          onChange={handleChange}
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
                        <select
                          id="subject"
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          className="field"
                        >
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
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className="field"
                      />
                      {errors.message ? (
                        <p id="message-error" className="text-[13px] text-error">
                          {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <Button variant="primary" size="lg" className="w-full" type="submit">
                      <span className="flex items-center justify-center gap-2">
                        Enviar mensagem
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Button>
                  </form>
                </div>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
