import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

/* eslint-disable @typescript-eslint/no-unused-vars */
export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  return (
    <>
      <Section background="muted">
        <Link href="/case-studies" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', display: 'block' }}>&larr; Back to Case Studies</Link>
        <h1 style={{ fontSize: '3rem', maxWidth: '800px' }}>Case Study Detail: {slug}</h1>
      </Section>
      <Section>
        <div style={{ maxWidth: '800px' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                This is a placeholder for the detailed case study content. In a production environment, this content would be fetched from a CMS or markdown file based on the slug: <strong>{slug}</strong>.
            </p>
            <p style={{ marginBottom: '2rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button href="/contact">Start your transformation</Button>
        </div>
      </Section>
    </>
  );
}
