import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Licenciamento", href: "/licenciamento" },
  { label: "Serviços", href: "/servicos" },
  { label: "Newmedia", href: "/newmedia" },
  { label: "Contactos", href: "/contactos" },
];

const services = [
  "Infraestrutura IT",
  "Cibersegurança",
  "Cloud & Virtualização",
  "Web Design & Newmedia",
  "Suporte Técnico",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/Persistech",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/2090589",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/persistech.lda",
    icon: InstagramIcon,
  },
];

const legalLinks = ["Política de Privacidade", "Termos de Uso"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-executive">
      <div className="executive-rule" aria-hidden="true" />

      <div className="container-aurum pb-10 pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center" aria-label="Persistech">
              <Image
                src="/brand/persistech-logo-light.png"
                alt="Logótipo Persistech"
                width={1948}
                height={940}
                className="h-14 w-auto md:h-20"
              />
            </Link>
            <p className="mt-6 type-label text-gold-pale">Expandimos limites</p>
            <p className="mt-3 max-w-xs type-body-sm text-on-executive-muted">
              Soluções tecnológicas avançadas para o crescimento do seu negócio.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/15 text-on-executive-muted transition-colors hover:border-gold/60 hover:text-gold-pale"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="type-label text-gold-pale">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-body-sm text-on-executive-muted transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="type-label text-gold-pale">Serviços</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicos"
                    className="type-body-sm text-on-executive-muted transition-colors hover:text-ivory"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="type-label text-gold-pale">Contacto</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="type-body-sm text-on-executive-muted">
                  Rua da Índia nº 12, 1º Andar, Zona 8, Bairro do Cruzeiro,
                  Município das Ingombotas, Luanda – Angola
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <Link
                  href="mailto:info@persistec.com"
                  className="type-body-sm text-on-executive-muted transition-colors hover:text-ivory"
                >
                  info@persistec.com
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <Globe
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <Link
                  href="https://www.persistec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body-sm text-on-executive-muted transition-colors hover:text-ivory"
                >
                  www.persistec.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-on-executive-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Persistech. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
