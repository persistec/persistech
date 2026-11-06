import type { Metadata } from "next";
import Link from "next/link";

import ContactSection from "@/components/contactos/ContactSection";
import PageHero from "@/components/contactos/PageHero";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Fale connosco. Estamos em Luanda, prontos para analisar as necessidades da sua empresa e apresentar a solução ideal.",
  keywords: ["Contacto Persistech", "Suporte IT Angola", "Morada Persistech"],
  openGraph: {
    title: "Contactos",
    description:
      "Fale connosco. Estamos em Luanda, prontos para analisar as necessidades da sua empresa e apresentar a solução ideal.",
    type: "website",
    locale: "pt_AO",
    images: [
      {
        url: "/images/og/og-contactos.jpg",
        width: 1200,
        height: 630,
        alt: "Persistech — Contactos",
      },
    ],
  },
};

const socialLinks = [
  {
    label: "Facebook Persistech",
    href: "https://www.facebook.com/Persistech",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn Persistech",
    href: "https://www.linkedin.com/company/2090589",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram Persistech",
    href: "https://www.instagram.com/persistech.lda",
    icon: InstagramIcon,
  },
];

export default function ContactosPage() {
  return (
    <>
      <PageHero />
      <ContactSection />

      <section className="bg-canvas py-10">
        <div className="container-aurum flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="type-label text-muted">Siga-nos</p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-hairline text-graphite transition-colors hover:border-gold/60 hover:text-gold-deep"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
