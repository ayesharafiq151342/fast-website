"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Truck, ShieldCheck, Smile } from "lucide-react";

const experienceSteps = [
  {
    icon: ShoppingBag,
    title: "Discover Premium Products",
    desc: "Carefully curated decor and lifestyle pieces designed to elevate your space.",
  },
  {
    icon: ShieldCheck,
    title: "Shop With Confidence",
    desc: "100% authentic products with quality assurance and secure checkout.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    desc: "Doorstep delivery with real-time tracking and careful packaging.",
  },
  {
    icon: Smile,
    title: "Delight Guaranteed",
    desc: "Customer-first support and a shopping experience you’ll love.",
  },
];

export default function ShoppingExperience() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/services/ShoppingExperience.jpg"
            alt="Shopping Experience"
            className="w-full h-[420px] lg:h-[540px] object-cover rounded-3xl shadow-2xl"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-full shadow-lg text-sm font-bold text-[var(--accent)]">
            Premium Shopping Experience
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            A Better Way to <br />
            <span className="text-[var(--accent)]">Shop Online</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            From discovery to delivery, we redefine online shopping with style,
            trust, and a seamless experience tailored just for you.
          </p>

          {/* EXPERIENCE STEPS */}
          <div className="mt-10 space-y-6">
            {experienceSteps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-12 px-10 py-4 bg-[var(--accent)] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Start Shopping
          </button>
        </motion.div>

      </div>
    </section>
  );
}
