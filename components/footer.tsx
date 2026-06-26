"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { NAV_LINKS, BUSINESS, CATEGORIES } from "@/lib/data";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-stone-900 text-stone-300">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="relative block h-12 w-36 transition-opacity hover:opacity-90">
              <Image
                src={BUSINESS.logo}
                alt={BUSINESS.name}
                fill
                className="object-contain brightness-0 invert"
                sizes="150px"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-stone-400">
              Organic-inspired skincare and beauty products based in Kariakoo, Dar
              es Salaam, Tanzania.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#25D366]"
                aria-label="WhatsApp"
              >
                <div className="relative h-5 w-5">
                  <Image src={BUSINESS.whatsappLogo} alt="WhatsApp" fill className="object-contain" sizes="20px" />
                </div>
              </a>
              <a
                href={BUSINESS.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E4405F]"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={BUSINESS.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1877F2]"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={BUSINESS.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-black hover:ring-1 hover:ring-white/20"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Product Categories
            </h4>
            <ul className="space-y-3">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products#${category.id}`}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {category.title.replace("Missfiah ", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <a
                  href={BUSINESS.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.location}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-400 transition-colors hover:text-white"
                >
                  <div className="relative h-5 w-5 shrink-0">
                    <Image src={BUSINESS.whatsappLogo} alt="WhatsApp" fill className="object-contain" sizes="20px" />
                  </div>
                  <span>WhatsApp: {BUSINESS.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-400 transition-colors hover:text-white"
                >
                  <InstagramIcon size={18} className="text-brand" />
                  <span>Instagram: {BUSINESS.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-400 transition-colors hover:text-white"
                >
                  <FacebookIcon size={18} className="text-[#1877F2]" />
                  <span>Facebook: {BUSINESS.facebook}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-400 transition-colors hover:text-white"
                >
                  <TikTokIcon size={18} />
                  <span>TikTok: {BUSINESS.tiktok}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-stone-500 sm:text-left">
            © {BUSINESS.year}{" "}
            <a
              href="https://www.driftmark.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 transition-colors hover:text-stone-300"
              aria-label="Website designed and developed by Driftmark"
            >
              {BUSINESS.name}
            </a>
            . All rights reserved.
          </p>
          <p className="text-xs text-stone-500">
            Designed with nature in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
