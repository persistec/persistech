import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Soluções", href: "/solucoes" },
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
    <footer className="grid-bg border-t border-border-default bg-background-secondary px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center" aria-label="Persistec">
              <Image
                src="/logo_navbar.png"
                alt="Logótipo Persistec"
                width={160}
                height={56}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-text-secondary">Expandimos limites</p>
            <p className="max-w-xs text-sm leading-6 text-text-muted">
              Soluções tecnológicas avançadas para o crescimento do seu negócio.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-secondary transition-colors duration-200 ease-out hover:text-accent-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text-primary">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 ease-out hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text-primary">
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicos"
                    className="text-sm text-text-secondary transition-colors duration-200 ease-out hover:text-accent-light"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text-primary">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
                <p className="text-sm leading-6 text-text-secondary">
                  Rua Major Kanhangulo, Prédio Ambriz, 3º Andar, Luanda, Angola
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
                <Link
                  href="mailto:contacto@persistec.com"
                  className="text-sm text-text-secondary transition-colors duration-200 ease-out hover:text-accent-light"
                >
                  contacto@persistec.com
                </Link>
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Horário
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Seg — Sex: 08:00 – 16:30
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-default pt-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Persistec. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <span key={link} className="text-text-muted">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
