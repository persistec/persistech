import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import Button from "@/components/ui/Button";
import SharedPageHero from "@/components/ui/PageHero";
import { CONTACT } from "@/data/site";

export default function ContactosHero() {
  return (
    <SharedPageHero
      title="Contactos"
      lead="Estamos prontos para responder às suas necessidades. Contacte-nos e receba uma proposta personalizada."
      actions={[
        { label: "Enviar mensagem", href: "#formulario" },
        { label: "Ver soluções", href: "/solucoes", variant: "outline" },
      ]}
      aside={
        <div className="relative overflow-hidden border border-white/10 bg-executive p-8">
          <p className="type-label text-gold-pale">Contacto direto</p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-ivory">Escritório</p>
                <p className="mt-1 type-body-sm text-on-executive-muted">
                  Rua da Índia nº 12, 1º Andar, Zona 8, Bairro do Cruzeiro,
                  Município das Ingombotas, Luanda – Angola
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-ivory">Email</p>
                <a
                  href="mailto:info@persistec.com"
                  className="mt-1 block type-body-sm text-on-executive-muted transition-colors hover:text-gold-pale"
                >
                  info@persistec.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-ivory">Website</p>
                <a
                  href="https://www.persistec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block type-body-sm text-on-executive-muted transition-colors hover:text-gold-pale"
                >
                  www.persistec.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-ivory">Telefone</p>
                <a
                  href={CONTACT.telHref}
                  className="mt-1 block type-body-sm text-on-executive-muted transition-colors hover:text-gold-pale"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <Button
              variant="outline-light"
              size="sm"
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp direto
              </span>
            </Button>
            <span className="type-label text-on-executive-muted">Luanda · Angola</span>
          </div>
        </div>
      }
    />
  );
}
