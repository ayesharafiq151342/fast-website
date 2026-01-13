"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "New Arrival", href: "/new-arrival" },
    { name: "Best Selling", href: "/best-selling" },
    { name: "Mala", href: "/mala" },
    { name: "Rings", href: "/rings" },
    { name: "Bangles", href: "/bangles" },
    { name: "Necklace", href: "/necklace" },
    { name: "Locket", href: "/locket" },
    { name: "Sale", href: "/sale" },
    { name: "Calligraphy", href: "/calligraphy" },
    { name: "Mehndi Jewellery", href: "/mehndi-jewellery" },
    { name: "Bracelet", href: "/bracelet" },
    { name: "Bridal Jewellery", href: "/bridal-jewellery" },
    { name: "Choker", href: "/choker" },
    { name: "Kundan Jewellery", href: "/kundan-jewellery" },
    { name: "Accessories", href: "/accessories" },
    { name: "Earrings", href: "/earrings" },
    { name: "Kids Jewellery", href: "/kids-jewellery" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-black text-white py-4 px-6 flex items-center justify-between">
        {/* LEFT MENU ICON */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

     <Link href="/">
    <Image
      src="/jewllery/logo-removebg-preview.png"       // <-- Your logo file in the public folder
      alt="HJ Jewellery Logo"
      width={80}           // adjust width
      height={50}           // adjust height
      className="object-contain"
    />
  </Link>

        {/* RIGHT ICONS */}
        <div className="flex gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex justify-center gap-6  text-sm uppercase tracking-wide bg-black text-white py-2">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className="relative cursor-pointer text-white  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* MOBILE / SIDEBAR MENU */}
      {menuOpen && (
        <div className="bg-black text-white w-full md:w-64 h-screen fixed top-0 left-0 z-50 flex flex-col pt-24 px-6 md:pt-6 md:pl-6 overflow-y-auto">
          <ul className="flex flex-col gap-4 text-lg uppercase tracking-wider">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className=" cursor-pointer transition"
                onClick={closeMenu}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FREE SHIPPING BAR */}
      <div className="bg-white text-black text-center py-2 text-sm">
        Free Shipping on Orders Over PKR 2,999
      </div>
    </>
  );
}
