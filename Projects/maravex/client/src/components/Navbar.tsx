import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/Theme";
import logo from "../assets/logo.png";
import { Activity, Atom, Menu, User, Vault, X } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import Profile from "./ui/Profile";
import Cart from "./ui/Cart";
import Logout from "./ui/Logout";

const navBaseItems = [
  {
    id: 0,
    label: "Home",
    href: "/",
    icon: <Atom className="w-6 h-6" />,
  },
  {
    id: 1,
    label: "Catalog",
    href: "/catalog",
    icon: <Vault className="w-6 h-6" />,
  },
];

const navUserItems = [
  {
    id: 0,
    label: "Orders",
    href: "/orders",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: 1,
    label: "Account",
    href: "account",
    icon: <User className="w-6 h-6" />,
  },
];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-indigo-500" : "text-blue-600";

  const isAuthenticated = true;

  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`w-full px-8 py-4 sticky top-0 z-10 backdrop-blur-xs transition-all duration-1000 ${
        isDark ? "bg-zinc-950/95 text-zinc-50" : "bg-zinc-50/95 text-zinc-950"
      }`}
    >
      <main className="flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="MaraveX Logo"
            className={`w-[50px] sm:w-[60px] rounded-full border-3 transition-all duration-1000 ${
              isDark ? "border-indigo-500" : "border-blue-600"
            }`}
          />
          <h1 className="text-4xl font-semibold">
            Marave
            <span className={`${isDark ? "text-indigo-500" : "text-blue-600"}`}>
              X
            </span>
          </h1>
        </div>
        {/* NAV ITEMS (DESKTOP-NAV) */}
        <div className="hidden lg:flex items-center gap-4">
          {navBaseItems.map((navItem) => (
            <div
              key={navItem.id}
              onClick={() => navigate(navItem.href)}
              className={`flex items-center gap-2 font-semibold uppercase hover:${accentColor} transition-all duration-1000 cursor-pointer ${
                location.pathname === navItem.href && accentColor
              }`}
            >
              <p>{navItem.icon}</p>
              <p>{navItem.label}</p>
            </div>
          ))}
          {isAuthenticated &&
            navUserItems.map((navItem) => (
              <div
                key={navItem.id}
                onClick={() => navigate(navItem.href)}
                className={`flex items-center gap-2 font-semibold uppercase hover:${accentColor} transition-all duration-1000 cursor-pointer ${
                  location.pathname === navItem.href && accentColor
                }`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            ))}
        </div>
        {/* RIGHT SECTION */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          {!isAuthenticated && (
            <Profile onClick={() => setMobileOpen(false)} type="icon" />
          )}
          {isAuthenticated && (
            <div className="flex items-center gap-2">
              <Cart type="icon" />
              <p className="font-semibold">Sami M.</p>
              <Logout type="icon" />
            </div>
          )}
        </div>
        {/* MOBILE TOGGLE */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMobileOpen((prev) => !prev)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </main>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          {[...navBaseItems, ...(isAuthenticated ? navUserItems : [])].map(
            (navItem) => (
              <div
                key={navItem.id}
                onClick={() => {
                  setMobileOpen(false);
                  navigate(navItem.href);
                }}
                className={`flex items-center gap-2 font-semibold transition-all duration-1000 ${
                  location.pathname === navItem.href && accentColor
                } cursor-pointer hover:${accentColor}`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            )
          )}
          {!isAuthenticated && (
            <Profile onClick={() => setMobileOpen(false)} type="label" />
          )}
          {isAuthenticated && (
            <div className="flex-col">
              <Cart type="label" />
              <p className="font-semibold my-2">Sami M.</p>
              <Logout type="label" />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
