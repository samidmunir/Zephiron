// src/components/dashboard/RecentPayments.tsx
import { useTheme } from "../../context/Theme";

const payments = [
  { id: "PMT-001", amount: "$120.00", date: "2024-06-01", method: "Visa" },
  { id: "PMT-002", amount: "$65.50", date: "2024-05-28", method: "PayPal" },
  {
    id: "PMT-003",
    amount: "$212.99",
    date: "2024-05-22",
    method: "Mastercard",
  },
];

const RecentPayments = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const card = isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900";

  return (
    <div className={`rounded-xl p-6 shadow-md ${card}`}>
      <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
      <ul className="space-y-4">
        {payments.map((p) => (
          <li key={p.id} className="flex justify-between text-sm">
            <div>
              <p className="font-medium">{p.method}</p>
              <p className="text-zinc-400">{p.date}</p>
            </div>
            <p className="font-semibold">{p.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPayments;
