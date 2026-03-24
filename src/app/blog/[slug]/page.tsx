import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import type { Options } from "@contentful/rich-text-react-renderer"
import { Asset } from "contentful"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getAllSlugs, getPostBySlug } from "@/lib/contentful"
import { ArrowLeft } from "lucide-react"

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const { title, excerpt, coverImage } = post.fields
  const imageUrl =
    coverImage && (coverImage as Asset).fields?.file?.url
      ? `https:${(coverImage as Asset).fields.file!.url}`
      : undefined

  return {
    title: `${title} | Blog VAGA`,
    description: excerpt as string | undefined,
    alternates: {
      canonical: `https://vaga.tn/blog/${slug}`,
      languages: { "fr-TN": `https://vaga.tn/blog/${slug}` },
    },
    openGraph: {
      title: title as string,
      description: excerpt as string | undefined,
      url: `https://vaga.tn/blog/${slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: "article",
    },
  }
}

const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold text-zinc-900">{text}</strong>,
    [MARKS.CODE]: (text) => (
      <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="mb-5 text-base leading-relaxed text-zinc-600">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold tracking-tight text-zinc-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold text-zinc-900">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="mt-6 mb-2 text-lg font-semibold text-zinc-900">{children}</h4>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="mb-5 space-y-1.5 pl-5 list-disc marker:text-zinc-300 text-zinc-600">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="mb-5 space-y-1.5 pl-5 list-decimal marker:text-zinc-400 text-zinc-600">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <li className="text-sm leading-relaxed">{children}</li>,
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="my-6 border-l-2 border-[#3ecf8e] pl-4 text-zinc-500 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-zinc-100" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title: assetTitle } = node.data.target.fields
      if (!file?.url) return null
      return (
        <div className="my-8 overflow-hidden border border-zinc-100">
          <Image
            src={`https:${file.url}`}
            alt={assetTitle ?? ""}
            width={file.details?.image?.width ?? 800}
            height={file.details?.image?.height ?? 450}
            className="object-cover w-full"
          />
        </div>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-[#3ecf8e] hover:text-zinc-900"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const { title, body, coverImage, publishedDate, tags, excerpt } = post.fields
  const imageUrl =
    coverImage && (coverImage as Asset).fields?.file?.url
      ? `https:${(coverImage as Asset).fields.file!.url}`
      : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    datePublished: publishedDate,
    url: `https://vaga.tn/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "VAGA",
      url: "https://vaga.tn",
    },
    ...(imageUrl && { image: imageUrl }),
  }

  return (
    <main className="min-h-screen font-sans bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <article className="container max-w-3xl px-4 py-16 mx-auto lg:px-0">

        {/* Back link */}
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Tous les articles
        </Link>

        {/* Tags */}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {(tags as string[]).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
          {title as string}
        </h1>

        {/* Date */}
        {publishedDate && (
          <time className="block mb-10 text-sm text-zinc-400">
            {new Date(publishedDate as string).toLocaleDateString("fr-TN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}

        {/* Cover image */}
        {imageUrl && (
          <div className="mb-10 aspect-[16/9] overflow-hidden border border-zinc-100">
            <Image
              src={imageUrl}
              alt={title as string}
              width={800}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        )}

        {/* Body */}
        <div className="prose-zinc">
          {body && documentToReactComponents(body as Parameters<typeof documentToReactComponents>[0], richTextOptions)}
        </div>

      </article>

      <Footer />
    </main>
  )
}
