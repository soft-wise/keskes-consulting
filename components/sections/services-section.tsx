"use client";

import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n-config";

interface Dictionary {
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAll: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export function ServicesSection({ dict, lang, icons }: { dict: Dictionary; lang: Locale; icons: React.ReactNode[] }) {
  const serviceHrefs = ["/services/strategy", "/services/engineering", "/services/cloud", "/services/ai"];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4 font-serif">{dict.services.sectionTitle}</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {dict.services.sectionSubtitle}
          </p>
        </motion.div>
        
        <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] grid-cols-1 md:grid-cols-2">
          {dict.services.items.map((item, i: number) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={icons[i]}
              href={`/${lang}${serviceHrefs[i]}`}
              className="md:col-span-1"
            />
          ))}
        </BentoGrid>
        
        <div className="flex justify-center mt-10">
          <Link href={`/${lang}/services`} className="bg-burgundy-700 rounded-full text-white px-6 py-3 font-medium hover:bg-burgundy-800 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
            {dict.services.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
