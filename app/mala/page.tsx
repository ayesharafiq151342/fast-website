"use client";

import Navbar from "../jewellery/component/navbar";
import Image from "next/image";
import { motion } from "framer-motion";

import Footer from "../jewellery/component/footer_jewllery";
import ProductGrid from "../jewellery/component/ProductGrid";
import ShopCollectiondev from "../jewellery/component/shopcollection";
export default function MAla() {

  return (
    <>

      <Navbar />
  
<ShopCollectiondev/>
   <div className="max-w-8xl mx-auto">
      <ProductGrid category="mala" /> 
    </div>
 
<section className="max-w-8xl mx-auto px-4 md:px-8 py-12">
  <h1 className="text-3xl md:text-4xl font-serif mb-6">Mala Necklace</h1>

  <p className="text-gray-700 mb-4">
    The Mala necklace Set by AZK Jewellery is more than just an accessory—it's a masterpiece that encapsulates timeless beauty and grace. This exquisite jewelry piece is meticulously crafted to adorn and enhance the wearer's elegance on any occasion. Each component of the Mala Set is thoughtfully designed to radiate sophistication and captivate attention.
  </p>

  <p className="text-gray-700 mb-4">
    Mala sets are a great alternative to traditional mala sets made from precious gemstones and metals. They are just as beautiful and meaningful, but they are also much more affordable.
  </p>

  <p className="text-gray-700 mb-4">
    Artificial mala sets are made from a variety of materials, including high-quality plastics, resins, and crystals. They are often plated with gold or silver to give them a luxurious look. Artificial mala sets are also available in a wide range of colors and styles, so you can find one that perfectly matches your taste.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits of Choosing an Artificial Mala Set</h2>
  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li><strong>Affordable:</strong> Much cheaper than traditional gemstone mala sets.</li>
    <li><strong>Durable:</strong> Made from strong materials that last long.</li>
    <li><strong>Variety of styles:</strong> Available in multiple colors and designs.</li>
    <li><strong>Ethical:</strong> No mining of precious stones or metals involved.</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Choosing Your Mala</h2>
  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li>Consider the material and durability.</li>
    <li>Choose a color and style that suits your taste.</li>
    <li>Check the quality of craftsmanship.</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Mala Care Tips</h2>
  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li>Store your mala in a cool, dry place.</li>
    <li>Avoid exposing it to direct sunlight or extreme temperatures.</li>
    <li>Clean regularly with a soft, damp cloth.</li>
    <li>Do not use harsh chemicals or abrasive cleaners.</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Enhance Your Meditation</h2>
  <p className="text-gray-700 mb-4">
    Mala necklaces are more than jewelry—they are tools to aid meditation and mindfulness. Each bead represents a chant or prayer, helping you stay focused during your practice. They can be used daily as a reminder of your spiritual intentions, or worn as a stylish accessory.
  </p>

  <p className="text-gray-700 mb-4">
    Choose from semi-precious stones like amethyst or rose quartz, or traditional materials like sandalwood and rudraksha. With proper use, your mala necklace becomes personal, absorbing your energy and supporting your spiritual journey.
  </p>

  <p className="text-gray-700 mb-4">
    Incorporate meditation and mindfulness into your life with a beautiful mala necklace from AZK Jewellery. Invest in yourself and your well-being with this timeless piece.
  </p>
</section>

<Footer/>
    </>
  );
}
