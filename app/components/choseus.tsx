"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "Trusted Expertise",
    desc: "Years of experience delivering top-quality solutions tailored to your needs.",
    icon: <Star className="h-8 w-8 text-black" />,
  },
  {
    title: "Customer Satisfaction",
    desc: "We put our clients first, ensuring every project exceeds expectations.",
    icon: <Heart className="h-8 w-8 text-black" />,
  },
  {
    title: "Global Reach",
    desc: "With a wide network, we deliver services to clients worldwide seamlessly.",
    icon: <Globe className="h-8 w-8 text-black" />,
  },
  {
    title: "Reliable & Secure",
    desc: "We prioritize safety and reliability in every aspect of our work.",
    icon: <ShieldCheck className="h-8 w-8 text-black" />,
  },
];

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="xl:py-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/testimonial-img.webp"
            alt="Why Choose Us"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 flex flex-col gap-12">
          <motion.h2
            className="text-4xl font-bold text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>

          {reasons.map((reason, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center ${
                  isEven ? "justify-start" : "justify-start md:pl-0"
                }`}
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center h-16 w-20 rounded-full bg-black/10"
                >
                  {reason.icon}
                </motion.div>

                {/* TEXT */}
                <motion.div
                  className="ml-6 max-w-xs text-left"
                  animate={{ y: hovered === i ? -6 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-black">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-black/80">{reason.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
