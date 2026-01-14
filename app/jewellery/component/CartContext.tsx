"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const exist = prev.find((i) => i.slug === item.slug);
      if (exist) {
        return prev.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prev, item];
      }
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
