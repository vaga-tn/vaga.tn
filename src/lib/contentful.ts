import { createClient, type Entry, type EntryFieldTypes } from "contentful";

// Content model recovered from the previous Next.js site (content type "blogPost").
export type BlogPostSkeleton = {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    excerpt: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    coverImage: EntryFieldTypes.AssetLink;
    publishedDate: EntryFieldTypes.Date;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
};

export type BlogPost = Entry<BlogPostSkeleton, undefined>;

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

const client =
  space && accessToken ? createClient({ space, accessToken }) : null;

/**
 * All posts, newest first. Fetched at build time; returns [] (with a warning)
 * when the Contentful credentials are absent so local builds never hard-fail.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!client) {
    console.warn(
      "[contentful] CONTENTFUL_SPACE_ID / CONTENTFUL_ACCESS_TOKEN missing — /ressources will build empty.",
    );
    return [];
  }
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-fields.publishedDate"],
  });
  return entries.items;
}

export function formatPostDate(date: string | undefined): string | null {
  if (!date) return null;
  return new Date(date).toLocaleDateString("fr-TN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function coverImageUrl(post: BlogPost): string | null {
  const file =
    post.fields.coverImage && "fields" in post.fields.coverImage
      ? post.fields.coverImage.fields?.file
      : undefined;
  return file?.url ? `https:${file.url}` : null;
}
