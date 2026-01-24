import Link from "next/link";
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
    title: "Case Studies - Real Results from Data Transformation",
    description: "See how we have helped companies transform their data landscape. Real results from our partnership with forward-thinking companies.",
    keywords: [
      "data transformation case studies",
      "analytics success stories",
      "data migration results",
      "business intelligence case studies",
    ],
    openGraph: {
      title: "Case Studies - Data Transformation Success Stories",
      description: "Real results from our partnership with forward-thinking companies.",
      url: `${baseUrl}/${locale}/case-studies`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/case-studies`,
      languages: {
        en: `${baseUrl}/en/case-studies`,
        de: `${baseUrl}/de/case-studies`,
      },
    },
  };
}

const imageColors = ["#E0F2FE", "#F0FDF4", "#FFF7ED"];

export default async function CaseStudiesPage({
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
    { name: "Case Studies", item: `${baseUrl}/${locale}/case-studies` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Section className={styles.intro} background="muted">
        <h1 className={styles.pageTitle}>{dict.caseStudiesPage.title}</h1>
        <p className={styles.pageSubtitle}>
          {dict.caseStudiesPage.subtitle}
        </p>
      </Section>

      <Section>
        <div className={styles.caseList}>
          {dict.caseStudiesPage.cases.map((project, index) => (
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
                {project.keywords && project.keywords.length > 0 && (
                  <div className={styles.keywords}>
                    {project.keywords.map((keyword: string, i: number) => (
                        <span key={i} className={styles.keyword}>{keyword}</span>
                    ))}
                  </div>
                )}
                <Link href={`/${locale}/case-studies/${project.slug}`} className={styles.link}>
                  {dict.caseStudiesPage.readMore} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTASection dict={dict} lang={locale} />
    </>
  );
}
