"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const slides = [
  { name: "Bridge Project", image: "/services/S1.webp" },
  { name: "Skyscraper Build", image: "/services/S2.webp" },
  { name: "Residential Complex", image: "/services/S3.webp" },
  { name: "Modern Apartments", image: "/services/S4.webp" },
  { name: "Urban Tower", image: "/services/S5.webp" },
  { name: "Luxury Villas", image: "/services/S6.webp" },
];

export default function Projects_realstate() {
  return (
    <section className="py-24 relative bg-green-600 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        className="text-center text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-12 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Completed <span className="text-[var(--accent)] ">Projects</span>
      </motion.h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="max-w-7xl mx-auto px-4 md:px-6 relative z-10"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--accent)]/30 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-4 transition duration-300">
                <h3 className="text-white text-xl font-bold">{item.name}</h3>
                <p className="text-gray-200 mt-2 text-sm">
                  High-quality construction with modern design and sustainable approach.
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Grid CSS using Tailwind + custom */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
