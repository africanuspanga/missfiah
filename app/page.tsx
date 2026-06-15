"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Droplets,
  Leaf,
  Truck,
  MapPin,
  Gem,
} from "lucide-react";
import {
  BUSINESS,
  CATEGORIES,
  WHY_CHOOSE,
  HOW_TO_ORDER,
  POPULAR_PRODUCTS,
} from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { ProductCard } from "@/components/product-card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/About us.jpeg"
        >
          <source src={BUSINESS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            <Sparkles size={16} className="text-gold" />
            Premium Organic Beauty
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Natural Glow, <span className="text-gold">Everyday Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            Premium organic oils, glow serums, soaps, and shower gels for
            radiant, beautiful-looking skin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
            >
              <ShoppingBag size={20} />
              Shop Products
            </Link>
            <WhatsAppButton
              message={`Hello ${BUSINESS.name}, I would like to place an order.`}
              className="w-full border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand sm:w-auto"
            >
              Order on WhatsApp
            </WhatsAppButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-white/80"
          >
            <MapPin size={16} className="text-gold" />
            Available in Kariakoo, Dar es Salaam
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              Beauty Care Inspired by Nature
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Carefully Selected for Glowing Skin
            </h2>
            <p className="text-lg leading-relaxed text-stone-600">
              Missfiah Organic Products brings together carefully selected body
              care products for people who love glowing, nourished, and
              healthy-looking skin. From organic body oils to glow serums, soaps,
              and shower gels, our collection is created to support your everyday
              skincare routine with products that feel luxurious, fresh, and easy
              to use.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-stone-100/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              Explore Our Product Collection
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Find Your Perfect Match
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <StaggerItem key={category.id}>
                <Link
                  href={`/products#${category.id}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-200/60 hover:ring-brand/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Leaf size={24} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-stone-900">
                    {category.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-600">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-brand">
                    View products
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection direction="left" className="lg:sticky lg:top-32">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
                Why Customers Love Missfiah
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
                Beauty Care Made Simple
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-stone-600">
                We believe everyone deserves to feel confident in their skin. Our
                products are designed for everyday use with elegant presentation
                and easy ordering.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <StaggerContainer className="grid gap-5 sm:grid-cols-2">
              {WHY_CHOOSE.map((item, i) => {
                const icons = [
                  <Droplets key="d" size={22} />,
                  <Sparkles key="s" size={22} />,
                  <Truck key="t" size={22} />,
                  <MapPin key="m" size={22} />,
                  <Gem key="g" size={22} />,
                ];
                return (
                  <StaggerItem key={item.title}>
                    <div className="h-full rounded-3xl bg-white p-6 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        {icons[i]}
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold text-stone-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-stone-600">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
                Popular Products
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
                Customer Favorites
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-stone-200 transition-all hover:bg-stone-900 hover:text-white"
            >
              View All Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              Simple Ordering Process
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              How to Order
            </h2>
          </AnimatedSection>

          <StaggerContainer className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-gradient-to-r from-brand/20 via-gold/30 to-brand/20 lg:block" />
            {HOW_TO_ORDER.map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-bold text-brand shadow-lg ring-1 ring-stone-100">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />

      <WhatsAppButton
        message={`Hello ${BUSINESS.name}, I would like to know more about your products.`}
        variant="floating"
      />
    </>
  );
}
