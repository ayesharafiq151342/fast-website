"use client";

import Navbar from "./component/nevbar";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductGrid from "./component/ProductGrid";
import ProductPage from "./component/ProductGrid";

export default function Home({ params }: { params: { slug: string } }) {
    const collections = [
  { name: "Rings", img: "/jewllery/rings1.avif" },
  { name: "Necklace", img: "/jewllery/na-1c.jpg" },
  { name: "Earrings", img: "/jewllery/ea.jpg" },
  { name: "Bangles", img: "/jewllery/ba-1.jpg" },

];
interface ProductPageProps {
  params: {
    slug: string;
  };
}
const texts = [
  "12.12 Sale Live Now",
  "30,000+ Satisfied Customers",
  "1,000+ 5 Star Reviews",
  "Free Shipping Above Rs. 2990/-",
  "WORLDWIDE SHIPPING",
  "3-5 Working Days Delivery Time",
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
    </section><div className="w-full overflow-hidden bg-[var(--golden)] py-3">
      <motion.div
        className="flex whitespace-nowrap gap-10 text-white font-medium text-sm md:text-base"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {/* Repeat content twice for smooth loop */}
        {[...texts, ...texts].map((text, i) => (
          <div key={i} className="flex items-center gap-2">
            <span>⭐</span>
            <span>{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
<div className="w-full text-center px-4 md:px-12 py-16 bg-white">
   {/* Main Heading */}
  <h1 className="font-serif text-3xl md:text-5xl text-gray-900 mb-4">
   New Arrivals
  </h1>
  {/* Small Heading */}
  <strong className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
      2025 Latest Designs
  </strong>

 

  {/* Sub Text */}
   <h4 className="font-serif text-sm md:text-2xl text-gray-900 mt-4">
   online artificial jewellery shopping in Pakistan

  </h4>

  {/* Divider */}
  <div className="w-20 h-[2px] bg-[var(--golden)] mx-auto mt-4 mb-4"></div>

  {/* Description */}
<h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
    Pakistani Jewellery Design
  </h1>

  <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
    Explore the exquisite world of Pakistani Jewellery Design, where Traditional Jewellery meets innovation.
  </p>

</div>
<ProductGrid/>

    </>
  );
}
