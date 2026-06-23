import type { Metadata } from "next";
import { MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { InstagramIcon } from "@/components/icons";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Contact Missfiah Organic Products | Kariakoo Dar es Salaam",
  description:
    "Visit Missfiah Organic Products at 34 Mafia St, Kariakoo, Dar es Salaam, Tanzania. Order skincare, body oils, soaps, serums and shower gels via WhatsApp.",
  keywords: [
    "Contact Missfiah",
    "Missfiah WhatsApp",
    "order skincare Dar es Salaam",
    "Kariakoo beauty shop",
    "Missfiah Instagram",
    "Missfiah location",
    "34 Mafia St Kariakoo",
    "organic skincare Dar es Salaam",
    "Missfiah address",
    "beauty products Tanzania",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Missfiah Organic Products | Kariakoo Dar es Salaam",
    description:
      "Visit us at 34 Mafia St, Kariakoo, Dar es Salaam. Order skincare and beauty products via WhatsApp or Instagram.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Missfiah Organic Products | Kariakoo Dar es Salaam",
    description:
      "Visit us at 34 Mafia St, Kariakoo, Dar es Salaam. Order skincare and beauty products via WhatsApp.",
  },
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
                          <a
                            href={BUSINESS.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 transition-colors hover:text-brand"
                          >
                            {BUSINESS.location}
                            <ExternalLink size={12} />
                          </a>
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

      {/* Map */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              Find Us
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
              Visit Our Shop
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-stone-600">
              We are located in the heart of Kariakoo, Dar es Salaam. Stop by to
              explore our products or order online for delivery.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-stone-200/50 ring-1 ring-stone-100">
              <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps?q=34+Mafia+St,+Kariakoo,+Dar+es+Salaam,+Tanzania&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Missfiah Organic Products location"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row sm:p-8">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    {BUSINESS.name}
                  </h3>
                  <p className="text-sm text-stone-600">{BUSINESS.location}</p>
                </div>
                <a
                  href={BUSINESS.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <MapPin size={16} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
