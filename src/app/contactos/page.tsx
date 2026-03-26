import Link from "next/link";
import { createLucideIcon } from "lucide-react";

import PageHero from "@/components/contactos/PageHero";
import ContactSection from "@/components/contactos/ContactSection";

const Facebook = createLucideIcon("Facebook", [
  ["path", { d: "M17 3h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z", key: "facebook-path" }],
]);

const Linkedin = createLucideIcon("Linkedin", [
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z", key: "linkedin-path-1" }],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "linkedin-rect" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "linkedin-circle" }],
]);

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
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/2090589"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Persistec"
            className="text-text-secondary transition-colors duration-200 ease-out hover:text-accent-primary"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </>
  );
}
