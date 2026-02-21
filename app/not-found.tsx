'use client';

import Link from 'next/link';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gold-50 to-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-bold text-gold-700 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-600 mb-8">
          We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/en"
            className="inline-flex items-center justify-center gap-2 bg-gold-700 text-white px-6 py-3 rounded-lg hover:bg-gold-800 transition-colors font-medium"
          >
            <IconHome className="w-5 h-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-gold-700 text-gold-700 px-6 py-3 rounded-lg hover:bg-gold-50 transition-colors font-medium"
          >
            <IconArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/en/services" className="text-gold-700 hover:underline text-sm">
              Services
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/en/case-studies" className="text-gold-700 hover:underline text-sm">
              Case Studies
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/en/about" className="text-gold-700 hover:underline text-sm">
              About Us
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/en/contact" className="text-gold-700 hover:underline text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
