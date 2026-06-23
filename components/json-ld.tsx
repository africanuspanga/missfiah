import { BUSINESS, ALL_PRODUCTS } from "@/lib/data";

export function JsonLd() {
  const siteUrl = "https://www.missfiah.co.tz";

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: BUSINESS.name,
    url: siteUrl,
    logo: `${siteUrl}${BUSINESS.logo}`,
    description:
      "Organic-inspired beauty and skincare products based in Kariakoo, Dar es Salaam, Tanzania.",
    sameAs: [BUSINESS.instagramLink],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: BUSINESS.whatsapp,
        availableLanguage: ["English", "Swahili"],
      },
    ],
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteUrl}/#localbusiness`,
    name: BUSINESS.name,
    image: `${siteUrl}${BUSINESS.logo}`,
    url: siteUrl,
    telephone: BUSINESS.whatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: "34 Mafia St, Kariakoo",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    hasMap: "https://maps.app.goo.gl/XqAsGU566zhbSNHVA",
    priceRange: "$$",
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: BUSINESS.name,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/products`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: ALL_PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/products#${product.id}`,
      name: product.name,
      description: product.description,
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "TZS",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/products#${product.id}`,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListData) }}
      />
    </>
  );
}
