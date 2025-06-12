// src/components/TrendingCategories.tsx
import { useTheme } from "../context/Theme";

const categories = [
  {
    id: 1,
    title: "Jackets & Outerwear",
    image: "/images/categories/jackets.jpg",
    link: "/catalog?category=jackets",
  },
  {
    id: 2,
    title: "Sneakers & Footwear",
    image: "/images/categories/footwear.jpg",
    link: "/catalog?category=footwear",
  },
  {
    id: 3,
    title: "Accessories",
    image: "/images/categories/accessories.jpg",
    link: "/catalog?category=accessories",
  },
];

const TrendingCategories = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full px-6 md:px-16 py-16 ${
        isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Trending{" "}
          <span className={isDark ? "text-sky-400" : "text-blue-600"}>
            Categories
          </span>
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.link}
              className={`relative overflow-hidden rounded-xl shadow-lg group transition hover:scale-[1.02] ${
                isDark ? "bg-zinc-800" : "bg-zinc-100"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-60 object-cover group-hover:opacity-80 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-xl font-semibold text-white drop-shadow">
                  {cat.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
