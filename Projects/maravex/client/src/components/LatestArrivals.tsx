// src/components/LatestArrivals.tsx
import { useTheme } from "../context/Theme";
import { ShoppingCart } from "lucide-react";

const mockProducts = [
  {
    id: 1,
    name: "Modern Denim Jacket",
    price: "$79.99",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Premium Leather Boots",
    price: "$129.99",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Slim Fit T-Shirt",
    price: "$29.99",
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Classic Hoodie",
    price: "$59.99",
    image: "/images/product4.jpg",
  },
];

const LatestArrivals = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full px-6 md:px-16 py-16 ${
        isDark ? "bg-zinc-950 text-zinc-50" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Latest{" "}
          <span className={isDark ? "text-sky-400" : "text-blue-600"}>
            Arrivals
          </span>
        </h2>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden shadow-lg transition hover:scale-[1.02] ${
                isDark ? "bg-zinc-900" : "bg-white"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {product.price}
                </p>
                <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 border-2 border-sky-400 rounded-md text-sm hover:bg-sky-400 hover:text-black transition">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArrivals;
