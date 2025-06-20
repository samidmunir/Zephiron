import { useAuth } from "../context/Auth";

const DashboardPage = () => {
  const { user } = useAuth();
  return (
    <main className="w-full h-[100vh] flex items-center justify-center text-rose-500 font-bold">
      <div>
        <h1 className="text-5xl">DASHBOARD PAGE</h1>
        <h2 className="text-3xl">
          Welcome {user?.firstName}, {user?.lastName[0]}
        </h2>
        <h3 className="text-2xl">ROLE: {user?.role}</h3>
        <p>EMail: {user?.email}</p>
      </div>
    </main>
  );
};

export default DashboardPage;
