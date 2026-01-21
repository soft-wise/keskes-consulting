"use client";

import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n-config";

export function CaseStudiesSection({ dict, lang }: { dict: any; lang: Locale }) {
  const projects = dict.caseStudies.cases.map((caseStudy: any, index: number) => ({
    title: caseStudy.title,
    description: caseStudy.description,
    link: `/${lang}/case-studies/case-${index + 1}`,
    tag: caseStudy.tag
  }));

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-neutral-900">{dict.caseStudies.sectionTitle}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{dict.caseStudies.sectionSubtitle}</p>
        </motion.div>
        
        <HoverEffect items={projects} />
        
        <div className="flex justify-center mt-8">
          <Link href={`/${lang}/case-studies`} className="text-burgundy-700 font-medium hover:underline flex items-center gap-2 group">
            {dict.caseStudies.viewAll} <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
