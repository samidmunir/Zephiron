import { useTheme } from "../context/Theme";
import logo from "../assets/logo.jpg";
import {
  Atom,
  Home,
  Info,
  Menu,
  Package,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import Cart from "./ui/Cart";
import Logout from "./ui/Logout";
import { useAuth } from "../context/Auth";
import Profile from "./ui/Profile";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const navBaseItems = [
  {
    id: 0,
    label: "Home",
    href: "/",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 1,
    label: "Products",
    href: "/products",
    icon: <Package className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "Services",
    href: "/services",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    id: 3,
    label: "About",
    href: "/about",
    icon: <Info className="w-6 h-6" />,
  },
  {
    id: 4,
    label: "Testimonials",
    href: "/testimonials",
    icon: <Users className="w-6 h-6" />,
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
  const accentColor = isDark ? "text-rose-500" : "text-sky-500";
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();

  const isAuthenticated = user === null ? false : true;

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`w-full px-8 py-4 sticky top-0 z-50 backdrop-blur-lg transition-all duration-3000 ${
        isDark ? "bg-zinc-950/90 text-zinc-50" : "bg-zinc-50/90 text-zinc-950"
      }`}
    >
      <main className="flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className={`w-[75px] rounded-full border-3 transition-all duration-3000 ${
              isDark ? "border-rose-500" : "border-sky-500"
            }`}
          />
          <h1 className="text-4xl font-bold uppercase">
            Top-Tier{" "}
            <span
              className={`transition-all duration-3000 ${
                isDark ? "text-rose-500" : "text-sky-500"
              }`}
            >
              Customs
            </span>
          </h1>
        </div>
        {/* NAV ITEMS (DESKTOP-NAV) */}
        <div className="hidden md:flex items-center gap-4">
          {navBaseItems.map((navItem) => (
            <div
              onClick={() => navigate(navItem.href)}
              className={`${
                location.pathname === navItem.href && accentColor
              } flex items-center gap-2 font-semibold hover:${accentColor} transition-all duration-500 cursor-pointer`}
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
                className={`flex items-center gap-2 hover:${accentColor} transition-all duration-500 cursor-pointer`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            ))}
        </div>
        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {!isAuthenticated && <Profile type="icon" />}
          {isAuthenticated && (
            <div className="flex items-center gap-2">
              <Cart />
              <p className="font-semibold">
                {user?.firstName} {user?.lastName[0]}.
              </p>
              <Logout type="icon" />
            </div>
          )}
        </div>
        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMobileOpen((prev) => !prev)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </main>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          {[...navBaseItems, ...(isAuthenticated ? navAuthItems : [])].map(
            (navItem) => (
              <div
                key={navItem.id}
                onClick={() => {
                  setMobileOpen(false);
                  navigate(navItem.href);
                }}
                className={`flex items-center gap-2 font-semibold ${
                  location.pathname === navItem.href && accentColor
                } ${
                  isDark ? "hover:text-rose-500" : "hover:text-sky-500"
                } cursor-pointer`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            )
          )}
          {!isAuthenticated && <Profile type="label" />}
          {isAuthenticated && (
            <div className="flex items-center gap-2">
              <Cart />
              <p className="font-semibold">Sami M.</p>
              <Logout type="label" />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
