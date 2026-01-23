import Section from "@/components/utils/Section";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { BreadcrumbSchema } from "@/components/seo";

const baseUrl = "https://keskessconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  
  return {
    title: "About Us - Our Mission, Vision & Team",
    description: "Learn about our mission, vision, and the team behind Keskess Consulting. We are dedicated to helping businesses make better data-driven decisions.",
    keywords: [
      "about keskess consulting",
      "data consulting team",
      "data strategy experts",
      "analytics consulting company",
    ],
    openGraph: {
      title: "About Keskess Consulting",
      description: "Data engineers, strategists, and analysts dedicated to helping businesses make better decisions.",
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
      </Section>

      <Section>
        <div className={styles.contentStack}>
          {/* Mission */}
          <div className={styles.row}>
            <div className={styles.textCol}>
              <h2 className={styles.sectionHeading}>{dict.aboutPage.mission.title}</h2>
              <p className={styles.text}>
                {dict.aboutPage.mission.description}
              </p>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imagePlaceholder} style={{ backgroundColor: '#E5E7EB' }} />
            </div>
          </div>

          {/* Vision */}
          <div className={`${styles.row} ${styles.reverse}`}>
            <div className={styles.textCol}>
              <h2 className={styles.sectionHeading}>{dict.aboutPage.vision.title}</h2>
              <p className={styles.text}>
                {dict.aboutPage.vision.description}
              </p>
            </div>
             <div className={styles.imageCol}>
              <div className={styles.imagePlaceholder} style={{ backgroundColor: '#D1D5DB' }} />
            </div>
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

      <Section>
        <div className={styles.teamContainer}>
           <h2 className={styles.centeredHeading}>{dict.aboutPage.team.title}</h2>
           <div className={styles.teamGrid}>
             {dict.aboutPage.team.members.map((member: Record<string, unknown>, i: number) => (
               <div key={i} className={styles.teamMember}>
                 <div className={styles.avatar} style={{ backgroundColor: avatarColors[i] }} />
                 <h3 className={styles.memberName}>{String(member.name)}</h3>
                 <p className={styles.memberRole}>{String(member.role)}</p>
               </div>
             ))}
           </div>
        </div>
      </Section>
    </>
  );
}
