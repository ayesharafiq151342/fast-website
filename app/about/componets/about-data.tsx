"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ================= TYPES ================= */
type AboutSection = {
  id: string;
  title: string;
  description: string;
  values?: string[];
  imageLeft: string;
  imageRight: string;
};

type CounterProps = {
  count: number;
  label: string;
  duration?: number;
  icon?: React.ReactNode;
};

/* ================= ATTRACTIVE COUNTER ================= */
function Counter({ count, label, duration = 2000, icon }: CounterProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = count / (duration / 30);
    const interval = setInterval(() => {
      start += increment;
      if (start >= count) {
        start = count;
        clearInterval(interval);
      }
      setCurrent(Math.floor(start));
    }, 30);

    return () => clearInterval(interval);
  }, [count, duration]);

  return (
    <div className="flex flex-col items-center justify-center p-6 hover:scale-105 transform transition-all duration-300 text-white">
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      <div className="text-4xl font-extrabold">{current}</div>
      <div className="mt-2 text-sm font-medium text-white/90">{label}</div>
    </div>
  );
}

/* ================= DATA ================= */
const aboutSections: AboutSection[] = [
  {
    id: "who",
    title: "Who We Are",
    description:
      "Welcome to Fast Group of Companies, a company that has earned the trust of business excellence in diversification. With 9 years of proven track record since 2016, we are an innovative, progressive organization motivated by innovation, integrity, and impact. We operate in various fields such as technology, real estate, marketing, education, travel, and e-commerce with one objective: to offer solutions that are unmatched in quality and efficiency to the world.",
    values: [
      "Integrity & Transparency",
      "Quality & Excellence",
      "Customer Commitment",
      "Innovation & Creativity",
      "Long-Term Relationships",
    ],
    imageLeft: "/avout.webp",
    imageRight: "/testimonial-img.webp",
  },
  {
    id: "history",
    title: "A History of Innovation & Integrity",
    description:
      "FAST Group of Companies stands among Pakistan's most innovative and diverse business enterprises. Founded on uncompromising integrity, professionalism, and advancement, we've evolved from modest origins into a powerhouse delivering excellence across multiple industries.\n\nOur philosophy is simple yet powerful: Faster, Smarter, Stronger. We don't just offer services—we create ecosystems where every solution helps our clients move with greater speed, intelligence, and impact. From IT solutions to real estate, education to e-commerce, each division works toward sustainable solutions that exceed expectations.",
    imageLeft: "/history.jpg",
    imageRight: "/history2.jpg",
  },
  {
    id: "business",
    title: "Business Services",
    description:
      "FAST Group provides a wide range of business services to help companies grow efficiently and effectively. Our offerings include IT solutions, digital marketing, e-commerce support, real estate consultancy, and custom solutions tailored to your business needs. We focus on delivering innovation, quality, and measurable results to every client.",
    imageLeft: "/service-3.webp",
    imageRight: "/service-details.webp",
  },
  {
    id: "jewelry",
    title: "Jewelry Business",
    description:
      "Our jewelry division focuses on elegant designs, fine craftsmanship, and premium quality materials to deliver timeless beauty. We create exclusive collections that cater to every occasion, blending modern trends with traditional artistry. Each piece is meticulously crafted to ensure durability, luxury, and uniqueness. From custom-made rings and necklaces to luxury bracelets and earrings, our jewelry reflects sophistication and style. Our commitment to excellence and customer satisfaction ensures that every creation is more than just an accessory—it’s a statement of elegance and personal expression.",
    imageLeft: "/jewelry-1.jpg",
    imageRight: "/jewelry4.jpg",
  },
  {
    id: "printing",
    title: "Custom Printing",
    description:
      "Our Custom Printing division offers high-quality, tailor-made printing solutions for businesses, events, and personal projects. From T-shirts and hoodies to banners, posters, mugs, and promotional materials, we ensure precision, creativity, and fast delivery every time. Our team works closely with clients to bring unique designs to life, combining cutting-edge technology with attention to detail. Whether it's a corporate branding campaign, a special event, or personalized gifts, we deliver vibrant, durable, and professional prints that make a lasting impression. Creativity, quality, and customer satisfaction are at the heart of everything we print.",
    imageLeft: "/custompatinting.jpg",
    imageRight: "/Custom Printing-2.avif",
  },
];

/* ================= PAGE ================= */
export default function AboutPage() {
  const [active, setActive] = useState<AboutSection>(aboutSections[0]);

  /* Example customer reviews for sections */
  const reviews: Record<string, { name: string; role: string; text: string; image: string }[]> = {
    jewelry: [
      {
        name: "Amina S.",
        role: "Customer",
        text: "The jewelry quality is excellent and the designs are unique. Highly recommended!",
        image: "/user/user3.jpg",
      },
      {
        name: "Sara L.",
        role: "Customer",
        text: "I love the craftsmanship and the customer service is outstanding. Will buy again!",
        image: "/user/user5.jpg",
      },
    ],
    printing: [
      {
        name: "Ali Z.",
        role: "Client",
        text: "Excellent quality printing and fast delivery. Highly recommended!",
        image: "/user/user2.jpg",
      },
      {
        name: "Sara N.",
        role: "Client",
        text: "The custom t-shirts and banners are fantastic! Amazing work.",
        image: "/user/user5.jpg",
      },
    ],
    business: [
      {
        name: "Ahmed R.",
        role: "CEO",
        text: "Their business solutions helped our company streamline operations and improve revenue.",
        image: "/user/user2.jpg",
      },
      {
        name: "Fatima K.",
        role: "Entrepreneur",
        text: "Professional team with innovative solutions. Truly satisfied with the results.",
        image: "/user/user3.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf8f2] p-6 md:p-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-8">
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-64 bg-white rounded-xl p-4 shadow">
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          {aboutSections.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 text-sm transition
                ${active.id === item.id ? "bg-[var(--accent)] text-white" : "hover:bg-gray-100 text-gray-700"}`}
            >
              {item.title}
            </button>
          ))}
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1 bg-white rounded-xl p-6 md:p-10 shadow">
          <h1 className="text-3xl font-bold mb-4">{active.title}</h1>
          <p className="text-gray-600 mb-10 max-w-4xl leading-relaxed whitespace-pre-line">{active.description}</p>

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image src={active.imageLeft} alt={`${active.title} image 1`} fill className="object-cover" />
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image src={active.imageRight} alt={`${active.title} image 2`} fill className="object-cover" />
            </div>
          </div>

          {/* WHO WE ARE VALUES */}
          {active.id === "who" && active.values && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {active.values.map((value, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-white border border-[var(--accent)] shadow-sm hover:shadow-lg transition"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-[var(--accent)] font-bold mb-3">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COUNTERS */}
          {active.id === "business" && (
            <div className="grid grid-cols-2 bg-[var(--accent)] rounded-lg sm:grid-cols-4 gap-6 mb-12 text-center text-white">
              <Counter count={300} label="Projects Delivered" icon="💼" />
              <Counter count={150} label="Satisfied Clients" icon="😊" />
              <Counter count={50} label="Industries Served" icon="🏭" />
              <Counter count={10} label="Years of Experience" icon="⏳" />
            </div>
          )}

        {active.id === "history" && (
  <>
    {/* HISTORY COUNTERS */}
    <div className="grid grid-cols-2 bg-[var(--accent)] rounded-lg sm:grid-cols-4 gap-6 text-center mb-12 text-white">
      <Counter count={15} label="Years of Excellence" icon="🏆" />
      <Counter count={200} label="Growth Rate (%)" icon="📈" />
      <Counter count={500} label="Team Members" icon="👥" />
      <Counter count={20} label="Countries Served" icon="🌎" />
    </div>

    {/* MISSION & VISION CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div className="p-6 bg-[VAR(--primary)] text-white rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
        <div className="text-3xl mb-4">🎯</div>
        <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
        <p className="text-white/90 leading-relaxed">
          Our mission is to provide innovative, high-quality solutions across diverse industries, fostering sustainable growth for our clients, employees, and communities. We aim to set new standards in service excellence and business integrity.
        </p>
      </div>

      <div className="p-6 bg-[VAR(--accent)] text-white rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
        <div className="text-3xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
        <p className="text-white/90 leading-relaxed">
          Our vision is to become a globally recognized leader in delivering multi-industry solutions that empower businesses and individuals to achieve their full potential while driving positive impact and innovation across every sector we serve.
        </p>
      </div>
    </div>
  </>
)}


          {active.id === "printing" && (
            <div className="grid grid-cols-2 bg-[var(--accent)] rounded-lg sm:grid-cols-4 gap-6 mb-12 text-center text-white">
              <Counter count={1000} label="Projects Completed" icon="🖨️" />
              <Counter count={500} label="Happy Clients" icon="😊" />
              <Counter count={200} label="Unique Designs" icon="🎨" />
              <Counter count={50} label="Countries Served" icon="🌎" />
            </div>
          )}

          {/* CUSTOMER REVIEWS */}
          {["jewelry", "printing", "business"].includes(active.id) && reviews[active.id] && (
            <>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {reviews[active.id].map((review, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 mb-4 md:mb-0 flex-shrink-0">
                      <Image src={review.image} alt={review.name} width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700">— {review.name}</p>
                      <p className="text-gray-700 mb-2">{review.text}</p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
