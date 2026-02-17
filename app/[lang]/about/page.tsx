import Section from "@/components/utils/Section";
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
    title: "About Us - Munich-Based Data Consultancy",
    description: "Keskes Consulting is a Munich-based consultancy focused on the architecture and auditing of data systems. We operate at the intersection of business logic and technical execution.",
    keywords: [
      "data consultancy Munich",
      "technical auditing",
      "analytics engineering",
      "data architecture",
      "system stability",
    ],
    openGraph: {
      title: "About Keskess Consulting",
      description: "Munich-based consultancy focused on data architecture and auditing with commitment to system autonomy and long-term stability.",
      url: `${baseUrl}/${locale}/about`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        en: `${baseUrl}/en/about`,
        de: `${baseUrl}/de/about`,
      },
    },
  };
}

const avatarColors = ["#FECACA", "#BFDBFE", "#BBF7D0"];

export default async function AboutPage({
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
    { name: "About", item: `${baseUrl}/${locale}/about` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Section className={styles.intro} background="muted">
        <h1 className={styles.pageTitle}>{dict.aboutPage.title}</h1>
        <p className={styles.pageSubtitle}>
          {dict.aboutPage.subtitle}
        </p>
        <p className={styles.text} style={{ marginTop: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {dict.aboutPage.intro}
        </p>
      </Section>

      <Section>
        <div className={styles.contentStack}>
          <h2 className={styles.centeredHeading}>{dict.aboutPage.services.title}</h2>
          <div className={styles.valuesGrid}>
            {dict.aboutPage.services.items.map((service: Record<string, unknown>, i: number) => (
              <div key={i} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{String(service.title)}</h3>
                <p className={styles.valueDesc}>{String(service.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className={styles.valuesContainer}>
          <h2 className={styles.centeredHeading}>{dict.aboutPage.values.title}</h2>
          <div className={styles.valuesGrid}>
            {dict.aboutPage.values.items.map((value: Record<string, unknown>, i: number) => (
              <div key={i} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{String(value.title)}</h3>
                <p className={styles.valueDesc}>{String(value.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CTASection dict={dict} lang={locale} />
    </>
  );
}
