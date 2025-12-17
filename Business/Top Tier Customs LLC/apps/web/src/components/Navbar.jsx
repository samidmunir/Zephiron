import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useTheme } from "../contexts/Theme";
import Cart from "./ui/Cart";
import Theme from "./ui/Theme";
import Login from "./ui/Login";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navBaseItems = [];

const navAuthItems = [];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const isAuthenticated = false;

  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`w-full px-4 py-4 sticky top-0 z-50 backdrop-blur-xs transition-all duration-1000 ${
        isDark ? "bg-zinc-950/90 text-zinc-50" : "bg-zinc-50/90 text-zinc-950"
      }`}
    >
      <main className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 transition-all duration-1000"
        >
          <img
            src={logo}
            alt="Logo"
            className={`w-[50px] rounded-full border-3 transition-all duration-1000 ${
              isDark ? "border-rose-500" : "border-sky-500"
            }`}
          />
          <h1
            className={`text-xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-r transition-all duration-1000 ${
              isDark ? "from-rose-500 to-zinc-50" : "from-sky-500 to-zinc-950"
            }`}
          >
            Top-Tier Customs
          </h1>
        </div>
        {/* Desktop Nav */}
        <div></div>
        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <Cart />
          <Theme />
          <Login />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`p-1 lg:hidden`}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </main>
      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
