"use client";

import { motion } from "framer-motion";

const countries = [
  {
    name: "United Kingdom",

    visas: "Student, Work, Tourist",
    image: "/services/uk.jpg",
  },
  {
    name: "Canada",
   
    visas: "Immigration, Study, Work",
       image: "/services/CA.jpg",

  },
  {
    name: "USA",
  
    visas: "All Visa Types",
        image: "/services/Thailand.jpg",

  },
  {
    name: "Australia",

    visas: "PR, Student, Skilled",
        image: "/services/EU.jpg",
  }
];

export default function StudyAbroadAdvisory() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Study Abroad <span className="text-[var(--accent)]">Advisory</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore global opportunities with expert guidance for study, work,
            immigration, and career growth.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className="
                group bg-white rounded-2xl overflow-hidden
                border border-gray-200
                shadow-md hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-2
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-lg font-bold text-gray-900">
                  {country.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2 mb-5">
                  {country.visas}
                </p>

                <button
                  className="
                    px-6 py-2.5 rounded-full
                    bg-[var(--accent)] text-white
                    font-semibold text-sm
                    hover:opacity-90 transition
                  "
                >
                  Explore Options
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
