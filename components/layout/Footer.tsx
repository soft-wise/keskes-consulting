import Link from 'next/link';
import { IconBrandLinkedin } from '@tabler/icons-react';
import type { Locale } from '@/i18n-config';

const Footer = ({ lang }: { lang: Locale }) => {
  const t = {
    description: lang === 'de'
      ? 'Wir helfen zukunftsorientierten Unternehmen, das wahre Potenzial ihrer Daten zu erschließen.'
      : 'We help forward-thinking companies unlock the true potential of their data through expert consulting, engineering, and actionable insights.',
    company: lang === 'de' ? 'Unternehmen' : 'Company',
    legal: lang === 'de' ? 'Rechtliches' : 'Legal',
    aboutUs: lang === 'de' ? 'Über uns' : 'About Us',
    services: lang === 'de' ? 'Leistungen' : 'Services',
    caseStudies: lang === 'de' ? 'Fallstudien' : 'Case Studies',
    contact: lang === 'de' ? 'Kontakt' : 'Contact',
    impressum: 'Impressum',
    privacy: lang === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy',
    terms: lang === 'de' ? 'Nutzungsbedingungen' : 'Terms of Service',
    cookies: lang === 'de' ? 'Cookie-Richtlinie' : 'Cookie Policy',
    copyright: lang === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.',
  };

  return (
    <footer className="bg-gold-50 border-t border-gold-100 text-neutral-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href={`/${lang}`} className="font-serif font-bold text-2xl text-gold-900 tracking-tight hover:text-gold-700 transition-colors">
              Keskess Consulting
            </Link>
            <p className="mt-4 text-neutral-600 max-w-sm leading-relaxed">
              {t.description}
            </p>
            
            <div className="mt-6 flex flex-col gap-2 text-sm text-neutral-600">
                <p>123 Data Street, Tech District, CA 94043</p>
                <div className="flex gap-4">
                    <a href="tel:+15550123456" className="hover:text-gold-700 transition-colors">+1 (555) 012-3456</a>
                    <a href="mailto:hello@keskessconsulting.com" className="hover:text-gold-700 transition-colors">hello@keskessconsulting.com</a>
                </div>
            </div>

            <div className="flex gap-4 mt-6 items-center">
                <div className="flex gap-2">
                    <SocialLink href="#" icon={<IconBrandLinkedin className="w-4 h-4" />} />
                </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gold-900 mb-6 uppercase tracking-wider text-sm">{t.company}</h4>
            <ul className="space-y-3">
              <FooterLink href={`/${lang}/about`}>{t.aboutUs}</FooterLink>
              <FooterLink href={`/${lang}/services`}>{t.services}</FooterLink>
              <FooterLink href={`/${lang}/case-studies`}>{t.caseStudies}</FooterLink>
              <FooterLink href={`/${lang}/contact`}>{t.contact}</FooterLink>
            </ul>
          </div>
          
          <div>
             <h4 className="font-bold text-gold-900 mb-6 uppercase tracking-wider text-sm">{t.legal}</h4>
            <ul className="space-y-3">
              <FooterLink href={`/${lang}/impressum`}>{t.impressum}</FooterLink>
              <FooterLink href={`/${lang}/privacy`}>{t.privacy}</FooterLink>
              <FooterLink href={`/${lang}/terms`}>{t.terms}</FooterLink>
              <FooterLink href={`/${lang}/cookies`}>{t.cookies}</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Keskess Consulting. {t.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             {/* <span>Designed with Aceternity</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link href={href} className="hover:text-gold-700 hover:translate-x-1 transition-all duration-200 inline-block">
            {children}
        </Link>
    </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a href={href} className="p-2 bg-white rounded-full text-gold-900 hover:bg-gold-100 hover:text-gold-700 transition-all duration-200 shadow-sm border border-gold-100">
        {icon}
    </a>
);

export default Footer;
