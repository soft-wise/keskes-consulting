import Section from "@/components/utils/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import type { Locale } from "@/i18n-config";

export default function ServiceDetail({ 
    lang,
    dict,
    serviceKey,
}: { 
    lang: Locale;
    dict: any;
    serviceKey: 'strategy' | 'engineering' | 'cloud' | 'ai';
}) {
  const service = dict.serviceDetails[serviceKey];
  
  return (
    <>
      <Section background="muted" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10">
            <Link 
                href={`/${lang}/services`}
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-burgundy-700 font-medium mb-8 transition-colors group"
            >
                <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                {dict.serviceDetails.backToServices}
            </Link>
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-burgundy-900 mb-6">{service.title}</h1>
                <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">{service.description}</p>
            </div>
        </div>
      </Section>

      <Section background="white">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">{dict.serviceDetails.whatWeOffer}</h2>
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

      <Section background="muted" className="text-center py-24">
         <h2 className="text-3xl md:text-5xl font-serif font-bold text-burgundy-900 mb-6">{dict.serviceDetails.readyTitle}</h2>
         <p className="text-neutral-600 mb-10 text-xl max-w-2xl mx-auto">
           {dict.serviceDetails.readySubtitle.replace('{service}', service.title)}
         </p>
         <Button href={`/${lang}/contact`} className="text-lg px-8 py-4">{dict.serviceDetails.contactButton}</Button>
      </Section>
    </>
  );
}
