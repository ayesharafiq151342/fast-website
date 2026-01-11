"use client";

import {
  Hotel,
  Home,
  Utensils,
  Building2,
  Trees,
  Store
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Luxury Hotel Lobby",
    location: "Islamabad",
    icon: Hotel,
    image: "/services/Luxury Hotel Lobby.jpg",
  },
  {
    id: "02",
    title: "Modern Villa Interior",
    location: "Lahore",
    icon: Home,
    image: "/services/Modern Villa Interior.jpg",
  },
  {
    id: "03",
    title: "Fine Dining Restaurant",
    location: "Karachi",
    icon: Utensils,
    image: "/services/Fine Dining Restaurant.jpg",
  },
  {
    id: "04",
    title: "Corporate Office",
    location: "Islamabad",
    icon: Building2,
    image: "/services/Corporate Office.jpg",
  },
  {
    id: "05",
    title: "Boutique Resort",
    location: "Northern Areas",
    icon: Trees,
    image: "/services/Boutique Resort.jpg",
  },
  {
    id: "06",
    title: "Premium Showroom",
    location: "Lahore",
    icon: Store,
    image: "/services/Premium Showroom.jpg",
  },
];
export default function Portfolio() {
  return (
    <section className="bg-white py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our  <span className="text-[var(--accent)]">Portfolio</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 m-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
“A legacy of excellence in every project, defined by timeless design, meticulous craftsmanship, and uncompromising quality.”
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border border-gray-200 p-6 transition-all duration-500 hover:bg-[var(--accent)] hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Number */}
            <span className="absolute top-6 right-6 text-6xl font-bold text-black/5 group-hover:text-white/20 transition">
              {item.id}
            </span>

            {/* Icon */}
            <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center  
              group-hover:bg-white transition-all duration-500 group-hover:rotate-6">
              <item.icon className="text-white group-hover:text-[var(--accent)] transition-all duration-500" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-white transition">
              {item.title}
            </h3>

            {/* Location / Description */}
            {item.location && (
              <p className="text-sm text-gray-500 group-hover:text-gray-100 transition mb-4">
                {item.location}
              </p>
            )}

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt=""
                className="w-full h-44 object-cover transition-all duration-700
                group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
