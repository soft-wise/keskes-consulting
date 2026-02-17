import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { BreadcrumbSchema } from "@/components/seo";
import { CTASection } from "@/components/sections/CTA-section";

const baseUrl = "https://keskessconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  
  return {
    title: "Our Services - Data Due Diligence, Strategy & Analytics",
    description: "Specialized data expertise including due diligence for investors, strategy consulting, full cycle analytics, and team workshops. Transform your business with our expert consulting services.",
    keywords: [
      "data due diligence",
      "data strategy consulting",
      "analytics engineering",
      "data workshops",
      "KPI verification",
      "business intelligence consulting",
    ],
    openGraph: {
      title: "Data & Analytics Consulting Services",
      description: "Specialized expertise in data due diligence, strategy consulting, analytics implementation, and team training.",
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

const serviceHrefs = ["/services/due-diligence", "/services/strategy", "/services/analytics", "/services/workshops"];
const imageColors = ["#E0F2FE", "#F0FDF4", "#FFF7ED", "#F3E8FF"];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  // Breadcrumb schema data
  const breadcrumbItems = [
    { name: "Home", item: `${baseUrl}/${locale}` },
    { name: "Services", item: `${baseUrl}/${locale}/services` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Section className={styles.hero} background="muted">
        <h1 className={styles.heroTitle}>{dict.servicesPage.title}</h1>
        <p className={styles.heroText}>
          {dict.servicesPage.subtitle}
        </p>
      </Section>

      <Section background="white">
        <div className={styles.servicesList}>
          {dict.servicesPage.services.map((service: Record<string, unknown>, index: number) => (
            <div key={index} className={`${styles.serviceRow} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.contentCol}>
                <h2 className={styles.serviceTitle}>{String(service.title)}</h2>
                <p className={styles.serviceDesc}>{String(service.description)}</p>
                <ul className={styles.bulletList}>
                  {(service.bullets as string[]).map((bullet: string, i: number) => (
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

      <CTASection dict={dict} lang={locale} />
    </>
  );
}
