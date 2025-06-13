// src/components/dashboard/RecentOrdersList.tsx
import { useTheme } from "../../context/Theme";

const orders = [
  { id: "ORD-1024", status: "Delivered", total: "$128.00", date: "2024-06-02" },
  { id: "ORD-1023", status: "Processing", total: "$89.50", date: "2024-05-30" },
  { id: "ORD-1022", status: "Cancelled", total: "$64.00", date: "2024-05-25" },
  { id: "ORD-1021", status: "Delivered", total: "$142.35", date: "2024-05-21" },
  { id: "ORD-1020", status: "Shipped", total: "$71.99", date: "2024-05-18" },
];

const statusColor = (status: string, isDark: boolean) => {
  const base = isDark ? "text-white" : "text-zinc-900";
  switch (status) {
    case "Delivered":
      return `text-green-500 ${base}`;
    case "Processing":
      return `text-yellow-500 ${base}`;
    case "Cancelled":
      return `text-red-500 ${base}`;
    case "Shipped":
      return `text-blue-500 ${base}`;
    default:
      return base;
  }
};

const RecentOrdersList = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const card = isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900";

  return (
    <div className={`rounded-xl p-6 shadow-md ${card}`}>
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
      <div className="divide-y divide-zinc-700/20">
        {orders.map((order) => (
          <div
            key={order.id}
            className="py-3 flex justify-between items-center text-sm"
          >
            <div>
              <p className="font-medium">{order.id}</p>
              <p className="text-zinc-400">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{order.total}</p>
              <p className={statusColor(order.status, isDark)}>
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrdersList;
