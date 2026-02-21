"use client";

import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n-config";

interface Dictionary {
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    viewWork: string;
  };
}

export function HeroSection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h1 className="text-3xl md:text-7xl font-bold text-center font-serif text-gold-900">
          {dict.hero.title} <br /> <span className="text-gold-700">{dict.hero.titleHighlight}</span>
        </h1>
        <p className="font-light text-base md:text-2xl text-neutral-600 py-4 text-center max-w-2xl">
          {dict.hero.subtitle}
        </p>
        <div className="flex gap-4">
          <Link href={`/${lang}/contact`} className="bg-gold-700 rounded-full w-fit text-white px-6 py-3 font-medium hover:bg-gold-800 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
            {dict.hero.cta}
          </Link>
          <Link href={`/${lang}/case-studies`} className="bg-white border border-neutral-200 rounded-full w-fit text-neutral-800 px-6 py-3 font-medium hover:bg-neutral-50 transition-colors hover:scale-105 transform duration-200">
            {dict.hero.viewWork}
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
