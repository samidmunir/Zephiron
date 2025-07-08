import { useTheme } from "../context/Theme";
import logo_light from "../assets/logo_light.png";
import logo_dark from "../assets/logo_dark.png";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import { BadgeDollarSign, Info, Menu, Users, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-[#19232a]" : "bg-[#f2f2f2]";
  const textPrimColor = isDark ? "text-gray-100" : "text-gray-800";
  const accentColor = isDark ? "text-[#46a8de]" : "text-[#0e4e87]";

  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const navBaseItems = [
    {
      id: 0,
      label: "Home",
      href: "/",
      icon: (
        <img
          src={isDark ? logo_dark : logo_light}
          className="w-8 h-8 rounded-full"
        />
      ),
    },
    {
      id: 1,
      label: "About",
      href: "/about",
      icon: <Info className="w-6 h-6" />,
    },
    {
      id: 2,
      label: "Pricing",
      href: "/pricing",
      icon: <BadgeDollarSign className="w-6 h-6" />,
    },
    {
      id: 3,
      label: "Testimonials",
      href: "/testimonials",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <nav
      className={`w-full px-6 py-4 sticky top-0 transition-all duration-1500 ${bgColor} z-10`}
    >
      <main className="flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center transition-all duration-1000 cursor-pointer"
        >
          <img
            src={isDark ? logo_dark : logo_light}
            className="w-[75px] rounded-full"
          />
          <h1
            className={`text-4xl font-semibold ${
              isDark ? "text-[#45a8dd]" : "text-[#0e4e87]"
            }`}
          >
            CareerNest
          </h1>
        </div>
        {/* NAV ITEMS (DESKTOP-NAV) */}
        <div className="hidden lg:flex items-center gap-4">
          {navBaseItems.map((navItem) => (
            <div
              onClick={() => navigate(navItem.href)}
              className={`flex items-center gap-2 font-semibold cursor-pointer ${
                location.pathname === navItem.href ? accentColor : textPrimColor
              }`}
            >
              <p>{navItem.icon}</p>
              <p>{navItem.label}</p>
            </div>
          ))}
        </div>
        {/* RIGHT SECTION */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`${accentColor}`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </main>
      {mobileOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden z-50">
          {navBaseItems.map((navItem) => (
            <div
              key={navItem.id}
              onClick={() => {
                setMobileOpen(false);
                navigate(navItem.href);
              }}
              className={`flex items-center gap-2 font-semibold transition-all duration-1000 ${
                location.pathname === navItem.href ? accentColor : textPrimColor
              }`}
            >
              <p>{navItem.icon}</p>
              <p>{navItem.label}</p>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
