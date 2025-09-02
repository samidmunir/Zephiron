import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/Theme";
import ThemeToggle from "./ui/ThemeToggle";
import { useAuth } from "../contexts/Auth";
import ProfileBtn from "./ui/ProfileBtn";
import { Activity, Users, LogOut } from "lucide-react";
import Logo from "./ui/Logo";

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <nav
      className={`px-8 py-4 border-b-3 ${
        isDark ? "bg-zinc-950 border-orange-400" : "bg-zinc-50 border-blue-600"
      } transition-all duration-3000`}
    >
      <main className={`flex items-center justify-between`}>
        <Logo />
        {/* NAV LINKS */}
        <div className="flex items-center gap-4">
          <Link
            to="/trending"
            className={`flex items-center gap-1 font-semibold hover:scale-110 ${
              isDark ? "text-zinc-700 hover:text-zinc-500" : "text-zinc-950"
            } transition-all duration-1500`}
          >
            <span>Trending</span>
            <Activity className={`w-6 h-6`} />
          </Link>
          <Link
            to="/community"
            className={`flex items-center gap-1 font-semibold hover:scale-110 ${
              isDark ? "text-zinc-700 hover:text-zinc-500" : "text-zinc-950"
            } transition-all duration-1500`}
          >
            <span>Community</span>
            <Users className={`w-6 h-6`} />
          </Link>
        </div>
        {/* RIGHT SECTION */}
        <div className={`flex items-center gap-2`}>
          {user ? (
            <div className="flex items-center gap-4">
              <p
                onClick={() => navigate("/dashboard")}
                className={`font-semibold ${
                  isDark ? "text-sky-500" : "text-blue-600"
                } transition-all duration-1500`}
              >
                {user.firstName} {user.lastName[0]}.
              </p>
              <ThemeToggle />
              <LogOut
                onClick={logout}
                className={`w-6 h-6 ${
                  isDark ? "text-rose-500" : "text-red-500"
                } transition-all duration-1500`}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <ProfileBtn />
            </div>
          )}
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
