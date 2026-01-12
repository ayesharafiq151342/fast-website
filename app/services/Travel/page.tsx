"use client";

import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/navbar/footer";
import { motion } from "framer-motion";

import Reviews from "@/app/components/navbar/rewiespage";
import Popular from "./compomemts/popular";
import TravelServices from "./compomemts/travelservices";
import TravelRecommendation from "./compomemts/travelrecoment";
import TravelPricing from "./compomemts/travelpricing_card";
import TravelStoriesCard from "./compomemts/travelstory";
import TravelReviews from "./compomemts/travelstory";
export default function HeroSection() {

  return (
    <>  <Navbar />
      <div className="relative w-full h-[60vh]  overflow-hidden">
        {/* Navbar */}


        {/* Background Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/services/bg-image-travel.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
            Your Journey

            Starts Here

          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-white max-w-3xl drop-shadow-md"
          >
            Transform your travel dreams into unforgettable memories with our expert planning, unbeatable prices, and 24/7 support



          </motion.p>
        </div>
      </div>
      <Popular />   
      <TravelRecommendation />
      <TravelServices />
<TravelPricing />
<TravelReviews/>
      <Footer />
    </>
  );
}
