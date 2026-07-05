const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VAGA",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Windows, Linux, macOS",
  "description": "The All-in-One Cloud ERP Solution. Modern, scalable, and cost-effective workflows built to fully digitize scaling SMEs.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "TND",
    "lowPrice": "1700",
    "highPrice": "3000",
    "offerCount": "2",
    "offers": [
      {
        "@type": "Offer",
        "name": "VAGA Cloud",
        "price": "1700",
        "priceCurrency": "TND",
        "description": "Cloud-hosted ERP suite accessible from anywhere with automatic updates and backups.",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1700",
          "priceCurrency": "TND",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "1",
            "unitCode": "EA"
          }
        }
      },
      {
        "@type": "Offer",
        "name": "VAGA Box",
        "price": "3000",
        "priceCurrency": "TND",
        "description": "On-premise deployment that works entirely without internet, placing 100% of data under your control."
      }
    ]
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MAAK CORP",
  "url": "https://vaga.tn",
  "logo": "https://vaga.tn/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sousse",
    "addressCountry": "TN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+216-95-593-387",
    "contactType": "customer service",
    "email": "vaga@maak-corp.tn"
  }
}

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        id="vaga-software-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        id="maak-corp-organization-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
