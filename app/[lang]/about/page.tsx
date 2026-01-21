import Section from "@/components/utils/Section";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "About Us | Keskess Consulting",
  description: "Learn about our mission, vision, and the team behind Keskess Consulting.",
};

const avatarColors = ["#FECACA", "#BFDBFE", "#BBF7D0"];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
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
            {dict.aboutPage.values.items.map((value: any, i: number) => (
              <div key={i} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.teamContainer}>
           <h2 className={styles.centeredHeading}>{dict.aboutPage.team.title}</h2>
           <div className={styles.teamGrid}>
             {dict.aboutPage.team.members.map((member: any, i: number) => (
               <div key={i} className={styles.teamMember}>
                 <div className={styles.avatar} style={{ backgroundColor: avatarColors[i] }} />
                 <h3 className={styles.memberName}>{member.name}</h3>
                 <p className={styles.memberRole}>{member.role}</p>
               </div>
             ))}
           </div>
        </div>
      </Section>
    </>
  );
}
