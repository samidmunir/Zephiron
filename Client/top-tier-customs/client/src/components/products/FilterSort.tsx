import { type FC, useState } from "react";

import { useTheme } from "../../context/Theme";

interface FilterSortProps {
  onSearch: (query: string) => void;
  onSort: (sortKey: string) => void;
  onFilterBrand: (brand: string) => void;
  availableBrands: string[];
}

const FilterSort: FC<FilterSortProps> = ({
  onSearch,
  onSort,
  onFilterBrand,
  availableBrands,
}) => {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <aside
      className={`p-4 border-2 rounded-md sm:w-full md:w-64 space-y-4 shadow-lg transition-all duration-1000 ${
        isDark ? "bg-zinc-950 border-rose-500" : "bg-zinc-800 border-sky-500"
      }`}
    >
      <div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDark ? "text-zinc-300" : "text-zinc-100"
          }`}
        >
          Search
        </h3>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          placeholder="Search products..."
          className={`w-full px-2 py-2 rounded-md border-1 border-zinc-100 focus:border-zinc-950 focus:outline-none focus:ring-2 ${
            isDark
              ? "ring-rose-500 placeholder:text-zinc-500"
              : "ring-sky-500 placeholder:text-zinc-700"
          } transition-all duration-3000`}
        />
      </div>
      <div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDark ? "text-zinc-300" : "text-zinc-100"
          }`}
        >
          Sort By
        </h3>
        <select
          onChange={(e) => onSort(e.target.value)}
          className={`w-full px-2 py-2 rounded-md border-1 border-zinc-100 focus:border-zinc-950 focus:outline-none focus:ring-2 ${
            isDark
              ? "ring-rose-500 placeholder:text-zinc-500"
              : "ring-sky-500 placeholder:text-zinc-700"
          } transition-all duration-3000`}
        >
          <option value="price-asc">Price (Lowest)</option>
          <option value="price-desc">Price (Highest)</option>
          <option value="latest">Newest</option>
        </select>
      </div>
      <div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDark ? "text-zinc-300" : "text-zinc-100"
          }`}
        >
          Filter by Brand
        </h3>
        <select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            onFilterBrand(e.target.value);
          }}
          className={`w-full px-2 py-2 rounded-md border-1 border-zinc-100 focus:border-zinc-950 focus:outline-none focus:ring-2 ${
            isDark
              ? "ring-rose-500 placeholder:text-zinc-500"
              : "ring-sky-500 placeholder:text-zinc-700"
          } transition-all duration-3000`}
        >
          <option value="">All Brands</option>
          {availableBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default FilterSort;
