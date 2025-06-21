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
      className={`w-full md:w-64 p-4 border-1 rounded-xl shadow-sm space-y-6 ${
        isDark ? "bg-zinc-950 border-zinc-200" : "bg-zinc-200 border-zinc-800"
      }`}
    >
      <div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDark ? "text-zinc-100" : "text-zinc-900"
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
          className={`w-full p-2 rounded ${
            isDark
              ? "bg-zinc-800 border-zinc-200"
              : "bg-zinc-200 border-zinc-800"
          }`}
        />
      </div>
      <div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDark ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          Sort By
        </h3>
        <select
          onChange={(e) => onSort(e.target.value)}
          className={`w-full p-2 rounded border-1 ${
            isDark
              ? "bg-zinc-800 border-zinc-200"
              : "bg-zinc-200 border-zinc-800"
          }`}
        >
          <option value="price-asc">Price (Lowest)</option>
          <option value="price-desc">Price (Highest)</option>
          <option value="latest">Newest</option>
        </select>
      </div>
      <div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDark ? "text-zinc-100" : "text-zinc-900"
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
          className={`w-full p-2 rounded border-1 ${
            isDark
              ? "bg-zinc-800 border-zinc-200"
              : "bg-zinc-200 border-zinc-800"
          }`}
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
