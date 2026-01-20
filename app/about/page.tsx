import Section from "@/components/utils/Section";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Keskess Consulting",
  description: "Learn about our mission, vision, and the team behind Keskess Consulting.",
};

export default function AboutPage() {
  return (
    <>
      <Section className={styles.intro} background="muted">
        <h1 className={styles.pageTitle}>About Keskess Consulting</h1>
        <p className={styles.pageSubtitle}>
          We are a team of data engineers, strategists, and analysts dedicated to helping businesses make better decisions.
        </p>
      </Section>

      <Section>
        <div className={styles.contentStack}>
          {/* Mission */}
          <div className={styles.row}>
            <div className={styles.textCol}>
              <h2 className={styles.sectionHeading}>Our Mission</h2>
              <p className={styles.text}>
                To democratize access to high-quality data insights. We believe that every company, regardless of size, deserves world-class data infrastructure.
              </p>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imagePlaceholder} style={{ backgroundColor: '#E5E7EB' }} />
            </div>
          </div>

          {/* Vision */}
          <div className={`${styles.row} ${styles.reverse}`}>
            <div className={styles.textCol}>
              <h2 className={styles.sectionHeading}>Our Vision</h2>
              <p className={styles.text}>
                A world where data is not a bottleneck, but an accelerator. We envision a future where business leaders can ask questions and get answers instantly.
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
          <h2 className={styles.centeredHeading}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {[
              { title: "Transparency", desc: "We believe in open communication and clear data." },
              { title: "Excellence", desc: "We don't settle for 'good enough'. We build for scale." },
              { title: "Curiosity", desc: "We ask the hard questions to find the right answers." },
              { title: "Impact", desc: "We focus on work that drives real business results." }
            ].map((value, i) => (
              <div key={i} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.teamContainer}>
           <h2 className={styles.centeredHeading}>Meet the Leadership</h2>
           <div className={styles.teamGrid}>
             {[
               { name: "Sarah Jenkins", role: "CEO & Founder", bg: "#FECACA" },
               { name: "David Chen", role: "CTO", bg: "#BFDBFE" },
               { name: "Maria Rodriguez", role: "Head of Strategy", bg: "#BBF7D0" },
             ].map((member, i) => (
               <div key={i} className={styles.teamMember}>
                 <div className={styles.avatar} style={{ backgroundColor: member.bg }} />
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
