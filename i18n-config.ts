export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de'] as const,
  domains: {
    en: 'https://keskess-consulting.com',
    de: 'https://keskess-consulting.de',
  },
} as const;

export type Locale = (typeof i18n)['locales'][number];
