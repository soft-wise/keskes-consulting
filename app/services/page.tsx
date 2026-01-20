import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Keskess Consulting",
  description: "Comprehensive data solutions including strategy, engineering, and analytics.",
};

const services = [
  {
    id: "strategy",
    title: "Data Strategy",
    description: "We help you define a clear roadmap to turn your data into a competitive advantage. Our strategic approach ensures that your data initiatives align with your business goals.",
    bullets: ["Data Maturity Assessment", "Roadmap Development", "Governance Frameworks", "ROI Analysis"],
    imageColor: "#E0F2FE" // Light blue
  },
  {
    id: "engineering",
    title: "Analytics Engineering",
    description: "Build a robust, scalable data foundation. We design and implement modern data stacks that deliver clean, reliable data to your stakeholders.",
    bullets: ["Data Modeling (dbt)", "Pipeline Orchestration", "Data Warehouse Architecture", "Quality Assurance"],
    imageColor: "#F0FDF4" // Light green
  },
  {
    id: "cloud",
    title: "Cloud Migration",
    description: "Move your legacy systems to the cloud with confidence. We handle the complex process of migration while optimizing for cost and performance.",
    bullets: ["Legacy to Cloud", "Multi-cloud Strategy", "Cost Optimization", "Security & Compliance"],
    imageColor: "#FFF7ED" // Light orange
  }
];

export default function ServicesPage() {
  return (
    <>
      <Section className={styles.hero} background="muted">
        <h1 className={styles.heroTitle}>Our Services</h1>
        <p className={styles.heroText}>
          We offer a comprehensive suite of data services designed to specific business challenges and drive growth.
        </p>
      </Section>

      <Section background="white">
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div key={service.id} className={`${styles.serviceRow} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.contentCol}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.description}</p>
                <ul className={styles.bulletList}>
                  {service.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline">Discusss this service</Button>
              </div>
              <div className={styles.imageCol}>
                <div 
                  className={styles.imagePlaceholder} 
                  style={{ backgroundColor: service.imageColor }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
            
      <Section background="muted" className={styles.ctaSection}>
         <div className={styles.ctaContent}>
            <h2>Not sure what you need?</h2>
            <p>Let's hop on a call to diagnose your current data stack.</p>
            <Button href="/contact">Schedule Diagnostics</Button>
         </div>
      </Section>
    </>
  );
}
