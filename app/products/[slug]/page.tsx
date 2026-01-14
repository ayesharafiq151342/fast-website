"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products, Product } from "@/app/data/products";
import Navbar from "@/app/jewellery/component/nevbar";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
const faqs = [
  {
    question: "Exchange Policy",
    sections: [
      {
        title: "",
        content: [
          "We don't offer any refund. We offer exchange only if the product received is broken, defected, rusted or a wrong article. You can claim this within 48 hours of delivery. After that, no claims will be considered. You need to send a proof / picture of the product to make a claim."
        ]
      }
    ]
  },
  {
    question: "Shipping Policy",
    sections: [
      {
        title: "Delivery Charges",
        content: ["Pakistan: PKR 200/-", "International: Calculated at checkout"]
      },
      {
        title: "Delivery Time",
        content: [
          "Pakistan: 3–5 working days",
          "International: 10–15 working days",
          "*Tracking number will be shared via WhatsApp once your order is dispatched*"
        ]
      },
      {
        title: "Free Shipping",
        content: [
          "Pakistan: Free on orders above PKR 2999",
          "International: Free on orders above USD 299"
        ]
      }
    ]
  },
  {
    question: "Description",
    sections: [
      {
        title: "PRODUCT INFORMATION",
        content: [
          "ZAK Jewellery, its leading artificial jewellery brand in Pakistan, is trying to provide its customers with the finest and highest-quality jewelry at affordable prices. Our specialty of expertise is creating the latest designs of artificial jewelry."
        ]
      },
      {
        title: "PRODUCT PICTURE",
        content: [
          "The image at the top is a genuine original shot of the product without any filters or photo editing. However, exposure to light may lead to a color variation of up to 5%."
        ]
      },
      {
        title: "JEWELLERY CARE",
        content: [
          "Here are some important guidelines to care for your jewelry:",
          "• Avoid spraying perfume directly onto the jewelry item. Tip: It's best to apply your perfume before putting on your jewelry.",
          "• Refrain from wearing jewelry while showering, washing your hands, or doing laundry.",
          "• Avoid wearing jewelry right after applying lotion or cream, as the chemicals may harm the product.",
          "• Store your jewelry in its box or pouch to protect it from wear and tear.",
          "• Do not wear jewelry while swimming, as exposure to seawater and chlorine can damage it.",
          "• Remember to remove your jewelry before going to bed to prevent any damage to the product."
        ]
      },
      {
        title: "SHIPPING",
        content: [
          "Free Shipping all over Pakistan on orders above Rs 3000/- in 2 to 4 working days."
        ]
      },
      {
        title: "ZAK Jewellery",
        content: [
          "ZAK Jewelry, the leading artificial jewelry brand in Pakistan, understands that people are constantly searching for the finest artificial jewelry online.",
          "If you're someone who's fascinated by the latest designs in artificial jewelry from Pakistan, be sure to explore our collection.",
          "Our inventory boasts a wide range of the latest items in various categories, including Mala Set, Locket Set, Bridal sets, Bangles, Earrings, Tops, Stud, Jhumka Rings, Necklace, Chokar, Bracelets, Chains, Bindiya, Jhoomar, Calligraphy, and Pendants."
        ]
      }
    ]
  }
];


 const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Find the product by slug
  const product: Product | undefined = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-lg font-semibold">
        Product not found
      </div>
    );
  }

  // Gallery images fallback
  const galleryImages: string[] = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const [activeImage, setActiveImage] = useState<string>(galleryImages[0]);
  const [qty, setQty] = useState<number>(1);
  const [activeColor, setActiveColor] = useState<string>(product.colors?.[0] || "");

  // Update active image when slug changes
  useEffect(() => {
    setActiveImage(galleryImages[0]);
    setActiveColor(product.colors?.[0] || "");
    setQty(1);
  }, [slug, galleryImages, product.colors]);

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 bg-white">
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT: Image Gallery */}
          <div>
 <div className="overflow-hidden mb-4 transition-shadow duration-300 w-full">
  <div className="relative w-full pb-[100%] xl:pb-[185%]"> {/* Maintains aspect ratio */}
    <Image
      src={activeImage}
      alt={product.name}
      fill
      className="object-contain "
      priority
    />
  </div>
</div>


            <div className="grid grid-cols-6 gap-3  overflow-hidden">
              {galleryImages.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`border rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105 ${
                    activeImage === img
                      ? "border-black scale-105 shadow-md"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    width={120}
                    height={140}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-4">
                {product.oldPrice && (
                  <span className="line-through text-gray-400 text-lg">
                    Rs.{product.oldPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-red-600 text-2xl font-bold">
                  Rs.{product.price.toLocaleString()}
                </span>
                {product.oldPrice && product.price && (
                  <span className="bg-yellow-200 text-yellow-800 text-sm px-2 py-1 rounded">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Stock */}
              <p className="text-green-600 font-medium mb-4">In Stock</p>

              {/* Description */}
              <p className="text-gray-700 mb-4">{product.description || "No description available"}</p>

              {/* Features */}
              {product.features?.length ? (
                <ul className="text-gray-700 space-y-2 mb-6">
                  {product.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-600">✔</span> {f}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Colors */}
              {product.colors?.length ? (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Color:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color: string) => (
                      <button
                        key={color}
                        onClick={() => setActiveColor(color)}
                        className={`border px-3 py-1 text-sm rounded transition ${
                          activeColor === color ? "border-black bg-gray-100" : "border-gray-300"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
<div className="space-y-3 mb-10">
  {[
    "Long Lasting Color",
    "Premium Quality Material",
    "Expert Craftmanship",
  ].map((feature, index) => (
    <div key={index} className="flex items-center gap-3">
      {/* Tick inside a black circle */}
      <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full text-white text-sm font-bold">
        ✓
      </div>
      <span className="text-gray-700">{feature}</span>
    </div>
  ))}
</div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100 transition"
                >
                  +
                </button>

                <button className="ml-4 xl:ml:64 w-64 bg-black text-white py-3 hover:bg-gray-900 transition text-lg font-medium">
                  Add to Cart
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button className="w-full bg-green-600 text-white py-3 hover:bg-[var(--golden)] transition text-lg font-medium">
                  Buy It Now
                </button>
                <a
                  href={`https://wa.me/923001234567?text=I%20want%20to%20order%20the%20${encodeURIComponent(
                    product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-3 transition text-lg font-medium text-center"
                >
                  Order on WhatsApp
                </a>
              </div> <section className="w-full mx-auto px-4 md:px-0 mt-6">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question Button */}
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 border-b rounded-lg bg-gray-100 hover:bg-gray-200 flex justify-between items-center transition"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {/* Answer Sections */}
            {openIndex === index &&
              faq.sections.map((section, i) => (
                <div
                  key={i}
                  className="mt-2 px-4 py-4 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 space-y-2"
                >
                  {section.title && <h3 className="font-semibold">{section.title}</h3>}
                  {section.content.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
            </div>
  


            {/* Shipping Info */}
        
          </div>
        </div>
      </section>
    </>
  );
}
