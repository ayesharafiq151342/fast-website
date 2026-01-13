"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, DollarSign } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Curated Quality Products",
    desc: "Every item handpicked for excellence",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Best value for premium quality",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Guarantee",
    desc: "100% genuine products, always",
  },
];

export default function WhyShopWithUs() {
  return (
    <section
      className="relative py-32 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-20 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Why Shop With <span className="text-[var(--accent)]">Us</span>
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
            Premium products, trusted quality, and a shopping experience you can rely on.
          </p>
        </motion.div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="
                backdrop-blur-xl bg-white/10
                border border-white/20
                rounded-3xl p-10
                text-white text-center
                shadow-2xl
                hover:-translate-y-4 hover:scale-[1.02]
                transition-all duration-500
              "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-[var(--accent)]" />
              </div>

              {/* Text */}
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
