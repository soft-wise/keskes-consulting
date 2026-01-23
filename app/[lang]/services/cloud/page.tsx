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
    title: "Cloud Migration Services | Legacy to Cloud Data Migration",
    description: "Modernize legacy systems with zero downtime and improved security. Our cloud migration services include multi-cloud strategy, cost optimization, and enterprise-grade security and compliance.",
    keywords: [
      "cloud migration services",
      "legacy to cloud migration",
      "multi-cloud strategy",
      "cloud data migration",
      "cloud cost optimization",
      "cloud security compliance",
      "aws migration",
      "azure migration",
      "gcp migration",
    ],
    openGraph: {
      title: "Cloud Migration Services | Keskess Consulting",
      description: "Modernize legacy systems with confidence. Zero downtime migration with cost optimization and security.",
      url: `${baseUrl}/${locale}/services/cloud`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/cloud`,
      languages: {
        en: `${baseUrl}/en/services/cloud`,
        de: `${baseUrl}/de/services/cloud`,
      },
    },
  };
}

export default async function CloudPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="cloud" />;
}
