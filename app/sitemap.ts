import { MetadataRoute } from 'next';
import { i18n } from '@/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://keskessconsulting.com';
  
  // Define all routes
  const routes = [
    '',
    '/services',
    '/services/strategy',
    '/services/engineering',
    '/services/cloud',
    '/services/ai',
    '/case-studies',
    '/about',
    '/contact',
  ];

  // Generate sitemap entries for each route in each language
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    i18n.locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${route}`;
      
      // Set priority based on route importance
      let priority = 0.5;
      if (route === '') priority = 1.0; // Home page
      else if (route === '/services' || route === '/case-studies') priority = 0.8;
      else if (route.startsWith('/services/')) priority = 0.7;
      else if (route === '/contact') priority = 0.9;
      
      // Set change frequency
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';
      if (route === '' || route === '/case-studies') changeFrequency = 'weekly';
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemapEntries;
}
