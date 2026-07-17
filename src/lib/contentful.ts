/**
 * Contentful — phase 2 (/ressources blog).
 *
 * Wiring plan:
 *  1. `npm install contentful`
 *  2. Set CONTENTFUL_SPACE_ID + CONTENTFUL_DELIVERY_TOKEN (see .env.example).
 *  3. Implement getBlogPosts() with the delivery client, fetched at build time
 *     from src/pages/ressources/index.astro + [slug].astro.
 *  4. Add a Contentful publish webhook → Netlify build hook so new posts
 *     trigger a rebuild.
 */

export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  throw new Error('Contentful non câblé — phase 2 (/ressources). Voir src/lib/contentful.ts');
}
