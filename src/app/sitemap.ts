import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/contentful"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://vaga.tn/blog/${post.fields.slug}`,
    lastModified: new Date(post.sys.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [
    {
      url: "https://vaga.tn",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://vaga.tn/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://vaga.tn/changelog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogEntries,
  ]
}
