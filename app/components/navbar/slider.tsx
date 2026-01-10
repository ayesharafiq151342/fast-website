"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const cards9 = [
  {
    title: "IT Solutions & Digital Tech",
    description:
      "Custom software, web development, and digital transformation solutions.",
    image: "/slider1.webp",
    link: "/services/it-solutions",
  },
  {
    title: "Marketing & Advertising",
    description:
      "Brand strategy, social media, and performance marketing campaigns.",
    image: "/Marketing & Advertising.webp",
    link: "/services/marketing",
  },
  {
    title: "Printing & Packaging",
    description:
      "High-quality printing, custom packaging, and eco-friendly solutions.",
    image: "/Printing & Packaging.webp",
    link: "/services/printing",
  },
  {
    title: "Soft Skills & Education",
    description:
      "IELTS training, personality development, and study abroad guidance.",
    image: "/Soft Skills & Education.webp",
    link: "/services/education",
  },
  {
    title: "Travel Agency & Ticketing",
    description:
      "Flight bookings, visa assistance, and comprehensive tour packages.",
    image: "/Travel Agency & Ticketing.jpg",
    link: "/services/travel",
  },
  {
    title: "Consultant & Travel Advisory",
    description:
      "Visa consultancy, immigration support, and legal advisory services.",
    image: "/Consultant & Travel Advisory.webp",
    link: "/services/consultancy",
  },
  {
    title: "Online Store (Dacor Dice)",
    description:
      "Quality lifestyle products with fast delivery and secure payments.",
    image: "/Online Store (Dacor Dice).gif",
    link: "/services/store",
  },
  {
    title: "Custom Printing",
    description: "End-to-end solutions for all your printing and packaging needs.",
    image: "/Custom Printing.webp",
    link: "/services/custom-printing",
  },
  {
    title: "Hospitality & Tourism App",
    description:
      "Smart hotel bookings, tour packages, and travel companion app",
    image: "/Hospitality & Tourism App.webp",
    link: "/services/global",
  },
];

export default function MultiCardSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; // Adjust speed

    const animate = () => {
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="h-[90vh] w-full bg-[var(--primary)] flex flex-col justify-center items-center px-6 lg:px-16 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl text-white font-bold text-center mb-3">
        Complete
      </h2>
      <h2 className="text-3xl lg:text-4xl text-white font-bold text-center mb-3">
        Multi-Industry Solutions
      </h2>
      <p className="text-lg text-white text-center max-w-3xl mb-12">
        Nine specialized divisions working together to deliver comprehensive,
        innovative solutions across every industry sector.
      </p>

      {/* Infinite Slider */}
      <div
        ref={containerRef}
        className="flex gap-6 w-full overflow-hidden cursor-grab"
      >
        {/* Duplicate cards for smooth infinite loop */}
        {[...cards9, ...cards9].map((card, index) => (
          <Link href={card.link} key={index}>
            <div
              className="group min-w-[300px] bg-white rounded-2xl shadow-lg
                         cursor-pointer transition-all duration-300
                         hover:scale-105 hover:bg-teal-600"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold mb-2 group-hover:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm group-hover:text-white">
                  {card.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
