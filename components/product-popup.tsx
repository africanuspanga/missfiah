"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Leaf,
  ListChecks,
  AlertCircle,
  Beaker,
  Info,
  Users,
  Package,
} from "lucide-react";
import { ProductPopupData, formatPrice } from "@/lib/data";

interface ProductPopupProps {
  popup: ProductPopupData;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductPopup({ popup, isOpen, onClose }: ProductPopupProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus the close button when opened
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sectionClass =
    "rounded-2xl border border-stone-100 bg-stone-50/60 p-4 sm:p-5";
  const sectionTitleClass =
    "mb-3 flex items-center gap-2 font-serif text-base font-semibold text-stone-900 sm:text-lg";
  const listClass =
    "space-y-2 text-sm leading-relaxed text-stone-600";
  const listItemClass =
    "flex items-start gap-2 before:mt-1.5 before:h-1.5 before:w-1.5 before:flex-shrink-0 before:rounded-full before:bg-brand";

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-stone-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-4 md:p-6"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-popup-title"
        >
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-stone-50 to-brand/5 px-5 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-stone-500 shadow-sm ring-1 ring-stone-100 backdrop-blur-sm transition-colors hover:bg-white hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                aria-label="Close product details"
              >
                <X size={18} />
              </button>

              <div className="pr-8">
                <span className="mb-2 inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                  {popup.category}
                </span>
                <h2
                  id="product-popup-title"
                  className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl"
                >
                  {popup.name}
                </h2>

                {popup.tagline && (
                  <p className="mt-1 text-sm font-medium italic text-stone-600 sm:text-base">
                    {popup.tagline}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                  {popup.priceTzs ? (
                    <span className="font-serif text-xl font-bold text-stone-900">
                      {formatPrice(popup.priceTzs)}
                    </span>
                  ) : (
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500">
                      Price to be confirmed
                    </span>
                  )}
                  {popup.size && (
                    <span className="rounded-full bg-white/80 px-3 py-1 text-stone-600 ring-1 ring-stone-100">
                      {popup.size}
                    </span>
                  )}
                  {popup.popular && (
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-stone-900 shadow-sm">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6">
              {/* Short description */}
              <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                  <Info size={18} className="text-brand" />
                  About this product
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
                  {popup.shortDescription}
                </p>
              </div>

              {/* Suitable for */}
              {popup.suitableFor && popup.suitableFor.length > 0 && (
                <div className={`${sectionClass} mt-4 sm:mt-5`}>
                  <h3 className={sectionTitleClass}>
                    <Users size={18} className="text-brand" />
                    Suitable for
                  </h3>
                  <ul className={listClass}>
                    {popup.suitableFor.map((item, i) => (
                      <li key={i} className={listItemClass}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2">
                {/* Benefits */}
                <div className={sectionClass}>
                  <h3 className={sectionTitleClass}>
                    <Sparkles size={18} className="text-gold-dark" />
                    Benefits
                  </h3>
                  <ul className={listClass}>
                    {popup.benefits.map((benefit, i) => (
                      <li key={i} className={listItemClass}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key ingredients */}
                <div className={sectionClass}>
                  <h3 className={sectionTitleClass}>
                    <Leaf size={18} className="text-brand" />
                    Key ingredients
                  </h3>
                  <ul className={listClass}>
                    {popup.keyIngredients.map((ingredient, i) => (
                      <li key={i} className={listItemClass}>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Directions */}
              <div className={`${sectionClass} mt-4 sm:mt-5`}>
                <h3 className={sectionTitleClass}>
                  <ListChecks size={18} className="text-brand" />
                  How to use
                </h3>
                <ol className={listClass}>
                  {popup.directions.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Cautions */}
              <div className={`${sectionClass} mt-4 sm:mt-5`}>
                <h3 className={sectionTitleClass}>
                  <AlertCircle size={18} className="text-amber-600" />
                  Cautions
                </h3>
                <ul className={listClass}>
                  {popup.cautions.map((caution, i) => (
                    <li key={i} className={listItemClass}>
                      {caution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Storage */}
              {popup.storage && (
                <div className={`${sectionClass} mt-4 sm:mt-5`}>
                  <h3 className={sectionTitleClass}>
                    <Package size={18} className="text-stone-600" />
                    Storage
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
                    {popup.storage}
                  </p>
                </div>
              )}

              {/* Full ingredients */}
              <div className={`${sectionClass} mt-4 sm:mt-5`}>
                <h3 className={sectionTitleClass}>
                  <Beaker size={18} className="text-stone-600" />
                  Full ingredients
                </h3>
                <p className="text-xs leading-relaxed text-stone-500 sm:text-sm">
                  {popup.fullIngredients}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Avoid referencing `document` during server-side rendering.
  if (typeof window === "undefined") return null;

  return createPortal(modalContent, document.body);
}
