"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle, Globe, Mail, MapPin, Send } from "lucide-react";

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

function fieldClass(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-background-elevated px-4 py-3 text-text-primary outline-none transition-all duration-200 ease-out",
    hasError
      ? "border-border-accent shadow-glow-gold"
      : "border-border-default focus:border-border-accent focus:shadow-glow-gold",
  ].join(" ");
}

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
    <section className="grid-bg bg-background-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Localização"
              title="Como nos encontrar"
              align="left"
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-accent-primary" />
                <p className="text-base text-text-secondary">
                  Rua da Índia nº 12, 1º Andar, Zona 8, Bairro do Cruzeiro,
                  Município das Ingombotas, Luanda – Angola
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-accent-primary" />
                <a
                  href="mailto:info@persistec.com"
                  className="text-base text-text-secondary transition-colors duration-200 ease-out hover:text-accent-light"
                >
                  info@persistec.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="mt-1 h-6 w-6 shrink-0 text-accent-primary" />
                <a
                  href="https://www.persistec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-text-secondary transition-colors duration-200 ease-out hover:text-accent-light"
                >
                  www.persistec.com
                </a>
              </div>
            </div>
          </div>

          <Reveal className="delay-[100ms]">
            <Card className="p-8">
              {submitted ? (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                  <CheckCircle className="h-14 w-14 text-accent-primary" />
                  <h2 className="mt-6 text-2xl font-semibold text-text-primary">
                    Mensagem enviada!
                  </h2>
                  <p className="mt-3 max-w-sm text-text-secondary">
                    Entraremos em contacto brevemente.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold text-text-primary">
                    Envie-nos uma mensagem
                  </h2>

                  <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-text-secondary">
                        Nome completo
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        className={fieldClass(Boolean(errors.name))}
                      />
                      {errors.name ? (
                        <p className="text-sm text-accent-light">{errors.name}</p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-text-secondary">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className={fieldClass(Boolean(errors.email))}
                      />
                      {errors.email ? (
                        <p className="text-sm text-accent-light">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm text-text-secondary">
                        Empresa
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={handleChange}
                        className={fieldClass(false)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-text-secondary">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        className={fieldClass(false)}
                      >
                        <option value="Infraestrutura IT">Infraestrutura IT</option>
                        <option value="Cibersegurança">Cibersegurança</option>
                        <option value="Cloud & Virtualização">Cloud & Virtualização</option>
                        <option value="Web Design & Newmedia">Web Design & Newmedia</option>
                        <option value="Suporte Técnico">Suporte Técnico</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-text-secondary">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={handleChange}
                        className={fieldClass(Boolean(errors.message))}
                      />
                      {errors.message ? (
                        <p className="text-sm text-accent-light">{errors.message}</p>
                      ) : null}
                    </div>

                    <Button variant="primary" size="lg" className="w-full" type="submit">
                      <span className="flex items-center justify-center gap-2">
                        Enviar Mensagem
                        <Send className="h-4 w-4" />
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
