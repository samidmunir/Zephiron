// const ProductsPage = () => {
//   return (
//     <main className="w-full h-[100vh] flex items-center justify-center">
//       <h1 className="text-5xl font-bold text-rose-500">PRODUCTS PAGE</h1>
//     </main>
//   );
// };

// export default ProductsPage;

import { useTheme } from "../context/Theme";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

interface Product {
  _id: string;
  title: string;
  brand: string;
  category: string;
  type: string;
  fitment: [string];
  description: string;
  price: number;
  images: string[];
}

const ProductsPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section
      className={`min-h-screen py-10 px-4 md:px-10 lg:px-20 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      } transition-colors`}
    >
      <h1
        className={`text-3xl font-bold text-center mb-10 ${
          isDark ? "text-zinc-100" : "text-zinc-900"
        }`}
      >
        Explore Our Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-zinc-500 dark:text-zinc-400">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
