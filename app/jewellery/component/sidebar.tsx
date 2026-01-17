"use client";

import { useState } from "react";

interface SidebarProps {
  categories: string[];
  onCategorySelect: (category: string | null) => void;
  selectedCategory?: string | null;
}

export default function Sidebar({ categories, onCategorySelect, selectedCategory }: SidebarProps) {
  

  return (
    <aside className="w-full md:w-64 p-4 bg-white shadow rounded-lg space-y-6">
      {/* SORT */}
     

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
