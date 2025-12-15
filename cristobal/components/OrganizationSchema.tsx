export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CRISTOBAL Ltd',
    alternateName: 'КРИСТОБЪЛ ЕООД',
    url: 'https://cristobal.bg',
    logo: 'https://cristobal.bg/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 Kara Nikola Angelov Street',
      addressLocality: 'Pazardzhik',
      postalCode: '4400',
      addressCountry: 'BG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'cristobal.eood@gmail.com',
      contactType: 'Customer Service',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

