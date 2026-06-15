"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/data";
import { useCart } from "./cart-provider";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
              isScrolled
                ? "glass shadow-lg shadow-stone-900/5"
                : "bg-transparent"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <div className="relative h-12 w-36 sm:h-14 sm:w-44">
                <Image
                  src={BUSINESS.logo}
                  alt={BUSINESS.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 150px, 180px"
                  priority
                />
              </div>
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-brand"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-brand/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-md hover:ring-brand/20"
                aria-label="Cart"
              >
                <ShoppingBag size={18} className="text-stone-700" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white shadow-sm">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-md md:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} className="text-stone-700" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-stone-900/30 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-[280px] bg-white p-6 shadow-2xl md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="relative h-12 w-36">
                  <Image
                    src={BUSINESS.logo}
                    alt={BUSINESS.name}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 transition-colors hover:bg-stone-200"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-stone-700" />
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-brand/10 text-brand"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
