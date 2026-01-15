"use client";

import Navbar from "../jewellery/component/navbar";
import Image from "next/image";


import Footer from "../jewellery/component/footer_jewllery";
import ProductGrid from "../jewellery/component/ProductGrid";
import ShopCollectiondev from "../jewellery/component/shopcollection";
export default function Bangles() {

  return (
    <>

      <Navbar />
  
<ShopCollectiondev/>
   <div className="max-w-8xl mx-auto">
     <ProductGrid category="bangles" />

    </div>
 <section className="max-w-8xl mx-auto px-4 md:px-8 py-12">
  <h1 className="text-3xl md:text-4xl font-serif mb-6">
    Explore the Exquisite BANGLES DESIGN Collection
  </h1>

  <p className="text-gray-700 mb-4">
    At our store, we're dedicated to bringing you the finest BANGLES DESIGN, offering a range of elegant and stylish bangles perfect for all occasions. Our collection is meticulously crafted to cater to various tastes and preferences, ensuring that every piece you choose complements your style perfectly.
  </p>

  <p className="text-gray-700 mb-4">
    Whether you're looking for traditional bangles with intricate designs or modern, minimalist styles, our BANGLES DESIGN collection has something for everyone. Our designers take inspiration from various cultures and art forms, infusing them into their creations to ensure unique and eye-catching jewelry pieces. So, when you wear any bangle from our collection, you not only accessorize but also make a statement.
  </p>

  <p className="text-gray-700 mb-4">
    Our bangles are made from high-quality materials like gold, silver, and platinum, and are adorned with precious and semi-precious stones, making each piece not just beautiful but also durable. We understand that bangles are more than just accessories; they hold sentimental value and are often passed down through generations. Therefore, we focus on ensuring that each bangle is crafted with utmost precision and attention to detail.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Customization Options</h2>
  <p className="text-gray-700 mb-4">
    We also offer customization options for those who want to add a personal touch to their bangles. From selecting the metal type to choosing the gemstones and engraving a special message, our customization service ensures that your bangle is as unique as you are.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Shopping Experience</h2>
  <p className="text-gray-700 mb-4">
    Our user-friendly website makes it easy to browse through our extensive collection, filter by your preferences, and find the perfect bangle design. Plus, our customer service team is always available to assist you with any queries or concerns you might have.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Stay On Trend</h2>
  <p className="text-gray-700 mb-4">
    Stay on trend with our latest BANGLES DESIGN by following our blog and social media channels. We regularly update our collection with new styles and designs, reflecting the latest fashion trends and seasonal inspirations. By staying connected, you'll be the first to know about exclusive launches, special deals, and promotions.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Value for Money</h2>
  <p className="text-gray-700 mb-4">
    We believe in offering value for money without compromising on quality. Our competitive pricing and regular discounts make it easier for you to own beautiful bangles without breaking the bank. Moreover, our easy payment options and secure checkout process ensure a seamless shopping experience.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">
    Bangles Design & Kangan Design By AZk Jewellery
  </h2>
  <p className="text-gray-700 mb-4">
    Bangles and Kangan are not just fashion statements; they carry sentimental value. Many women receive them as gifts on significant occasions, making them symbols of love and cherished memories.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">Stylish Silver Bangles</h3>
  <p className="text-gray-700 mb-4">
    Silver bangles offer a blend of decency and beauty, ideal for college and university-going girls. Silver Kangan with diamonds is a popular choice for events like walima and engagements.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">Antique Black Bangles For Girls</h3>
  <p className="text-gray-700 mb-4">
    Pakistani women embrace black bangles as a cultural tradition, enhancing any outfit, whether metallic, stone-studded, or adorned with gota work.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">Trending Indian Bangles</h3>
  <p className="text-gray-700 mb-4">
    Indian bangles encapsulate traditions, reflect changing trends, and mirror the diverse fashion sense of a nation known for its vibrant culture.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">Latest Gold Bangles Design</h3>
  <p className="text-gray-700 mb-4">
    Gold bangles are irreplaceable in terms of quality and aesthetics, making them a beautiful and elegant jewelry choice for brides.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">Gold Plated Pakistani Bangles</h3>
  <p className="text-gray-700 mb-4">
    Gold-plated Pakistani Bangles hold a special place in culture, particularly during weddings and festive occasions. They are often considered a symbol of blessings and good fortune.
  </p>
</section>


<Footer/>
    </>
  );
}
