"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Understanding your vision, lifestyle, and preferences",
  },
  {
    id: "02",
    title: "Conceptualization",
    desc: "Sketches, mood boards, and 3D renders to visualize design",
  },
  {
    id: "03",
    title: "Development",
    desc: "Refining design with materials, colors, and textures",
  },
  {
    id: "04",
    title: "Execution",
    desc: "Skilled artisans bring the design to life with precision",
  },
  {
    id: "05",
    title: "Final Touches",
    desc: "Styling, accessorizing, and lighting for perfect atmosphere",
  },
];

const stepVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export default function ZigZagProcess() {
  return (
    <section className="bg-[var(--accent)] py-24 text-white">
      <h2 className="mb-20 text-center text-3xl font-bold md:text-4xl">
        5 Step Process Flow
      </h2>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row md:justify-between md:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col items-center
              md:${i % 2 === 0 ? "-translate-y-20" : "translate-y-20"}
            `}
            variants={stepVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
           

            {/* Circle */}
            <motion.div
              className="z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white text-xl font-bold text-gray-800 transition-all duration-300 hover:scale-110 md:h-24 md:w-24 md:text-2xl"
              whileHover={{ scale: 1.2 }}
            >
              {step.id}
            </motion.div>

            {/* Vertical dotted line */}
            <div className="mt-4 h-12 border-l-2 border-dashed border-white/50 md:h-16" />

            {/* Text */}
            <div className="mt-4 w-56 text-center md:w-48">
              <h4 className="font-semibold">{step.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
