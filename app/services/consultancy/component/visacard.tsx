"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Plane, ShieldCheck } from "lucide-react";

const visaSteps = [
  {
    icon: FileText,
    title: "Document Assessment",
    desc: "Complete evaluation of your profile, documents, and eligibility.",
  },
  {
    icon: ShieldCheck,
    title: "Application Preparation",
    desc: "Error-free visa application prepared by certified consultants.",
  },
  {
    icon: CheckCircle,
    title: "Embassy Submission",
    desc: "Accurate submission with full compliance to embassy rules.",
  },
  {
    icon: Plane,
    title: "Visa Approval & Travel",
    desc: "Get your visa approved and fly with confidence.",
  },
];

export default function VisaSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <motion.div
          className="relative lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/services/visa.jpg"
            alt="Visa Consultancy"
            className="w-full h-72 md:h-96 lg:h-[70vh] object-cover rounded-2xl shadow-2xl"
          />

          {/* TRUST BADGE */}
          <div className="absolute top-4 left-4 bg-white px-5 py-2 rounded-full shadow text-sm font-bold text-[var(--accent)]">
            98% Approval Rate
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Trusted <span className="text-[var(--accent)]">Visa Consultancy</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl">
            We simplify the visa process with expert guidance, transparent
            procedures, and high approval success rates.
          </p>

          {/* STEPS */}
          <div className="mt-10 space-y-8">
            {visaSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                  <step.icon className="text-[var(--accent)] w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-10 px-8 py-4 bg-[var(--accent)] text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition">
            Get Visa Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
}
