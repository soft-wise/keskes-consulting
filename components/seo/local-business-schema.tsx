import { StructuredData } from "./structured-data";

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  sameAs?: string[];
  serviceArea?: {
    type: "City" | "AdministrativeArea" | "Country";
    name: string;
  }[];
}

export function LocalBusinessSchema({
  name,
  description,
  url,
  logo,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  sameAs,
  serviceArea,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url,
    logo,
    telephone,
    email,
    address: address ? {
      "@type": "PostalAddress",
      ...address,
    } : undefined,
    geo: geo ? {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    } : undefined,
    openingHoursSpecification: openingHours?.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(":")[0],
      opens: hours.split(":")[1],
      closes: hours.split(":")[2],
    })),
    priceRange,
    sameAs,
    areaServed: serviceArea?.map((area) => ({
      "@type": area.type,
      name: area.name,
    })),
  };

  return <StructuredData data={schema} />;
}
