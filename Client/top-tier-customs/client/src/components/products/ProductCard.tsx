// import { useNavigate } from "react-router-dom";
// import { useTheme } from "../../context/Theme";
// import { useAuth } from "../../context/Auth";
// import { useCart } from "../../context/Cart";
// import { BsFillHeartFill } from "react-icons/bs";

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
//   const { user } = useAuth();
//   const isAuthenticated = user == null ? false : true;
//   const isAdmin = user?.role === "admin";
//   const { addToCart, openCart } = useCart();

//   const finalPrice =
//     product.discount > 0
//       ? product.price - product.price * (product.discount / 100)
//       : product.price;

//   const formatDate = (dateStr: string) =>
//     new Date(dateStr).toLocaleDateString(undefined, {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });

// const stockBadge = () => {
//   if (product.quantity === 0) {
//     return (
//       <span className="bg-rose-600 text-white text-xs px-2 py-1 rounded font-semibold">
//         Out of Stock
//       </span>
//     );
//   } else if (product.quantity < 3) {
//     return (
//       <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-semibold">
//         Low Stock
//       </span>
//     );
//   } else {
//     return (
//       <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded font-semibold">
//         In Stock
//       </span>
//     );
//   }
// };

// const handleAddToCart = () => {
//   addToCart({
//     id: product._id,
//     name: product.title,
//     price: product.price,
//     image: product.images[0],
//   });
//   openCart();
// };

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
// className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         {/* Discount badge */}
//         {product.discount > 0 && (
//           <div className="absolute top-2 left-2 bg-rose-600 text-white text-xs px-2 py-1 rounded-md shadow-md font-semibold">
//             -{product.discount}%
//           </div>
//         )}

//         {/* Installable badge */}
//         {product.installable && (
//           <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md shadow-md font-semibold">
//             Installable
//           </div>
//         )}
//       </div>

//       {/* Card Content */}
//       <div className="p-4 flex flex-col gap-2">
//         {/* Title, Brand, Category */}
//         <div className="flex flex-col gap-1">
//           <div className="w-full flex items-center justify-between">
//             <h3 className="text-lg font-bold line-clamp-1">{product.title}</h3>
//             {isAuthenticated && (
//               <BsFillHeartFill
//                 className={`transition-all duration-1000 hover:scale-110 hover:text-rose-500`}
//               />
//             )}
//           </div>
//           <p className="text-sm text-zinc-500 dark:text-zinc-400">
//             {product.brand} • {product.category}
//           </p>
//         </div>

//         {/* Fitment */}
//         <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
//           <strong>Fits:</strong>{" "}
//           <span className="uppercase">{product.fits.join(", ")}</span>
//         </p>

//         {/* Price */}
//         <div className="mt-1">
//           {product.discount > 0 ? (
//             <div className="flex flex-row items-center gap-2">
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

// {/* Stock Status */}
// <div className="mt-1">{stockBadge()}</div>

//         {/* Timestamps */}
//         <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">
//           <p>Created: {formatDate(product.createdAt)}</p>
//           <p>Updated: {formatDate(product.updatedAt)}</p>
//         </div>

//         {/* CTA Button */}
//         {isAdmin ? (
//           <button
//             onClick={() => navigate(`/admin/products/edit/${product._id}`)}
//             className="mt-3 w-full py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
//           >
//             View & Edit
//           </button>
//         ) : (
//           <div>
//             <button
//               onClick={() => navigate(`/products/${product._id}`)}
//               className="mt-3 w-full py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
//             >
//               View Details
//             </button>
//             <button
//               onClick={handleAddToCart}
//               className="mt-3 w-full py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";
import { useAuth } from "../../context/Auth";
import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../../context/Cart";

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
  fits: string[];
  createdAt: string;
  updatedAt: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { user, updateUser } = useAuth();
  const { cart, addToCart, removeFromCart, openCart } = useCart();
  const isAdmin = user?.role === "admin";
  const isDark = theme === "dark";

  const isInCart = cart.some((item) => item.id === product._id);

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (user?.savedProducts?.includes(product._id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [user, product._id]);

  const toggleSavedProduct = async () => {
    if (!user) {
      alert("Please login to save products.");
      return;
    }

    if (isSaved) {
      try {
        const res = await fetch(
          `http://localhost:3000/api/auth/${user.id}/delete-saved-product`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId: product._id }),
          }
        );
        if (!res.ok) throw new Error("Failed to update");
        const data = await res.json();
        setIsSaved((prev) => !prev);
        updateUser({ savedProducts: data.user.savedProducts });
      } catch (e) {
        alert("Something went wrong.");
      }
    } else {
      try {
        const res = await fetch(
          `http://localhost:3000/api/auth/${user.id}/add-saved-product`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId: product._id }),
          }
        );
        if (!res.ok) throw new Error("Failed to update");
        const data = await res.json();
        setIsSaved((prev) => !prev);
        updateUser({ savedProducts: data.user.savedProducts });
      } catch (e) {
        alert("Something went wrong.");
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.title,
      price: product.price,
      image: product.images[0],
    });
    openCart();
  };

  const stockBadge = () => {
    if (product.quantity === 0) {
      return (
        <span className="bg-rose-600 text-white text-xs px-2 py-1 rounded font-semibold">
          Out of Stock
        </span>
      );
    } else if (product.quantity <= 3) {
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

  const finalPrice =
    product.discount > 0
      ? product.price - product.price * (product.discount / 100)
      : product.price;

  return (
    <div
      className={`group relative rounded-xl border transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl ${
        isDark
          ? "bg-zinc-800 border-zinc-700 text-zinc-100"
          : "bg-white border-zinc-200 text-zinc-900"
      }`}
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={product.images?.[0] || "/placeholder.jpg"}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Tag */}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-rose-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
            -{product.discount}%
          </div>
        )}

        {/* Heart Icon (top-right) */}
        {user && (
          <button
            onClick={toggleSavedProduct}
            className="absolute top-2 right-2 text-xl z-10"
          >
            {isSaved ? (
              <FaHeart className="text-rose-500 hover:scale-110 transition" />
            ) : (
              <FaRegHeart className="text-white hover:text-rose-500 hover:scale-110 transition" />
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold line-clamp-1">{product.title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {product.brand} • {product.category}
        </p>
        <section className="flex justify-between">
          <div className="flex-1/3">
            {/* Installable */}
            {product.installable && (
              <p className="inline-block w-max text-xs font-medium bg-indigo-600 text-white px-2 py-1 rounded-md">
                Installable
              </p>
            )}

            {/* Fits */}
            <p className=" px-1 py-1 my-1 text-xs text-zinc-500 dark:text-zinc-400 truncate">
              <strong>Fits:</strong>{" "}
              <span className="uppercase">{product.fits}</span>
            </p>
            {/* Stock Status */}
            <div className="">{stockBadge()}</div>
          </div>
          <div className="flex-2/3">
            <p className="text-sm">{product.description}</p>
          </div>
        </section>

        {/* Price */}
        <div className="mt-1">
          {product.discount > 0 ? (
            <>
              <span className="text-lg font-bold text-sky-600 dark:text-sky-400">
                ￡{finalPrice.toFixed(2)}
              </span>
              <span className="text-sm line-through text-zinc-500 ml-2">
                ￡{product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-sky-600 dark:text-sky-400">
              ￡{product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* CTA */}
        {/* {isAdmin ? (
          <div>
            <button
              onClick={() => navigate(`/admin/products/edit/${product._id}`)}
              className="mt-3 w-full py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              View & Edit
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between my-4">
            <button
              onClick={() => navigate(`/products/${product._id}`)}
              className="px-4 py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              View Details
            </button>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              Add to Cart
            </button>
          </div>
        )} */}
        {!isAdmin && (
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={() => navigate(`/products/${product._id}`)}
              className="w-full py-2 rounded-md font-medium text-sm bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              View Details
            </button>
            {isInCart ? (
              <button
                onClick={() => removeFromCart(product._id)}
                className="w-full py-2 rounded-md font-medium text-sm bg-rose-600 text-white hover:bg-rose-700 transition"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  handleAddToCart();
                  openCart();
                }}
                className="w-full py-2 rounded-md font-medium text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                Add to Cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
