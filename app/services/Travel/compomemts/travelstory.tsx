"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sophia Lee",
    avatar: "/user/user1.jpg",
    location: "New York, USA",
    comment:
      "Bali was absolutely breathtaking! The sunset views and local culture made this trip unforgettable.",
    rating: 5,
  },
  {
    name: "Liam Smith",
    avatar: "/user/user2.jpg",
    location: "London, UK",
    comment:
      "The safari adventure in Kenya was surreal. Loved the wildlife and the guide’s expertise!",
    rating: 5,
  },
  {
    name: "Amira Khan",
    avatar: "/user/user4.jpg",
    location: "Dubai, UAE",
    comment:
      "Norway’s Aurora Borealis was magical. Highly recommend the local tours for a full experience.",
    rating: 4,
  },
];

export default function TravelReviews() {
  return (
    <section className="py-20 bg-white">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
          Traveler <span className="text-[var(--accent)]">Reviews</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Hear from our travelers about their amazing experiences and adventures.
        </p>
      </motion.div>

      {/* Review Cards with container animation */}
      <motion.div
        className="px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex m-auto  gap-8 w-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-2xl p-6 shadow-lg relative hover:shadow-2xl transition"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Avatar */}
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-[var(--accent)] mb-4"
              />

              {/* Comment */}
              <p className="text-gray-700 mb-4 text-sm">{review.comment}</p>

              {/* Name & Location */}
              <div>
                <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                <p className="text-gray-500 text-xs">{review.location}</p>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex gap-1">
                {Array(review.rating)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className="text-yellow-400">★</span>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
