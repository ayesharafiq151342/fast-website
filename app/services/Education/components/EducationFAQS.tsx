"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I apply for a visa?",
    answer: "You can apply through our online portal by submitting all required documents. Our counselors will guide you through every step.",
  },
  {
    question: "What documents are required?",
    answer: "Typically, you need a passport, photographs, visa application form, financial documents, and any supporting documents depending on visa type.",
  },
  {
    question: "How long does the visa process take?",
    answer: "Processing time varies by country and visa type. Our counselors provide a clear timeline for your application.",
  },
  {
    question: "Do you offer legal consultation?",
    answer: "Yes! Our registered lawyers provide expert legal consultation to ensure your application is accurate and complete.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
            Frequently Asked <span className="text-[var(--accent)]">Questions</span>
          </h2>
          <p className="text-gray-600 mt-4">
            We answer the most common questions to help you understand our services and processes.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer border border-gray-200"
              layout
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center p-6">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </motion.div>
              </div>

              {/* Answer with smooth animation */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", paddingTop: 16, paddingBottom: 16 }}
                    exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
