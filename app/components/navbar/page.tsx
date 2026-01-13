"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // mobile services dropdown
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isServiceActive = pathname.startsWith("/services");

  const activeClass =
    "bg-[var(--accent)] text-white rounded-lg px-4 py-2 shadow";
  const normalClass =
    "px-4 py-2 rounded-full hover:bg-[var(--accent)] hover:text-white transition";

  const serviceLinks = [
    { href: "/services/business", label: "IT Solutions" },
    { href: "/services/marketing", label: "Digital Marketing" },
    { href: "/services/education", label: "Education" },
    { href: "/services/hospitality", label: "Hospitality" },
    { href: "/services/travel", label: "Travel & Ticketing" },
    { href: "/services/consultancy", label: "Consultancy" },
    { href: "/services/online-store", label: "Online Store" },
    { href: "/services/real-estate", label: "Real Estate" },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-[9999] shadow-md">
      <div className="md:max-w-7xl w-full mx-auto px-4 h-16 flex items-center justify-between">

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
            <Link href="/about" className={isActive("/about") ? activeClass : normalClass}>
              About
            </Link>
          </li>

          {/* Desktop Services Dropdown */}
          <li className="relative group">
            <span
              className={`cursor-pointer flex items-center gap-1 ${isServiceActive ? activeClass : normalClass}`}
            >
              Services <ChevronDown size={16} />
            </span>
            <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-xl w-64 border py-2 hidden group-hover:block">
              {serviceLinks.map((item) => (
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

          <li>
            <Link href="/jewellery" className={normalClass}>jewellery</Link>
          </li>

          <li>
            <Link href="/printing" className={normalClass}>Printing</Link>
          </li>

          <li>
            <Link href="/contact" className={isActive("/contact") ? activeClass : normalClass}>
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
        <div className="md:hidden bg-white border-t w-full">
          <ul className="flex flex-col gap-2 p-4 font-medium">

            {/* Home */}
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block w-full truncate px-4 py-2 rounded ${
                  pathname === "/"
                    ? "bg-[var(--accent)] text-white"
                    : "hover:bg-[var(--accent)] hover:text-white"
                }`}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block w-full truncate px-4 py-2 rounded ${
                  pathname === "/about"
                    ? "bg-[var(--accent)] text-white"
                    : "hover:bg-[var(--accent)] hover:text-white"
                }`}
              >
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="flex flex-col">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between items-center w-full px-4 py-2 rounded hover:bg-[var(--accent)] hover:text-white transition font-medium text-gray-700"
              >
                Services
                <ChevronDown
                  className={`ml-2 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>

              {isServicesOpen && (
                <ul className="flex flex-col ml-4 mt-1 gap-1">
                  {serviceLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full px-4 py-2 rounded hover:bg-[var(--accent)] hover:text-white transition ${
                          pathname === item.href
                            ? "bg-[var(--accent)] text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Jewelry */}
            <li>
              <Link
                href="/jewelry"
                onClick={() => setIsOpen(false)}
                className={`block w-full truncate px-4 py-2 rounded hover:bg-[var(--accent)] hover:text-white`}
              >
                Jewelry
              </Link>
            </li>

            {/* Printing */}
            <li>
              <Link
                href="/printing"
                onClick={() => setIsOpen(false)}
                className={`block w-full truncate px-4 py-2 rounded hover:bg-[var(--accent)] hover:text-white`}
              >
                Printing
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block w-full truncate px-4 py-2 rounded ${
                  pathname === "/contact"
                    ? "bg-[var(--accent)] text-white"
                    : "hover:bg-[var(--accent)] hover:text-white"
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
