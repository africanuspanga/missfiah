import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Missfiah Organic Products | Beauty Brand in Dar es Salaam",
  description:
    "Learn about Missfiah Organic Products, a Dar es Salaam beauty and skincare brand offering organic-inspired oils, soaps, serums, and shower gels.",
};

const OFFERINGS = [
  "Body oils",
  "Glow serums",
  "Organic and glow soaps",
  "Shower gels",
  "Brightening and polishing body care products",
  "Direct WhatsApp ordering",
  "Customer support for product selection",
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl">
              About {BUSINESS.name}
            </h1>
            <p className="text-lg leading-relaxed text-stone-600">
              Missfiah Organic Products is a Tanzanian beauty and skincare brand
              based in Kariakoo, Dar es Salaam. We provide a growing collection
              of body oils, glow serums, soaps, and shower gels for customers who
              want beautiful, nourished, and glowing-looking skin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection direction="left">
              <h2 className="mb-6 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
                Everyday Beauty Care
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-stone-600">
                Our brand is built around simple, everyday beauty care. We believe
                skincare should feel good, look good, and be easy to access. That
                is why we offer a variety of products that customers can choose
                from depending on their personal skincare routine.
              </p>
              <div className="flex items-center gap-3 rounded-2xl bg-brand/5 p-4">
                <MapPin className="text-brand" size={24} />
                <div>
                  <p className="font-semibold text-stone-900">Our Location</p>
                  <p className="text-sm text-stone-600">{BUSINESS.location}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand/20 to-gold/20 blur-xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-xl shadow-stone-200/50 ring-1 ring-stone-100">
                  <Image
                    src={BUSINESS.aboutImage}
                    alt="About Missfiah Organic Products"
                    fill
                    className="rounded-[2rem] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-stone-100/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            <StaggerItem>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Target size={28} />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-stone-900">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-stone-600">
                  To provide quality beauty and body care products that help
                  customers feel confident, fresh, and radiant every day.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-gold-dark">
                  <Eye size={28} />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-stone-900">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-stone-600">
                  To become a trusted beauty and skincare brand in Tanzania and
                  beyond, known for organic-inspired products, elegant packaging,
                  and customer-focused service.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
              Everything You Need for Your Routine
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Heart size={18} />
                  </div>
                  <span className="font-medium text-stone-900">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
