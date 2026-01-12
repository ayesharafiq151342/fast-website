"use client";

import { MessageCircle, Users, Award, Book } from "lucide-react";
import { motion } from "framer-motion";

const services = [
{
    id: "01",
    title: "Communication Skills",
    icon: MessageCircle,
    image: "/avout.webp",
  },
  {
    id: "02",
    title: "Leadership Training",
    icon: Users,
      image: "/service-3.webp",
  },
  {
    id: "03",
    title: "Teamwork & Collaboration",
    icon: Award,
      image: "/testimonial-img copy.webp",
},
  {
    id: "04",
    title: "Critical Thinking",
    icon: Book,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];
export default function SoftSkill() {
  return (
    <section className="bg-white py-20">
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
          Soft <span className="text-[var(--accent)]">Skill Development</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 m-4 mt-4 ml-4 mr-4 md:m-auto md:mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We design practical programs that enhance communication, leadership, and teamwork. From personal growth to professional impact, we help you unlock your full potential.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border border-gray-200 p-2 transition-all duration-500 hover:bg-[var(--accent)] hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Number */}
            <span className="absolute top-6 right-6 text-6xl font-bold text-black/5 group-hover:text-white/20 transition">
              {item.id}
            </span>

            {/* Icon */}
            <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center  
              group-hover:bg-white transition-all duration-500 group-hover:rotate-6">
              <item.icon className="text-white group-hover:text-[var(--accent)] transition-all duration-500" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-4 text-black group-hover:text-white transition">
              {item.title}
            </h3>

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt=""
                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
