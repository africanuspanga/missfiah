import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Missfiah Beauty Blog",
  description:
    "Read simple skincare tips, product guides, and beauty care advice from Missfiah Organic Products.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-brand/5 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-gold/15 blur-[100px]" />
          <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              Beauty Blog
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl">
              Missfiah Beauty Blog
            </h1>
            <p className="text-lg leading-relaxed text-stone-600">
              Read simple skincare tips, product guides, and beauty care advice
              from Missfiah Organic Products. Learn how to build a better body
              care routine and choose the right products for your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <StaggerItem key={post.id}>
                <article className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-200/60 hover:ring-brand/20">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <BookOpen size={22} />
                  </div>
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {post.category}
                  </span>
                  <h2 className="mb-3 flex-1 font-serif text-xl font-semibold text-stone-900">
                    {post.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-stone-600">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read article
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
