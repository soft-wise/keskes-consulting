import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Contact Us | Keskess Consulting",
  description: "Get in touch with our team to discuss your data needs.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Section className={styles.intro} background="muted">
        <h1 className={styles.pageTitle}>{dict.contactPage.title}</h1>
        <p className={styles.pageSubtitle}>
          {dict.contactPage.subtitle}
        </p>
      </Section>

      <Section>
        <div className={styles.container}>
          <div className={styles.formCol}>
            <form className={styles.form}>
              <div className={styles.field}>
                <Label htmlFor="name">{dict.contactPage.form.name} {dict.contactPage.form.required}</Label>
                <Input id="name" required />
              </div>
              <div className={styles.field}>
                <Label htmlFor="email">{dict.contactPage.form.email} {dict.contactPage.form.required}</Label>
                <Input id="email" type="email" required />
              </div>
              <div className={styles.field}>
                <Label htmlFor="phone">{dict.contactPage.form.phone}</Label>
                <Input id="phone" type="tel" />
              </div>
              <div className={styles.field}>
                <Label htmlFor="company">{dict.contactPage.form.company}</Label>
                <Input id="company" />
              </div>
              <div className={styles.field}>
                <Label htmlFor="message">{dict.contactPage.form.message} {dict.contactPage.form.required}</Label>
                <Textarea id="message" required />
              </div>
              <Button type="submit" className={styles.submitBtn}>{dict.contactPage.form.submit}</Button>
            </form>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3>{dict.contactPage.info.title}</h3>
              <div className={styles.infoItem}>
                <span className={styles.label}>{dict.contactPage.info.email}</span>
                <a href="mailto:hello@keskessconsulting.com">hello@keskessconsulting.com</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>{dict.contactPage.info.phone}</span>
                <a href="tel:+15550123456">+1 (555) 012-3456</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>{dict.contactPage.info.office}</span>
                <p>{dict.contactPage.info.address.split('\\n').map((line: string, i: number) => (
                  <span key={i}>{line}{i === 0 && <br/>}</span>
                ))}</p>
              </div>
              
              <div className={styles.social}>
                <h3>{dict.contactPage.social.title}</h3>
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
