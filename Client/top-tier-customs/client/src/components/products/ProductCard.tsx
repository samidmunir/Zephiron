// import { useNavigate } from "react-router-dom";

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

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
//       <img
//         src={product.images?.[0] || "/placeholder.jpg"}
//         alt={product.title}
//         className="w-full h-48 object-cover transform hover:scale-105 transition-all duration-1000"
//       />
//       <div className="p-4 space-y-1">
//         <h3 className="text-xl font-semibold text-zinc-200 truncate">
//           {product.title}
//         </h3>
//         <p className="text-sm text-zinc-500 dark:text-zinc-400">
//           <strong>Brand:</strong> {product.brand}
//         </p>
//         <p className="text-sm text-zinc-500 dark:text-zinc-400">
//           <strong>Category:</strong> {product.category}
//         </p>
//         <p className="text-sm text-zinc-500 dark:text-zinc-400">
//           <strong>Fitment:</strong> {product.fits}
//         </p>
//         <p className="text-lg font-bold text-sky-600 dark:text-sky-400">
//           ￡{product.price.toFixed(2)}
//         </p>
//         <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
//           {product.description}
//         </p>
//         <button
//           onClick={() => navigate(`/products/${product._id}`)}
//           className="mt-3 w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded text-sm font-medium"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import { useNavigate } from "react-router-dom";
// import { useTheme } from "../../context/Theme";

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

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const navigate = useNavigate();
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const finalPrice =
//     product.discount > 0
//       ? product.price - product.price * (product.discount / 100)
//       : product.price;

//   return (
//     <div
//       className={`group rounded-xl border transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl cursor-pointer ${
//         isDark
//           ? "bg-zinc-800 border-zinc-700 text-zinc-100"
//           : "bg-white border-zinc-200 text-zinc-900"
//       }`}
//     >
//       {/* Product Image */}
//       <div className="relative w-full h-48 overflow-hidden">
//         <img
//           src={product.images?.[0] || "/placeholder.jpg"}
//           alt={product.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         {/* Discount badge */}
//         {product.discount > 0 && (
//           <div className="absolute top-2 left-2 bg-rose-600 text-white text-xs px-2 py-1 rounded-md shadow-md font-semibold">
//             -{product.discount}%
//           </div>
//         )}

//         {/* Installable badge */}
//         {product.installable && (
//           <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-md shadow-md font-semibold">
//             Installable
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col gap-2">
//         {/* Title & Brand */}
//         <div className="flex flex-col gap-1">
//           <h3 className="text-lg font-bold line-clamp-1">{product.title}</h3>
//           <p className="text-sm text-zinc-500 dark:text-zinc-400">
//             {product.brand} • {product.category}
//           </p>
//         </div>

//         {/* Fitment */}
//         <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
//           <strong>Fits:</strong> {product.fits.join(", ")}
//         </p>

//         {/* Price Section */}
//         <div className="mt-1">
//           {product.discount > 0 ? (
//             <div className="flex items-center gap-2">
//               <span className="text-lg font-bold text-sky-600 dark:text-sky-400">
//                 ￡{finalPrice.toFixed(2)}
//               </span>
//               <span className="text-sm line-through text-zinc-500">
//                 ￡{product.price.toFixed(2)}
//               </span>
//             </div>
//           ) : (
//             <span className="text-lg font-bold text-sky-600 dark:text-sky-400">
//               ￡{product.price.toFixed(2)}
//             </span>
//           )}
//         </div>

//         {/* Button */}
//         <button
//           onClick={() => navigate(`/products/${product._id}`)}
//           className={`mt-3 w-full py-2 rounded-md font-medium text-sm ${
//             isDark ? "bg-rose-500 text-zinc-100" : "bg-sky-500 text-zinc-100"
//           } hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-1000`}
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const finalPrice =
    product.discount > 0
      ? product.price - product.price * (product.discount / 100)
      : product.price;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const stockBadge = () => {
    if (product.quantity === 0) {
      return (
        <span className="bg-rose-600 text-white text-xs px-2 py-1 rounded font-semibold">
          Out of Stock
        </span>
      );
    } else if (product.quantity < 3) {
      return (
        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-semibold">
          Low Stock
        </span>
      );
    } else {
      return (
        <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded font-semibold">
          In Stock
        </span>
      );
    }
  };

  return (
    <div
      className={`group rounded-xl border transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl cursor-pointer ${
        isDark
          ? "bg-zinc-800 border-zinc-700 text-zinc-100"
          : "bg-white border-zinc-200 text-zinc-900"
      }`}
    >
      {/* Product Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={product.images?.[0] || "/placeholder.jpg"}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount badge */}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-rose-600 text-white text-xs px-2 py-1 rounded-md shadow-md font-semibold">
            -{product.discount}%
          </div>
        )}

        {/* Installable badge */}
        {product.installable && (
          <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md shadow-md font-semibold">
            Installable
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title, Brand, Category */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold line-clamp-1">{product.title}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {product.brand} • {product.category}
          </p>
        </div>

        {/* Fitment */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
          <strong>Fits:</strong> {product.fits.join(", ")}
        </p>

        {/* Price */}
        <div className="mt-1">
          {product.discount > 0 ? (
            <div className="flex flex-col">
              <span className="text-lg font-bold text-sky-600 dark:text-sky-400">
                ￡{finalPrice.toFixed(2)}
              </span>
              <span className="text-sm line-through text-zinc-500">
                ￡{product.price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-sky-600 dark:text-sky-400">
              ￡{product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="mt-1">{stockBadge()}</div>

        {/* Timestamps */}
        <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">
          <p>Created: {formatDate(product.createdAt)}</p>
          <p>Updated: {formatDate(product.updatedAt)}</p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate(`/products/${product._id}`)}
          className="mt-3 w-full py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
