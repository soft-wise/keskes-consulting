import Link from "next/link";
import Section from "@/components/utils/Section";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Case Studies | Keskess Consulting",
  description: "See how we have helped companies transform their data landscape.",
};

const imageColors = ["#E0F2FE", "#F0FDF4", "#FFF7ED"];

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Section className={styles.intro} background="muted">
        <h1 className={styles.pageTitle}>{dict.caseStudiesPage.title}</h1>
        <p className={styles.pageSubtitle}>
          {dict.caseStudiesPage.subtitle}
        </p>
      </Section>

      <Section>
        <div className={styles.caseList}>
          {dict.caseStudiesPage.cases.map((project: any, index: number) => (
            <div key={project.slug} className={styles.caseRow}>
              <div 
                className={styles.imagePlaceholder} 
                style={{ backgroundColor: imageColors[index] }} 
              />
              <div className={styles.content}>
                <span className={styles.client}>{project.client}</span>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.summary}>{project.summary}</p>
                <div className={styles.metrics}>
                  {project.metrics.map((m: string, i: number) => (
                      <span key={i} className={styles.metric}>{m}</span>
                  ))}
                </div>
                <Link href={`/${lang}/case-studies/${project.slug}`} className={styles.link}>
                  {dict.caseStudiesPage.readMore} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
