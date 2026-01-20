// SEO configuration for VAGA landing page
export const seoConfig = {
  siteName: 'VAGA by MAAK CORP',
  companyName: 'MAAK CORP SUARL',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://vaga.maak-corp.tn',

  company: {
    legalName: 'MAAK CORP SUARL',
    registrationNumber: '1847208/C/A/M/000',
    address: {
      street: 'Avenue Yasser Arafet, Sahloul 1, Immeuble N17 au 6eme etage, bureau 2',
      city: 'Sousse',
      postalCode: '4054',
      country: 'Tunisia',
    },
    contact: {
      email: 'contact@maak-corp.tn',
      phone: '+216 93 864 380',
    },
  },

  // Primary keywords for Tunisia/Sousse market
  keywords: {
    primary: [
      'ERP Tunisie',
      'logiciel gestion commerciale Tunisie',
      'logiciel facturation Tunisie',
      'facture électronique Tunisie',
      'ERP Sousse',
      'logiciel gestion Sousse',
    ],
    secondary: [
      'logiciel gestion stock Tunisie',
      'logiciel comptabilité Tunisie',
      'système gestion commerciale',
      'ERP PME Tunisie',
      'logiciel immobilier Tunisie',
      'logiciel automobile Tunisie',
      'gestion centre d\'appel Tunisie',
    ],
    industries: [
      'commerce gros et détail',
      'agence immobilière',
      'concessionnaire automobile',
      'centre d\'appel',
    ],
    locations: [
      'Sousse',
      'Sahloul',
      'Tunisie',
    ],
  },

  social: {
    github: 'https://github.com/aymkh',
    linkedin: 'https://www.linkedin.com/in/aymkh',
    twitter: 'https://x.com/__aymkh',
  },

  products: {
    erp: {
      name: 'VAGA ERP',
      keywords: ['ERP Tunisie', 'logiciel gestion commerciale', 'logiciel facturation', 'gestion stock'],
    },
    sm: {
      name: 'VAGA SM',
      keywords: ['gestion centre d\'appel', 'logiciel support client', 'ticketing Tunisie'],
    },
    auto: {
      name: 'VAGA AUTO',
      keywords: ['logiciel concessionnaire automobile', 'gestion garage Tunisie', 'vente automobile'],
    },
    immo: {
      name: 'VAGA IMMO',
      keywords: ['logiciel immobilier Tunisie', 'gestion agence immobilière', 'location vente propriété'],
    },
  },
};

// Generate structured data for organization
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.company.legalName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: seoConfig.company.contact.phone,
      contactType: 'customer service',
      email: seoConfig.company.contact.email,
      areaServed: 'TN',
      availableLanguage: ['French', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.company.address.street,
      addressLocality: seoConfig.company.address.city,
      postalCode: seoConfig.company.address.postalCode,
      addressCountry: 'TN',
    },
    sameAs: [
      seoConfig.social.github,
      seoConfig.social.linkedin,
      seoConfig.social.twitter,
    ],
  };
}

// Generate structured data for software product
export function getSoftwareSchema(productName: string, description: string, productUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: productName,
    description: description,
    url: productUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TND',
    },
    provider: {
      '@type': 'Organization',
      name: seoConfig.company.legalName,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Tunisia',
    },
  };
}

// Generate local business schema
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: seoConfig.company.legalName,
    image: `${seoConfig.siteUrl}/logo.png`,
    '@id': seoConfig.siteUrl,
    url: seoConfig.siteUrl,
    telephone: seoConfig.company.contact.phone,
    email: seoConfig.company.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.company.address.street,
      addressLocality: seoConfig.company.address.city,
      postalCode: seoConfig.company.address.postalCode,
      addressCountry: 'TN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.8245,
      longitude: 10.6346,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      seoConfig.social.github,
      seoConfig.social.linkedin,
      seoConfig.social.twitter,
    ],
  };
}
