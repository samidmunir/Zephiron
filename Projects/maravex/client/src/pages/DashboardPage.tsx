// src/pages/DashboardPage.tsx
import UserStatsCard from "../components/dashboard/UserStatsCard";
import OrdersChart from "../components/dashboard/OrderChart";
import RecentPayments from "../components/dashboard/RecentPayments";
import RecentOrdersList from "../components/dashboard/RecentOrdersList";
import ProfileSummary from "../components/dashboard/ProfileSummary";
import { useTheme } from "../context/Theme";

const DashboardPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900";

  return (
    <section className={`w-full min-h-screen px-6 md:px-16 py-12 ${bg}`}>
      <h1 className="text-3xl font-bold mb-10">Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <UserStatsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          <OrdersChart />
        </div>
        <RecentPayments />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <RecentOrdersList />
        <ProfileSummary />
      </div>
    </section>
  );
};

export default DashboardPage;
