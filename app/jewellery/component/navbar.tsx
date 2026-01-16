"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "./CartContext";
import CartSidebar from "@/app/components/CartSidebar";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const menuItems = [
    { name: "New ", href: "/jewellery" },
    { name: "Mala", href: "/mala" },
    { name: "Bangles", href: "/bangales" },
    { name: "Necklace", href: "/necklace" }, { name: "BRIDAL ", href: "/bridal-jewellery" },
    { name: "ACCESSORIES", href: "/category/accessories" },
    { name: "CHOKER", href: "/category/choker" },
    { name: "RINGS", href: "/category/rings" },
    { name: "NECKLACE", href: "/category/necklace" },
    { name: "BANGLES", href: "/category/bangles" },
    { name: "CHAINS", href: "/category/chains" },
    { name: "EARRINGS", href: "/category/earrings" },
    { name: "Stud", href: "/category/stud" },
    { name: "BRACELET", href: "/category/bracelet" },
    { name: "MALA", href: "/category/mala" },
    { name: "MEHNDI ", href: "/category/mehndi-jewellery" },
    { name: "PENDANTS", href: "/category/pendants" },
    { name: "tups", href: "/category/tups" },
  ];


  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white text-vlack px-6 py-4 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/jewllery/logobg.jpeg"
            alt="HJ Jewellery"
            width={90}
            height={50}
            className="object-contain h-[7vh]"
          />
        </Link>

        {/* CENTER: MENU */}
        <ul className="hidden md:flex gap-8  uppercase text-sm tracking-wide">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative after:absolute w-12 after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* RIGHT: ICONS */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />

          <Link href="/signin">
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </Link>

          <div
            className="relative cursor-pointer"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5 hover:text-gray-300" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* ================= CART SIDEBAR ================= */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
