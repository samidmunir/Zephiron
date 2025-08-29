import { useTheme } from "../contexts/Theme";
import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { BookmarkPlus, LogOut, UserPen } from "lucide-react";

const overview = [
  { id: 0, label: "Applications", value: 38 },
  { id: 1, label: "Interviews", value: 5 },
  { id: 2, label: "Offers", value: 2 },
  { id: 3, label: "Rejections", value: 9 },
];

const Dashboard = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <main
      className={`px-8 py-4 min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      {/* WELCOME */}
      <header className="shadow-2xl rounded-md mb-4 p-4 space-y-4">
        <div className="space-y-2">
          <h1
            className={`text-3xl ${
              isDark ? "text-sky-500" : "text-blue-600"
            } transition-all duration-1500`}
          >
            Welcome back, {user?.firstName} {user?.lastName} 👋
          </h1>
          <p
            className={`${
              isDark ? "text-zinc-500" : "text-zinc-800"
            } transition-all duration-1500`}
          >
            Here's how your job search is going.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* EDIT PROFILE BTN */}
          <button
            onClick={() => navigate("/application-store/track")}
            className={`flex items-center text-lg font-semibold gap-1 border-2 rounded-md px-2 py-1 outline-none ${
              isDark
                ? "text-sky-500 hover:bg-sky-500 hover:text-zinc-900"
                : "text-blue-600 hover:bg-blue-600 hover:text-zinc-100"
            } transition-all duration-1500`}
          >
            Profile <UserPen />
          </button>
          {/* TRACK BTN */}
          <button
            onClick={() => navigate("/application-store/track")}
            className={`flex items-center text-lg font-semibold gap-1 border-2 rounded-md px-2 py-1 outline-none ${
              isDark
                ? "text-orange-400 hover:bg-orange-400 hover:text-zinc-900"
                : "text-zinc-950 hover:bg-zinc-950 hover:text-zinc-100"
            } transition-all duration-1500`}
          >
            Track <BookmarkPlus />
          </button>
          {/* LOGOUT BTN */}
          <button
            onClick={logout}
            className={`flex items-center text-lg font-semibold gap-1 border-2 rounded-md px-2 py-1 outline-none ${
              isDark
                ? "text-rose-500 hover:bg-rose-500 hover:text-zinc-900"
                : "text-red-500 hover:bg-red-500 hover:text-zinc-100"
            } transition-all duration-1500`}
          >
            Logout <LogOut />
          </button>
        </div>
      </header>
      {/* OVERVIEW CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overview.map((card) => (
          <div
            key={card.id}
            className={`rounded-md p-4 text-center shadow-2xl ${
              isDark ? "bg-zinc-950" : "bg-zinc-50"
            } transition-all duration-1500`}
          >
            <p
              className={`font-bold text-4xl ${
                isDark ? "text-zinc-500" : "text-zinc-700"
              } transition-all duration-1500`}
            >
              {card.value}
            </p>
            <p
              className={`font-semibold ${
                isDark ? "text-orange-400" : "text-blue-600"
              } transition-all duration-1500`}
            >
              {card.label}
            </p>
          </div>
        ))}
      </section>
      {/* CHARTS */}
      <section></section>
      {/* RECENT ACTIVITY */}
      <section></section>
      {/* APPLICATIONS GRID */}
      <section></section>
    </main>
  );
};

export default Dashboard;
