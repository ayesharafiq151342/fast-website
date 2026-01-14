"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function ProductGrid() {
  return (
    <section className="w-full px-4 md:px-12 py-12 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((item) => (
          <Link key={item.id} href={`/products/${item.slug}`}>
            <div className="group cursor-pointer">

              <div className="relative overflow-hidden bg-[#f6f2ec]">
                <span className="absolute top-2 left-2 z-10 bg-[#c9a14a] text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>

                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={500}
                  className="w-full h-auto md:h-[60vh] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="pt-3 text-left">
                <p className="text-sm text-gray-800 leading-snug">
                  {item.name}
                </p>
                <div className="flex gap-2 items-center mt-1">
                 
                  <span className="text-sm font-semibold text-red-600">
                    Rs.{item.price}
                  </span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
