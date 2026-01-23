import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { StructuredData } from "@/components/seo/structured-data";

const baseUrl = "https://keskessconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  
  return {
    title: "Our Services - Data Strategy, Engineering & Analytics",
    description: "Comprehensive data solutions including strategy, engineering, cloud migration, and AI/ML. Transform your business with our expert consulting services.",
    keywords: [
      "data strategy consulting",
      "analytics engineering",
      "cloud migration services",
      "AI ML consulting",
      "data warehouse",
      "business intelligence consulting",
    ],
    openGraph: {
      title: "Data & Analytics Consulting Services",
      description: "Expert consulting in data strategy, engineering, cloud migration, and AI/ML solutions.",
      url: `${baseUrl}/${locale}/services`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        en: `${baseUrl}/en/services`,
        de: `${baseUrl}/de/services`,
      },
    },
  };
}

const serviceHrefs = ["/services/strategy", "/services/engineering", "/services/cloud", "/services/ai"];
const imageColors = ["#E0F2FE", "#F0FDF4", "#FFF7ED", "#F3E8FF"];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  // BreadcrumbList structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/${locale}/services`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Section className={styles.hero} background="muted">
        <h1 className={styles.heroTitle}>{dict.servicesPage.title}</h1>
        <p className={styles.heroText}>
          {dict.servicesPage.subtitle}
        </p>
      </Section>

      <Section background="white">
        <div className={styles.servicesList}>
          {dict.servicesPage.services.map((service: any, index: number) => (
            <div key={index} className={`${styles.serviceRow} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.contentCol}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.description}</p>
                <ul className={styles.bulletList}>
                  {service.bullets.map((bullet: string, i: number) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <Button href={`/${locale}${serviceHrefs[index]}`} variant="outline">{dict.servicesPage.learnMore}</Button>
              </div>
              <div className={styles.imageCol}>
                <div
                  className={styles.imagePlaceholder}
                  style={{ backgroundColor: imageColors[index] }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="muted" className={styles.ctaSection}>
         <div className={styles.ctaContent}>
            <h2>{dict.servicesPage.ctaTitle}</h2>
            <p>{dict.servicesPage.ctaSubtitle}</p>
            <Button href={`/${locale}/contact`}>{dict.servicesPage.ctaButton}</Button>
         </div>
      </Section>
    </>
  );
}
