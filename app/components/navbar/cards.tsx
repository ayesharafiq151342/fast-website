"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLightbulb, 
  faHandshake, 
  faTrophy, 
  faUsers, 
  faLeaf, 
  faShieldAlt 
} from "@fortawesome/free-solid-svg-icons";

const cards = [
  { 
    title: "Integrity", 
    description: "Building trust through transparency, honesty, and ethical business practices in every interaction.", 
    icon: faShieldAlt 
  },
  { 
    title: "Innovation", 
    description: "Shaping the future with cutting-edge technology, creative thinking, and forward-looking solutions.", 
    icon: faLightbulb 
  },
  { 
    title: "Excellence", 
    description: "Delivering outstanding quality in every detail—from smallest projects to million-dollar ventures.", 
    icon: faTrophy 
  },
  { 
    title: "Collaboration", 
    description: "Building valuable partnerships based on mutual trust, respect, and shared success.", 
    icon: faUsers 
  },
  { 
    title: "Sustainability", 
    description: "Growing responsibly with eco-friendly practices that benefit society and protect our planet.", 
    icon: faLeaf 
  },
  { 
    title: "Ready to Partner?", 
    description: "Join hundreds of businesses who trust FAST Group for innovative, ethical, and results-driven solutions.", 
    icon: faHandshake 
  },
];

export default function CardGrid() {
  return (
    <section className="py-20 bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
         <h2 className="text-3xl lg:text-4xl  font-bold text-center mb-4">
     Built on
        </h2>
        <h2 className="text-3xl text-[var(--accent)] lg:text-4xl font-bold text-center mb-12">
         Principles That Matter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center cursor-pointer
                         transition-all duration-300 transform hover:scale-105 hover:bg-[var(--accent)]  hover:text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon
                icon={card.icon}
                className="text-[var(--accent)] mb-4 text-4xl transition-colors duration-300 group-hover:text-white"
              />

              <h3 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-white">{card.title}</h3>
              <p className="text-gray-500 transition-colors duration-300 group-hover:text-white">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
