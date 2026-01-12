"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

const cards = [
  {
    title: "United Kingdom",
    img: "/services/uk.jpg",
    link: "/visa-apply",
  },
  {
    title: "Canada",
    img: "/services/CA.jpg",
    link: "/visa-info",
  },
  {
    title: "United States",
    img: "/services/US.jpg",
    link: "/immigration-resources",
  },
  {
    title: "Europe",
    img: "/services/EU.jpg",
    link: "/legal-consultation",
  },
];

export default function VisaSection() {
  return (
    <section className="bg-white xl:mt-32 relative overflow-hidden">
 <motion.div className="text-center mb-20"
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
        Study  <span className="text-[var(--accent)]">Abroad Programs</span>
      </motion.h1>

      <motion.p
        className="text-gray-600 m-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        We craft data-driven marketing strategies that build brands and drive
        growth. From visibility to conversions, we help your business stand out.
      </motion.p>
    </motion.div>
      {/* TOP CARDS */}
      <div className="container mx-auto px-6 -mb-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card, index) => (
            <Link key={index} href={card.link} className="group">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-xl overflow-hidden cursor-pointer"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* TITLE */}
                <div className="py-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* BLUE SECTION */}
      <div className="bg-[var(--accent)] pt-44 pb-24 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl xl:text-5xl font-light mb-6"
        >
         Expert Legal Guidance for Every Visa Application    </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
            <p className="text-lg text-gray-200 max-w-3xl">
           Fast gives consultancy by a registered and experienced lawyer for your visa application.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
