"use client";

import React, { createContext, useContext, useCallback, useMemo } from "react";
import { Product, CartItem } from "@/lib/data";
import { useCartStore } from "@/lib/use-cart-store";

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { items, setItems } = useCartStore();

  const addItem = useCallback(
    (product: Product, quantity = 1) => {
      setItems(
        items.some((i) => i.product.id === product.id)
          ? items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: i.quantity + quantity }
                : i
            )
          : [...items, { product, quantity }]
      );
    },
    [items, setItems]
  );

  const removeItem = useCallback(
    (productId: string) => {
      setItems(items.filter((i) => i.product.id !== productId));
    },
    [items, setItems]
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity < 1) {
        setItems(items.filter((i) => i.product.id !== productId));
        return;
      }
      setItems(
        items.map((i) =>
          i.product.id === productId ? { ...i, quantity } : i
        )
      );
    },
    [items, setItems]
  );

  const clearCart = useCallback(() => setItems([]), [setItems]);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
