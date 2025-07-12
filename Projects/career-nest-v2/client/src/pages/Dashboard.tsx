import { useAuth } from "../contexts/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const overview = [
  { label: "Applications", value: 38 },
  { label: "Interviews", value: 5 },
  { label: "Offers", value: 2 },
  { label: "Rejections", value: 9 },
];

const chartData = [
  { week: "Week 1", applications: 4 },
  { week: "Week 2", applications: 7 },
  { week: "Week 3", applications: 3 },
  { week: "Week 4", applications: 10 },
  { week: "Week 5", applications: 8 },
];

const recent = [
  "You applied to Software Engineer at Stripe",
  "Interview scheduled with Google",
  "You received a rejection from Amazon",
  "Offer received from Shopify 🎉",
];

const Dashboard = () => {
  const { user } = useAuth();
  const name = user?.email.split("@")[0];

  return (
    <div className="p-6 space-y-12">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back, {name} 👋</h1>
        <p className="text-muted">Here's how your job search is going.</p>
        <div className="mt-4">
          <Link
            to="/applications"
            className="border-2 rounded-md px-2 py-1 hover:bg-gray-800 hover:border-gray-800 hover:text-gray-200 transition-all duration-1000"
          >
            Job Applications
          </Link>
        </div>
      </motion.div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overview.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {card.value}
            </p>
            <p className="text-muted mt-1">{card.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Applications Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="applications" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-muted text-sm">
          {recent.map((item, i) => (
            <li key={i}>📌 {item}</li>
          ))}
        </ul>
      </div>

      {/* Motivational Quote */}
      <div className="text-center mt-10 text-muted italic">
        “Success is where preparation and opportunity meet.” – Bobby Unser
      </div>
    </div>
  );
};

export default Dashboard;
