"use client";

import Navbar from "./components/navbar/page";
import { motion } from "framer-motion";
import CardGrid from "./components/navbar/cards";
import CardSlider from "./components/navbar/slider";
import Image from "next/image";
import StatsCounter from "./components/navbar/counter";
import { useState } from "react";
import Link from "next/link";
import ContactForm from "./components/navbar/contactform";
import Reviews from "./components/navbar/rewiespage";
import Footer from "./components/navbar/footer";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission:
      "Our mission is to provide innovative, reliable, and scalable business solutions that drive growth, efficiency, and long-term success for our clients.",
    vision:
      "Our vision is to become a trusted global business partner, recognized for excellence, innovation, and impactful solutions across industries.",
    values:
      "We believe in integrity, customer commitment, innovation, teamwork, and delivering measurable results that create lasting value.",
  };

  const leftAnim = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };
  const rightAnim = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };
  const upAnim = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-6 lg:px-16">

          {/* HERO IMAGE */}
          <motion.div
            className="relative w-full order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/hero-img.webp"
              alt="Business Man"
              className="rounded-2xl w-full h-64 sm:h-96 lg:h-[700px] object-cover"
            />

            {/* STATS CARD */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:bottom-6 bg-white p-4 sm:p-5 rounded-xl shadow-lg w-64 sm:w-72"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="flex items-center -space-x-2">
                <img className="w-8 h-8 rounded-full border" src="https://randomuser.me/api/portraits/men/1.jpg" />
                <img className="w-8 h-8 rounded-full border" src="https://randomuser.me/api/portraits/men/2.jpg" />
                <img className="w-8 h-8 rounded-full border" src="https://randomuser.me/api/portraits/men/3.jpg" />
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white text-sm">+</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mt-3">30K</h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Happy customers worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* HERO TEXT */}
          <motion.div
            className="bg-[#0f2d2f] lg:h-full text-white rounded-2xl relative flex flex-col justify-center items-start p-6 sm:p-8 lg:p-10 order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm sm:text-base tracking-widest text-teal-300 mb-4">
              Pakistan's Leading Multi-Industry Powerhouse
            </span>

            <motion.h1
              className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Empowering Industries.<br />
              Building Futures.
            </motion.h1>

            <motion.p
              className="text-gray-300 mt-4 sm:mt-6 max-w-full sm:max-w-md text-start text-sm sm:text-base"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              FAST Group delivers innovative solutions across IT, Marketing, Real Estate, Education, Travel, and beyond—transforming businesses with speed, intelligence, and excellence.
            </motion.p>

            <motion.div
              className="mt-6 lg:mt-8 flex items-center gap-2 sm:gap-3 text-teal-300"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="text-2xl sm:text-3xl animate-bounce">↗</span>
              <span className="text-sm sm:text-base">Scroll Down</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CARD GRID */}
      <CardGrid />

      {/* ABOUT SECTION */}
      <section className="bg-[#faf7f2] min-h-screen flex items-center justify-center py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGES */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex justify-center mb-12 lg:mb-0"
            >
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-lg w-72 sm:w-80 lg:w-96 h-64 sm:h-96 lg:h-[500px]">
                <Image
                  src="/images/section.webp"
                  alt="University"
                  width={420}
                  height={520}
                  className="object-cover w-full h-full"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute lg:top-64 xl:w-64 xl:h-56 lg:left-80 top-52 left-1/2 transform -translate-x-1/2 lg:translate-x-0 rounded-3xl overflow-hidden border-4 border-white shadow-lg w-60 h-44 lg:w-[300px] lg:h-[280px]"
              >
                <Image
                  src="/images/testimonial-img.webp"
                  alt="Graduation"
                  width={420}
                  height={280}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-green-900 font-semibold mb-4 text-sm">
                ABOUT OUR BUSINESS
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
                Driving Growth. Delivering <br /> Business Excellence
              </h2>

              <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
                Founded with a vision to empower businesses, we deliver innovative,
                result-driven solutions across multiple industries—helping brands grow,
                scale, and lead with confidence in a competitive market.
              </p>

              {/* TABS */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-b mb-6">
                {["mission", "vision", "values"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 font-semibold capitalize transition-all text-left sm:text-center ${
                      activeTab === tab
                        ? "border-b-2 border-green-900 text-green-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Our {tab}
                  </button>
                ))}
              </div>

              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-gray-600 mb-10 text-sm sm:text-base"
              >
                {content[activeTab as keyof typeof content]}
              </motion.p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full lg:w-64 bg-[var(--accent)] text-white shadow-lg hover:scale-105 transition px-8 py-4 rounded-lg font-semibold text-sm sm:text-base"
                >
                  More About Us
                </motion.button>

                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-bold">100%</span>
                  <span className="text-gray-600 text-sm sm:text-base">
                    Client <br /> Satisfaction
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARD SLIDER */}
      <CardSlider />

      {/* PROJECTS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="py-12 bg-[var(--bg-color)]">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Heading */}
            <div className="flex-1 mb-6 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--primary-color)] mb-4">
                Proud Projects
              </h2>
              <h3 className="text-2xl font-bold text-[var(--text-color)]">
                Breaking Boundaries, Building Dreams.
              </h3>
            </div>

            {/* Paragraph */}
            <div className="flex-1 mb-6 lg:mb-0">
              <p className="text-[var(--text-color)] mb-6 leading-relaxed text-sm sm:text-base">
                We work closely with our clients to understand their unique needs 
                and craft tailored solutions that address challenges.
              </p>
            </div>

            {/* Button */}
            <div className="flex-1 flex items-start lg:justify-end">
              <Link
                href="/projects"
                className="px-6 py-3 bg-[var(--accent)] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
              >
                View Projects
              </Link>
            </div>

          </div>

          {/* PROJECT CARDS GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:grid-rows-2 mt-8">
            {/* Card 1 – Left */}
            <Link href="/services/business" className="col-span-6 md:col-span-4">
              <motion.div
                variants={leftAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative h-full overflow-hidden rounded-2xl"
              >
                <img src="/project-gallery-1.webp" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[var(--accent)]/30" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded">Business</span>
                  <h3 className="mt-2 text-xl font-semibold">Business</h3>
                </div>
              </motion.div>
            </Link>

            {/* Card 2 */}
            <Link href="/Custom Printing.webp" className="col-span-6 md:col-span-2">
              <motion.div
                variants={rightAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative h-full overflow-hidden rounded-2xl"
              >
                <img src="/images/istockphoto-172457074-612x612.jpg" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[var(--accent)]/30" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded">Business</span>
                  <h3 className="mt-2 text-xl font-semibold">Printing & Packaging</h3>
                </div>
              </motion.div>
            </Link>

            {/* Card 3 */}
            <Link href="/learning-platform" className="col-span-6 md:col-span-2">
              <motion.div
                variants={upAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-full overflow-hidden rounded-2xl"
              >
                <img src="/images/section.webp" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[var(--accent)]/30" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded">Support</span>
                  <h3 className="mt-2 text-xl font-semibold">Interactive Learning Platform</h3>
                </div>
              </motion.div>
            </Link>

            {/* Card 4 */}
            <Link href="/jewellery" className="col-span-6 md:col-span-4">
              <motion.div
                variants={upAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-full overflow-hidden rounded-2xl"
              >
                <img src="/juwlery.jpg" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[var(--accent)]/30" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded">Business</span>
                  <h3 className="mt-2 text-xl font-semibold">The Glamours</h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTERS, REVIEWS, CONTACT, FOOTER */}
      <StatsCounter />
      <Reviews />
      <ContactForm />
      <Footer />
    </>
  );
}
