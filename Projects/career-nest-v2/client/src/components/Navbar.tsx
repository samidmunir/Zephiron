import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Users } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const avatar =
    user?.avatar ||
    `https://api.dicebear.com/7.x/initials/svg?seed=${user?.email}`;

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800">
      <Link
        to="/"
        className="text-xl font-bold text-blue-600 dark:text-blue-400"
      >
        CareerNest
      </Link>
      <div>
        <Link
          to="/community"
          className="flex items-center gap-2 text-lg hover:underline"
        >
          <Users className="w-6 h-6" />
          Community
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {user ? (
          <div className="flex items-center">
            <button onClick={toggleTheme} className="px-3 py-1 rounded">
              {isDark ? (
                <Sun className="w-6 h-6 text-amber-500" />
              ) : (
                <Moon className="w-6 h-6 text-blue-600" />
              )}
            </button>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2"
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
                />
                {/* <span className="text-sm font-medium text-gray-800 dark:text-white">
                {user.firstName}
              </span> */}
                <svg
                  className="w-4 h-4 fill-current text-gray-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 7l4.5 4.5L14.5 7z" />
                </svg>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/account/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Edit Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <button onClick={toggleTheme} className="px-3 py-1 rounded">
              {isDark ? (
                <Sun className="w-6 h-6 text-amber-500" />
              ) : (
                <Moon className="w-6 h-6 text-blue-600" />
              )}
            </button>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
