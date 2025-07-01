import { useTheme } from "../../context/Theme";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardCard from "../../components/DashboardCard";
import DashboardTable from "../../components/DashboardTable";
import ChartCard from "../../components/ChartCard";
import {
  getGrowthData,
  getInventoryValueData,
  getServiceRevenueData,
  getCumulativeGrowthData,
} from "../../utils/metrics";

// Dummy Data
const fakeOrders = [
  { id: "ORD001", customer: "Ali M.", total: "￡480", status: "Pending" },
  { id: "ORD002", customer: "Sana K.", total: "￡320", status: "Delivered" },
];
const fakeBookings = [
  {
    id: "BK001",
    service: "Detailing",
    date: "2025-07-01",
    status: "Confirmed",
  },
];
const fakeUsers = [
  { name: "Admin User", email: "admin@ttcustoms.com", role: "admin" },
  { name: "User One", email: "user1@example.com", role: "customer" },
];

// Chart Data
const revenueTrend = [
  { name: "Jan", value: 2200 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 4500 },
  { name: "Apr", value: 6200 },
  { name: "May", value: 4800 },
  { name: "Jun", value: 7100 },
];

const productGrowth = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 28 },
  { name: "Apr", value: 30 },
  { name: "May", value: 35 },
  { name: "Jun", value: 42 },
];

interface Product {
  _id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  discount: number;
  quantity: number;
  installable: boolean;
  category: string;
  type: string;
  brand: string;
  fits: [string];
  createdAt: string;
  updatedAt: string;
}

interface Service {
  _id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  deposit: number;
  dropOff: boolean;
  available: boolean;
  duration: {
    min: number;
    max: number;
  };
  category: string;
  type: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

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

const AdminDashboardPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user } = useAuth();

  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const [span, setSpan] = useState<"day" | "week" | "month">("day");

  const productGrowthData = getGrowthData(products, span);
  const inventoryValueData = getInventoryValueData(products, span);
  const serviceRevenueData = getServiceRevenueData(services, span);
  const cummulativeProductGrowthData = getCumulativeGrowthData(products, span);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Failed to fetch products.");
    }
  };

  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/services");
      const data = await res.json();
      setServices(data.services || []);
    } catch (error) {
      console.error("Failed to fetch products.");
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/orders");
      const data = await res.json();
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchServices();
    fetchOrders();
  }, []);

  return (
    <main
      className={`min-h-screen px-6 py-10 transition ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Welcome back, {user?.firstName} {user?.lastName}!
        </p>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
        {[
          {
            label: "Manage Products",
            onClick: () => navigate("/admin/products"),
          },
          {
            label: "Manage Services",
            onClick: () => navigate("/admin/services"),
          },
          {
            label: "Manage Orders",
            onClick: () => navigate("/admin/orders"),
          },
          {
            label: "Manage Bookings",
            onClick: () => navigate("/admin/bookings"),
          },
          {
            label: "Manage Users",
            onClick: () => alert("Users CRUD coming soon!"),
          },
        ].map((btn, idx) => (
          <button
            key={idx}
            onClick={btn.onClick}
            className="p-4 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold shadow transition"
          >
            {btn.label}
          </button>
        ))}
      </section>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <DashboardCard title="Live Products" count={products.length} />
        <DashboardCard title="Services" count={services.length} />
        <DashboardCard title="Orders" count={orders.length} />
        <DashboardCard title="Bookings" count={fakeBookings.length} />
      </section>

      {/* Timespan Selector */}
      <section className="mb-6 flex items-center justify-end">
        <label className="mr-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          Time Span:
        </label>
        <select
          value={span}
          onChange={(e) => setSpan(e.target.value as "day" | "week" | "month")}
          className="px-3 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="day">Daily</option>
          <option value="week">Weekly</option>
          <option value="month">Monthly</option>
        </select>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
        <ChartCard title="Product Growth" data={productGrowthData} />
        <ChartCard title="Inventory Value" data={inventoryValueData} />
        <ChartCard
          title="Service Revenue Potential"
          data={serviceRevenueData}
        />
        <ChartCard
          title="Cummulative Product Count"
          data={cummulativeProductGrowthData}
        />
        {/* <ChartCard title="Revenue Over Time" data={revenueTrend} />
        <ChartCard
          title="Product Growth"
          data={productGrowth}
          color="#f43f5e"
        /> */}
      </section>

      {/* Admin Profile */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Admin Profile</h2>
        <div
          className={`p-4 rounded-lg border ${
            isDark ? "border-zinc-700" : "border-zinc-300"
          }`}
        >
          <p>
            <strong>Name:</strong> {user?.firstName} {user?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Role:</strong> Administrator
          </p>
        </div>
      </section>

      {/* Tables with Sorting & Filtering */}
      <DashboardTable
        title="Live Products"
        columns={["Title", "Category", "Type", "Price", "Brand"]}
        data={products.map((p) => [
          p.title,
          p.category,
          p.type,
          `￡${p.price}`,
          p.brand,
        ])}
      />
      <DashboardTable
        title="Services Offered"
        columns={[
          "Name",
          "Category",
          "Type",
          "Max-Duration",
          "Price",
          "Drop-Off",
        ]}
        data={services.map((s) => [
          s.title,
          s.category,
          s.type,
          `${s.duration.max} hrs`,
          s.price,
          `${s.dropOff ? "YES" : "NO"}`,
        ])}
      />
      <DashboardTable
        title="Recent Orders"
        columns={["Order ID", "Customer", "Total", "Status"]}
        data={orders.map((o) => [o._id, o.customerId, o.totalPrice, o.status])}
      />
      <DashboardTable
        title="Recent Bookings"
        columns={["Booking ID", "Service", "Date", "Status"]}
        data={fakeBookings.map((b) => [b.id, b.service, b.date, b.status])}
      />
      <DashboardTable
        title="Registered Users"
        columns={["Name", "Email", "Role"]}
        data={fakeUsers.map((u) => [u.name, u.email, u.role])}
      />
    </main>
  );
};

export default AdminDashboardPage;
