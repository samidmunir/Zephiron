import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

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

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/orders", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setOrders(data.orders);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (orderId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (!confirmDelete) return;
    try {
      await axios.delete(`/api/orders/${orderId}`);
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Failed to delete order", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-8 min-h-[100vh]">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Manage Orders
        </h1>
      </div>

      {loading ? (
        <p className="text-zinc-500 dark:text-zinc-400">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">No orders found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Customer ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {order._id.slice(0, 8)}...
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
                    {order.customerId}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : order.status === "processing"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {order.paymentMethod}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {formatDistanceToNow(new Date(order.createdAt), {
                      addSuffix: true,
                    })}
                  </td>
                  <td className="px-4 py-3 text-sm space-x-2">
                    <Link
                      to={`/admin/orders/edit/${order._id}`}
                      className="inline-block px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="inline-block px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ManageOrdersPage;
