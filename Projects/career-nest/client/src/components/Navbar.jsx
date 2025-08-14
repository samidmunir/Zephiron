import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ui/ThemeToggle";
import { useUserStore } from "../stores/UserStore";
import Logout from "./ui/Logout";

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user } = useUserStore();

  return (
    <nav
      className={`flex items-center justify-between px-8 py-4 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div>
        <Link to="/" className="text-3xl font-bold text-blue-500">
          Career Nest
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <p
              className={`text-xl font-medium ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {user.name}
            </p>
            <Logout />
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className={`text-lg font-semibold border-2 rounded-md px-2 ${
                isDark ? "border-gray-100" : "border-gray-900"
              } hover:scale-105`}
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className={`text-lg font-semibold border-2 rounded-md px-2 ${
                isDark ? "border-gray-100" : "border-gray-900"
              } hover:scale-105`}
            >
              Login
            </Link>
          </>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
