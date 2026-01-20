import Link from "next/link";
import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Data strategy that moves <span className={styles.highlight}>business forward</span>
            </h1>
            <p className={styles.heroText}>
              We help forward-thinking companies unlock the true potential of their data through expert consulting and actionable insights.
            </p>
            <div className={styles.heroButtons}>
              <Button href="/contact">Get Started</Button>
              <Button href="/case-studies" variant="outline">View Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <Section background="white">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Real results from real work</h2>
          <Link href="/case-studies" className={styles.linkArrow}>View all case studies &rarr;</Link>
        </div>
        
        <div className={styles.caseGrid}>
          {[1, 2, 3].map((i) => (
            <Card key={i} className={styles.caseCard}>
              <div className={styles.imagePlaceholder} />
              <div className={styles.cardContent}>
                <span className={styles.tag}>Fintech</span>
                <h3 className={styles.cardTitle}>Scaling data infrastructure for a global bank</h3>
                <p className={styles.cardText}>
                  Reduced query times by 40% and improved data reliability across 12 countries.
                </p>
                <Link href={`/case-studies/case-${i}`} className={styles.readMore}>Read case study</Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section background="muted">
        <div className={styles.textCenter}>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <p className={styles.sectionSubtitle}>Comprehensive data solutions for modern enterprises.</p>
        </div>

        <div className={styles.servicesGrid}>
          {[
            { title: "Data Strategy", icon: "Strategy" },
            { title: "Analytics Engineering", icon: "Engineering" },
            { title: "Cloud Migration", icon: "Cloud" },
            { title: "AI & Machine Learning", icon: "AI" }
          ].map((service, i) => (
            <Card key={i} className={styles.serviceCard}>
              <div className={styles.iconPlaceholder}>{service.icon[0]}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>
                Tailored solutions to optimize your data workflow and drive decision-making.
              </p>
              <Link href="/services" className={styles.serviceLink}>Learn more</Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Let’s talk about your data</h2>
            <p className={styles.ctaText}>
              Ready to transform your business? Schedule a free consultation with our experts today.
            </p>
            <Button href="/contact" className={styles.ctaButton}>Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
