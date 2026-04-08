import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/contentful"
import { routing } from "@/i18n/routing"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const locales = routing.locales

  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `https://vaga.tn/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }))

  const blogListEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `https://vaga.tn/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  const changelogEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `https://vaga.tn/${locale}/changelog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const blogPostEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    posts.map((post) => ({
      url: `https://vaga.tn/${locale}/blog/${post.fields.slug}`,
      lastModified: new Date(post.sys.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  )

  return [
    ...homeEntries,
    ...blogListEntries,
    ...changelogEntries,
    ...blogPostEntries,
  ]
}
