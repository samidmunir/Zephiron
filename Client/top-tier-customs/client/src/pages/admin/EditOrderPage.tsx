import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// interface OrderItem {
//   product: {
//     _id: string;
//     title: string;
//   };
//   quantity: number;
//   price: number;
// }

// interface Order {
//   _id: string;
//   user: {
//     _id: string;
//     name: string;
//     email: string;
//   };
//   items: OrderItem[];
//   status: string;
//   paymentMethod: string;
//   shippingAddress?: string;
//   total: number;
//   createdAt: string;
//   updatedAt: string;
// }

interface Order {
  _id: string;
  products: string[];
  customerId: string;
  totalPrice: number;
  billingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  isPaid: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const EditOrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order | null>(null);
  const [status, setStatus] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const fetchOrder = async () => {
    try {
      //   const { data } = await axios.get(`/api/orders/${id}`);
      const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setOrder(data.order);
      setStatus(data.order.status);
      setPaymentMethod(data.order.paymentMethod || "");
      setShippingAddress(data.order.shippingAddress || "");
    } catch (error) {
      console.error("Failed to fetch order", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/orders/${id}/edit`, {
        status,
        paymentMethod,
        shippingAddress,
      });
      alert("Order updated successfully!");
      navigate("/admin/orders");
    } catch (error) {
      console.error("Failed to update order", error);
      alert("Update failed.");
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (!order) {
    return (
      <p className="p-6 text-zinc-600 dark:text-zinc-300">
        Loading order details...
      </p>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
        Edit Order #{order._id.slice(0, 8)}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order Items (Read Only) */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
            Order Items
          </h2>
          <ul className="bg-zinc-100 dark:bg-zinc-800 rounded-md p-4 space-y-2">
            {/* {order.items.map((item, index) => (
              <li
                key={index}
                className="text-sm text-zinc-700 dark:text-zinc-300"
              >
                <strong>{item.product.title}</strong> — Quantity:{" "}
                {item.quantity}, Price: ${item.price.toFixed(2)}
              </li>
            ))} */}
            {order.products.map((product, index) => (
              <li
                key={index}
                className="text-sm text-zinc-700 dark:text-zinc-300"
              >
                <strong>{product}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Order Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Payment Method
          </label>
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
          />
        </div>

        {/* Shipping Address */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Shipping Address
          </label>
          <input
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-100"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditOrderPage;
