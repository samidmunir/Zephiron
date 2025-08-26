import { Atom, Bolt, Home, LogIn, Package } from "lucide-react";
import { useTheme } from "../contexts/Theme";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import { useAuth } from "../contexts/Auth";

const navBaseItems = [
  {
    id: 0,
    label: "Home",
    href: "/",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 1,
    label: "Catalog",
    href: "/catalog",
    icon: <Package className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "Featured",
    href: "/featured",
    icon: <Bolt className="w-6 h-6" />,
  },
];

const navAuthItems = [
  {
    id: 0,
    label: "Dashboard",
    href: "/dashboard",
    icon: <Atom className="w-6 h-6" />,
  },
];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-sky-500" : "text-blue-600";

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();
  const isAuthenticated = user === null ? false : true;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      className={`px-8 py-4 border-b-3 shadow-2xl ${
        isDark
          ? "bg-zinc-900 border-zinc-500 text-zinc-300"
          : "bg-zinc-100 border-zinc-700 text-zinc-800"
      } transition-all duration-1000`}
    >
      <main className="flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 1.0 }}
          onClick={() => navigate("/")}
        >
          <h1
            className={`text-3xl transition-all font-bold ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Marave
            <span
              className={`${
                isDark ? "text-sky-500" : "text-blue-600"
              } transition-all duration-3000`}
            >
              X
            </span>
          </h1>
        </motion.div>
        {/* NAV ITEMS (DESKTOP-NAV) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.0 }}
          className={`flex items-center gap-4 font-semibold transition-all duration-1000`}
        >
          {navBaseItems.map((navItem) => (
            <div
              key={navItem.id}
              className={`flex items-center gap-1 ${
                location.pathname === navItem.href && accentColor
              } transition-all duration-1000`}
            >
              <p>{navItem.icon}</p>
              <p>{navItem.label}</p>
            </div>
          ))}
          {isAuthenticated &&
            navAuthItems.map((navItem) => (
              <div
                key={navItem.id}
                onClick={() => navigate(navItem.href)}
                className={`${
                  location.pathname === "/dashboard" && accentColor
                } flex items-center gap-1 transition-all duration-1000 cursor-pointer`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            ))}
        </motion.div>
        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {!isAuthenticated && (
            <button
              className={`flex items-center gap-1 font-semibold ${
                location.pathname === "/auth" && accentColor
              } hover:${accentColor} transition-all duration-1000`}
              onClick={() => navigate("/auth")}
            >
              <span>Login</span>
              <LogIn className="w-6 h-6" />
            </button>
          )}
        </div>
      </main>
    </motion.nav>
  );
};

export default Navbar;
