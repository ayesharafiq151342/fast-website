"use client";

import Navbar from "./component/nevbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    const collections = [
  { name: "Rings", img: "/jewllery/rings1.avif" },
  { name: "Necklace", img: "/jewllery/na-1c.jpg" },
  { name: "Earrings", img: "/jewllery/ea.jpg" },
  { name: "Bangles", img: "/jewllery/ba-1.jpg" },

];

  return (
    <>
      <Navbar />
      <div className="w-full h-screen" >
  <img
    src="/jewllery/nayab_banner_1.webp"  // Make sure this is in public/jewllery/
    alt="HJ Jewellery Banner"
    className="w-full h-auto object-cover"
  />
</div>
<section className="w-full px-4 md:px-12 py-12 text-center">
      
      {/* HEADING */}
      <div className="font-atkinson text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-8">
        Shop By Collections
      </div>

      {/* COLLECTION ROW */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {collections.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* ROUND IMAGE */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={item.img}
                alt={item.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <p className="mt-2 text-sm md:text-base text-gray-700">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    </>
  );
}
