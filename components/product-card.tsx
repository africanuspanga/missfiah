"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingBag, Check, Info } from "lucide-react";
import { Product, getProductPopup } from "@/lib/data";
import { ImagePlaceholder } from "./image-placeholder";
import { useCart } from "./cart-provider";
import { ProductPopup } from "./product-popup";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popup = getProductPopup(product.id);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      router.push("/cart");
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm shadow-stone-200/50 ring-1 ring-stone-100 transition-shadow duration-300 hover:shadow-xl hover:shadow-stone-200/60 hover:ring-brand/20"
    >
      {product.popular && (
        <div className="absolute left-4 top-4 z-20 flex items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold text-stone-900 shadow-sm">
          Popular
        </div>
      )}

      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100 p-4 sm:p-6">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-5"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <ImagePlaceholder
            label="Product image coming soon"
            className="h-full w-full rounded-none bg-transparent"
            iconSize={36}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
          {product.category}
        </div>
        <h3 className="mb-1 font-serif text-lg font-semibold text-stone-900">
          {product.name}
        </h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-stone-600">
          {product.description}
        </p>
        <div className="space-y-3">
          {product.size && (
            <div className="text-xs font-medium text-stone-500">
              Size: {product.size}
            </div>
          )}

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.98 }}
            className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
              added
                ? "bg-brand text-white"
                : "bg-stone-900 text-white hover:bg-brand"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? <Check size={16} /> : <ShoppingBag size={16} />}
            {added ? "Added" : "Add to Cart"}
          </motion.button>

          {popup && popup.status !== "awaiting-product-information" && (
            <motion.button
              onClick={() => setIsPopupOpen(true)}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 shadow-sm transition-all duration-300 hover:border-brand/30 hover:bg-brand/5 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label={`Learn more about ${product.name}`}
            >
              <Info size={16} />
              Learn more
            </motion.button>
          )}
        </div>
      </div>

      {popup && popup.status !== "awaiting-product-information" && (
        <ProductPopup
          popup={popup}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </motion.div>
  );
}
