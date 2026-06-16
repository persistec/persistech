export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Persistech",
    "url": "https://www.persistec.com",
    "logo": "https://www.persistec.com/logo_PT.png",
    "email": "info@persistec.com",
    "sameAs": [
      "https://web.facebook.com/Persistech",
      "https://www.linkedin.com/company/2090589",
      "https://www.instagram.com/persistech.lda"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Persistech",
    "image": "https://www.persistec.com/images/og/home.png",
    "@id": "https://www.persistec.com",
    "url": "https://www.persistec.com",
    "email": "info@persistec.com",
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
