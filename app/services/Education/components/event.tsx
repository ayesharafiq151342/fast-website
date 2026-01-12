"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

const events = [
  {
    date: "Feb 20, 2026",
    title: "Soft Skills Workshop",
    description:
      "Enhance your communication, leadership, and teamwork skills in this interactive workshop.",
  },
  {
    date: "Mar 5, 2026",
    title: "Visa Consultancy Session",
    description:
      "Get guidance from our experienced counselors for a smooth visa application process.",
  },
  {
    date: "Mar 15, 2026",
    title: "Leadership Training Seminar",
    description:
      "Learn leadership strategies from experts to boost your professional growth.",
  },
  {
    date: "Apr 2, 2026",
    title: "Team Building Event",
    description:
      "Participate in interactive exercises designed to enhance team collaboration.",
  },
];

export default function UpcomingEventsList() {
  return (
    <section
      className="relative py-28 bg-cover bg-center overflow-hidden"
     
    >
      {/* GREEN DOTS OVERLAY */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.9) 2px, transparent 2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE – EVENTS */}
        <div>
          {/* Heading */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Upcoming <span className="text-[var(--accent)]">Events</span>
            </h2>
            <p className="text-gray-700 mt-6 text-lg max-w-2xl">
              Stay updated with our latest workshops, seminars, and professional
              growth sessions designed for your success.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-10">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent)] text-white rounded-full shadow-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 text-base">{event.date}</p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mt-2 text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       {/* RIGHT SIDE – IMAGE */}
<motion.div
  className="relative"
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
>
  {/* Accent BG */}
  <div className="absolute lg:w-[750px] -inset-6 rounded-[2.5rem] bg-[var(--accent)]/15"></div>

  {/* IMAGE CONTAINER */}
  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl
                  w-full lg:w-[700px]
                  h-[380px] md:h-[520px] lg:h-[720px]">
    
    <Image
      src="/services/upcoming.jpg"
      alt="Upcoming Events"
      fill
      className="object-cover"
      priority
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}
