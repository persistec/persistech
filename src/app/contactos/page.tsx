import type { Metadata } from "next";
import Link from "next/link";

import ContactSection from "@/components/contactos/ContactSection";
import PageHero from "@/components/contactos/PageHero";
import { FacebookIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contactos | Persistec",
  description:
    "Entre em contacto com a Persistec. Estamos em Luanda, Angola, prontos para ajudar.",
  openGraph: {
    title: "Contactos | Persistec",
    description:
      "Entre em contacto com a Persistec. Estamos em Luanda, Angola, prontos para ajudar.",
    type: "website",
    locale: "pt_AO",
    images: [{ url: "/images/og/og-contactos.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactosPage() {
  return (
    <>
      <PageHero />
      <ContactSection />

      <section className="bg-background-secondary py-12">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 px-6">
          <p className="text-text-muted">Siga-nos:</p>
          <Link
            href="https://www.facebook.com/Persistech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Persistec"
            className="text-text-secondary transition-colors duration-200 ease-out hover:text-accent-primary"
          >
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/2090589"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Persistec"
            className="text-text-secondary transition-colors duration-200 ease-out hover:text-accent-primary"
          >
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </>
  );
}
