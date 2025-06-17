// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import { useTheme } from "../context/Theme";
// import { mockProducts } from "../data/mockProducts";

// const CatalogPage = () => {
//   const { theme } = useTheme();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortBy, setSortBy] = useState("default");
//   const [filters, setFilters] = useState({
//     category: "",
//     size: "",
//     color: "",
//     priceRange: "",
//   });

//   const [filteredProducts, setFilteredProducts] = useState(mockProducts);

//   useEffect(() => {
//     let results = [...mockProducts];

//     // 🔍 Search
//     if (searchQuery.trim()) {
//       results = results.filter((product) =>
//         product.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // 🧮 Filtering
//     if (filters.category)
//       results = results.filter((p) => p.category === filters.category);
//     if (filters.size) results = results.filter((p) => p.size === filters.size);
//     if (filters.color)
//       results = results.filter((p) => p.color === filters.color);
//     if (filters.priceRange) {
//       const [min, max] = filters.priceRange.split("-").map(Number);
//       results = results.filter((p) => p.price >= min && p.price <= max);
//     }

//     // ↕️ Sorting
//     switch (sortBy) {
//       case "price-asc":
//         results.sort((a, b) => a.price - b.price);
//         break;
//       case "price-desc":
//         results.sort((a, b) => b.price - a.price);
//         break;
//       case "name":
//         results.sort((a, b) => a.title.localeCompare(b.title));
//         break;
//     }

//     setFilteredProducts(results);
//   }, [searchQuery, sortBy, filters]);

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFilters((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <div
//       className={`flex flex-col lg:flex-row w-full px-4 lg:px-10 py-6 gap-8 ${
//         theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
//       }`}
//     >
//       {/* 🧭 Sidebar */}
//       <aside className="lg:w-1/4 w-full sticky top-20 self-start">
//         <div
//           className={`p-4 rounded-xl shadow ${
//             theme === "dark" ? "bg-zinc-900" : "bg-gray-100"
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-4">Filters</h2>

//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full mb-4 px-4 py-2 rounded-lg border outline-none bg-transparent border-zinc-300 dark:border-zinc-700"
//           />

//           <label className="block mt-4 text-sm font-medium">Category</label>
//           <select
//             name="category"
//             value={filters.category}
//             onChange={handleFilterChange}
//             className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700"
//           >
//             <option value="">All</option>
//             <option value="shirts">Shirts</option>
//             <option value="jackets">Jackets</option>
//             <option value="pants">Pants</option>
//             <option value="accessories">Accessories</option>
//           </select>

//           <label className="block mt-4 text-sm font-medium">Size</label>
//           <select
//             name="size"
//             value={filters.size}
//             onChange={handleFilterChange}
//             className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700"
//           >
//             <option value="">All</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>

//           <label className="block mt-4 text-sm font-medium">Color</label>
//           <select
//             name="color"
//             value={filters.color}
//             onChange={handleFilterChange}
//             className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700"
//           >
//             <option value="">All</option>
//             <option value="black">Black</option>
//             <option value="white">White</option>
//             <option value="blue">Blue</option>
//             <option value="red">Red</option>
//           </select>

//           <label className="block mt-4 text-sm font-medium">Price Range</label>
//           <select
//             name="priceRange"
//             value={filters.priceRange}
//             onChange={handleFilterChange}
//             className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700"
//           >
//             <option value="">All</option>
//             <option value="0-50">Under $50</option>
//             <option value="50-100">$50 - $100</option>
//             <option value="100-200">$100 - $200</option>
//             <option value="200-9999">$200+</option>
//           </select>

//           <label className="block mt-4 text-sm font-medium">Sort By</label>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="w-full mt-1 px-3 py-2 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700"
//           >
//             <option value="default">Default</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//             <option value="name">Name A-Z</option>
//           </select>
//         </div>
//       </aside>

//       {/* 🛍️ Product Grid */}
//       <section className="flex-1">
//         <h1 className="text-2xl font-bold mb-6">All Products</h1>
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-lg mt-10">No products found.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CatalogPage;

// import React, { useState } from "react";
// import { mockProducts } from "../data/mockProducts";
// import ProductCard from "../components/ProductCard";
// import { useTheme } from "../context/Theme";
// import { FiFilter } from "react-icons/fi";

// const CatalogPage: React.FC = () => {
//   const { theme } = useTheme();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div
//       className={`min-h-screen flex flex-col md:flex-row ${
//         theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
//       }`}
//     >
//       {/* Toggle Button for Mobile */}
//       <div className="md:hidden flex justify-between items-center px-4 py-3 shadow-sm">
//         <h2 className="text-xl font-bold">Catalog</h2>
//         <button
//           onClick={toggleSidebar}
//           className="text-xl p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
//         >
//           <FiFilter />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 transform transition-transform duration-300 ease-in-out
//         ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0`}
//       >
//         <div className="p-4 space-y-4 sticky top-0 overflow-y-auto max-h-screen">
//           <h3 className="text-lg font-semibold">Filters</h3>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700"
//           />
//           <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//             <option value="">Sort by</option>
//             <option value="price-low">Price (Low)</option>
//             <option value="price-high">Price (High)</option>
//             <option value="rating">Rating</option>
//           </select>
//           <div>
//             <label className="block mb-1 font-medium">Category</label>
//             <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//               <option>All</option>
//               <option>T-Shirts</option>
//               <option>Jackets</option>
//               <option>Pants</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">Size</label>
//             <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//               <option>All</option>
//               <option>S</option>
//               <option>M</option>
//               <option>L</option>
//               <option>XL</option>
//             </select>
//           </div>
//         </div>
//       </aside>

//       {/* Overlay on mobile when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Product Grid */}
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-6">Men's Fashion</h1>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {mockProducts.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CatalogPage;

// import React, { useState } from "react";
// import { mockProducts } from "../data/mockProducts";
// import ProductCard from "../components/ProductCard";
// import { useTheme } from "../context/Theme";
// import { FiFilter } from "react-icons/fi";

// const CatalogPage: React.FC = () => {
//   const { theme } = useTheme();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div
//       className={`min-h-screen ${
//         theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
//       }`}
//     >
//       {/* Mobile Topbar */}
//       <div className="md:hidden flex justify-between items-center px-4 py-3 shadow-sm">
//         <h2 className="text-xl font-bold">Catalog</h2>
//         <button
//           onClick={toggleSidebar}
//           className="text-xl p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
//         >
//           <FiFilter />
//         </button>
//       </div>

//       {/* Layout Container */}
//       <div className="flex flex-col md:flex-row">
//         {/* Sidebar */}
//         <aside
//           className={`
//             fixed z-40 top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out
//             bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800
//             md:relative md:translate-x-0 md:h-auto md:w-1/4 md:block
//             ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           `}
//         >
//           <div className="p-4 space-y-4 overflow-y-auto md:overflow-visible">
//             <h3 className="text-lg font-semibold">Filters</h3>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700"
//             />
//             <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//               <option value="">Sort by</option>
//               <option value="price-low">Price (Low)</option>
//               <option value="price-high">Price (High)</option>
//               <option value="rating">Rating</option>
//             </select>
//             <div>
//               <label className="block mb-1 font-medium">Category</label>
//               <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//                 <option>All</option>
//                 <option>T-Shirts</option>
//                 <option>Jackets</option>
//                 <option>Pants</option>
//               </select>
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Size</label>
//               <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//                 <option>All</option>
//                 <option>S</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//             </div>
//           </div>
//         </aside>

//         {/* Overlay on Mobile */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//             onClick={toggleSidebar}
//           ></div>
//         )}

//         {/* Main Content */}
//         <main className="flex-1 p-6 md:w-3/4">
//           <h1 className="text-2xl font-bold mb-6">Men's Fashion</h1>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {mockProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;

// import React, { useState } from "react";
// import { mockProducts } from "../data/mockProducts";
// import ProductCard from "../components/ProductCard";
// import { useTheme } from "../context/Theme";
// import { FiFilter } from "react-icons/fi";

// const CatalogPage: React.FC = () => {
//   const { theme } = useTheme();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div
//       className={`min-h-screen ${
//         theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
//       }`}
//     >
//       {/* Mobile Topbar */}
//       <div className="md:hidden flex justify-between items-center px-4 py-3 shadow-sm">
//         <h2 className="text-xl font-bold">Catalog</h2>
//         <button
//           onClick={toggleSidebar}
//           className="text-xl p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
//         >
//           <FiFilter />
//         </button>
//       </div>

//       {/* Mobile Sidebar Slide-In */}
//       <aside
//         className={`
//           fixed z-40 top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out
//           bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800
//           md:hidden
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         <div className="p-4 space-y-4">
//           <h3 className="text-lg font-semibold">Filters</h3>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700"
//           />
//           <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//             <option value="">Sort by</option>
//             <option value="price-low">Price (Low)</option>
//             <option value="price-high">Price (High)</option>
//             <option value="rating">Rating</option>
//           </select>
//           <div>
//             <label className="block mb-1 font-medium">Category</label>
//             <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//               <option>All</option>
//               <option>T-Shirts</option>
//               <option>Jackets</option>
//               <option>Pants</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">Size</label>
//             <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//               <option>All</option>
//               <option>S</option>
//               <option>M</option>
//               <option>L</option>
//               <option>XL</option>
//             </select>
//           </div>
//         </div>
//       </aside>

//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Content Area */}
//       <div className="flex flex-col md:flex-row gap-6 p-6 relative">
//         {/* Desktop Floating Control Panel */}
//         <div className="hidden md:block w-full md:max-w-xs md:sticky top-6">
//           <div
//             className={`rounded-lg p-4 shadow-md ${
//               theme === "dark" ? "bg-zinc-900" : "bg-white"
//             } border border-zinc-200 dark:border-zinc-800`}
//           >
//             <h3 className="text-lg font-semibold mb-4">Filters</h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700"
//               />
//               <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//                 <option value="">Sort by</option>
//                 <option value="price-low">Price (Low)</option>
//                 <option value="price-high">Price (High)</option>
//                 <option value="rating">Rating</option>
//               </select>
//               <div>
//                 <label className="block mb-1 font-medium">Category</label>
//                 <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//                   <option>All</option>
//                   <option>T-Shirts</option>
//                   <option>Jackets</option>
//                   <option>Pants</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Size</label>
//                 <select className="w-full px-3 py-2 rounded border bg-transparent border-zinc-300 dark:border-zinc-700">
//                   <option>All</option>
//                   <option>S</option>
//                   <option>M</option>
//                   <option>L</option>
//                   <option>XL</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <main className="flex-1">
//           <h1 className="text-2xl font-bold mb-6">Men's Fashion</h1>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {mockProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;

// import { useState } from "react";
// import { FiFilter } from "react-icons/fi";
// import { mockProducts } from "../data/mockProducts";
// import ProductCard from "../components/ProductCard";
// import { useTheme } from "../context/Theme";

// export default function CatalogPage() {
//   const { theme } = useTheme();
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const toggleFilter = () => setIsFilterOpen((prev) => !prev);

//   return (
//     <div
//       className={`min-h-screen py-12 px-4 md:px-10 lg:px-20 transition-colors duration-300 ${
//         theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
//       }`}
//     >
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Explore Our Collection</h1>
//         <button
//           onClick={toggleFilter}
//           className="md:hidden flex items-center gap-2 text-sm font-semibold"
//         >
//           <FiFilter size={18} />
//           Filters
//         </button>
//       </div>

//       <div className="flex gap-6">
//         {/* Sidebar (mobile = hidden; desktop = sticky) */}
//         <aside
//           className={`
//             hidden md:block w-64
//             transition-all duration-300
//             top-24 sticky self-start
//             bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md
//           `}
//         >
//           <h2 className="text-lg font-semibold mb-4">Search & Filters</h2>
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full p-2 mb-4 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
//           />
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium">Category</label>
//             <select className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
//               <option>All</option>
//               <option>Jackets</option>
//               <option>Shirts</option>
//               <option>Shoes</option>
//               <option>Accessories</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium">Sort by</label>
//             <select className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
//               <option>Newest</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Popularity</option>
//             </select>
//           </div>
//         </aside>

//         {/* Filter Drawer (Mobile only) */}
//         {isFilterOpen && (
//           <div className="fixed inset-0 z-50 flex justify-end md:hidden">
//             <div
//               className="fixed inset-0 bg-black/50"
//               onClick={toggleFilter}
//             ></div>
//             <div
//               className={`w-64 bg-white dark:bg-zinc-900 p-4 shadow-xl transition-transform duration-300`}
//             >
//               <h2 className="text-lg font-semibold mb-4">Search & Filters</h2>
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full p-2 mb-4 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
//               />
//               <div className="mb-4">
//                 <label className="block mb-1 text-sm font-medium">
//                   Category
//                 </label>
//                 <select className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
//                   <option>All</option>
//                   <option>Jackets</option>
//                   <option>Shirts</option>
//                   <option>Shoes</option>
//                   <option>Accessories</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 text-sm font-medium">
//                   Sort by
//                 </label>
//                 <select className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
//                   <option>Newest</option>
//                   <option>Price: Low to High</option>
//                   <option>Price: High to Low</option>
//                   <option>Popularity</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Products Grid */}
//         <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {mockProducts.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useTheme } from "../context/Theme";
import { mockProducts } from "../data/mockProducts";
import { FiFilter } from "react-icons/fi";

const CatalogPage = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    priceRange: "",
  });
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    let results = [...mockProducts];

    if (searchQuery.trim()) {
      results = results.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.category)
      results = results.filter((p) => p.category === filters.category);
    if (filters.size) results = results.filter((p) => p.size === filters.size);
    if (filters.color)
      results = results.filter((p) => p.color === filters.color);
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      results = results.filter((p) => p.price >= min && p.price <= max);
    }

    switch (sortBy) {
      case "price-asc":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        results.sort((a, b) => b.price - a.price);
        break;
      case "name":
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredProducts(results);
  }, [searchQuery, sortBy, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className={`relative w-full px-4 lg:px-10 py-6 ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      }`}
    >
      {/* 🔍 Mobile Filter Toggle */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Catalog</h2>
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 border rounded-md"
        >
          <FiFilter />
          Filter
        </button>
      </div>

      {/* 🔍 Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/40`}
          onClick={() => setMobileFilterOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 w-4/5 h-full overflow-y-auto p-4 shadow-lg ${
              theme === "dark"
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded-lg border outline-none bg-transparent border-zinc-300 dark:border-zinc-700"
            />
            <label className="block mt-4 text-sm font-medium">Category</label>
            <select
              name="category"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="shoes">Shoes</option>
              <option value="jackets">Jackets</option>
            </select>
            <label className="block mt-4 text-sm font-medium">Size</label>
            <select
              name="size"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <label className="block mt-4 text-sm font-medium">Color</label>
            <select
              name="color"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
            </select>
            <label className="block mt-4 text-sm font-medium">
              Price Range
            </label>
            <select
              name="priceRange"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="0-50">$0–50</option>
              <option value="51-100">$51–100</option>
              <option value="101-200">$101–200</option>
            </select>
            <label className="block mt-4 text-sm font-medium">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      )}

      {/* 🧭 Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* 🧭 Desktop Filter Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 relative">
          <div
            className={`sticky top-24 rounded-xl p-4 shadow-lg ${
              theme === "dark" ? "bg-zinc-900" : "bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded-lg border outline-none bg-transparent border-zinc-300 dark:border-zinc-700"
            />
            <label className="block mt-4 text-sm font-medium">Category</label>
            <select
              name="category"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="shoes">Shoes</option>
              <option value="jackets">Jackets</option>
            </select>
            <label className="block mt-4 text-sm font-medium">Size</label>
            <select
              name="size"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <label className="block mt-4 text-sm font-medium">Color</label>
            <select
              name="color"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
            </select>
            <label className="block mt-4 text-sm font-medium">
              Price Range
            </label>
            <select
              name="priceRange"
              onChange={handleFilterChange}
              className="w-full"
            >
              <option value="">All</option>
              <option value="0-50">$0–50</option>
              <option value="51-100">$51–100</option>
              <option value="101-200">$101–200</option>
            </select>
            <label className="block mt-4 text-sm font-medium">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </aside>

        {/* 🛍 Product Grid */}
        <section className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default CatalogPage;
