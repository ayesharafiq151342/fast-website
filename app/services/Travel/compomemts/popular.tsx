"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Dubai",
    date: "Luxury & Adventure",
    img: "/services/Dubai.webp",
    package:
      "Luxury travel package including 5-star stays, desert safari, city tours & premium experiences.",
    highlights: [
      "🕌 Burj Khalifa visit with VIP access",
      "🏖️ Private beach & yacht tour",
      "🍽️ Gourmet dining experience",
      "🏜️ Desert safari with luxury camp",
      "🛍️ Shopping at Dubai Mall & Souks",
    ],
  },
  {
    title: "Turkey",
    date: "History & Culture",
    img: "/services/Turkey.webp",
    package:
      "Cultural and historical tour package covering Istanbul, Cappadocia hot air balloon & local experiences.",
    highlights: [
      "🏛️ Hagia Sophia & Blue Mosque tours",
      "🎈 Cappadocia hot air balloon ride",
      "🛶 Bosphorus Cruise & scenic ferry ride",
      "🍲 Traditional Turkish culinary experience",
      "🏺 Visit ancient ruins & markets",
    ],
  },
  {
    title: "Malaysia",
    date: "Tropical Paradise",
    img: "/services/Malaysia.webp",
    package:
      "Relaxing tropical getaway with rainforest exploration, islands, and luxury resorts.",
    highlights: [
      "🏝️ Langkawi island hopping",
      "🌴 Rainforest trekking & waterfalls",
      "🐒 Wildlife encounters in national parks",
      "🍛 Local food markets & street eats",
      "🛶 River cruises & kayaking",
    ],
  },
  {
    title: "Thailand",
    date: "Beaches & Temples",
    img: "/services/Thailand.jpg",
    package:
      "Experience Thailand with pristine beaches, rich culture, and amazing local adventures.",
    highlights: [
      "🏖️ Phuket & Krabi beach resorts",
      "⛩️ Temple visits and cultural shows",
      "🍜 Thai cooking class experience",
      "🐘 Elephant sanctuary visit",
      "🚤 Island hopping & snorkeling",
    ],
  },
];

export default function Popular() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section className="px-6 py-20 xl:w-8/12 mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">
            Our <span className="text-[var(--accent)]">Destinations</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our premium travel packages, crafted for unforgettable
            experiences and luxury adventures.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-green-900/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="bg-white p-5 rounded-lg shadow-xl">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>

                  {/* BUTTON */}
                  <button
                    onClick={() => setSelected(item)}
                    className="mt-4 inline-block bg-[var(--accent)] text-white px-5 py-2 rounded-md text-sm font-medium transition"
                  >
                    View Package
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPUP / MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selected.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{selected.date}</p>

                <p className="text-gray-700 mt-4">{selected.package}</p>

                {/* HIGHLIGHTS LIST */}
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  {selected.highlights.map((highlight: string, idx: number) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-5 py-2 rounded-md border text-gray-600 hover:bg-gray-100 transition"
                  >
                    Close
                  </button>
                  <button className="px-5 py-2 rounded-md bg-[var(--accent)] text-white transition">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
