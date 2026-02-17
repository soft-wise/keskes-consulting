import Section from "@/components/utils/Section";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import { CTASection } from "@/components/sections/CTA-section";
import { getDictionary } from "@/get-dictionary";

/* eslint-disable @typescript-eslint/no-unused-vars */
export default async function CaseStudyDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  // Find the case study data based on the slug
  const caseStudy = dict.caseStudiesPage.cases.find((c: { slug: string }) => c.slug === slug);
  const keywords = caseStudy?.keywords || [];

  return (
    <>
      {/* <div className="sticky top-20 z-40 backdrop-blur-sm bg-white/80 bg-transparent! mb-4">
        <div className="container mx-auto px-4 py-4">
          <Link href={`/${lang}/case-studies`} className="inline-flex items-center gap-2 text-neutral-500 hover:text-burgundy-700 font-medium transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform inline-block">&larr;</span>
            Back to Case Studies
          </Link>
        </div>
      </div> */}
      
      <Section background="muted">
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
            {keywords.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>
                        Keywords
                    </h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {keywords.map((keyword: string, index: number) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: 'var(--muted)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '99px',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    color: 'var(--foreground)'
                                }}
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </Section>
      <CTASection dict={dict} lang={locale} />
    </>
  );
}
