"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Early Bird Special",
    price: "PKR 60,000",
    features: [
      "Book 60 days in advance",
      "20% Discount on all packages",
      "Priority Customer Support",
      "Flexible Dates",
    ],
    button: "Book Early Bird",
  },
  {
    title: "Family Package",
    price: "PKR 40,000/person",
    badge: "Popular",
    features: [
      "4+ Travelers",
      "Special Family Activities",
      "Complimentary Meals for Kids",
      "Group Discount 30%",
      "Travel Insurance Included",
    ],
    button: "Book Family Package",
  },
  {
    title: "Last Minute Booking",
    price: "PKR 75,000",
    features: [
      "Book within 7 days",
      "15% Discount",
      "Flexible Cancellation",
      "Priority Assistance",
      "Exclusive Experiences",
    ],
    button: "Book Last Minute",
  },
];

export default function TravelPricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
          Travel <span className="text-[var(--accent)]">Packages</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Choose the perfect travel package for your next adventure. Special discounts and exclusive offers await for early bookings, families, groups, and last-minute planners.
        </p>
      </motion.div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl p-8 text-center bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="absolute top-4 right-4 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            )}

            {/* Top Content */}
            <div>
              <h3 className="text-sm uppercase tracking-wide text-gray-500">
                {plan.title}
              </h3>

              <div className="my-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500"> / person</span>
              </div>

              <ul className="space-y-3 text-sm mb-8 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="text-[var(--accent)]">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="w-full py-3 rounded-lg font-semibold bg-[var(--accent)] text-white hover:bg-[var(--primary)] transition">
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Extra Note / CTA */}
      <motion.div
        className="mt-12 text-center text-gray-700 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          💡 Book early for the best deals, bring your family or friends for exclusive group discounts, or grab last-minute packages for spontaneous adventures!
        </p>
      </motion.div>
    </section>
  );
}
