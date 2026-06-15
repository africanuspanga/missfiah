"use client";

import { CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTASection({
  title = "Ready to Start Your Glow Routine?",
  description = "Shop Missfiah Organic Products today and discover beauty care made for everyday confidence.",
  buttonText = "Order Now on WhatsApp",
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-center text-white shadow-2xl shadow-brand/25 sm:px-10 lg:rounded-[2.5rem] lg:py-20">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="mx-auto mb-4 max-w-2xl font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base text-white/90 sm:text-lg">
                {description}
              </p>
              <WhatsAppButton
                message={`Hello ${BUSINESS.name}, I would like to place an order.`}
                className="bg-white text-brand hover:bg-gold hover:text-stone-900"
              >
                <CheckCircle2 size={20} />
                {buttonText}
              </WhatsAppButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
