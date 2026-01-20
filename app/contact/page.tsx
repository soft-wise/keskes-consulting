import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Keskess Consulting",
  description: "Get in touch with our team to discuss your data needs.",
};

export default function ContactPage() {
  return (
    <>
      <Section className={styles.intro} background="muted">
        <h1 className={styles.pageTitle}>Get in Touch</h1>
        <p className={styles.pageSubtitle}>
          Ready to transform your business with data? Fill out the form below or reach out directly.
        </p>
      </Section>

      <Section>
        <div className={styles.container}>
          <div className={styles.formCol}>
            <form className={styles.form}>
              <div className={styles.field}>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className={styles.field}>
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>
              <div className={styles.field}>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              <div className={styles.field}>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." required />
              </div>
              <Button type="submit" className={styles.submitBtn}>Send Message</Button>
            </form>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3>Contact Information</h3>
              <div className={styles.infoItem}>
                <span className={styles.label}>Email</span>
                <a href="mailto:hello@keskessconsulting.com">hello@keskessconsulting.com</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Phone</span>
                <a href="tel:+15550123456">+1 (555) 012-3456</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Office</span>
                <p>123 Data Street<br/>Tech District, CA 94043</p>
              </div>
              
              <div className={styles.social}>
                <h3>Follow Us</h3>
                <div className={styles.socialLinks}>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                    <a href="#">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
