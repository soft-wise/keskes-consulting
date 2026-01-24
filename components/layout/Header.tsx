"use client";
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX, IconWorld, IconChevronDown } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n-config';

const Header = ({ lang }: { lang: Locale }) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
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
  const currentLocaleLabel = lang === 'en' ? 'EN' : 'DE';
  const currentLocaleFullName = lang === 'en' ? 'English' : 'Deutsch';
  const switchedLocaleFullName = switchedLocale === 'en' ? 'English' : 'Deutsch';

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
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 text-neutral-500 hover:text-burgundy-700 transition-colors text-sm font-medium"
            >
              <IconWorld className="w-4 h-4" />
              <span className="text-burgundy-900 font-semibold">{currentLocaleLabel}</span>
              <IconChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 min-w-[140px] z-50"
                >
                  <Link
                    href={`/${lang}`}
                    className="block px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-burgundy-50 hover:text-burgundy-700 transition-colors"
                    onClick={() => setLangDropdownOpen(false)}
                  >
                    <IconWorld className="w-4 h-4 inline mr-2" />
                    {currentLocaleFullName}
                  </Link>
                  <Link
                    href={switchedPath}
                    className="block px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-burgundy-50 hover:text-burgundy-700 transition-colors"
                    onClick={() => setLangDropdownOpen(false)}
                  >
                    <IconWorld className="w-4 h-4 inline mr-2" />
                    {switchedLocaleFullName}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
                    
                    {/* Mobile Language Switcher Dropdown */}
                    <div className="relative mt-4">
                        <button
                            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                            className="flex items-center gap-2 text-neutral-500 hover:text-burgundy-700 transition-colors"
                        >
                            <IconWorld className="w-5 h-5" />
                            <span className="text-burgundy-900 font-semibold">{currentLocaleLabel}</span>
                            <IconChevronDown className="w-5 h-5" />
                        </button>
                        <AnimatePresence>
                            {langDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-0 top-full mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 min-w-[160px] z-50"
                                >
                                    <Link
                                        href={`/${lang}`}
                                        className="block px-4 py-2 text-base font-medium text-neutral-700 hover:bg-burgundy-50 hover:text-burgundy-700 transition-colors"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setLangDropdownOpen(false);
                                        }}
                                    >
                                        <IconWorld className="w-5 h-5 inline mr-2" />
                                        {currentLocaleFullName}
                                    </Link>
                                    <Link
                                        href={switchedPath}
                                        className="block px-4 py-2 text-base font-medium text-neutral-700 hover:bg-burgundy-50 hover:text-burgundy-700 transition-colors"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setLangDropdownOpen(false);
                                        }}
                                    >
                                        <IconWorld className="w-5 h-5 inline mr-2" />
                                        {switchedLocaleFullName}
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
