export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Persistech",
    "url": "https://persistec.com",
    "logo": "https://persistec.com/logo_PT.png",
    "sameAs": [
      "https://web.facebook.com/Persistech",
      "https://www.linkedin.com/company/2090589",
      "https://www.instagram.com/persistech.lda"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+244-923-000-000",
      "contactType": "customer service",
      "areaServed": "AO",
      "availableLanguage": "Portuguese"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Persistech",
    "image": "https://persistec.com/images/og/home.png",
    "@id": "https://persistec.com",
    "url": "https://persistec.com",
    "telephone": "+244923000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Major Kanhangulo, Prédio Ambriz, 3º Andar",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.8147,
      "longitude": 13.2306
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "16:30"
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
