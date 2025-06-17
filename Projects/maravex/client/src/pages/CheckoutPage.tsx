// import { useTheme } from "../context/Theme";
// import { useAuth } from "../context/Auth";
// import { useCart } from "../context/Cart";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const { theme } = useTheme();
//   const { user } = useAuth();
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div
//       className={`min-h-screen p-6 md:p-12 ${
//         theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
//       }`}
//     >
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Address Information */}
//         <div className="space-y-8">
//           <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
//             {user?.billingAddress ? (
//               <div className="text-sm leading-relaxed">
//                 <p>
//                   <strong>{user.billingAddress.name}</strong>
//                 </p>
//                 <p>{user.billingAddress.address}</p>
//                 <p>
//                   {user.billingAddress.city}, {user.billingAddress.state}{" "}
//                   {user.billingAddress.postalCode}
//                 </p>
//                 <p>{user.billingAddress.country}</p>
//               </div>
//             ) : (
//               <p>No billing address found.</p>
//             )}
//           </div>

//           <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
//             {user?.shippingAddress ? (
//               <div className="text-sm leading-relaxed">
//                 <p>
//                   <strong>{user.shippingAddress.name}</strong>
//                 </p>
//                 <p>{user.shippingAddress.address}</p>
//                 <p>
//                   {user.shippingAddress.city}, {user.shippingAddress.state}{" "}
//                   {user.shippingAddress.postalCode}
//                 </p>
//                 <p>{user.shippingAddress.country}</p>
//               </div>
//             ) : (
//               <p>No shipping address found.</p>
//             )}
//           </div>
//         </div>

//         {/* Cart Summary */}
//         <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow-md h-fit">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <ul className="divide-y divide-zinc-300 dark:divide-zinc-700">
//             {cart.map((item) => (
//               <li key={item._id} className="py-4">
//                 <div className="flex justify-between items-start gap-4">
//                   <div>
//                     <p className="font-medium">{item.title}</p>
//                     <p className="text-sm text-zinc-500 dark:text-zinc-400">
//                       Quantity: {item.quantity}
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold whitespace-nowrap">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           <div className="flex justify-between mt-6 pt-4 border-t border-zinc-300 dark:border-zinc-700">
//             <p className="font-semibold text-lg">Total</p>
//             <p className="text-lg font-bold">${total.toFixed(2)}</p>
//           </div>

//           <button
//             className="mt-6 w-full bg-black text-white dark:bg-white dark:text-black font-semibold py-3 rounded hover:opacity-90 transition"
//             onClick={() => alert("Proceeding to payment...")}
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

import { useTheme } from "../context/Theme";
import { useAuth } from "../context/Auth";
import { useCart } from "../context/Cart";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const CheckoutPage = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const themeBg =
    theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900";
  const cardBg = theme === "dark" ? "bg-zinc-800" : "bg-zinc-100";
  const textMuted = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
  const borderColor = theme === "dark" ? "border-zinc-700" : "border-zinc-300";

  const handleCheckout = () => {
    clearCart();
    alert("Proceeding to payment...");
  };

  return (
    <div className={`min-h-screen p-6 md:p-12 ${themeBg}`}>
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-24">
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <Link
            to="/catalog"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded font-medium hover:opacity-90 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-10">
          {/* Address Information */}
          <div className="space-y-8">
            <div className={`${cardBg} rounded-lg p-6 shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              {user?.billingAddress ? (
                <div className="text-sm leading-relaxed">
                  <p>
                    <strong>{user.billingAddress.name}</strong>
                  </p>
                  <p>{user.billingAddress.address}</p>
                  <p>
                    {user.billingAddress.city}, {user.billingAddress.state}{" "}
                    {user.billingAddress.postalCode}
                  </p>
                  <p>{user.billingAddress.country}</p>
                </div>
              ) : (
                <p>No billing address found.</p>
              )}
            </div>

            <div className={`${cardBg} rounded-lg p-6 shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              {user?.shippingAddress ? (
                <div className="text-sm leading-relaxed">
                  <p>
                    <strong>{user.shippingAddress.name}</strong>
                  </p>
                  <p>{user.shippingAddress.address}</p>
                  <p>
                    {user.shippingAddress.city}, {user.shippingAddress.state}{" "}
                    {user.shippingAddress.postalCode}
                  </p>
                  <p>{user.shippingAddress.country}</p>
                </div>
              ) : (
                <p>No shipping address found.</p>
              )}
            </div>
          </div>

          {/* Cart Summary */}
          <div className={`${cardBg} rounded-lg p-6 shadow-md h-fit`}>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className={`divide-y ${borderColor}`}>
              {cart.map((item) => (
                <li key={item._id} className="py-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <p className="font-medium">{item.title}</p>
                      <p className={`text-sm ${textMuted}`}>
                        Quantity: {item.quantity}
                      </p>
                      {item.size && (
                        <p className={`text-sm ${textMuted}`}>
                          Size: {item.size}
                        </p>
                      )}
                      {item.color && (
                        <p className={`text-sm ${textMuted}`}>
                          Color: {item.color}
                        </p>
                      )}
                    </div>
                    <p className="text-sm font-semibold whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className={`flex justify-between mt-6 pt-4 border-t ${borderColor}`}
            >
              <p className="font-semibold text-lg">Total</p>
              <p className="text-lg font-bold">${total.toFixed(2)}</p>
            </div>

            <button
              className="mt-6 w-full bg-black text-white dark:bg-white dark:text-black font-semibold py-3 rounded hover:opacity-90 transition"
              onClick={() => handleCheckout()}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
