import { i18n, type Locale } from '@/i18n-config';

/**
 * Get the base URL for a given locale
 * Returns the appropriate domain based on the language
 */
export function getBaseUrl(locale: Locale): string {
  return i18n.domains[locale];
}

/**
 * Get the canonical URL for a given path and locale
 */
export function getCanonicalUrl(path: string, locale: Locale): string {
  const baseUrl = getBaseUrl(locale);
  return `${baseUrl}/${locale}${path}`;
}

/**
 * Get all language alternates for a given path
 */
export function getLanguageAlternates(path: string): Record<string, string> {
  return i18n.locales.reduce((acc, locale) => {
    acc[locale] = getCanonicalUrl(path, locale);
    return acc;
  }, {} as Record<string, string>);
}
