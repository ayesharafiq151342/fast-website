"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "./CartContext";
import CartSidebar from "@/app/components/CartSidebar";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const menuItems = [
    { name: "New", href: "/product-category/newarrivals" },
    { name: "Mala", href: "/product-category/mala" },
    { name: "RINGS", href: "/product-category/rings" },
    { name: "Bangles", href: "/product-category/bangles" },
    { name: "Necklace", href: "/product-category/necklace" },
    { name: "LOCKET", href: "/product-category/locket" },
    { name: "MEHNDI", href: "/product-category/mehndi_jewllery" },
    { name: "BRACELET", href: "/product-category/bracelet" },
    { name: "KUNDAN", href: "/product-category/kundan" },
    { name: "BRIDAL", href: "/product-category/bridal_jewellery" },
    { name: "CHOKER", href: "/product-category/chooker" },
    { name: "ACCESSORIES", href: "/product-category/accessories" },
    { name: "Stud", href: "/product-category/stud" },
    { name: "PENDANTS", href: "/product-category/pendants" },
    { name: "KIDS_JEWELLERY", href: "/product-category/kids-jewellery" },
  ];

  const handleSearch = () => {
    if (!search) return;
    router.push(`/product-category/${search.toLowerCase()}`);
    setSearch("");
    setSearchOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white px-4 sm:px-6 md:px-8 py-3 flex items-center">
        {/* LOGO */}
        <Link href="/jewellery" className="flex-shrink-0">
          <Image
            src="/jewllery/logobg.jpeg"
            alt="HJ Jewellery"
            width={120}
            height={50}
            className="object-contain h-8 sm:h-10 md:h-12"
          />
        </Link>

        {/* MENU (Desktop & Tablet) */}
        <ul className="hidden md:flex gap-4 lg:gap-6 uppercase text-sm mx-auto flex-wrap">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={
                  pathname === item.href
                    ? "text-[var(--golden)] font-bold"
                    : "hover:text-[var(--golden)] transition"
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ICONS (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
          {/* Search */}
          <div className="relative">
            <Search
              className="w-5 h-5 cursor-pointer"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            {searchOpen && (
              <div className="absolute top-10 right-0 w-56 bg-white p-2 shadow-md rounded-md z-50">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border w-full px-2 py-1 text-sm mb-2 rounded-md"
                  placeholder="Search category"
                />
                <button
                  onClick={handleSearch}
                  className="w-full bg-[var(--golden)] text-white py-1 text-sm rounded-md"
                >
                  Go
                </button>
              </div>
            )}
          </div>

          {/* User */}
          <Link href="/profile">
            <User className="w-5 h-5 cursor-pointer" />
          </Link>

          {/* Cart */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
            <span className="text-sm font-medium hidden lg:inline">
              Rs {totalPrice}
            </span>
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* MOBILE SIDEBAR */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 bg-white p-4 h-full">
            <button
              className="mb-4 flex justify-end w-full"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Mobile Search */}
            <div className="mb-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border w-full px-2 py-1 text-sm rounded-md mb-2"
                placeholder="Search category"
              />
              <button
                onClick={handleSearch}
                className="w-full bg-[var(--golden)] text-white py-1 text-sm rounded-md"
              >
                Go
              </button>
            </div>

            {/* Menu Items */}
            <ul className="space-y-4 uppercase text-sm">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      pathname === item.href
                        ? "text-[var(--golden)] font-bold"
                        : "hover:text-[var(--golden)] transition"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Cart & Profile */}
            <div className="mt-6 flex items-center gap-4">
              <Link href="/profile">
                <User className="w-5 h-5 cursor-pointer" />
              </Link>
              <div
                className="relative cursor-pointer flex items-center gap-1"
                onClick={() => {
                  setCartOpen(true);
                  setMobileOpen(false);
                }}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
                <span className="text-sm font-medium">
                  Rs {totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
