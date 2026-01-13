"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ayesha Khan",
    country: "Lahore, Pakistan",
    image: "/user/user4.jpg",
    review:
      "Absolutely love the quality! The decor pieces completely transformed my living room. Packaging was premium too.",
    rating: 5,
  },
  {
    name: "Daniel Roberts",
    country: "London, UK",
    image: "/user/user1.jpg",
    review:
      "Fast delivery and excellent craftsmanship. Everything looked exactly like the photos online.",
    rating: 5,
  },
  {
    name: "Sara Malik",
    country: "Dubai, UAE",
    image: "/user/user5.jpg",
    review:
      "Beautiful designs and authentic products. This store has become my go-to for home decor shopping.",
    rating: 4,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            Loved by <span className="text-[var(--accent)]">Customers</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
            Real experiences from people who trust our quality and service.
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="space-y-10">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Avatar */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent)]"
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.country}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex text-yellow-400 text-sm">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index}>★</span>
                      ))}
                  </div>
                </div>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900">4.9★</h3>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">12k+</h3>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-600 text-sm">Positive Feedback</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600 text-sm">Authentic Products</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
