import { redirect } from "next/navigation"

export default function RootBlogSlugPage({ params }: { params: { slug: string } }) {
  redirect(`/fr/blog/${params.slug}`)
}
