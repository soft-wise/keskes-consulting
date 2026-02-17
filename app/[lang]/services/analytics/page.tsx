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
    title: "Full Cycle Analytics | KPIs That Matter",
    description: "From raw data to business decisions. We handle the entire analytics process, building KPIs that matter and reliable data infrastructure that scales with your business.",
    keywords: [
      "analytics engineering",
      "data analytics",
      "KPI development",
      "data infrastructure",
      "automated pipelines",
      "business intelligence",
      "data modeling",
    ],
    openGraph: {
      title: "Full Cycle Analytics | Keskess Consulting",
      description: "Turn raw data into insights that accurately reflect performance with reliable infrastructure.",
      url: `${baseUrl}/${locale}/services/analytics`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/analytics`,
      languages: {
        en: `${baseUrl}/en/services/analytics`,
        de: `${baseUrl}/de/services/analytics`,
      },
    },
  };
}

export default async function AnalyticsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="analytics" />;
}
