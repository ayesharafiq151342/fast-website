"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react"; // Optional: for dropdown arrow

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/home" className="text-2xl font-bold text-[var(--primary-color)]">
          YourCompany
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link
              href="/"
              className={`hover:text-[var(--primary-color)] transition-colors duration-300 ${
                isActive("/") ? "text-[var(--primary-color)] font-semibold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-[var(--primary-color)] transition-colors duration-300 ${
                isActive("/about") ? "text-[var(--primary-color)] font-semibold" : ""
              }`}
            >
              About
            </Link>
          </li>

          {/* Business Services Dropdown */}
          <li className="relative group">
            <span
              className={`flex items-center gap-1 cursor-pointer px-4 py-2 hover:text-[var(--primary-color)] transition-colors duration-300 ${
                pathname?.startsWith("/") ? "text-[var(--primary-color)] font-semibold" : ""
              }`}
            >
              Business Services <ChevronDown className="w-4 h-4" />
            </span>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg w-60 border border-gray-200 py-2 z-50">
              <li>
                <Link
                  href="/services/business"
                  className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition"
                >
                  💻 IT Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing"
                  className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition"
                >
                  📈 Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/Hospitilaty"
                  className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition"
                >
                Hospitilaty  & Turism 
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business/real-estate"
                  className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition"
                >
                  🏢 Real Estate Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business/custom-solutions"
                  className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition"
                >
                  🛠️ Custom Solutions
                </Link>
              </li>
            </ul>
          </li>

          {/* Jewelry Dropdown */}
          <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer px-4 py-2 hover:text-[var(--primary-color)] transition-colors duration-300">
              Jewelry <ChevronDown className="w-4 h-4" />
            </span>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg w-48 border border-gray-200 py-2 z-50">
              <li>
                <Link href="/services/jewelry/custom-rings" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition">
                  💍 Custom Rings
                </Link>
              </li>
              <li>
                <Link href="/services/jewelry/necklaces" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition">
                  📿 Necklaces
                </Link>
              </li>
              <li>
                <Link href="/services/jewelry/bracelets" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition">
                  🏵️ Bracelets
                </Link>
              </li>
            </ul>
          </li>

          {/* Custom Printing Dropdown */}
          <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer px-4 py-2 hover:text-[var(--primary-color)] transition-colors duration-300">
              Custom Printing <ChevronDown className="w-4 h-4" />
            </span>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg w-56 border border-gray-200 py-2 z-50">
              <li>
                <Link href="/services/printing/t-shirts" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition">
                  👕 T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/services/printing/banners" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition">
                  🖼️ Banners
                </Link>
              </li>
              <li>
                <Link href="/services/printing/mugs" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition">
                  ☕ Mugs
                </Link>
              </li>
              <li>
                <Link href="/services/printing/posters" className="block px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white rounded transition">
                  🖨️ Posters
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="/contact"
              className={`hover:text-[var(--primary-color)] transition-colors duration-300 ${
                isActive("/contact") ? "text-[var(--primary-color)] font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
            <li>
              <Link
                href="/"
                className={`hover:text-[var(--primary-color)] transition-colors duration-300 ${
                  isActive("/") ? "text-[var(--primary-color)] font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-[var(--primary-color)] transition-colors duration-300 ${
                  isActive("/about") ? "text-[var(--primary-color)] font-semibold" : ""
                }`}
              >
                About
              </Link>
            </li>

            {/* Mobile Business Services */}
            <li className="flex flex-col">
              <span className="cursor-pointer font-semibold">Business Services</span>
              <ul className="pl-4 mt-2 flex flex-col gap-1">
                <li>
                  <Link href="/services/business/it-solutions" className="hover:text-[var(--primary-color)] transition">
                    💻 IT Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/business/digital-marketing" className="hover:text-[var(--primary-color)] transition">
                    📈 Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/business/e-commerce" className="hover:text-[var(--primary-color)] transition">
                    🛒 E-commerce Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/business/real-estate" className="hover:text-[var(--primary-color)] transition">
                    🏢 Real Estate Consultancy
                  </Link>
                </li>
                <li>
                  <Link href="/services/business/custom-solutions" className="hover:text-[var(--primary-color)] transition">
                    🛠️ Custom Solutions
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/contact"
                className={`hover:text-[var(--primary-color)] transition-colors duration-300 ${
                  isActive("/contact") ? "text-[var(--primary-color)] font-semibold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
