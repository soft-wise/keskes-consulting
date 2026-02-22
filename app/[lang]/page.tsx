
import { IconBulb, IconChartBar, IconCloud, IconBrain } from "@tabler/icons-react";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { CTASection } from "@/components/sections/CTA-section";
import { StructuredData, BreadcrumbSchema } from "@/components/seo";
import type { Metadata } from "next";

const baseUrl = "https://keskessconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  
  return {
    title: "Data & Analytics Consulting Services",
    description: "Transform your business with expert data strategy, engineering, and analytics consulting. We help companies unlock the true potential of their data.",
    keywords: [
      "data consulting",
      "analytics consulting",
      "data strategy",
      "business intelligence",
      "data engineering services",
      "cloud data migration",
      "AI ML consulting",
    ],
    openGraph: {
      title: "Keskess Consulting - Data Strategy That Moves Business Forward",
      description: "Expert consulting in data engineering, analytics, cloud migration, and AI/ML solutions.",
      url: `${baseUrl}/${locale}`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const serviceIcons = [
    <div key="bulb" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconBulb className="h-6 w-6 text-burgundy-700" /></div>,
    <div key="chart" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconChartBar className="h-6 w-6 text-burgundy-700" /></div>,
    <div key="cloud" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconCloud className="h-6 w-6 text-burgundy-700" /></div>,
    <div key="brain" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconBrain className="h-6 w-6 text-burgundy-700" /></div>,
  ];

  // WebSite structured data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Keskess Consulting",
    url: baseUrl,
    description: "Data & Analytics Consulting Services",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Breadcrumb schema data
  const breadcrumbItems = [
    { name: "Home", item: `${baseUrl}/${locale}` },
  ];

  return (
    <>
      <StructuredData data={websiteSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HeroSection dict={dict} lang={locale} />
      <ServicesSection dict={dict} lang={locale} icons={serviceIcons} />
      <CaseStudiesSection dict={dict} lang={locale} />
      <CTASection dict={dict} lang={locale} />
    </>
  );
}
