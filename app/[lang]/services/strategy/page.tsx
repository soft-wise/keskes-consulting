import ServiceLayout from "@/components/layout/ServiceLayout";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
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
    title: "Data Strategy Consulting | Strategic Data Roadmaps",
    description: "Align your data initiatives with business growth objectives. Our data strategy consultants help you map the path from chaos to clarity with comprehensive data maturity assessments and governance frameworks.",
    keywords: [
      "data strategy consulting",
      "data roadmap",
      "data governance",
      "data maturity assessment",
      "business intelligence strategy",
      "data transformation",
      "enterprise data strategy",
    ],
    openGraph: {
      title: "Data Strategy Consulting | Keskess Consulting",
      description: "Transform your data into a competitive advantage with strategic data roadmaps and governance frameworks.",
      url: `${baseUrl}/${locale}/services/strategy`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/strategy`,
      languages: {
        en: `${baseUrl}/en/services/strategy`,
        de: `${baseUrl}/de/services/strategy`,
      },
    },
  };
}

export default async function StrategyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="strategy" />;
}
