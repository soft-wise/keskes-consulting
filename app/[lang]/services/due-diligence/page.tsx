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
    title: "Data Due Diligence | Independent Data Verification",
    description: "Independent data verification for VCs, PEs, and Private Investors. Full KPI verification, data system review, and comprehensive evaluation packages for informed investment decisions.",
    keywords: [
      "data due diligence",
      "KPI verification",
      "data system review",
      "investment due diligence",
      "technical audit",
      "data integrity",
      "bus factor audit",
    ],
    openGraph: {
      title: "Data Due Diligence | Keskess Consulting",
      description: "Independent data verification for investors. Validate figures and uncover gaps in reporting infrastructure.",
      url: `${baseUrl}/${locale}/services/due-diligence`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/due-diligence`,
      languages: {
        en: `${baseUrl}/en/services/due-diligence`,
        de: `${baseUrl}/de/services/due-diligence`,
      },
    },
  };
}

export default async function DueDiligencePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="due-diligence" />;
}
