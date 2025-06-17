import React from "react";
import { useTheme } from "../context/Theme";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/Auth";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size: string;
  color: string;
  rating: number;
  stock: number;
};

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { cart, addToCart } = useCart();
  const { user } = useAuth();
  const inCart = cart.some((item) => item._id === product._id);

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md p-4 transition-transform duration-300 hover:scale-[1.02] ${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      }`}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <div className="space-y-2">
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-sm opacity-80 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between text-sm">
          <span className="font-bold text-red-500">
            ${product.price.toFixed(2)}
          </span>
          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>

        <div className="flex justify-between text-xs opacity-90">
          <span>Size: {product.size}</span>
          <span>Color: {product.color}</span>
        </div>

        <div className="flex justify-between items-center text-xs">
          <span>⭐ {product.rating}</span>
          <span
            className={`px-2 py-0.5 rounded-full ${
              product.stock > 0
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        {user && (
          <button
            onClick={() => addToCart(product)}
            className={`mt-3 w-full ${isDark ? "bg-white" : "bg-black"} ${
              isDark ? "text-black" : "text-white"
            } py-2 rounded hover:opacity-90 transition`}
          >
            {inCart ? "✅ In Cart" : "Add to Cart"}
          </button>
        )}
        {/* <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded hover:opacity-90 transition"
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
