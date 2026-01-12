"use client";

import { motion } from "framer-motion";

export default function ExpertiseSection() {
  return (
    <section className=" py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed uppercase">
            An Investment in Knowledge Pays the Best Interest...
          </h2>

          <p className="mt-4 font-bold text-gray-900">
            — Fast
          </p>

          <p className="mt-8 text-gray-600 max-w-md">
            We believe learning and expertise are the foundation of success.
            Our professional guidance empowers individuals and organizations
            to grow with confidence.
          </p>
        </motion.div>

        {/* RIGHT CIRCLE */}
      {/* RIGHT CIRCLE */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative w-full flex justify-center"
>
  <div className="relative w-[380px] h-[380px] 
                  md:w-[500px] md:h-[500px] 
                  lg:w-[560px] lg:h-[560px] 
                  rounded-full overflow-hidden grid grid-cols-2 grid-rows-2">

    {/* TOP LEFT */}
    <div className="bg-[var(--accent)] flex flex-col items-center justify-center text-white text-center p-8">
      <span className="text-4xl mb-3">💡</span>
      <p className="text-base font-medium">
        Our Expertise is earned through our experience
      </p>
    </div>

    {/* TOP RIGHT IMAGE */}
    <img
      src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
      alt="Meeting"
      className="w-full h-full object-cover"
    />

    {/* BOTTOM LEFT IMAGE */}
    <img
      src="/services/hospitality1.jpg"
      alt="Work"
      className="w-full h-full object-cover"
    />

    {/* BOTTOM RIGHT */}
    <div className="bg-[var(--accent)] flex flex-col items-center justify-center text-white text-center p-8">
      <span className="text-4xl mb-3">👥</span>
      <p className="text-base font-medium">
        Our Team for your management
      </p>
    </div>

  </div>
</motion.div>


      </div>
    </section>
  );
}
