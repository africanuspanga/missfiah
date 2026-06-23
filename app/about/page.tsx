import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Missfiah Organic Products | Beauty Brand in Dar es Salaam",
  description:
    "Learn about Missfiah Organic Products, a Dar es Salaam beauty and skincare brand offering organic-inspired oils, soaps, serums, and shower gels at 34 Mafia St, Kariakoo, Tanzania.",
  keywords: [
    "About Missfiah",
    "Missfiah Organic Products",
    "beauty brand Dar es Salaam",
    "skincare brand Kariakoo",
    "organic skincare Tanzania",
    "Missfiah location",
    "Kariakoo beauty products",
    "34 Mafia St Kariakoo",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Missfiah Organic Products | Beauty Brand in Dar es Salaam",
    description:
      "Discover Missfiah Organic Products, a trusted beauty brand based in Kariakoo, Dar es Salaam, Tanzania.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Missfiah Organic Products | Beauty Brand in Dar es Salaam",
    description:
      "Discover Missfiah Organic Products, a trusted beauty brand based in Kariakoo, Dar es Salaam, Tanzania.",
  },
};

const VALUES = [
  {
    title: "Quality First",
    description:
      "We focus on products that feel good, smell pleasant, and support a healthy-looking skin routine.",
  },
  {
    title: "Accessible Beauty",
    description:
      "Our collection is made for everyday people who want reliable skincare without complicated routines.",
  },
  {
    title: "Customer Care",
    description:
      "We are always happy to help customers choose the right product and answer questions through WhatsApp or Instagram.",
  },
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
              Missfiah Organic Products is a beauty and skincare brand based in
              Kariakoo, Dar es Salaam. We offer body oils, glow serums, organic
              soaps, and shower gels for people who want to take care of their
              skin with quality products.
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
                Beauty Care Made Simple
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-stone-600">
                <p>
                  We believe skincare should be easy to follow and enjoyable to
                  use. That is why we bring together a collection of products that
                  support a simple daily routine: cleansing, nourishing, and
                  glowing.
                </p>
                <p>
                  From Vitamin C and 24K Gold body oils to turmeric soaps and
                  brightening shower gels, every product is selected to help
                  customers feel clean, soft, and confident in their skin.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-brand/5 p-4">
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
                  To make quality beauty and body care products available to
                  everyone who wants healthy, glowing, and beautiful-looking skin.
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
                  To become a trusted name in skincare across Tanzania by offering
                  products that customers love and a service they can rely on.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
              Our Values
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Heart size={22} />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
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
