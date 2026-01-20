"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
        setHidden(true);
    } else {
        setHidden(false);
    }
    
    if (latest > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
  });

  return (
    <motion.header 
        variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
            "fixed top-0 inset-x-0 mx-auto z-50 w-full transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-4" : "bg-transparent py-6"
        )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-serif font-bold text-2xl text-burgundy-900 tracking-tight z-50 relative">
          Keskess Consulting
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {['Home', 'Services', 'Case Studies', 'About'].map((item) => (
                <li key={item}>
                    <Link 
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
                        className="text-neutral-600 hover:text-burgundy-700 font-medium transition-colors"
                    >
                        {item}
                    </Link>
                </li>
            ))}
            <li>
                <Link 
                    href="/contact" 
                    className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                >
                    Contact
                </Link>
            </li>
          </ul>
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
                    {['Home', 'Services', 'Case Studies', 'About'].map((item) => (
                        <Link 
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
                            className="text-2xl font-serif font-medium text-burgundy-900 hover:text-burgundy-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link 
                        href="/contact" 
                        className="bg-burgundy-700 text-white px-8 py-3 rounded-full font-medium text-lg mt-4 shadow-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
