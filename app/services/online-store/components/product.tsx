"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    title: "Modern Ceramic Vase Sete",
    price: "PKR 220,000",
    image: "/services/Modern Ceramic Vase Sete.jpg",
    badge: "Featured",
  },
  {
    title: "Scandinavian Wall Art",
    price: "PKR 120,000",
    image: "/services/Scandinavian Wall Art.jpg",
    badge: "Trending",
  },
  {
    title: "Honeymoon Special Tour",
    price: "PKR 350,000",
    image: "/services/Luxury Throw Pillow.jpg",
    badge: "Trending",
  },
  {
    title: "Ambient Table Lamp",
    price: "PKR 500,000",
    image: "/services/Ambient Table Lamp.jpg",
    badge: "Premium",
  },
  {
    title: "Botanical Wall Planter",
    price: "PKR 280,000",
    image: "/services/Botanical Wall Planter.jpg",
    badge: "Hot Deal",
  },
  {
    title: "Minimalist Clock",
    price: "PKR 310,000",
    image: "/services/Minimalist Clock.jpg",
    badge: "Trending",
  },
];


export default function FeaturedProducts() {
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
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            Featured <span className="text-[var(--accent)]">Products</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Handpicked travel & visa solutions designed for comfort, value, and success.
          </p>
        </motion.div>

        {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group bg-white rounded-2xl overflow-hidden
                shadow-md hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full h-60 object-cover
                    group-hover:scale-110
                    transition-transform duration-500
                  "
                />

                {/* Badge */}
                <span className="
                  absolute top-4 left-4
                  bg-[var(--accent)] text-white
                  text-xs font-semibold px-3 py-1 rounded-full
                ">
                  {product.badge}
                </span>

                {/* Hover Actions */}
                <div className="
                  absolute inset-0 bg-black/40
                  flex items-center justify-center gap-4
                  opacity-0 group-hover:opacity-100
                  transition
                ">
                  <button className="bg-white p-3 rounded-full hover:bg-gray-100">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="bg-[var(--accent)] p-3 rounded-full">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>

                <p className="text-[var(--accent)] font-bold mb-4">
                  {product.price}
                </p>

                               <button className="px-10 py-4 bg-[var(--accent)] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">

             Add To Card
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
