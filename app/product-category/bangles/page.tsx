"use client";

import { useState } from "react";
import ProductGrid from "@/app/jewellery/component/ProductGrid";

import Sidebar from "../../jewellery/component/sidebar";
import { products } from "@/app/data/products";
import Navbar from "../../jewellery/component/navbar";

export default function MalaPage() {
  // Start with Mala category by default
  const [category, setCategory] = useState<string | null>("BANGLES");

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <Navbar />

      <section className="bg-[#fbf6ea] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <aside className="space-y-10">
            <div className="bg-white p-5 rounded-md shadow">
              <div className="flex border rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 px-3 py-2 text-sm outline-none"
                />
                <button className="bg-[#c9a14a] px-4 text-white font-bold">›</button>
              </div>
            </div>

            <div className="bg-white p-5 rounded-md shadow">
              <h3 className="text-sm font-semibold mb-4 uppercase">
                Filter by Categories
              </h3>

              <Sidebar
                categories={categories}
                selectedCategory={category}
                onCategorySelect={setCategory}
              />
            </div>
          </aside>

          {/* CONTENT */}
          <div className="lg:col-span-3 space-y-8 bg-white">
            <div className="flex flex-col gap-2 m-6 ">
              <p className="text-xs text-gray-400">
                Home / <span className="text-gray-600 font-medium">{category || "BANGLES"}</span>
              </p>

              <h1 className="text-2xl md:text-8xl p-10 font-montserrat text-[var(--text_skin)]">
                {category || "BANGLES"}
              </h1>
            </div>
<p  className="xl:ml-17">Beautiful bangles to complement every festive look.</p>

            <div className="pl-10 pr-10">
              <ProductGrid 
                 limit={12} // show more products
            columns={3} // grid columns
            imgHeight="h-[260px]" // image height
            imgWidth="w-full" // image width (full inside card)
              category={category || undefined} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
