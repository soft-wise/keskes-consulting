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
    title: "The Rational Data Workshop | Team Training & Development",
    description: "Preparing your team for modern data challenges. Dashboard sprints, executive intelligence, and specialized deep dives with zero-friction entry and immediate results.",
    keywords: [
      "data training",
      "data workshop",
      "dashboard training",
      "executive data intelligence",
      "team development",
      "data competence",
      "hands-on training",
    ],
    openGraph: {
      title: "The Rational Data Workshop | Keskess Consulting",
      description: "High-impact training to develop data competence within your existing team structure.",
      url: `${baseUrl}/${locale}/services/workshops`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/workshops`,
      languages: {
        en: `${baseUrl}/en/services/workshops`,
        de: `${baseUrl}/de/services/workshops`,
      },
    },
  };
}

export default async function WorkshopsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="workshops" />;
}
