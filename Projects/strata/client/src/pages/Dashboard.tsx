import { useEffect, useState } from "react";
import { useTheme } from "../contexts/Theme";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

interface Application {
  _id: String;
  userID: String;
  reqID: String;
  title: String;
  company: String;
  workType: String;
  location: {
    city: String;
    state: String;
    country: String;
  };
  salary: {
    amount: String;
    period: String;
  };
  category: String;
  position: String;
  status: String;
  applicationURL: String;
  description: String;
  notes: String;
  skills: [String];
}

const Dashboard = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user } = useAuth();

  const navigate = useNavigate();

  const [applications, setApplications] = useState<[Application] | []>([]);

  const fetchUserApplications = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/applications/user/${user?._id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();

      if (data.success === false) {
        alert(data.message);
      } else {
        setApplications(data.applications);
      }
    } catch (error) {
      alert("(2) Failed to fetch user applications.");
    }
  };

  useEffect(() => {
    fetchUserApplications();
  }, []);

  return (
    <main
      className={`min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      <section>
        <h1>Welcome to Strata!</h1>
        <h2>USER DASHBOARD</h2>
      </section>
      <section>
        <button
          onClick={() => navigate("/applications-store/track")}
          className={`text-xl font-semibold uppercase px-2 py-1 border-2 ${
            isDark
              ? "border-orange-400 text-orange-400"
              : "border-blue-600 text-blue-600"
          } transition-all duration-1500`}
        >
          Track
        </button>
      </section>
      <section>
        {applications.length === 0 ? (
          <div>
            <p>You do not have any applications. Click Track to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2">
            {applications.map((app, i) => (
              <div
                key={i}
                className={`border-2 w-xs p-4 flex-col align-middle items-center justify-center rounded-md ${
                  isDark ? "border-orange-400" : ""
                }`}
              >
                <h1
                  className={`${isDark ? "text-orange-400" : "text-blue-600"}`}
                >
                  {app.title} | {app.company} | {app.category}
                </h1>
                <h2>
                  {app.position} | {app.location.city}, {app.location.country}
                </h2>
                <h3
                  className={`text-center uppercase rounded-md ${
                    app.status === "wishlist" && "bg-amber-500"
                  }`}
                >
                  {app.status}
                </h3>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
