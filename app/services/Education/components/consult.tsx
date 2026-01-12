"use client";

import { motion } from "framer-motion";

const counselors = [
  {
    id: "01",
    name: "Sarah Khan",
    role: "Visa Consultant",
    image: "/services/CounselorsSection2.jpg",
  },
  {
    id: "02",
    name: "Ali Raza",
    role: "Immigration Lawyer",
    image: "/services/CounselorsSection.jpg",
  },
  {
    id: "03",
    name: "Ayesha Noor",
    role: "Legal Advisor",
      image: "/services/CounselorsSection4.jpg",
  },
  {
    id: "04",
    name: "Hamza Ali",
    role: "Consultancy Expert",
      image: "/services/CounselorsSection5.jpg",
  },
];

export default function CounselorsSection() {
  return (
    <section className="bg-white py-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our <span className="text-[var(--accent)]">Expert Counselors</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 ml-4 mt-4  mr-4 md:m-auto md:mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Meet our team of experienced and registered counselors who guide you through every step of your visa and immigration journey.
        </motion.p>
      </motion.div>

      {/* Counselors Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {counselors.map((c) => (
          <motion.div
            key={c.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: parseInt(c.id) * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="bg-white p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{c.name}</h3>
              <p className="text-gray-600 mt-2">{c.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
