import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="w-full h-[100vh] flex items-center justify-center text-rose-500 font-bold">
      <div>
        <h1 className="text-5xl">DASHBOARD PAGE</h1>
        <h2 className="text-3xl">
          Welcome {user?.firstName}, {user?.lastName[0]}
        </h2>
        <h3 className="text-2xl">ROLE: {user?.role}</h3>
        <p>EMail: {user?.email}</p>
        {user?.role === "admin" && (
          <div>
            <h1>Admin controls</h1>
            <button
              onClick={() => navigate("/admin/products")}
              className="border-2 border-rose-500 px-2 py-1"
            >
              ADMIN PRODUCTS
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
