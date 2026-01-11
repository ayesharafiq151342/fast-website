"use client";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Interrior Design",
    date: "July 2018",
    img: "/services/interrior copy.jpg",
  },
  {
    title: "Exterior  Design",
    date: "May 2018",
      img: "/services/extrrior.jpg",

  },
  {
    title: "furniture Desiggn ",
    date: "May 2018",
       img: "/services/furtuniure.jpg",

  },
  {
    title: "Hospitality  Design",
    date: "January 2018",
    img: "/services/hospitality1.jpg",

  },
];

export default function Projects() {
  return (
    <section className="px-6 py-16 xl:w-8/12 mx-auto">
     <motion.div className="text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our <span className="text-[var(--accent)]">services</span>
      </motion.h1>

      <motion.p
        className="text-gray-600 m-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >Comprehensive design solutions tailored to your vision, crafted to elevate your brand, enhance user experience, and transform ideas into impactful realities
      </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-green-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Text Card */}
            <div className="absolute bottom-6 left-6 translate-y-10 bg-white px-6 py-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
