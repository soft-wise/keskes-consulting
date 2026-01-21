import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Services | Keskess Consulting",
  description: "Comprehensive data solutions including strategy, engineering, and analytics.",
};

const serviceHrefs = ["/services/strategy", "/services/engineering", "/services/cloud", "/services/ai"];
const imageColors = ["#E0F2FE", "#F0FDF4", "#FFF7ED", "#F3E8FF"];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {

  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
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
                <Button href={`/${lang}${serviceHrefs[index]}`} variant="outline">{dict.servicesPage.learnMore}</Button>
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
            <Button href={`/${lang}/contact`}>{dict.servicesPage.ctaButton}</Button>
         </div>
      </Section>
    </>
  );
}
