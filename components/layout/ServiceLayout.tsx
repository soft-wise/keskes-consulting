import Section from "@/components/utils/Section";
import Link from "next/link";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import type { Locale } from "@/i18n-config";
import { ServiceSchema } from "@/components/seo";
import { BreadcrumbSchema } from "@/components/seo";
import { getBaseUrl } from "@/lib/seo-utils";
import { CTASection } from "@/components/sections/CTA-section";

export default function ServiceDetail({ 
    lang,
    dict,
    serviceKey,
}: {
    lang: Locale;
    dict: Record<string, unknown>;
    serviceKey: 'due-diligence' | 'strategy' | 'analytics' | 'workshops';
}) {
  const serviceDetails = dict.serviceDetails as Record<string, { title: string; description: string; benefits: string[]; backToServices: string; whatWeOffer: string; readyTitle: string; readySubtitle: string; contactButton: string } & string>;
  const service = serviceDetails[serviceKey];
  const baseUrl = getBaseUrl(lang);
  
  // Service schema data
  const serviceSchemaData = {
    name: service.title,
    description: service.description,
    provider: "Keskess Consulting",
    url: `${baseUrl}/${lang}/services/${serviceKey}`,
  };

  // Breadcrumb schema data
  const breadcrumbItems = [
    { name: "Home", item: `${baseUrl}/${lang}` },
    { name: "Services", item: `${baseUrl}/${lang}/services` },
    { name: service.title, item: `${baseUrl}/${lang}/services/${serviceKey}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema {...serviceSchemaData} />
      
      {/* <div className="sticky top-20 z-40 backdrop-blur-sm bg-white/80">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href={`/${lang}/services`}
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-burgundy-700 font-medium transition-colors group"
          >
            <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {String(serviceDetails.backToServices)}
          </Link>
        </div>
      </div> */}
      
      <Section background="muted" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-burgundy-900 mb-6">{service.title}</h1>
                <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">{service.description}</p>
            </div>
        </div>
      </Section>

      <Section background="white">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">{String(serviceDetails.whatWeOffer)}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {service.benefits.map((benefit: string, i: number) => (
                        <div key={i} className="group p-8 rounded-2xl border border-neutral-100 bg-white hover:border-burgundy-100 hover:shadow-lg hover:shadow-burgundy-50/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-burgundy-50 text-burgundy-700 group-hover:bg-burgundy-700 group-hover:text-white transition-colors">
                                    <IconCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-neutral-800 mb-2">{benefit.split(":")[0]}</h3>
                                    <p className="text-neutral-600 leading-relaxed">{benefit.split(":")[1] || benefit}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Section>
      <CTASection dict={dict} lang={lang} />
    </>
  );
}
