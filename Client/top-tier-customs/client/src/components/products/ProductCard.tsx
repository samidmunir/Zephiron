// import { type FC } from "react";
// import { useNavigate } from "react-router-dom";

// import { useTheme } from "../../context/Theme";

// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   brand: string;
//   category: string;
//   type: string;
//   fitment: [string];
//   price: number;
//   images: string[];
// }

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: FC<ProductCardProps> = ({ product }) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const navigate = useNavigate();
//   return <div></div>;
// };

// export default ProductCard;

import { useNavigate } from "react-router-dom";

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src={product.images?.[0] || "/placeholder.jpg"}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-1">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <strong>Fitment:</strong> {product.fitment}
        </p>
        <p className="text-lg font-bold text-sky-600 dark:text-sky-400">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
          {product.description}
        </p>
        <button
          onClick={() => navigate(`/admin/products/edit/${product._id}`)}
          className="mt-3 w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded text-sm font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
