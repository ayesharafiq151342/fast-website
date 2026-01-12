"use client";

import { Plane, Home, Calendar, Heart, Map, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Flight Bookings",
    icon: Plane,
    image: "/services/Flight Bookings.jpg",
  },
  {
    id: "02",
    title: "Hotel Reservations",
    icon: Home,
    image: "/services/Hotel Reservations.jpg",
  },
  {
    id: "03",
    title: "Holiday Packages",
    icon: Calendar,
    image: "/services/Holiday Packages.jpg",
  },
  {
    id: "04",
    title: "Honeymoon Specials",
    icon: Heart,
    image: "/services/Honeymoon Specials.webp",
  },
  {
    id: "05",
    title: "Adventure Tours",
    icon: Map,
    image: "/services/Adventure Tours.jpg",
  },
  {
    id: "06",
    title: "Corporate Travel",
    icon: Users,
    image: "/services/cp.jpg",
  },
];

export default function TravelServices() {
  return (
    <section className="bg-white py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">
          Our <span className="text-[var(--accent)]">Travel Services</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore curated travel experiences with flights, hotels, holidays, adventure, and more. We make your journey effortless and unforgettable.
        </p>
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
            <h3 className="text-lg font-semibold mb-4 text-black group-hover:text-white transition">
              {item.title}
            </h3>

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
