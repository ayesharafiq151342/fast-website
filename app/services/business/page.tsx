"use client";

import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/navbar/footer";
import TechPage from "./component/techslider";
import { motion } from "framer-motion";

export default function HeroSection() {const images = [
  { src: '/services/e-c.png', title: 'E-Commerce Platform' },
  { src: '/services/mobile-banking-app-concept-free-vector.jpg', title: 'Banking App' },
  { src: '/services/hosptial.jpg', title: 'Hospital Network' },
];
const services = [
  {
    title: "Custom Software Development",
    description:
      "We design and develop custom software solutions tailored specifically to your business needs. Our scalable, secure, and high-performance applications help automate processes, improve efficiency, and support long-term business growth.",
    image: "/services/web.jpg",
  },
  {
    title: "Mobile Apps",
    description:
      "We build powerful and user-friendly mobile applications for both iOS and Android platforms. From idea to deployment, our mobile apps are designed to deliver smooth performance, great user experience, and real business value.",
    image: "/services/mobile app.jpg",
  },
  {
    title: "Digital Transformation Solutions",
    description:
      "Our digital transformation services help businesses modernize their operations using the latest technologies. We optimize workflows, integrate smart systems, and enable data-driven decision-making to keep your business future-ready.",
    image: "/services/diftial.jpg",
  },
  {
    title: "Website & E-Commerce",
    description:
      "We create modern, responsive websites and e-commerce platforms that attract customers and drive sales. Our solutions focus on performance, security, and seamless user experience to help your online business grow successfully.",
    image: "/services/web1.jpg",
  },
];

  return (
    <>  <Navbar />
      <div className="relative w-full h-[60vh] overflow-hidden">
        {/* Navbar */}
      

        {/* Background Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/services/businessbg.jpg')",
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
            className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg"
          >
           Digital Innovation That  Transforms
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-white max-w-3xl drop-shadow-md"
          >
            9+ years of delivering cutting-edge technology solutions that drive measurable business growth
          </motion.p>
        </div>
      </div>
<section className="py-20 overflow-hidden lg:w-8/12 m-auto">
        <div className="flex flex-col md:flex-row mt-10 items-center justify-center p-4 gap-6">
          {/* Heading */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-black">
              Offer The Latest Software <br /> And Solutions <span className="text-[var(--accent)]">  To Our Customers!</span>
            </h1>
          </div>

          {/* Paragraph */}
          <div className="md:w-1/2">
            <p className="text-black">
              Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season.
            </p>
          </div>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover rounded transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className=" bg-[var(--primary)] lg:w-full   m-auto">
  <div className="flex flex-col md:flex-row text-white items-center gap-10">
    
    {/* Left: Image */}
    <div className="md:w-1/2">
      <img
        src="/services/6.jpg"
        alt="Our Mission"
        className="w-full h-96 rounded-lg object-cover shadow-lg"
      />
    </div>

    {/* Right: Text (Mission & Vision Row-wise) */}
    <div className="md:w-1/2 flex flex-col md:flex-row gap-6">
      
      {/* Mission */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-white">Our Mission</h2>
        <p className="text-white mt-2">
          To provide innovative and reliable software solutions that empower our customers and make their lives easier.
        </p>
      </div>

      {/* Vision */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-white">Our Vision</h2>
        <p className="text-white mt-2">
          To be a global leader in delivering cutting-edge technology solutions with excellence and integrity.
        </p>
      </div>

    </div>

  </div>
</section>

 <section className="py-20 xl:w-8/12 m-auto ">
      <div className="text-center mb-12">
               <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 ">

          Our  <span className="text-[var(--accent)]">Core Services </span>
        </h1>
        <p className="text-gray-600 m-4 ">
          We provide a wide range of solutions to meet your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer"
          >
         <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
<TechPage /><section className=" py-24 xl:w-8/12 m-auto">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[var(--accent)]"></span>
            <span className="text-[var(--accent)] font-semibold uppercase text-sm">
              Works About
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Trusted by  <span className="text-[var(--accent)]">5,000+ </span><br /> Happy Customers
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            Jennings appetite disposed me an at subjects an. To no indulgence
            diminution so discovered mr apartments. Are off under folly death
            wrote cause her way spite.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <span className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs">
                ✓
              </span>
              100% Client Satisfaction
            </li>

            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <span className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs">
                ✓
              </span>
              World Class Worker
            </li>
          </ul>

          <button className="bg-[var(--accent)] hover:bg-[var(--primary)] text-white px-8 py-4 rounded-md font-semibold transition">
            Talk To A Consultant
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team Work"
            className="rounded-lg shadow-xl max-w-md w-full"
          />

          {/* FLOATING CARD */}
          <div className="absolute -bottom-10 left-0 bg-white shadow-xl rounded-lg px-10 py-8">
            <h3 className="text-3xl font-extrabold text-gray-900">875 +</h3>
            <p className="text-gray-600 text-sm mt-1">
              Completed Projects
            </p>
          </div>
        </div>

      </div>
    </section>
      {/* Section 2 */}
      
      <Footer />
    </>
  );
}
