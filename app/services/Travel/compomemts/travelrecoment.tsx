"use client";

import { motion } from "framer-motion";
import React from "react";

const features = [
  {
    icon: "🧭",
    title: "Trusted Travel Guide",
    description: "Provides reliable information to help travelers plan trips safely.",
  },
  {
    icon: "🎯",
    title: "Mission & Vision",
    description: "Connect people to positive travel experiences worldwide.",
  },
];

export default function TravelRecommendation() {
  return (
    <section className="bg-[var(--primary)] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            We <span className="text-[var(--accent)]">Recommend</span> Beautiful <br /> Destinations Every Month
          </motion.h1>

          <motion.p
            className="text-white max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Travila is a multi-award-winning strategy and content creation agency
            that specializes in travel marketing.
          </motion.p>

          {/* Features */}
          <div className="space-y-6">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--accent)] p-4 rounded-full text-xl shadow-md flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{f.title}</h4>
                  <p className="text-gray-500 text-sm">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button + Info */}
          <motion.div
            className="mt-8 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <button className="bg-[var(--accent)] hover:scale-105 transform text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
              Discover More
            </button>
            <div className="text-sm text-white">
              <span className="font-bold text-white">3.5k</span> Happy Customers
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
 <motion.div
  className="relative flex justify-center w-full max-w-4xl mx-auto"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Main Travel Image */}
  <img
    src="/services/travel.png"
    alt="Traveler"
    className="
      w-full
      h-64 md:h-96 lg:h-[70vh]
      object-cover rounded-xl 
      transition-transform duration-500 hover:scale-105
    "
  />

  {/* Experience Badge */}
  <div className="
      absolute top-4 right-4
      bg-white px-4 py-2 rounded-full shadow-lg
      text-sm font-bold text-[var(--accent)] border border-green-200
    "
  >
    25 Years of Experience
  </div>
</motion.div>


      </div>
    </section>
  );
}
