"use client";

import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/navbar/footer";
import { motion } from "framer-motion";

import Reviews from "@/app/components/navbar/rewiespage";
import FutureProducts from "./components/product";
import WhyShopWithUs from "./components/shopwithus";
import ShoppingExperience from "./components/experence";
import CustomerReviews from "./components/shopingrewies";

export default function HeroSection() {

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
            backgroundImage: "url('/services/handcraft_slide1-1024x501.webp')",
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
            Shop Smart. Live Fast.

          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-white max-w-3xl drop-shadow-md"
          >
            Transform your space with curated home decor that speaks elegance




          </motion.p>
        </div>
      </div>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/services/Homedecore.webp"
                alt="About Our Travel Company"
                className="w-full h-[420px] lg:h-[520px] object-cover rounded-3xl shadow-2xl"
              />

              {/* EXPERIENCE BADGE */}
              <span className="absolute top-6 left-6 bg-[var(--accent)] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                10+ Years Experience
              </span>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                About <span className="text-[var(--accent)]">Dacor Dice</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg">
                Dacor Dice brings you a thoughtfully curated collection of premium home décor, lifestyle essentials, and modern accessories designed to elevate everyday living. We believe your living space should be a true reflection of your personality — elegant, functional, and inspiring.

                Every product in our collection is carefully selected for its quality, craftsmanship, and timeless design, ensuring that style never comes at the cost of durability. From statement pieces that transform a room to subtle accents that complete it, we focus on details that make a difference.

                At Dacor Dice, we combine a seamless online shopping experience with trusted craftsmanship, transparent pricing, and customer-first service. Our mission is simple: to help you create spaces that feel personal, comfortable, and beautifully you — without compromise.
              </p>

              {/* HIGHLIGHTS */}


              {/* STATS */}

              {/* BUTTON */}
              <div className="mt-10">
                <button className="px-10 py-4 bg-[var(--accent)] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
                  Learn More About Us
                </button>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <FutureProducts />
      <WhyShopWithUs />
      <ShoppingExperience />
      <CustomerReviews/>
      <Footer />
    </>
  );
}
