"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";
import Image from "next/image";

import CartSidebar from "@/app/components/CartSidebar";
import { useCart } from "./CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const menuItems = [
    { name: "New Arrival", href: "/jewellery" },
    { name: "Mala", href: "/mala" },
    { name: "Bangles", href: "/bangales" },
    { name: "Necklace", href: "/necklace" },
   
  ];

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <nav className="bg-black text-white py-4 px-6 flex items-center justify-between">
        {/* LEFT MENU */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/jewllery/logo-removebg-preview.png"
            alt="HJ Jewellery"
            width={80}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* RIGHT ICONS */}
        <div className="flex gap-4 items-center">
          <Search
            className="w-5 h-5 cursor-pointer"
            onClick={() => setSearchOpen(true)}
          />

          <Link href="/profile">  {/* or "/login" if you want login page */}
  <User className="w-5 h-5 cursor-pointer" />
</Link>

          <div
            className="relative cursor-pointer"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* ================= DESKTOP MENU ================= */}
      <ul className="hidden md:flex justify-center gap-6 text-sm uppercase bg-black text-white py-2">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all"
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-black text-white z-50 p-6">
          <ul className="flex flex-col gap-4 mt-16 uppercase">
            {menuItems.map((item, i) => (
              <li key={i} onClick={() => setMenuOpen(false)}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ================= SEARCH RIGHT SIDEBAR ================= */}
   {searchOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setSearchOpen(false)}
    />

    {/* Sidebar */}
    <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl p-6 transform transition-transform duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Browse Categories</h2>
        <button onClick={() => setSearchOpen(false)}>✕</button>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href="/necklace"
          onClick={() => setSearchOpen(false)}
          className="border px-4 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Necklace
        </Link>

        <Link
          href="/bangales"
          onClick={() => setSearchOpen(false)}
          className="border px-4 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Bangles
        </Link>

        <Link
          href="/mala"
          onClick={() => setSearchOpen(false)}
          className="border px-4 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Mala
        </Link>
      </div>
    </div>
  </>
)}


      {/* ================= CART SIDEBAR ================= */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* ================= FREE SHIPPING BAR ================= */}
      <div className="bg-white text-black text-center py-2 text-sm">
        Free Shipping on Orders Over PKR 2,999
      </div>
    </>
  );
}
