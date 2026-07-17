import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per module page (/fonctionnalites/<id>). Copy source: .ai/website/copy.md
const features = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/features' }),
  schema: z.object({
    order: z.number(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    title: z.string(),
    subhead: z.string(),
    card: z.object({
      title: z.string(),
      benefit: z.string(),
    }),
    fonctionnement: z.array(z.object({ label: z.string(), text: z.string() })),
    pourquoi: z.string(),
    related: z.array(z.object({ label: z.string(), href: z.string() })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

export const collections = { features };
