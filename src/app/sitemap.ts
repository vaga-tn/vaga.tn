import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const locales = ['en', 'fr'];
  const products = ['erp', 'sm', 'auto', 'immo', 'invoice'];

  const routes: MetadataRoute.Sitemap = [];

  // Home pages
  locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          fr: `${baseUrl}/fr`,
        },
      },
    });
  });

  // Product pages
  locales.forEach((locale) => {
    products.forEach((product) => {
      routes.push({
        url: `${baseUrl}/${locale}/products/${product}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/products/${product}`,
            fr: `${baseUrl}/fr/products/${product}`,
          },
        },
      });
    });
  });

  // Contact page
  locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          fr: `${baseUrl}/fr/contact`,
        },
      },
    });
  });

  return routes;
}
