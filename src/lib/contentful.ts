import { createClient, type EntryFieldTypes, type Entry } from "contentful"

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export type BlogPostSkeleton = {
  contentTypeId: "blogPost"
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    excerpt: EntryFieldTypes.Text
    body: EntryFieldTypes.RichText
    coverImage: EntryFieldTypes.AssetLink
    publishedDate: EntryFieldTypes.Date
    tags: EntryFieldTypes.Array<EntryFieldTypes.Text>
  }
}

export type BlogPost = Entry<BlogPostSkeleton>


export async function getAllPosts(): Promise<BlogPost[]> {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-fields.publishedDate"],
  })
  return entries.items
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  })
  return entries.items[0] ?? null
}

export async function getAllSlugs(): Promise<string[]> {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    select: ["fields.slug"],
  })
  return entries.items.map((item) => item.fields.slug as string)
}
