export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://cyclodron.com/#organization",
    name: "Cyclodron Photography",
    alternateName: "Cyclodron Media & Production",
    url: "https://cyclodron.com",
    logo: "https://cyclodron.com/logo.png",
    image: "https://cyclodron.com/logo.png",
    description:
      "Premium real estate, landscape, and portrait photography services in British Columbia. Specializing in cinematic, high-resolution photography with meticulous attention to detail.",
    telephone: "+1-XXX-XXX-XXXX", // Add your phone number here if you want
    email: "info@cyclodron.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "British Columbia",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "49.2827", // Vancouver coordinates as placeholder
      longitude: "-123.1207",
    },
    areaServed: {
      "@type": "State",
      name: "British Columbia",
    },
    sameAs: [
      "https://www.instagram.com/cyclodron/",
      "https://www.facebook.com/cyclodrongallery",
      "https://www.youtube.com/@cyclodron/",
      "https://x.com/cyclodron",
    ],
    priceRange: "$$-$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0", // Update with your actual Google rating
      reviewCount: "10", // Update with actual review count
      bestRating: "5",
      worstRating: "1",
    },
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://cyclodron.com/#services",
    serviceType: "Photography Services",
    provider: {
      "@id": "https://cyclodron.com/#organization",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Photography Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Photography",
            description:
              "Professional real estate photography featuring luxury properties with cinematic precision and high-resolution detail.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landscape Photography",
            description:
              "Stunning landscape photography capturing the natural beauty of British Columbia and the Pacific Northwest.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cityscape Photography",
            description:
              "Dynamic urban and cityscape photography showcasing architectural beauty and city life with cinematic precision.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portrait Photography",
            description:
              "Artistic portrait photography for individuals, families, and businesses with attention to detail.",
          },
        },
      ],
    },
    areaServed: {
      "@type": "State",
      name: "British Columbia",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://cyclodron.com/#website",
    url: "https://cyclodron.com",
    name: "Cyclodron Photography",
    description: "Premium photography services in British Columbia",
    publisher: {
      "@id": "https://cyclodron.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://cyclodron.com/portfolio?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cyclodron.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://cyclodron.com/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://cyclodron.com/about",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
