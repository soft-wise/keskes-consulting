import { MetadataRoute } from 'next';
import { i18n } from '@/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  // Define all routes with their metadata
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const, lastModified: new Date() },
    { path: '/services', priority: 0.8, changeFreq: 'monthly' as const, lastModified: new Date() },
    { path: '/services/strategy', priority: 0.7, changeFreq: 'monthly' as const, lastModified: new Date() },
    { path: '/services/engineering', priority: 0.7, changeFreq: 'monthly' as const, lastModified: new Date() },
    { path: '/services/cloud', priority: 0.7, changeFreq: 'monthly' as const, lastModified: new Date() },
    { path: '/services/ai', priority: 0.7, changeFreq: 'monthly' as const, lastModified: new Date() },
    { path: '/case-studies', priority: 0.8, changeFreq: 'weekly' as const, lastModified: new Date() },
    { path: '/about', priority: 0.6, changeFreq: 'monthly' as const, lastModified: new Date() },
    { path: '/contact', priority: 0.9, changeFreq: 'monthly' as const, lastModified: new Date() },
  ];

  // Generate sitemap entries for each route in each language
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    i18n.locales.forEach((locale) => {
      const baseUrl = i18n.domains[locale];
      const url = `${baseUrl}/${locale}${route.path}`;
      
      sitemapEntries.push({
        url,
        lastModified: route.lastModified,
        changeFrequency: route.changeFreq,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            i18n.locales.map((loc) => [loc, `${i18n.domains[loc]}/${loc}${route.path}`])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
