"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search?q=${search.trim()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex border rounded-md overflow-hidden">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="flex-1 px-3 py-2 text-sm outline-none"
      />
      <button className="bg-[#c9a14a] px-4 text-white font-bold">
        ›
      </button>
    </form>
  );
}
