"use client";

import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n-config";

interface Dictionary {
  caseStudies: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAll: string;
    cases: Array<{
      title: string;
      description: string;
      tag: string;
    }>;
  };
}

export function CaseStudiesSection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const projects = dict.caseStudies.cases.map((caseStudy, index: number) => ({
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
          <Link href={`/${lang}/case-studies`} className="bg-gold-700 rounded-full text-white px-6 py-3 font-medium hover:bg-gold-800 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
            {dict.caseStudies.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
