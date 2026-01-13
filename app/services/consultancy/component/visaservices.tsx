"use client";

import { motion } from "framer-motion";

const visaCards = [
  {
    emoji: "🎓",
    title: "Student Visa",
    countries: "All Countries",
    duration: "4 – 8 Weeks",
  },
  {
    emoji: "💼",
    title: "Business Visa",
    countries: "150+ Countries",
    duration: "2 – 4 Weeks",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Family Visa",
    countries: "All Countries",
    duration: "6 – 12 Weeks",
  },
  {
    emoji: "🏢",
    title: "Work Permit",
    countries: "50+ Countries",
    duration: "8 – 16 Weeks",
  },
];

export default function VisaServices() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Visa <span className="text-[var(--accent)]">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Reliable visa solutions with expert guidance and fast processing.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visaCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Emoji Icon */}
              <div className="text-4xl mb-4">{card.emoji}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Info */}
              <p className="text-sm text-gray-600">{card.countries}</p>
              <p className="text-sm text-gray-500 mb-6">{card.duration}</p>

              {/* Button */}
                           <button className="px-10 py-4 bg-[var(--accent)] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">

                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
