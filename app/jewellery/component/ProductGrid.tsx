"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import { useMemo, useState } from "react";

interface ProductGridProps {
  limit?: number;
  category?: string;
}
type SortType = "default" | "low-high" | "high-low";

export default function ProductGrid({ limit, category }: ProductGridProps) {
 const [sort, setSort] = useState<SortType>("default");


  const visibleProducts = useMemo(() => {
    let list = category
      ? products.filter((p) => p.category === category)
      : products;

    if (sort === "low-high") {
      list = [...list].sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return limit ? list.slice(0, limit) : list;
  }, [category, sort, limit]);

  return (
    <section className="w-full px-4 md:px-12 py-12 bg-white">
      {/* SORT DROPDOWN */}
   <div className="flex justify-start mb-6">
  <div className="relative w-56">
    <select
      value={sort}
     onChange={(e) => setSort(e.target.value as SortType)}
      className="
        w-full appearance-none
        border border-gray-300
        bg-white
        px-4 py-2.5
        text-sm text-gray-700
        rounded-lg
        shadow-sm
        cursor-pointer
        focus:outline-none
        focus:ring-2 focus:ring-[var(--golden)]
        focus:border-[var(--golden)]
        hover:border-[var(--golden)]
        transition
      "
    >
      <option value="default">Sort by</option>
      <option value="low-high">Price: Low → High</option>
      <option value="high-low">Price: High → Low</option>
    </select>

    {/* Custom Arrow */}
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
      ▼
    </span>
  </div>
</div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {visibleProducts.map((item) => (
          <Link key={item.id} href={`/products/${item.slug}`}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden bg-[#f6f2ec]">
                {item.discount && (
                  <span className="absolute top-2 left-2 bg-[#c9a14a] text-white text-xs px-2 py-1 rounded">
                    {item.discount}
                  </span>
                )}

                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={500}
                  className="w-full h-auto md:h-[60vh] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="pt-3">
                <p className="text-sm text-gray-800">{item.name}</p>
                <span className="text-sm font-semibold text-red-600">
                  Rs.{item.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
