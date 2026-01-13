"use client";

import { motion } from "framer-motion";
import { Home, Eye, FileText, Layers, CreditCard, Settings } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Consultation",
    desc: "Expert guidance on buying, selling, or investing in properties",
  },
  {
    icon: Eye,
    title: "Market Research",
    desc: "Comprehensive market analysis and property shortlisting",
  },
  {
    icon: FileText,
    title: "Property Visits",
    desc: "Guided site visits to help you make informed decisions.",
  },
  {
    icon: CreditCard,
    title: "Deal Negotiation",
    desc: "Professional negotiation for the best terms and prices",
  },
  {
    icon: Layers,
    title: "Documentation Assistance",
    desc: "Complete documentation and legal assistance",
  },
  {
    icon: Settings,
    title: "Property Management",
    desc: "Stress-free management of your property investments.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/40 to-transparent"></div>

      <motion.div
        className="relative z-10 text-center mb-14 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          Featured <span className="text-[var(--accent)]">Products</span>
        </h2>
        <p className="text-black mt-4 max-w-2xl mx-auto">
          Our landmark developments set new benchmarks in design and quality.
          We create inspiring spaces that redefine modern living and commercial experiences.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-6 shadow-lg relative hover:shadow-2xl hover:-translate-y-2 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 left-6 bg-[var(--accent)] p-3 rounded-md">
              <item.icon className="text-white w-6 h-6" />
            </div>
            <h3 className="mt-8 font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
