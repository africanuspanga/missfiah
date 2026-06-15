import type { Metadata } from "next";
import {
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { InstagramIcon } from "@/components/icons";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Contact Missfiah Organic Products | Kariakoo Dar es Salaam",
  description:
    "Contact Missfiah Organic Products in Kariakoo, Dar es Salaam. Order through WhatsApp or connect with us on Instagram.",
};

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl">
              Contact {BUSINESS.shortName}
            </h1>
            <p className="text-lg leading-relaxed text-stone-600">
              Have questions about our products or want to place an order? Contact
              Missfiah Organic Products through WhatsApp or Instagram. We are happy
              to help you choose the right product for your skincare routine.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 sm:p-10">
                <h2 className="mb-6 font-serif text-2xl font-bold text-stone-900">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <StaggerContainer className="space-y-5">
                <StaggerItem>
                  <div className="rounded-3xl bg-white p-6 shadow-sm shadow-stone-200/50 ring-1 ring-stone-100">
                    <h3 className="mb-4 font-serif text-xl font-bold text-stone-900">
                      Contact Details
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-sm text-stone-600">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <span className="font-bold text-xs">M</span>
                        </div>
                        <div>
                          <p className="font-semibold text-stone-900">Business Name</p>
                          <p>{BUSINESS.name}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-stone-600">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-stone-900">Location</p>
                          <p>{BUSINESS.location}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-stone-600">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                          <MessageCircle size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-stone-900">WhatsApp</p>
                          <a
                            href={BUSINESS.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-brand"
                          >
                            {BUSINESS.whatsapp}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-stone-600">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4405F]/10 text-[#E4405F]">
                          <InstagramIcon size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-stone-900">Instagram</p>
                          <a
                            href={BUSINESS.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-brand"
                          >
                            {BUSINESS.instagram}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-6 text-white">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Clock size={24} />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-bold">
                      Prefer Fast Response?
                    </h3>
                    <p className="mb-5 text-sm text-white/90">
                      Message us directly on WhatsApp for product availability,
                      prices, and order confirmation.
                    </p>
                    <WhatsAppButton
                      message={`Hello ${BUSINESS.name}, I would like to know more about your products.`}
                      className="w-full bg-white text-brand hover:bg-gold hover:text-stone-900"
                    >
                      Chat on WhatsApp
                    </WhatsAppButton>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
