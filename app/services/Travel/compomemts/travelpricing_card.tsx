"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter",
    price: "PKR 75,000",
    features: [
      "Social Media Management",
      "Basic Content Creation",
      "2 Campaigns/Month",
      "Monthly Analytics",
    ],
    button: "Choose Starter",
  },
  {
    title: "Professional",
    price: "PKR 150,000",
    badge: "Popular",
    features: [
      "Full Social Media Suite",
      "Advanced Content",
      "4 Campaigns/Month",
      "Influencer Collaboration",
      "Weekly Reports",
      "Dedicated Manager",
    ],
    button: "Choose Pro",
  },
  {
    title: "Enterprise Custom",
    price: "PKR 300,000",
    features: [
      "Custom Solutions",
      "Unlimited Campaigns",
      "Celebrity Collaborations",
      "24/7 Support",
      "Brand Strategy",
      "Full Creative Team",
    ],
    button: "Enterprise Custom",
  },
];

export default function TravelPricing() {
  return (
    <section className="py-20 bg-gray-50">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-center text-2xl md:text-4xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Flexible <span className="text-[var(--accent)]">Plane</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 m-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We design flexible, adaptable strategies that help your brand soar.
          From boosting visibility to driving conversions, our approach adjusts
          to your business needs, ensuring growth and lasting impact.
        </motion.p>
      </motion.div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="
              relative rounded-2xl p-8 text-center
              bg-white border border-gray-200
              shadow-md hover:shadow-xl
              hover:-translate-y-2
              transition-all duration-300
              flex flex-col justify-between h-full
            "
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
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500"> / mo</span>
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
            <button
              className="
                w-full py-3 rounded-lg font-semibold
                bg-[var(--accent)] text-white
                hover:bg-[var(--primary)]
                transition
              "
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
