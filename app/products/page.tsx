import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { ProductCard } from "@/components/product-card";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Shop Missfiah Organic Oils, Soaps, Serums & Shower Gels",
  description:
    "Shop Missfiah Organic Products online. Buy body oils, glow serum, organic soaps, and shower gels. Order via WhatsApp for delivery across Dar es Salaam and Tanzania.",
  keywords: [
    "Missfiah shop",
    "buy organic oil Tanzania",
    "glow serum",
    "organic soap",
    "shower gel",
    "Vitamin C oil",
    "24K Gold oil",
    "Retinol oil",
    "Almond oil",
    "Turmeric soap",
    "Kojic soap",
    "Glutathione soap",
    "whitening shower gel",
    "skincare products Tanzania",
    "beauty products Dar es Salaam",
    "Kariakoo skincare",
    "WhatsApp order skincare Tanzania",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Shop Missfiah Organic Oils, Soaps, Serums & Shower Gels",
    description:
      "Explore the full Missfiah collection: body oils, glow serums, organic soaps, and shower gels. Order easily through WhatsApp.",
    url: "/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Missfiah Organic Oils, Soaps, Serums & Shower Gels",
    description:
      "Explore the full Missfiah collection and order your favourite skincare products through WhatsApp.",
  },
};

export default function ProductsPage() {
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
              Shop Missfiah Products
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl">
              Explore Our Collection
            </h1>
            <p className="text-lg leading-relaxed text-stone-600">
              Explore our full collection of Missfiah Organic Products. Choose
              your preferred oils, soaps, serums, and shower gels, add them to
              your cart, and complete your order through WhatsApp.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {CATEGORIES.map((category, categoryIndex) => (
              <div key={category.id} id={category.id}>
                <AnimatedSection className="mb-10">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="mb-2 inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                        Category
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
                        {category.title}
                      </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-stone-600 sm:text-right">
                      {category.description}
                    </p>
                  </div>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.products.map((product, productIndex) => (
                    <StaggerItem key={product.id}>
                      <ProductCard
                        product={product}
                        index={categoryIndex + productIndex}
                      />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
