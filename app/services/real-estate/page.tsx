"use client";

import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/navbar/footer";
import { motion } from "framer-motion";
import Projects_realstate from "./componnet/swiper";import Image from "next/image";

import Services from "./componnet/real_estate_services";
import PropertyCategories from "./componnet/real_card";
export default function HeroSection() {
 const steps = [
    {
      title: "Consultation & Planning",
      desc: "We begin with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan.",
    },
    {
      title: "Design & Pre-Construction",
      desc: "Elever begins with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan.",
    },
    {
      title: "Construction & Delivery",
      desc: "Working begins with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan.",
    },
  ];
  return (
    <>  <Navbar />
      <div className="relative w-full h-[60vh]  overflow-hidden">
        {/* Navbar */}


        {/* Background Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/services/realstat_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></motion.div>

        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10 bg-[var(--accent)]/50"
        ></motion.div>

        {/* Hero Text */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
          >
           Building
Landmarks
Creating Legacies

          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-white max-w-3xl drop-shadow-md"
          >
           Your trusted partner in property development, investment, and modern housing solutions. We redefine real estate with integrity, innovation, and quality.



          </motion.p>
        </div>
      </div><section className="py-24 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/services/03-5.webp"
            alt="Construction Worker"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
           Explore Our <span className="text-[var(--accent)]"> Construction Portfolio</span>
          </h2><p className="">
           Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem.
Elever Architecture is a New-York-based studio practice focused on modern design, interiors and landscapes. Since 2007, we have delivered exceptional environments that are stimulating and contextual.
          </p>
<div className="flex items-center gap-4 mt-6">
              <img
                src="/services/04-1.webp"
                alt="Markus Danile"
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Markus Danile
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Architect Studio
                </p>
              </div>
              <img
                src="/services/green_sig.png"
                alt="Signature "
                className="w-16 md:w-24 object-contain"
              />
            </div>
        </motion.div>
      </div>
    </section><Services/>
 <section className="py-24 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/services/01-3.webp"
            alt="Construction Worker"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--accent)] font-semibold uppercase mb-2">
            How We Works
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            How To Work With Elever <br /> Construction Builder
          </h2>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-[var(--accent)]/40 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

         <Projects_realstate/>
         <PropertyCategories/>
      <Footer />
    </>
  );
}
