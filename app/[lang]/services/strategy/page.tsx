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
    title: "Data Strategy Consulting | Cost Optimization & Execution Roadmaps",
    description: "Defining the steps to a functional data operation that survives the test of time. We provide high-level advisory to build lean systems with predictable costs and detailed execution roadmaps.",
    keywords: [
      "data strategy consulting",
      "cost optimization",
      "execution roadmaps",
      "data governance",
      "lean systems",
      "data maturity",
      "technology selection",
    ],
    openGraph: {
      title: "Data Strategy Consulting | Keskess Consulting",
      description: "Build a system that serves you with cost optimization and detailed execution roadmaps.",
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
