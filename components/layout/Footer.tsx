import Link from 'next/link';
import { IconBrandLinkedin, IconBrandTwitter, IconBrandGithub } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy-50 border-t border-burgundy-100 text-neutral-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif font-bold text-2xl text-burgundy-900 tracking-tight hover:text-burgundy-700 transition-colors">
              Keskess Consulting
            </Link>
            <p className="mt-4 text-neutral-600 max-w-sm leading-relaxed">
              We help forward-thinking companies unlock the true potential of their data through expert consulting, engineering, and actionable insights.
            </p>
            <div className="flex gap-4 mt-6">
                <SocialLink href="#" icon={<IconBrandLinkedin className="w-5 h-5" />} />
                <SocialLink href="#" icon={<IconBrandTwitter className="w-5 h-5" />} />
                <SocialLink href="#" icon={<IconBrandGithub className="w-5 h-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-burgundy-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
             <h4 className="font-bold text-burgundy-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-burgundy-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Keskess Consulting. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Designed with Aceternity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link href={href} className="hover:text-burgundy-700 hover:translate-x-1 transition-all duration-200 inline-block">
            {children}
        </Link>
    </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a href={href} className="p-2 bg-white rounded-full text-burgundy-900 hover:bg-burgundy-100 hover:text-burgundy-700 transition-all duration-200 shadow-sm border border-burgundy-100">
        {icon}
    </a>
);

export default Footer;
