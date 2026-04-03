"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

const products = [
  {
    type: "Headset",
    name: "Logitech G Pro X",
    price: "$130",
    image: "/products/logitechgpro.jpg",
    link: "https://amzn.to/4dZMoBq",
  },
  {
    type: "Mouse",
    name: "Razer Viper V3 Pro",
    price: "$120",
    image: "/products/viperv3.jpg",
    link: "https://amzn.to/4ttKMEL",
  },
  {
    type: "Keyboard",
    name: "Corsair K60 RGB Pro SE",
    price: "$100",
    image: "/products/corsairk60.png",
    link: "https://amzn.to/4m4ZC1L",
  },
   {
    type: "Webcam",
    name: "Razer Kiyo V2 X",
    price: "$100",
    image: "/products/razerkiyo.jpg",
    link: "https://amzn.to/4sRfvM0",
  },
];

export default function Home() {
  const [filtered, setFiltered] = useState(products);

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase();
    setFiltered(
      products.filter((p) =>
        p.name.toLowerCase().includes(lower)
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-black dark:text-white">
      <Navbar onSearch={handleSearch} />

      <main className="max-w-6xl mx-auto px-2 py-10">
        <h1 className="text-4xl mb-10 text-center">
          Shop
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}