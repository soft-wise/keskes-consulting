import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { i18n, type Locale } from "@/i18n-config";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://keskessconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  
  const title = "Keskess Consulting | Data & Analytics Consulting";
  const description = "Data strategy that moves business forward. Expert consulting in data engineering, analytics, cloud migration, and AI/ML solutions.";
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Keskess Consulting",
    },
    description,
    keywords: [
      "data consulting",
      "analytics consulting",
      "data strategy",
      "data engineering",
      "cloud migration",
      "AI consulting",
      "ML consulting",
      "business intelligence",
      "data warehouse",
      "data analytics",
    ],
    authors: [{ name: "Keskess Consulting" }],
    creator: "Keskess Consulting",
    publisher: "Keskess Consulting",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "de_DE",
      url: `${baseUrl}/${lang}`,
      siteName: "Keskess Consulting",
      title,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Keskess Consulting - Data & Analytics Consulting",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
      creator: "@keskessconsulting",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  
  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Keskess Consulting",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Data & Analytics Consulting firm specializing in data strategy, engineering, and AI/ML solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Data Street",
      addressLocality: "Tech District",
      addressRegion: "CA",
      postalCode: "94043",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-012-3456",
      contactType: "customer service",
      email: "hello@keskessconsulting.com",
      availableLanguage: ["en", "de"],
    },
    sameAs: [
      "https://www.linkedin.com/company/keskessconsulting",
      "https://twitter.com/keskessconsulting",
      "https://github.com/keskessconsulting",
    ],
  };
  
  return (
    <html lang={lang}>
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <Header lang={locale} />
        <main>{children}</main>
        <Footer lang={locale} />
      </body>
    </html>
  );
}
