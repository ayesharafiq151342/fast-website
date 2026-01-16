"use client";

import { useState } from "react";

interface SidebarProps {
  categories: string[];
  onCategorySelect: (category: string | null) => void;
  selectedCategory?: string | null;
}

export default function Sidebar({ categories, onCategorySelect, selectedCategory }: SidebarProps) {
  const [sort, setSort] = useState<"default" | "low-high" | "high-low">("default");

  return (
    <aside className="w-full md:w-64 p-4 bg-white shadow rounded-lg space-y-6">
      {/* SORT */}
      <div>
        <h2 className="text-sm font-medium mb-2">Sort By</h2>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "default" | "low-high" | "high-low")}
          className="border px-3 py-2 rounded-md w-full text-sm"
        >
          <option value="default">Default</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* CATEGORIES */}
      <div>
        <h2 className="text-sm font-medium mb-2">Categories</h2>
        <ul className="space-y-2">
          <li
            onClick={() => onCategorySelect(null)}
            className={`cursor-pointer text-sm ${
              selectedCategory === null ? "font-semibold text-[var(--golden)]" : "text-gray-600"
            }`}
          >
            All
          </li>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onCategorySelect(cat)}
              className={`cursor-pointer text-sm xl:text-xl montserrat ${
                selectedCategory === cat ? "font-montserrat text-[var(--text_skin)]" : " text-[var(--text_skin)] font-bold "
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
