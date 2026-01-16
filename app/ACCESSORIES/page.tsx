"use client";

import { useState } from "react";
import ProductGrid from "../jewellery/component/ProductGrid";
import Sidebar from "../jewellery/component/sidebar";
import { products } from "@/app/data/products";
import Navbar from "../jewellery/component/navbar";

export default function NewArrivalPage() {
  const [category, setCategory] = useState<string | null>(null);

  // Get all unique categories from products
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (<>
    <Navbar/>
    <section className="bg-[#fbf6ea] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="space-y-10">
          {/* Search */}
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

          {/* Categories */}
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

        {/* ================= RIGHT CONTENT ================= */}
        <div className="lg:col-span-3 space-y-8 bg-white">

          {/* Breadcrumb & Description */}
     {/* Breadcrumb + Description */}
       <div className="flex flex-col gap-2 m-6 ">
  {/* Row 1: Breadcrumb */}
  <p className="text-xs text-gray-400">
    Home / <span className="text-gray-600 font-medium">{category || "Banagels"}</span>
  </p>

  {/* Row 2: Heading */}
  <h1 className="text-2xl md:text-8xl p-10 font-montserrat text-[var(--text_skin)]">
    {category || "ACCESSORIES"}
  </h1>

  {/* Row 3: Description */}
  
</div>


          {/* Sort Row */}
        <div className=" pl-10 pr-10  "><ProductGrid
            limit={12} // show more products
            columns={3} // grid columns
            imgHeight="h-[260px]" // image height
            imgWidth="w-full" // image width (full inside card)
            category={category || undefined} // filter by selected category
          /></div>

          {/* Products */}
          
        </div>
      </div>
    </section></>
  );
}
