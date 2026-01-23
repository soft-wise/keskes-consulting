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
    title: "AI & ML Consulting Services | Predictive Analytics & Machine Learning",
    description: "Deploy predictive models that directly impact the bottom line. Our AI and ML consulting services include predictive modeling, natural language processing, computer vision, and MLOps for production deployment.",
    keywords: [
      "AI consulting",
      "ML consulting",
      "machine learning consulting",
      "predictive modeling",
      "natural language processing",
      "computer vision",
      "MLOps",
      "AI implementation",
      "data science consulting",
      "AI strategy",
    ],
    openGraph: {
      title: "AI & ML Consulting Services | Keskess Consulting",
      description: "Deploy predictive models that directly impact the bottom line. Turn data into decisions with our AI and ML expertise.",
      url: `${baseUrl}/${locale}/services/ai`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/ai`,
      languages: {
        en: `${baseUrl}/en/services/ai`,
        de: `${baseUrl}/de/services/ai`,
      },
    },
  };
}

export default async function AiPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="ai" />;
}
