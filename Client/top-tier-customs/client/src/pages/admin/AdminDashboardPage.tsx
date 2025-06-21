// import { useAuth } from "../context/Auth";
// import { useNavigate } from "react-router-dom";

// const DashboardPage = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <main className="w-full h-[100vh] flex items-center justify-center text-rose-500 font-bold">
//       <div>
//         <h1 className="text-5xl">DASHBOARD PAGE</h1>
//         <h2 className="text-3xl">
//           Welcome {user?.firstName}, {user?.lastName[0]}
//         </h2>
//         <h3 className="text-2xl">ROLE: {user?.role}</h3>
//         <p>EMail: {user?.email}</p>
//         {user?.role === "admin" && (
//           <div>
//             <h1>Admin controls</h1>
//             <button
//               onClick={() => navigate("/admin/products")}
//               className="border-2 border-rose-500 px-2 py-1"
//             >
//               ADMIN PRODUCTS
//             </button>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default DashboardPage;

// import { useTheme } from "../context/Theme";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import DashboardCard from "../components/DashboardCard";
// import DashboardTable from "../components/DashboardTable";
// import ChartCard from "../components/ChartCard";

// // Dummy Data
// const fakeServices = [
//   { name: "Engine Tuning", price: "￡120" },
//   { name: "Paint Correction", price: "￡250" },
// ];
// const fakeOrders = [
//   { id: "ORD001", customer: "Ali M.", total: "￡480", status: "Pending" },
// ];
// const fakeBookings = [
//   {
//     id: "BK001",
//     service: "Detailing",
//     date: "2025-07-01",
//     status: "Confirmed",
//   },
// ];
// const fakeUsers = [
//   { name: "Admin User", email: "admin@ttcustoms.com", role: "admin" },
// ];

// // Example data
// const revenueTrend = [
//   { name: "Jan", value: 2200 },
//   { name: "Feb", value: 3000 },
//   { name: "Mar", value: 4500 },
//   { name: "Apr", value: 6200 },
//   { name: "May", value: 4800 },
//   { name: "Jun", value: 7100 },
// ];

// const productGrowth = [
//   { name: "Jan", value: 20 },
//   { name: "Feb", value: 25 },
//   { name: "Mar", value: 28 },
//   { name: "Apr", value: 30 },
//   { name: "May", value: 35 },
//   { name: "Jun", value: 42 },
// ];

// const AdminDashboardPage = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/products");
//       const data = await res.json();
//       setProducts(data.products || []);
//     } catch (error) {
//       console.error("Failed to fetch products.");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <main
//       className={`min-h-screen px-6 py-10 transition ${
//         isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
//       }`}
//     >
//       {/* Header */}
//       <section className="mb-8">
//         <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//         <p className="text-sm text-zinc-500 dark:text-zinc-400">
//           Welcome back, Admin!
//         </p>
//       </section>

//       {/* Quick Actions */}
//       <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
//         {[
//           {
//             label: "Manage Products",
//             onClick: () => navigate("/admin/products"),
//           },
//           {
//             label: "Manage Services",
//             onClick: () => alert("Services CRUD coming soon!"),
//           },
//           {
//             label: "Manage Orders",
//             onClick: () => alert("Orders CRUD coming soon!"),
//           },
//           {
//             label: "Manage Bookings",
//             onClick: () => alert("Bookings CRUD coming soon!"),
//           },
//           {
//             label: "Manage Users",
//             onClick: () => alert("Users CRUD coming soon!"),
//           },
//         ].map((btn, idx) => (
//           <button
//             key={idx}
//             onClick={btn.onClick}
//             className="p-4 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold shadow transition"
//           >
//             {btn.label}
//           </button>
//         ))}
//       </section>

//       {/* Summary Cards */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
//         <DashboardCard title="Live Products" count={products.length} />
//         <DashboardCard title="Services" count={fakeServices.length} />
//         <DashboardCard title="Orders" count={fakeOrders.length} />
//         <DashboardCard title="Bookings" count={fakeBookings.length} />
//       </section>

//       <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
//         <ChartCard title="Revenue Over Time" data={revenueTrend} />
//         <ChartCard
//           title="Product Growth"
//           data={productGrowth}
//           color="#f43f5e"
//         />
//       </section>

//       {/* Admin Profile */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-2">Admin Profile</h2>
//         <div
//           className={`p-4 rounded-lg border ${
//             isDark ? "border-zinc-700" : "border-zinc-300"
//           }`}
//         >
//           <p>
//             <strong>Name:</strong> Admin User
//           </p>
//           <p>
//             <strong>Email:</strong> admin@ttcustoms.com
//           </p>
//           <p>
//             <strong>Role:</strong> Administrator
//           </p>
//         </div>
//       </section>

//       {/* Live Data Grids */}
//       <DashboardTable
//         title="Live Products"
//         columns={["Title", "Price", "Brand"]}
//         data={products.map((p) => [p.title, `￡${p.price}`, p.brand])}
//       />
//       <DashboardTable
//         title="Services Offered"
//         columns={["Name", "Price"]}
//         data={fakeServices.map((s) => [s.name, s.price])}
//       />
//       <DashboardTable
//         title="Recent Orders"
//         columns={["Order ID", "Customer", "Total", "Status"]}
//         data={fakeOrders.map((o) => [o.id, o.customer, o.total, o.status])}
//       />
//       <DashboardTable
//         title="Recent Bookings"
//         columns={["Booking ID", "Service", "Date", "Status"]}
//         data={fakeBookings.map((b) => [b.id, b.service, b.date, b.status])}
//       />
//       <DashboardTable
//         title="Registered Users"
//         columns={["Name", "Email", "Role"]}
//         data={fakeUsers.map((u) => [u.name, u.email, u.role])}
//       />
//     </main>
//   );
// };

// export default AdminDashboardPage;

import { useTheme } from "../../context/Theme";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardCard from "../../components/DashboardCard";
import DashboardTable from "../../components/DashboardTable";
import ChartCard from "../../components/ChartCard";

// Dummy Data
const fakeServices = [
  { name: "Engine Tuning", price: "￡120" },
  { name: "Paint Correction", price: "￡250" },
];
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

const AdminDashboardPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Failed to fetch products.");
    }
  };

  useEffect(() => {
    fetchProducts();
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
          Welcome back, Admin!
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
            onClick: () => alert("Services CRUD coming soon!"),
          },
          {
            label: "Manage Orders",
            onClick: () => alert("Orders CRUD coming soon!"),
          },
          {
            label: "Manage Bookings",
            onClick: () => alert("Bookings CRUD coming soon!"),
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
        <DashboardCard title="Services" count={fakeServices.length} />
        <DashboardCard title="Orders" count={fakeOrders.length} />
        <DashboardCard title="Bookings" count={fakeBookings.length} />
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
        <ChartCard title="Revenue Over Time" data={revenueTrend} />
        <ChartCard
          title="Product Growth"
          data={productGrowth}
          color="#f43f5e"
        />
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
            <strong>Name:</strong> Admin User
          </p>
          <p>
            <strong>Email:</strong> admin@ttcustoms.com
          </p>
          <p>
            <strong>Role:</strong> Administrator
          </p>
        </div>
      </section>

      {/* Tables with Sorting & Filtering */}
      <DashboardTable
        title="Live Products"
        columns={["Title", "Price", "Brand"]}
        data={products.map((p) => [p.title, `￡${p.price}`, p.brand])}
      />
      <DashboardTable
        title="Services Offered"
        columns={["Name", "Price"]}
        data={fakeServices.map((s) => [s.name, s.price])}
      />
      <DashboardTable
        title="Recent Orders"
        columns={["Order ID", "Customer", "Total", "Status"]}
        data={fakeOrders.map((o) => [o.id, o.customer, o.total, o.status])}
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
