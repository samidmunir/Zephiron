// import { useCart } from "../context/Cart";
// import { useTheme } from "../context/Theme";
// import { FiX } from "react-icons/fi";

// const CartDrawer = () => {
//   const { cart, removeFromCart, updateQuantity, isCartOpen, toggleCart } =
//     useCart();
//   const { theme } = useTheme();

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div
//       className={`fixed top-0 right-0 w-full sm:w-[400px] h-full z-[100] transform transition-transform duration-300 ${
//         isCartOpen ? "translate-x-0" : "translate-x-full"
//       } ${
//         theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"
//       } shadow-lg`}
//     >
//       <div className="p-4 flex justify-between items-center border-b">
//         <h2 className="text-xl font-semibold">Your Cart</h2>
//         <button onClick={toggleCart}>
//           <FiX className="text-2xl" />
//         </button>
//       </div>
//       <div className="p-4 overflow-y-auto h-[calc(100%-150px)] space-y-4">
//         {cart.length === 0 ? (
//           <p className="text-center mt-8 text-gray-500">Your cart is empty.</p>
//         ) : (
//           cart.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center gap-4 border p-3 rounded"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-16 h-16 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h4 className="font-semibold">{item.title}</h4>
//                 <p>${item.price.toFixed(2)}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     min={1}
//                     onChange={(e) =>
//                       updateQuantity(item._id, parseInt(e.target.value))
//                     }
//                     className="w-14 px-2 py-1 border rounded text-sm"
//                   />
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="text-red-500 hover:underline text-sm"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="p-4 border-t flex justify-between items-center font-semibold">
//         <span>Total:</span>
//         <span>${total.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// };

// export default CartDrawer;

// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/Cart";
// import { useTheme } from "../context/Theme";
// import { FiX } from "react-icons/fi";

// const CartDrawer = () => {
//   const { cart, removeFromCart, updateQuantity, isCartOpen, toggleCart } =
//     useCart();
//   const { theme } = useTheme();

//   const drawerRef = useRef<HTMLDivElement>(null);

//   const navigate = useNavigate();

//   // Close cart when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         drawerRef.current &&
//         !drawerRef.current.contains(event.target as Node)
//       ) {
//         if (isCartOpen) toggleCart();
//       }
//     };

//     if (isCartOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isCartOpen, toggleCart]);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div
//       className={`fixed inset-0 z-[100] transition-all duration-300 ${
//         isCartOpen ? "pointer-events-auto" : "pointer-events-none"
//       }`}
//     >
//       {/* Backdrop */}
//       <div
//         className={`absolute inset-0 bg-black transition-opacity duration-300 ${
//           isCartOpen ? "opacity-30" : "opacity-0"
//         }`}
//       />

//       {/* Drawer */}
//       <div
//         ref={drawerRef}
//         className={`absolute right-0 top-0 w-full sm:w-[400px] h-full transform transition-transform duration-300 ${
//           isCartOpen ? "translate-x-0" : "translate-x-full"
//         } ${
//           theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"
//         } shadow-lg`}
//       >
//         <div className="p-4 flex justify-between items-center border-b">
//           <h2 className="text-xl font-semibold">Your Cart</h2>
//           <button onClick={toggleCart}>
//             <FiX className="text-2xl" />
//           </button>
//         </div>

//         <div className="p-4 overflow-y-auto h-[calc(100%-150px)] space-y-4">
//           {cart.length === 0 ? (
//             <p className="text-center mt-8 text-gray-500">
//               Your cart is empty.
//             </p>
//           ) : (
//             cart.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-start gap-4 border p-3 rounded"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//                 <div className="flex-1 space-y-1">
//                   <h4 className="font-semibold text-sm">{item.title}</h4>
//                   <p className="text-xs text-gray-500">
//                     ${item.price.toFixed(2)}
//                   </p>
//                   <div className="flex gap-2 text-xs text-gray-400">
//                     <span>Size: {item.size}</span>
//                     <span>Color: {item.color}</span>
//                   </div>

//                   <div className="flex items-center gap-2 mt-2">
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id, Math.max(item.quantity - 1, 1))
//                       }
//                       className="px-2 py-1 bg-gray-300 text-black rounded text-xs"
//                     >
//                       -
//                     </button>
//                     <span className="w-6 text-center">{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id, item.quantity + 1)
//                       }
//                       className="px-2 py-1 bg-gray-300 text-black rounded text-xs"
//                     >
//                       +
//                     </button>
//                     <button
//                       onClick={() => removeFromCart(item._id)}
//                       className="text-red-500 hover:underline text-xs ml-auto"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* <div className="p-4 border-t flex justify-between items-center font-semibold">
//           <span>Total:</span>
//           <span>${total.toFixed(2)}</span>
//         </div> */}
//         <div className="p-4 border-t space-y-4">
//           <div className="flex justify-between items-center font-semibold text-lg">
//             <span>Total:</span>
//             <span>${total.toFixed(2)}</span>
//           </div>

//           <button
//             onClick={() => {
//               toggleCart(); // optional: close the drawer first
//               navigate("/checkout");
//             }}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDrawer;

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";
import { useTheme } from "../context/Theme";
import { FiX } from "react-icons/fi";

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, toggleCart } =
    useCart();
  const { theme } = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle click outside to close drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        if (isCartOpen) toggleCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isCartOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isCartOpen ? "opacity-30" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`absolute right-0 top-0 w-full sm:w-[400px] max-h-screen h-full transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } ${
          theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"
        } shadow-lg flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={toggleCart}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center mt-8 text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item._id}
                className="flex items-start gap-4 border p-3 rounded"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex gap-2 text-xs text-gray-400">
                    <span>Size: {item.size}</span>
                    <span>Color: {item.color}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, Math.max(item.quantity - 1, 1))
                      }
                      className="px-2 py-1 bg-gray-300 text-black rounded text-xs"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-300 text-black rounded text-xs"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:underline text-xs ml-auto"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t space-y-4">
          <div className="flex justify-between items-center font-semibold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => {
              toggleCart(); // Close the drawer before navigating
              navigate("/checkout");
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
