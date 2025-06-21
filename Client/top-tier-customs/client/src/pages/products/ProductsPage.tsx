import { useEffect, useState } from "react";

// import { useAuth } from "../../context/Auth";
import { useTheme } from "../../context/Theme";

import FilterSort from "../../components/products/FilterSort";
import ProductCard from "../../components/products/ProductCard";

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
  createdAt: string;
}

const ProductsPage = () => {
  //   const { user } = useAuth();
  //   const isAuthenticated = user === null ? false : true;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [products, setProducts] = useState<Product[]>([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("price-asc");
  const [filterBrand, setFilterBrand] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => (filterBrand ? product.brand === filterBrand : true))
    .sort((a, b) => {
      if (sortKey === "price-asc") {
        return a.price - b.price;
      }
      if (sortKey === "price-desc") {
        return b.price - a.price;
      }
      if (sortKey === "latest") {
        return b.createdAt - a.createdAt;
      }
      return 0;
    });

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setProducts(data.products);
    } catch (e: any) {
      alert("Failed to fetch products:" + e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main
      className={`min-h-screen px-4 py-8 transition-all duration-3000 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <h1 className="text-4xl uppercase font-semibold text-center mb-8">
        Our Premium Catalog
      </h1>
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        <div className="relative">
          <div className="sticky top-28">
            <FilterSort
              onSearch={setSearchQuery}
              onSort={setSortKey}
              onFilterBrand={setFilterBrand}
              availableBrands={uniqueBrands}
            />
          </div>
        </div>
      </section>
      <section
        className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6`}
      >
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductsPage;
