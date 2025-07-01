// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useCart } from "../../context/Cart";
// import { useAuth } from "../../context/Auth";

// const CheckoutPage = () => {
//   const { user } = useAuth();
//   const { cart, clearCart, total } = useCart();
//   const navigate = useNavigate();

//   const [shippingAddress, setShippingAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!shippingAddress) return alert("Please enter a shipping address.");
//     if (cart.length === 0) return alert("Your cart is empty.");

//     const orderPayload = {
//       items: cart.map((item) => ({
//         product: item.id,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       shippingAddress,
//       paymentMethod,
//     };

//     try {
//       setLoading(true);
//       await axios.post("/api/orders", orderPayload);
//       clearCart();
//       alert("Order placed successfully!");
//       navigate("/dashboard"); // Adjust if needed
//     } catch (error) {
//       console.error("Checkout failed:", error);
//       alert("Checkout failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="max-w-3xl mx-auto px-4 py-8 sm:px-6">
//       <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
//         Checkout
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Cart Items Summary */}
//         <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 space-y-3">
//           <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
//             Order Summary
//           </h2>
//           {cart.length === 0 ? (
//             <p className="text-sm text-zinc-500 dark:text-zinc-400">
//               No items in cart.
//             </p>
//           ) : (
//             cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="text-sm text-zinc-700 dark:text-zinc-300"
//               >
//                 {item.name} × {item.quantity} — ${item.price.toFixed(2)}
//               </div>
//             ))
//           )}
//           <p className="pt-2 text-right font-medium text-zinc-900 dark:text-zinc-100">
//             Total: ${total.toFixed(2)}
//           </p>
//         </div>

//         {/* Shipping Address */}
//         <div>
//           <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
//             Shipping Address
//           </label>
//           <input
//             type="text"
//             required
//             value={shippingAddress}
//             onChange={(e) => setShippingAddress(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
//           />
//         </div>

//         {/* Payment Method */}
//         <div>
//           <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
//             Payment Method
//           </label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
//           >
//             <option value="credit_card">Credit Card</option>
//             <option value="cash_on_delivery">Cash on Delivery</option>
//             <option value="paypal">PayPal</option>
//           </select>
//         </div>

//         {/* Submit */}
//         <div className="pt-4">
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium"
//           >
//             {loading ? "Placing Order..." : "Place Order"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default CheckoutPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/Auth";

const CheckoutPage = () => {
  const { cart, clearCart, total } = useCart();
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState(
    user?.shippingAddress || {
      name: `${user?.firstName || ""} ${user?.lastName || ""}`,
      address: "",
      city: "",
      postalCode: "",
      country: "",
    }
  );

  const [billingAddress, setBillingAddress] = useState(
    user?.billingAddress || {
      name: `${user?.firstName || ""} ${user?.lastName || ""}`,
      address: "",
      city: "",
      postalCode: "",
      country: "",
    }
  );

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Cart is empty.");

    // const payload = {
    //   items: cart.map((item) => ({
    //     product: item.id,
    //     quantity: item.quantity,
    //     price: item.price,
    //   })),
    //   shippingAddress,
    //   billingAddress,
    //   paymentMethod,
    // };
    const payload = {
      products: cart.map((item) => item.id),
      customerId: user?.id,
      totalPrice: total,
      billingAddress,
      shippingAddress,
      paymentMethod,
    };

    try {
      setLoading(true);
      if (
        user?.billingAddress.address === "" ||
        user?.shippingAddress.address === ""
      ) {
        const billingRes = await fetch(
          `http://localhost:3000/api/auth/edit-profile/${user?.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              billingAddress,
              shippingAddress,
            }),
          }
        );
        if (!billingRes.ok) {
          alert("Error saving User billing & shipping.");
          throw new Error("Error saving user billing & shipping.");
        }
        const data = await billingRes.json();
        updateUser({
          billingAddress: data.userData.billingAddress,
          shippingAddress: data.userData.shippingAddress,
        });
      }

      const res = await fetch("http://localhost:3000/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        alert("Error placing order!");
        setLoading(false);
        throw new Error("Error placing order!");
      }
      clearCart();
      alert("Order placed successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddressChange = (
    type: "shipping" | "billing",
    field: string,
    value: string
  ) => {
    if (type === "shipping") {
      setShippingAddress({ ...shippingAddress, [field]: value });
    } else {
      setBillingAddress({ ...billingAddress, [field]: value });
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* User Info */}
        {user && (
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
              User Information
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Name: {user.firstName} {user.lastName}
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Email: {user.email}
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Phone: {user.phone}
            </p>
          </div>
        )}

        {/* Shipping Address */}
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Shipping Address
          </h2>
          {["name", "address", "city", "postalCode", "country"].map((field) => (
            <input
              key={field}
              type="text"
              required
              value={shippingAddress[field as keyof typeof shippingAddress]}
              onChange={(e) =>
                handleAddressChange("shipping", field, e.target.value)
              }
              placeholder={`Shipping ${field}`}
              className="px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
            />
          ))}
        </div>

        {/* Billing Address */}
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Billing Address
          </h2>
          {["name", "address", "city", "postalCode", "country"].map((field) => (
            <input
              key={field}
              type="text"
              required
              value={billingAddress[field as keyof typeof billingAddress]}
              onChange={(e) =>
                handleAddressChange("billing", field, e.target.value)
              }
              placeholder={`Billing ${field}`}
              className="px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
            />
          ))}
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
          >
            <option value="card">Credit Card</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Cart Summary */}
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Order Summary
          </h2>
          {cart.length === 0 ? (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No items in cart.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="text-sm text-zinc-700 dark:text-zinc-300"
              >
                {item.name} × {item.quantity} — ${item.price.toFixed(2)}
              </div>
            ))
          )}
          <p className="pt-2 text-right font-medium text-zinc-900 dark:text-zinc-100">
            Total: ${total.toFixed(2)}
          </p>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CheckoutPage;
