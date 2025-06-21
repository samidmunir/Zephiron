// import { useEffect, useState } from "react";

// // import { useAuth } from "../../context/Auth";
// import { useTheme } from "../../context/Theme";

// import FilterSort from "../../components/products/FilterSort";
// import ProductCard from "../../components/products/ProductCard";

// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   images: string[];
//   price: number;
//   discount: number;
//   quantity: number;
//   installable: boolean;
//   category: string;
//   type: string;
//   brand: string;
//   fits: [string];
//   createdAt: string;
//   updatedAt: string;
// }

// const ProductsPage = () => {
//   //   const { user } = useAuth();
//   //   const isAuthenticated = user === null ? false : true;
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const [products, setProducts] = useState<Product[]>([]);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortKey, setSortKey] = useState("price-asc");
//   const [filterBrand, setFilterBrand] = useState("");

//   const filteredProducts = products
//     .filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .filter((product) => (filterBrand ? product.brand === filterBrand : true))
//     .sort((a: any, b: any) => {
//       if (sortKey === "price-asc") {
//         return a.price - b.price;
//       }
//       if (sortKey === "price-desc") {
//         return b.price - a.price;
//       }
//       if (sortKey === "latest") {
//         return b.createdAt - a.createdAt;
//       }
//       return 0;
//     });

//   const uniqueBrands = [...new Set(products.map((product) => product.brand))];

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/products", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       setProducts(data.products);
//     } catch (e: any) {
//       alert("Failed to fetch products:" + e.message);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <main
//       className={`w-full min-h-screen px-8 py-8 transition-all duration-3000 ${
//         isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
//       }`}
//     >
//       <h1 className="text-4xl uppercase font-bold text-center mb-8">
//         Our Premium Catalog
//       </h1>
//       <section className="flex justify-between gap-6">
//         <section className="hidden sm:hidden md:inline-flex flex-1/5">
//           <div className="relative">
//             <div className="sticky">
//               <FilterSort
//                 onSearch={setSearchQuery}
//                 onSort={setSortKey}
//                 onFilterBrand={setFilterBrand}
//                 availableBrands={uniqueBrands}
//               />
//             </div>
//           </div>
//         </section>
//         <section
//           className={`flex-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6`}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard product={product} />
//           ))}
//         </section>
//       </section>
//     </main>
//   );
// };

// export default ProductsPage;

import { useEffect, useState } from "react";
import { useTheme } from "../../context/Theme";

import FilterSort from "../../components/products/FilterSort";
import ProductCard from "../../components/products/ProductCard";

interface Product {
  _id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  discount: number;
  quantity: number;
  installable: boolean;
  category: string;
  type: string;
  brand: string;
  fits: [string];
  createdAt: string;
  updatedAt: string;
}

const ProductsPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("price-asc");
  const [filterBrand, setFilterBrand] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => (filterBrand ? product.brand === filterBrand : true))
    .sort((a: any, b: any) => {
      if (sortKey === "price-asc") return a.price - b.price;
      if (sortKey === "price-desc") return b.price - a.price;
      if (sortKey === "latest")
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      return 0;
    });

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (e: any) {
      alert("Failed to fetch products: " + e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main
      className={`relative w-full min-h-screen px-4 sm:px-6 py-8 transition-all duration-3000 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <h1 className="text-4xl uppercase font-bold text-center mb-8">
        Our Premium Catalog
      </h1>

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4 flex justify-end">
        <button
          onClick={toggleDrawer}
          className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
        >
          Filter & Sort
        </button>
      </div>

      <section className="flex gap-6">
        {/* Sidebar for desktop */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-28">
            <FilterSort
              onSearch={setSearchQuery}
              onSort={setSortKey}
              onFilterBrand={setFilterBrand}
              availableBrands={uniqueBrands}
            />
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>
      </section>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 md:hidden"
          onClick={toggleDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-23 right-0 w-3/4 max-w-sm h-full z-50 transform transition-transform duration-1000 md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-zinc-900" : "bg-white"}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-zinc-700">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button onClick={toggleDrawer} className="text-2xl font-bold">
            ×
          </button>
        </div>
        <div className="p-4">
          <FilterSort
            onSearch={(val) => {
              setSearchQuery(val);
            }}
            onSort={(key) => {
              setSortKey(key);
              toggleDrawer();
            }}
            onFilterBrand={(brand) => {
              setFilterBrand(brand);
              toggleDrawer();
            }}
            availableBrands={uniqueBrands}
          />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
