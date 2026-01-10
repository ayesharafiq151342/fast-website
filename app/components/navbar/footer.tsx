"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className="text-white pt-16 pb-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-common-2 (1).webp')" }}
    >
      <div className="">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND / ABOUT */}
          <div>
            <h2 className="text-2xl font-bold mb-4">FAST Group</h2>
            <p className="text-gray-300 mb-4">
              Empowering industries across IT, Marketing, Real Estate, Education, Travel, and more. Delivering excellence and innovation.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-[var(--accent)] transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-[var(--accent)] transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-[var(--accent)] transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-[var(--accent)] transition">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-[var(--accent)] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--accent)] transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--accent)] transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--accent)] transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--accent)] transition">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/it-solutions" className="hover:text-[var(--accent)] transition">IT Solutions</Link></li>
              <li><Link href="/services/marketing" className="hover:text-[var(--accent)] transition">Marketing</Link></li>
              <li><Link href="/services/printing" className="hover:text-[var(--accent)] transition">Printing & Packaging</Link></li>
              <li><Link href="/services/travel" className="hover:text-[var(--accent)] transition">Travel & Ticketing</Link></li>
              <li><Link href="/services/education" className="hover:text-[var(--accent)] transition">Education</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">123 FAST Street, Karachi, Pakistan</p>
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:info@fastgroup.com" className="hover:text-[var(--accent)]">info@fastgroup.com</a>
            </p>
            <p className="text-gray-300 mb-4">
              Phone: <a href="tel:+923001234567" className="hover:text-[var(--accent)]">+92 300 1234567</a>
            </p>
            <Link href="/contact" className="inline-block bg-[var(--accent)] hover:bg-[var(--primary)] px-4 py-2 rounded-full font-semibold transition">
              Get in Touch
            </Link>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} FAST Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
