import { useTheme } from "../contexts/Theme";
import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { BookmarkPlus, LogOut, UserPen } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApplicationCard from "../components/ApplicationCard";

type Application = {
  _id: string;
  title: string;
  company: string;
  position: string;
  category: string;
  workType: string;
  status: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  salary: {
    amount: number;
    period: string;
  };
  createdAt: string;
  updatedAt: string;
};

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

  const [applications, setApplications] = useState<Application[]>([]);

  const fetchUserApplications = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/users/${user?._id}/applications`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();

      if (data.sucess === false) {
        toast.error("Failed to fetch.");
        throw new Error(data.error);
      } else {
        setApplications(data.applications);
        toast.success("User applications fetched!");
      }
    } catch (error) {
      console.log(`Failed to fetch user applications: ${error}`);
    }
  };

  useEffect(() => {
    fetchUserApplications();
  }, []);

  return (
    <main
      className={`px-8 py-4 min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      {/* WELCOME */}
      <header
        className={`shadow-2xl rounded-md mb-4 p-8 space-y-4 ${
          isDark ? "bg-zinc-950" : "bg-zinc-50"
        } transition-all duration-1500`}
      >
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
            onClick={() => navigate("/profile/edit")}
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
      <section
        className={`px-4 py-4 mt-4 rounded-md ${
          isDark ? "bg-zinc-950" : ""
        } transition-all duration-1500`}
      >
        <h1
          className={`text-3xl font-medium my-4 ${
            isDark ? "text-zinc-700" : ""
          } transition-all duration-1500`}
        >
          Your Recently Tracked Applications
        </h1>
        {applications.length === 0 ? (
          <h2>
            We couldn't find any live applications pertaining to your account.
            Click TRACK above to get started!
          </h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {applications.map((app, i) => (
              <ApplicationCard
                key={i}
                id={app._id}
                title={app.title}
                company={app.company}
                position={app.position}
                category={app.category}
                workType={app.workType}
                status={app.status}
                location={app.location}
                salary={app.salary}
                createdAt={app.createdAt}
                updatedAt={app.updatedAt}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
