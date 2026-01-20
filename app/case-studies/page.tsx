import Link from "next/link";
import Section from "@/components/utils/Section";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Keskess Consulting",
  description: "See how we have helped companies transform their data landscape.",
};

const cases = [
  {
    slug: "global-bank-scaling",
    client: "FintechCo",
    title: "Scaling data infrastructure for a global bank",
    summary: "How we reduced query times by 40% and improved data reliability across 12 countries by migrating to a modern cloud data warehouse.",
    metrics: ["40% Faster", "99.9% Uptime", "12 Countries"],
    color: "#E0F2FE"
  },
  {
    slug: "retail-analytics",
    client: "ShopMega",
    title: "Predictive analytics for retail inventory",
    summary: "Implementing machine learning models to predict stock shortages and optimize supply chain for a major retail chain.",
    metrics: ["15% Cost Reduction", "2M+ Products", "Real-time"],
    color: "#F0FDF4"
  },
  {
    slug: "healthcare-compliance",
    client: "HealthPlus",
    title: "Automated compliance for healthcare data",
    summary: "Building a secure, automated framework to ensure HIPAA compliance while enabling research teams to access anonymized data.",
    metrics: ["100% Compliant", "0 Data Leaks", "20x Faster Access"],
    color: "#FFF7ED"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section className={styles.intro} background="muted">
        <h1 className={styles.pageTitle}>Case Studies</h1>
        <p className={styles.pageSubtitle}>
          Real results from our partnership with forward-thinking companies.
        </p>
      </Section>

      <Section>
        <div className={styles.caseList}>
          {cases.map((project, index) => (
            <div key={project.slug} className={styles.caseRow}>
              <div 
                className={styles.imagePlaceholder} 
                style={{ backgroundColor: project.color }} 
              />
              <div className={styles.content}>
                <span className={styles.client}>{project.client}</span>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.summary}>{project.summary}</p>
                <div className={styles.metrics}>
                  {project.metrics.map((m, i) => (
                      <span key={i} className={styles.metric}>{m}</span>
                  ))}
                </div>
                <Link href={`/case-studies/${project.slug}`} className={styles.link}>
                  Read full story &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
