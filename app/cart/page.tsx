"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { BUSINESS, formatPrice } from "@/lib/data";
import { useCart } from "@/components/cart-provider";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();

  const checkoutMessage = (() => {
    const lines = items.map(
      (item, index) =>
        `${index + 1}. ${item.product.name} - Qty: ${item.quantity} - ${formatPrice(
          item.product.price * item.quantity
        )}`
    );

    return [
      `Hello ${BUSINESS.name}, I would like to order the following products:`,
      "",
      ...lines,
      "",
      `Total: ${formatPrice(totalPrice)}`,
      "",
      "Location:",
      "Delivery Option:",
      "",
      "Please confirm availability and total price.",
    ].join("\n");
  })();

  return (
    <>
      <section className="min-h-[100dvh] bg-gradient-to-b from-stone-50 to-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 text-center sm:mb-10">
            <h1 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Your Cart
            </h1>
            <p className="mt-3 text-sm text-stone-600 sm:text-base">
              Review your selected Missfiah products before checking out on WhatsApp.
            </p>
          </AnimatedSection>

          {items.length === 0 ? (
            <AnimatedSection className="rounded-3xl bg-white p-8 text-center shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 sm:p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 sm:h-20 sm:w-20">
                <ShoppingBag size={28} className="text-stone-400 sm:size-32" />
              </div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-stone-900 sm:text-2xl">
                Your cart is empty
              </h2>
              <p className="mb-6 text-sm text-stone-600 sm:mb-8 sm:text-base">
                Browse our products and add your favorite Missfiah items.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-dark sm:px-7 sm:py-3.5"
              >
                Browse Products
                <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-2">
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 sm:p-6">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-3 border-b border-stone-100 py-4 last:border-0 last:pb-0 first:pt-0 sm:gap-4 sm:py-5"
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-stone-100 sm:h-24 sm:w-24">
                          {item.product.image ? (
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-contain p-1 sm:p-2"
                              sizes="(max-width: 640px) 80px, 96px"
                            />
                          ) : (
                            <ImagePlaceholder
                              label="Image"
                              className="h-full w-full rounded-none"
                              iconSize={20}
                            />
                          )}
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="font-serif text-sm font-semibold text-stone-900 sm:text-base">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-stone-500">
                              {item.product.category}
                              {item.product.size ? ` • ${item.product.size}` : ""}
                            </p>
                          </div>

                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 rounded-full bg-stone-100 p-1 sm:gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1)
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-stone-600 shadow-sm transition-colors hover:text-brand"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-5 text-center text-sm font-semibold sm:w-6">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1)
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-stone-600 shadow-sm transition-colors hover:text-brand"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <div className="text-sm font-semibold text-stone-900 sm:text-base">
                              {formatPrice(item.product.price * item.quantity)}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="self-start rounded-full p-2 text-stone-400 transition-colors hover:bg-red-50 hover:text-red-500"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="lg:col-span-1">
                <AnimatedSection>
                  <div className="rounded-3xl bg-white p-5 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 sm:p-6 lg:sticky lg:top-32">
                    <h2 className="mb-4 font-serif text-lg font-bold text-stone-900 sm:text-xl">
                      Order Summary
                    </h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-stone-600">
                        <span>Items</span>
                        <span>{totalItems}</span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-stone-900 sm:text-lg">
                        <span>Total</span>
                        <span>{formatPrice(totalPrice)}</span>
                      </div>
                    </div>
                    <WhatsAppButton
                      message={checkoutMessage}
                      className="mt-6 w-full bg-[#25D366] px-6 py-4 text-white shadow-lg shadow-[#25D366]/25 hover:-translate-y-0.5 hover:bg-[#128C7E]"
                    >
                      Checkout on WhatsApp
                    </WhatsAppButton>
                    <button
                      onClick={clearCart}
                      className="mt-3 w-full rounded-full px-6 py-3 text-sm font-medium text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-900"
                    >
                      Clear Cart
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
