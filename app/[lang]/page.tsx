
import { IconBulb, IconChartBar, IconCloud, IconBrain } from "@tabler/icons-react";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { CTASection } from "@/components/sections/CTA-section";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const serviceIcons = [
    <div key="bulb" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconBulb className="h-6 w-6 text-burgundy-700" /></div>,
    <div key="chart" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconChartBar className="h-6 w-6 text-burgundy-700" /></div>,
    <div key="cloud" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconCloud className="h-6 w-6 text-burgundy-700" /></div>,
    <div key="brain" className="p-3 bg-burgundy-50 w-fit rounded-lg mb-2"><IconBrain className="h-6 w-6 text-burgundy-700" /></div>,
  ];

  return (
    <>
      <HeroSection dict={dict} lang={lang} />
      <ServicesSection dict={dict} lang={lang} icons={serviceIcons} />
      <CaseStudiesSection dict={dict} lang={lang} />
      <CTASection dict={dict} lang={lang} />
    </>
  );
}
