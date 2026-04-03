import Image from "next/image";

type Product = {
  name: string;
  price: string;
  image: string;
  link: string;
  type?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 group rounded-2xl p-4 hover:shadow-lg transition bg-black/80"
    >
      <h2 className="text-lg mb-1">
        {product.type}
      </h2>
      
      <div className="aspect-square relative mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      <h2 className="text-sm mb-1">
        {product.name}
      </h2>

      <p className="text-zinc-500 text-sm">{product.price}</p>
    </a>
  );
}
