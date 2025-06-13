// src/components/dashboard/UserStatsCard.tsx
import { useTheme } from "../../context/Theme";
import { ShoppingBag, DollarSign, PackageCheck, Star } from "lucide-react";

const stats = [
  {
    label: "Orders",
    value: 18,
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    label: "Spent",
    value: "$1,240",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    label: "Items Purchased",
    value: 35,
    icon: <PackageCheck className="w-6 h-6" />,
  },
  {
    label: "Avg Rating",
    value: "4.8 ★",
    icon: <Star className="w-6 h-6" />,
  },
];

const UserStatsCard = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-zinc-900" : "bg-white";
  const text = isDark ? "text-white" : "text-zinc-900";

  return (
    <>
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`rounded-xl shadow-md p-6 flex items-center gap-4 ${cardBg} ${text}`}
        >
          <div className="p-3 bg-blue-600 text-white rounded-full">
            {stat.icon}
          </div>
          <div>
            <p className="text-sm opacity-70">{stat.label}</p>
            <h3 className="text-xl font-bold">{stat.value}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserStatsCard;
