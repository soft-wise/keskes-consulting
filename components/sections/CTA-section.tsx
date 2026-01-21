"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n-config";

export function CTASection({ dict, lang }: { dict: any; lang: Locale }) {
  return (
    <section className="py-24 bg-burgundy-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-multiply"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6 font-serif text-burgundy-900"
        >
          {dict.cta.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-burgundy-800 max-w-2xl mx-auto mb-10"
        >
          {dict.cta.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href={`/${lang}/contact`} className="bg-burgundy-700 text-white rounded-full px-8 py-4 font-bold text-lg hover:bg-burgundy-800 transition-all shadow-lg hover:shadow-burgundy-200/50 transform hover:-translate-y-1 inline-block">
            {dict.cta.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
