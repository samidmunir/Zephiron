import { useAuth } from "../contexts/Auth";
import { useTheme } from "../contexts/Theme";
// import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { Activity, FlameKindling, Info, Users } from "lucide-react";
import Profile from "./ui/Profile";
import ThemeToggle from "./ui/ThemeToggle";
import Logout from "./ui/Logout";

const navBaseItems = [
  {
    id: 0,
    label: "Featured",
    href: "/featured",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: 1,
    label: "Community",
    href: "/community",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "About",
    href: "/about",
    icon: <Info className="w-6 h-6" />,
  },
];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accent = isDark ? "text-orange-400" : "text-blue-600";

  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className={`flex items-center justify-between border-b-3 px-4 py-2 ${
        isDark ? "bg-zinc-950 border-orange-400" : "bg-zinc-50 border-blue-600"
      } transition-all duration-3000`}
    >
      {/* LOGO */}
      <section
        onClick={() => navigate("/")}
        className={`flex items-center gap-1 text-2xl font-medium uppercase ${
          isDark ? "text-orange-400" : "text-blue-600"
        } cursor-default transition-all duration-1500`}
      >
        <FlameKindling className="w-8 h-8" />
        <h1>Strata</h1>
      </section>
      {/* NAV ITEMS - DESKTOP-NAV */}
      <section className={`flex items-center gap-4`}>
        {navBaseItems.map((navItem) => (
          <div
            key={navItem.id}
            onClick={() => navigate(navItem.href)}
            className={`flex items-center gap-2 ${
              isDark
                ? "text-zinc-500 hover:text-zinc-300"
                : "text-zinc-800 hover:text-zinc-950"
            } ${
              location.pathname === navItem.href && accent
            } cursor-default transition-all duration-1500`}
          >
            <p>{navItem.icon}</p>
            <p>{navItem.label}</p>
          </div>
        ))}
      </section>
      {/* RIGHT SECTION */}
      <section className={`flex items-center gap-2`}>
        {user ? (
          <div className={`flex items-center`}>
            <p
              onClick={() => navigate("/dashboard")}
              className={`font-semibold text-lg ${
                isDark ? "text-orange-400" : "text-blue-600"
              } cursor-default`}
            >
              {user.firstName} {user.lastName[0]}
            </p>
          </div>
        ) : (
          <div className={`flex items-center`}>
            <Profile type="icon" onClick={() => console.log("test")} />
          </div>
        )}
        <ThemeToggle />
        {user && <Logout type="icon" />}
      </section>
    </nav>
  );
};

export default Navbar;
