// src/components/dashboard/OrdersChart.tsx
import { useTheme } from "../../context/Theme";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", orders: 2 },
  { month: "Feb", orders: 4 },
  { month: "Mar", orders: 6 },
  { month: "Apr", orders: 3 },
  { month: "May", orders: 5 },
  { month: "Jun", orders: 8 },
];

const OrdersChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-xl p-6 shadow-md ${
        isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      }`}
    >
      <h3 className="text-lg font-semibold mb-4">Orders Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDark ? "#333" : "#ccc"}
          />
          <XAxis dataKey="month" stroke={isDark ? "#ccc" : "#333"} />
          <YAxis stroke={isDark ? "#ccc" : "#333"} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;
