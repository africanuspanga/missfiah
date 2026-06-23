import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { BLOG_POSTS, BUSINESS } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.id === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Missfiah Beauty Blog`,
    description: post.excerpt,
    keywords: [
      post.category,
      "Missfiah",
      "organic products",
      "skincare",
      "Tanzania",
      "body care",
      "beauty tips",
    ],
    alternates: {
      canonical: `/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "en_TZ",
      siteName: BUSINESS.name,
      url: `/blog/${post.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.id === slug);
  if (!post) return notFound();

  const paragraphs = post.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <article className="bg-gradient-to-b from-stone-50 to-white pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm ring-1 ring-stone-100 transition-colors hover:text-brand"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-stone-500">
              <span className="rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={14} />
                Missfiah Beauty Blog
              </span>
            </div>

            <h1 className="mb-8 font-serif text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="prose prose-stone max-w-none">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-5 text-base leading-relaxed text-stone-600 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </article>

      <CTASection />
    </>
  );
}
