import { StructuredData } from "./structured-data";

export interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  url: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
  areaServed?: {
    type: "City" | "AdministrativeArea" | "Country";
    name: string;
  }[];
  hasOfferCatalog?: {
    name: string;
    itemListElement: Array<{
      type: string;
      name: string;
      description?: string;
    }>;
  };
}

export function ServiceSchema({
  name,
  description,
  provider,
  url,
  offers,
  areaServed,
  hasOfferCatalog,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    url,
    offers: offers ? {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: offers.availability,
    } : undefined,
    areaServed: areaServed?.map((area) => ({
      "@type": area.type,
      name: area.name,
    })),
    hasOfferCatalog: hasOfferCatalog ? {
      "@type": "OfferCatalog",
      name: hasOfferCatalog.name,
      itemListElement: hasOfferCatalog.itemListElement,
    } : undefined,
  };

  return <StructuredData data={schema} />;
}
