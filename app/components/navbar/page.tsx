"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isServiceActive = pathname.startsWith("/services");

  const activeClass =
    "bg-[var(--accent)] text-white rounded-lg px-4 py-2 shadow";
  const normalClass =
    "px-4 py-2 rounded-full hover:bg-[var(--accent)] hover:text-white transition";

  return (
    <nav className="bg-white  fixed top-0 left-0 w-full z-[9999] shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-[var(--accent)]">
          YourCompany
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-4 font-medium text-gray-700">

          <li>
            <Link href="/" className={isActive("/") ? activeClass : normalClass}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={isActive("/about") ? activeClass : normalClass}
            >
              About
            </Link>
          </li>

          {/* BUSINESS SERVICES */}
          <li className="relative group">
            <span
              className={`cursor-pointer flex items-center gap-1 ${
                isServiceActive ? activeClass : normalClass
              }`}
            >
              Business Services <ChevronDown size={16} />
            </span>

            <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-xl w-64 border py-2 hidden group-hover:block">
              {[
                { href: "/services/business", label: "IT Solutions" },
                { href: "/services/marketing", label: "Digital Marketing" },
                { href: "/services/Education", label: "Education" },
                { href: "/services/Hospitilaty", label: "Hospitilaty" },

                { href: "/services/Travel", label: "Travel & Ticketing" },
                { href: "/services/consultancy", label: "Consultancy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 rounded mx-2 transition ${
                      pathname === item.href
                        ? "bg-[var(--accent)] text-white"
                        : "hover:bg-[var(--accent)] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* JEWELRY */}
          <li>
            <Link href="/jewelry" className={normalClass}>
              Jewelry
            </Link>
          </li>

          {/* PRINTING */}
          <li>
            <Link href="/printing" className={normalClass}>
              Printing
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={isActive("/contact") ? activeClass : normalClass}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-2 p-4 font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services/business", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded ${
                    pathname === item.href
                      ? "bg-[var(--accent)] text-white"
                      : "hover:bg-[var(--accent)] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
