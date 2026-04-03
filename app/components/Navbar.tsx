"use client";

import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export default function Navbar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  return (
    <nav className="bg-black/80 w-full flex items-center justify-between px-8 py-4 backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-lg md:text-xl">oyeahk</h1>

      <input
        type="text"
        placeholder="Search gear..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="px-4 py-2 rounded-full bg-zinc-900 outline-none text-sm w-64 md:w-86"
      />

      <div className="hidden md:block text-base text-zinc-500">Gaming</div>

    </nav>
  );
}
