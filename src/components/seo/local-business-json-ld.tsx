import { company, serviceAreas, services } from '@/config/site'

// Dados estruturados de empresa local (schema.org) para o Google entender quem é a ZancaVolt,
// onde atende, quando atende e quais serviços oferece (ZV-34; SEO local em 17/11/2026).
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': `${company.siteUrl}/#empresa`,
  name: company.name,
  url: `${company.siteUrl}/`,
  image: `${company.siteUrl}/og-image.jpg`,
  logo: `${company.siteUrl}/apple-icon.png`,
  telephone: `+${company.whatsappNumber}`,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: company.city,
    addressRegion: company.state,
    addressCountry: 'BR',
  },
  areaServed: [
    ...serviceAreas.map((city) => ({ '@type': 'City', name: `${city} - PR` })),
    { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Curitiba' },
  ],
  openingHoursSpecification: company.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  hasMap: company.googleProfile,
  // Perfis da mesma empresa em outros sites: ajudam o Google a ligar o site ao Perfil da Empresa.
  sameAs: [company.googleProfile, ...Object.values(company.social).filter(Boolean)],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title, description: service.description },
    })),
  },
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      // O JSON vem só de src/config/site.ts; "<" é escapado para o texto não fechar a tag script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, '\u003c') }}
    />
  )
}
