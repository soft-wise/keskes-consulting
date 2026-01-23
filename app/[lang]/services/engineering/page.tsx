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
    title: "Analytics Engineering Services | Data Pipeline & Warehouse Architecture",
    description: "Build robust, scalable data foundations with our analytics engineering services. We design and implement modern data stacks including data modeling (dbt), pipeline orchestration, and data warehouse architecture.",
    keywords: [
      "analytics engineering",
      "data pipeline",
      "data warehouse architecture",
      "data modeling dbt",
      "etl pipeline",
      "data engineering services",
      "modern data stack",
      "data quality assurance",
    ],
    openGraph: {
      title: "Analytics Engineering Services | Keskess Consulting",
      description: "Build robust, scalable data foundations with modern data stacks and automated data pipelines.",
      url: `${baseUrl}/${locale}/services/engineering`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/engineering`,
      languages: {
        en: `${baseUrl}/en/services/engineering`,
        de: `${baseUrl}/de/services/engineering`,
      },
    },
  };
}

export default async function EngineeringPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="engineering" />;
}
