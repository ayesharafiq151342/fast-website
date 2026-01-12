"use client";

import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/navbar/footer";
import { motion } from "framer-motion";

import WhyChooseUs from "@/app/components/choseus";
import VisaSection from "./components/visa";
import SoftSkill from "./components/softskill";
import CounselorsSection from "./components/consult";
import FAQSection from "./components/EducationFAQS";
import UpcomingEvents from "./components/event";
export default function HeroSection() {

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
            backgroundImage: "url('/services/bg-lastest-new-now.webp')",
            backgroundSize: "cover",
            backgroundPosition: "left",
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
     Empowering Global Achievers
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-white max-w-3xl drop-shadow-md"
          >
         Your bridge between ambition and opportunity - IELTS training, soft skills development, and study abroad guidance



          </motion.p>
        </div>
      </div>
 <section className="py-24 xl:w-8/12 m-auto overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center lg:justify-start"
        >
          {/* MAIN IMAGE */}
          <div className="w-full lg:h-[480px] overflow-hidden rounded-lg shadow-xl">
            <img
              src="/services/greater-acceptance.avif"
              alt="Team Work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute  -bottom-20 left-94  overflow-hidden xl:shadow-xl rounded-lg flex items-center gap-4 p-4"
          >
  <div className="absolute lg:w-[750px] -inset-6 rounded-[2.5rem] bg-[var(--accent)]/20"></div>

            {/* IMAGE (XL only) */}
            <div className="hidden xl:block w-56 h-56 rounded-lg overflow-hidden">
              <img
                src="/gallery-img3-min.jpg"
                alt="Projects"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-10 h-[2px] bg-[var(--accent)]"></span>
            <span className="text-[var(--accent)] font-semibold uppercase text-sm">
              Fast
            </span>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            IELTS <span className="text-[var(--accent)]">&</span> Training
          </motion.h2>

          <ul className="space-y-4">
            {[
              {
                title: "100% Client Satisfaction",
                desc:
                  "All four modules covered: Listening, Reading, Writing, and Speaking with proven strategies",
              },
              {
                title: "Certified Expert Instructors",
                desc:
                  "Learn from trainers with 9.0 band scores and international certifications",
              },
              {
                title: "Outstanding Success Rates",
                desc:
                  "92% of our students achieve their target band scores on first attempt",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  {item.title}
                </div>
                <p className="text-gray-600 leading-relaxed mt-2 max-w-xl">
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
<VisaSection/>
<SoftSkill/>
<CounselorsSection/>
<UpcomingEvents/>
<FAQSection/>

    <Footer />
    </>
  );
}
