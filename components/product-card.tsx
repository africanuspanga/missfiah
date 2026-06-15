"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Check, Sparkles } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
import { ImagePlaceholder } from "./image-placeholder";
import { useCart } from "./cart-provider";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
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
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-stone-900 shadow-sm">
          <Sparkles size={12} className="text-brand" />
          Popular
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <ImagePlaceholder
            label="Product image coming soon"
            className="h-full w-full rounded-none"
            iconSize={36}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="font-serif text-xl font-bold text-stone-900">
              {formatPrice(product.price)}
            </div>
            {product.size && (
              <div className="text-xs text-stone-500">{product.size}</div>
            )}
          </div>
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
              added
                ? "bg-brand text-white"
                : "bg-stone-900 text-white hover:bg-brand"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? <Check size={16} /> : <ShoppingBag size={16} />}
            {added ? "Added" : "Add"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
