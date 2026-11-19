import { CONTACT } from "@/data/site";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Persistech",
    "url": CONTACT.websiteHref,
    "logo": `${CONTACT.websiteHref}/brand/persistech-logo.png`,
    "email": CONTACT.email,
    "telephone": CONTACT.phoneDisplay,
    "sameAs": [
      "https://www.facebook.com/Persistech",
      "https://www.linkedin.com/company/2090589",
      "https://www.instagram.com/persistech.lda"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Persistech",
    "image": `${CONTACT.websiteHref}/images/og/og-home.webp`,
    "@id": CONTACT.websiteHref,
    "url": CONTACT.websiteHref,
    "email": CONTACT.email,
    "telephone": CONTACT.phoneDisplay,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua da Índia nº 12, 1º Andar, Zona 8, Bairro do Cruzeiro, Município das Ingombotas",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
