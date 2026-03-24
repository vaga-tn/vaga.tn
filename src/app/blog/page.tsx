import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getAllPosts } from "@/lib/contentful"
import { Asset } from "contentful"

export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: "Blog | VAGA ERP — Conseils de gestion pour PME tunisiennes",
  description:
    "Articles, guides et conseils pratiques sur la gestion d'entreprise, la facturation et l'ERP pour les PME en Tunisie.",
  alternates: {
    canonical: "https://vaga.tn/blog",
    languages: { "fr-TN": "https://vaga.tn/blog" },
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen font-sans bg-white text-zinc-900">
      <Header />

      {/* Page header */}
      <div className="border-b border-zinc-200 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-zinc-400">
            Ressources
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Blog VAGA
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-500">
            Conseils pratiques sur la gestion d&apos;entreprise, l&apos;ERP et la digitalisation pour les PME tunisiennes.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="container mx-auto px-4 lg:px-0 py-16">
        {posts.length === 0 ? (
          <div className="py-24 text-center text-zinc-400">
            <p className="text-lg font-medium">Aucun article pour l&apos;instant.</p>
            <p className="mt-1 text-sm">Revenez bientôt — du contenu arrive.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const { title, slug, excerpt, coverImage, publishedDate, tags } = post.fields
              const imageUrl =
                coverImage && (coverImage as Asset).fields?.file?.url
                  ? `https:${(coverImage as Asset).fields.file!.url}`
                  : null

              return (
                <Link
                  key={post.sys.id}
                  href={`/blog/${slug}`}
                  className="group flex flex-col border border-zinc-200 hover:border-[#3ecf8e] transition-colors duration-200"
                >
                  {/* Cover image */}
                  <div className="aspect-[16/9] overflow-hidden bg-zinc-50">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={title as string}
                        width={640}
                        height={360}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-3xl font-black tracking-tighter text-zinc-200">
                          VAGA
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    {/* Tags */}
                    {Array.isArray(tags) && tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
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

                    <h2 className="text-base font-bold leading-snug text-zinc-900 group-hover:text-[#3ecf8e] transition-colors">
                      {title as string}
                    </h2>

                    {excerpt && (
                      <p className="flex-1 text-sm leading-relaxed text-zinc-500 line-clamp-3">
                        {excerpt as string}
                      </p>
                    )}

                    <time className="mt-auto text-xs text-zinc-400">
                      {publishedDate
                        ? new Date(publishedDate as string).toLocaleDateString("fr-TN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : null}
                    </time>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
