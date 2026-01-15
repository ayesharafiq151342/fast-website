"use client";

import Navbar from "./component/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductGrid from "./component/ProductGrid";
import ProductPage from "./component/ProductGrid";
import {
  Globe,
  Headphones,
  Link,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import ReviewCarousel from "./component/rewies";
import Footer from "./component/footer_jewllery";
export default function Home({ params }: { params: { slug: string } }) {
    const collections = [
{ name: "Mala", img: "/jewllery/na-15.jpeg" },
  { name: "Necklace", img: "/jewllery/na-1c.jpg" },
  
  { name: "Bangles", img: "/jewllery/ba-1.jpg" },

];

const features = [
  {
    title: "WORLDWIDE SHIPPING",
    desc: "Our Moto is to move worldwide",
    icon: Globe,
  },
  {
    title: "SUPPORT 24/7",
    desc: "Contact us 24 hours a day, 7 days a week",
    icon: Headphones,
  },
  {
    title: "RISK FREE PURCHASE",
    desc: "Simply return it within 2 days for an exchange",
    icon: RefreshCcw,
  },
  {
    title: "100% PAYMENT SECURE",
    desc: "We ensure secure Payment Gateway card",
    icon: ShieldCheck,
  },
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
    </section>
    <div className="w-full overflow-hidden bg-[var(--golden)] py-3">
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
 
    </section>        <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4"
              >
                {/* ICON */}
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-black" />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section><div className="flex w-sm m-auto flex-col gap-3">
                
                <a
                  href={`https://wa.me/923001234567?text=I%20want%20to%20order%20the%20`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-3 transition text-lg font-medium text-center"
                >
                  Order on WhatsApp
                </a>
              </div>
              <div className="w-full text-center px-4 md:px-12 py-16 bg-white">
   {/* Main Heading */}


  {/* Description */}
<h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
  Best Artificial Jewellery Brands in Pakistan
  </h1>

  <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
 Discover high-quality artificial jewelry sets at ZAK  Jewellery. We specialize in Bridal jewelry, including Mala, Rings, Bangles, Lockets, and Bracelets. Elevate your style with Fashion accessories from the top online
Jewelry store in Pakistan
  </p>

</div>
<section className="py-20 xl:w-3xl m-auto bg-white">
      <div className="container mx-auto px-6 space-y-16">

        {/* ===== TOP SECTION ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div>
            <img
              src="/jewllery/logo1.svg"
              alt="Main"
              className=" h-[10vh]  w-full"
            />
          </div>

          {/* Right Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
     src="/jewllery/logo2.svg"
              alt="Main Logo"
              className="w-48"
            />
          </div>

        </div>

        {/* ===== BOTTOM GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Single Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
                src="/jewllery/logo3.jpg"

              alt="Side Logo"
              className="w-40 m-auto"
            />
          </div>

          {/* Right 6 Logos Grid */}
          <div className="grid grid-cols-6 gap-6">

  
<img
  src="/jewllery/logo3.svg"
  alt="Logo"
  className="max-w-full h-auto scale-125"
/>


    <img src="/jewllery/logo4.svg" alt="Logo 2" className="max-w-full h-auto scale-125" />
  
    <img src="/jewllery/logo-5.svg" alt="Logo 3" className="max-w-full h-auto scale-125" />
 
    <img src="/jewllery/logo 6.svg" alt="Logo 4" className="max-w-full h-auto scale-125" />
 
    <img src="/jewllery/logo-5.svg" alt="Logo 5" className="max-w-full h-auto scale-125" />
 
    <img src="/jewllery/logo 6.svg" alt="Logo 6" className="max-w-full h-auto scale-125" />


</div>


     
        </div>
      </div>
    </section>      <img src="/jewllery/logo.jpeg" alt="Logo 6" className="max-w-32 rounded-full m-auto h-auto scale-125" /> 
       <div className="w-full text-center px-4 md:px-12 py-16 bg-white">
   {/* Main Heading */}

<ReviewCarousel/>
  {/* Description */}


 

</div>

<Footer/>
    </>
  );
}
