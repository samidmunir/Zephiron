// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
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

// const ProductPage = () => {
//   const { id } = useParams();
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);

//   const fetchProduct = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/api/products/${id}`);
//       const data = await res.json();
//       setProduct(data.product);
//     } catch (error) {
//       alert("Failed to load product.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <p className="text-xl font-semibold animate-pulse">
//           Loading product...
//         </p>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <p className="text-xl font-semibold">Product not found.</p>
//       </div>
//     );
//   }

//   return (
//     <main
//       className={`w-full min-h-screen px-4 sm:px-8 py-10 transition-all duration-300 ${
//         isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Image Section */}
//         <div className="w-full">
//           <img
//             src={product.images?.[0] || "/placeholder.jpg"}
//             alt={product.title}
//             className="w-full rounded-xl object-cover shadow-md max-h-[500px] hover:scale-105 transition-all duration-1000"
//           />
//           {/* Thumbnail Gallery */}
//           <div className="flex gap-3 mt-4 overflow-x-auto">
//             {product.images?.slice(1).map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`thumbnail-${idx}`}
//                 className="w-20 h-20 object-cover rounded-lg border border-zinc-300 dark:border-zinc-700 hover:scale-105 transition-all"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Details Section */}
//         <div className="flex flex-col gap-4">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-lg text-zinc-500 dark:text-zinc-300">
//             {product.description}
//           </p>

//           <div className="space-y-1 mt-4">
//             <p>
//               <strong>Brand:</strong> {product.brand}
//             </p>
//             <p>
//               <strong>Category:</strong> {product.category}
//             </p>
//             <p>
//               <strong>Fitment:</strong> {product.fits.join(", ")}
//             </p>
//             <p>
//               <strong>Type:</strong> {product.type}
//             </p>
//             <p>
//               <strong>Installable:</strong> {product.installable ? "Yes" : "No"}
//             </p>
//             <p>
//               <strong>In Stock:</strong> {product.quantity}
//             </p>
//           </div>

//           <div className="mt-6 space-y-2">
//             <p className="text-3xl font-bold text-sky-600 dark:text-sky-400">
//               ￡{product.price.toFixed(2)}
//             </p>
//             {product.discount > 0 && (
//               <p className="text-sm text-rose-500">
//                 {product.discount}% off - Limited time!
//               </p>
//             )}
//           </div>

//           {/* CTA */}
//           <div className="mt-6 flex flex-col sm:flex-row gap-4">
//             <button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-md font-semibold transition">
//               Add to Cart
//             </button>
//             {product.installable && (
//               <button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-md font-semibold transition">
//                 Book Installation
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ProductPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const ProductPage = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await res.json();
      setProduct(data.product);
      setSelectedImage(data.product.images?.[0] || null); // set default image
    } catch (error) {
      alert("Failed to load product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-xl font-semibold animate-pulse">
          Loading product...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">Product not found.</p>
      </div>
    );
  }

  return (
    <main
      className={`w-full min-h-screen px-4 sm:px-8 py-10 transition-all duration-300 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full">
          {/* Main Display Image */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-md">
            <img
              src={selectedImage || "/placeholder.jpg"}
              alt={product.title}
              className="w-full max-h-[500px] object-contain transition duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumbnail-${idx}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedImage === img
                      ? "border-sky-500 ring-2 ring-sky-400"
                      : "border-zinc-300 dark:border-zinc-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-300">
            {product.description}
          </p>

          <div className="space-y-1 mt-4">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Fitment:</strong> {product.fits.join(", ")}
            </p>
            <p>
              <strong>Type:</strong> {product.type}
            </p>
            <p>
              <strong>Installable:</strong> {product.installable ? "Yes" : "No"}
            </p>
            <p>
              <strong>In Stock:</strong> {product.quantity}
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-3xl font-bold text-sky-600 dark:text-sky-400">
              ￡{product.price.toFixed(2)}
            </p>
            {product.discount > 0 && (
              <p className="text-sm text-rose-500">
                {product.discount}% off - Limited time!
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-md font-semibold transition">
              Add to Cart
            </button>
            {product.installable && (
              <button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-md font-semibold transition">
                Book Installation
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
