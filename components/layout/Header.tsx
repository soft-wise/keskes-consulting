"use client";
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX, IconWorld } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n-config';

const Header = ({ lang }: { lang: Locale }) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
  });

  const navItems = [
    { label: lang === 'de' ? 'Startseite' : 'Home', href: `/${lang}` },
    { label: lang === 'de' ? 'Leistungen' : 'Services', href: `/${lang}/services` },
    { label: lang === 'de' ? 'Fallstudien' : 'Case Studies', href: `/${lang}/case-studies` },
    { label: lang === 'de' ? 'Über uns' : 'About', href: `/${lang}/about` },
  ];

  const switchedLocale = lang === 'en' ? 'de' : 'en';
  const switchedPath = pathname.replace(`/${lang}`, `/${switchedLocale}`);

  return (
    <motion.header 
        className={cn(
            "fixed top-0 inset-x-0 mx-auto z-50 w-full transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-4" : "bg-transparent py-6"
        )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="font-serif font-bold text-2xl text-burgundy-900 tracking-tight z-50 relative">
          Keskess Consulting
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
                <li key={item.href}>
                    <Link 
                        href={item.href} 
                        className="text-neutral-600 hover:text-burgundy-700 font-medium transition-colors"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
            <li>
                <Link 
                    href={`/${lang}/contact`} 
                    className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                >
                    {lang === 'de' ? 'Kontakt' : 'Contact'}
                </Link>
            </li>
          </ul>
          
          {/* Language Switcher */}
          <Link 
            href={switchedPath}
            className="flex items-center gap-1 text-neutral-500 hover:text-burgundy-700 transition-colors text-sm font-medium"
          >
            <IconWorld className="w-4 h-4" />
            {switchedLocale.toUpperCase()}
          </Link>
        </nav>
        
        {/* Mobile menu toggle */}
        <button 
            className="md:hidden z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <IconX className="text-burgundy-900" /> : <IconMenu2 className="text-burgundy-900" />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                >
                    {navItems.map((item) => (
                        <Link 
                            key={item.href}
                            href={item.href} 
                            className="text-2xl font-serif font-medium text-burgundy-900 hover:text-burgundy-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link 
                        href={`/${lang}/contact`} 
                        className="bg-burgundy-700 text-white px-8 py-3 rounded-full font-medium text-lg mt-4 shadow-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {lang === 'de' ? 'Kontakt' : 'Contact'}
                    </Link>
                    
                    {/* Mobile Language Switcher */}
                    <Link 
                        href={switchedPath}
                        className="flex items-center gap-2 text-neutral-500 hover:text-burgundy-700 transition-colors mt-4"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <IconWorld className="w-5 h-5" />
                        {switchedLocale === 'de' ? 'Deutsch' : 'English'}
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
