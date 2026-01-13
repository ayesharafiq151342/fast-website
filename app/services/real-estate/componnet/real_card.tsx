"use client";

import { motion } from "framer-motion";
import { Home, LucideBuilding, Star } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Residential Properties",
    desc: "Find your dream home with our curated selection of apartments, villas, and houses.",
  },
  {
    icon: LucideBuilding,
    title: "Commercial Properties",
    desc: "Explore premium office spaces, retail outlets, and commercial buildings.",
  },
  {
    icon: Star,
    title: "Luxury & Premium",
    desc: "Exclusive high-end properties for those who seek the finest living experience.",
  },
];

export default function PropertyCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Property <span className="text-[var(--accent)]">Categories</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore our extensive database of premium properties across residential, commercial, and luxury segments.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-white mb-6">
              <cat.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
            <p className="text-gray-600 text-sm">{cat.desc}</p>

            <span className="absolute text-4xl text-gray-100 top-4 right-6 font-bold select-none">
              {i + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
