// import { useTheme } from "../context/Theme";
// import { useLocation, useNavigate } from "react-router-dom";
// import LogoLight from "../assets/maravex-logo-light.svg";
// import LogoDark from "../assets/maravex-logo-dark.svg";
// import { Home, ShoppingBag, Users, Bolt, LayoutDashboard } from "lucide-react";
// import ThemeToggle from "./ui/ThemeToggle";
// import Profile from "./ui/Profile";
// import Logout from "./ui/Logout";

// const navBaseItems = [
//   {
//     id: 0,
//     label: "Home",
//     href: "/",
//     icon: <Home className="w-6 h-6" />,
//   },
//   {
//     id: 1,
//     label: "Catalog",
//     href: "/catalog",
//     icon: <ShoppingBag className="w-6 h-6" />,
//   },
//   {
//     id: 2,
//     label: "Testimonials",
//     href: "/testimonials",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     id: 3,
//     label: "Support",
//     href: "/support",
//     icon: <Bolt className="w-6 h-6" />,
//   },
// ];

// const navAuthItems = [
//   {
//     id: 0,
//     label: "Dashboard",
//     href: "/dashboard",
//     icon: <LayoutDashboard className="w-6 h-6" />,
//   },
// ];

// const Navbar = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   //   const bgColor = isDark ? "" : "";
//   const accentColor = isDark ? "text-sky-400" : "text-blue-600";
//   const isAuthenticated = false;

//   const location = useLocation();
//   const navigate = useNavigate();

//   return (
//     <nav
//       className={`w-full px-8 py-4 shadow-2xl ${
//         isDark ? "bg-zinc-950 text-zinc-50" : "bg-zinc-50 text-zinc-950"
//       }`}
//     >
//       <main className="flex items-center justify-between">
//         <div
//           onClick={() => navigate("/")}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           {isDark ? (
//             <img
//               src={LogoDark}
//               alt="MaraveX Logo"
//               className="w-12 h-12 p-1 rounded-full border-1 border-sky-400"
//             />
//           ) : (
//             <img
//               src={LogoLight}
//               alt="MaraveX Logo"
//               className="w-12 h-12 p-1 rounded-full border-2 border-blue-600"
//             />
//           )}
//           <h1 className={`text-4xl font-semibold`}>
//             Marave
//             <span className={`${isDark ? "text-sky-400" : "text-blue-600"}`}>
//               X
//             </span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-4">
//           {navBaseItems.map((navItem) => (
//             <div
//               onClick={() => navigate(`${navItem.href}`)}
//               className={`flex items-center gap-2 font-semibold cursor-default ${
//                 location.pathname === navItem.href && accentColor
//               } ${
//                 isDark && "hover:text-sky-400"
//               } hover:text-blue-600 cursor-pointer`}
//             >
//               <p>{navItem.icon}</p>
//               <p>{navItem.label}</p>
//             </div>
//           ))}
//           {isAuthenticated &&
//             navAuthItems.map((navItem) => (
//               <div
//                 onClick={() => navigate(`${navItem.href}`)}
//                 className={`flex items-center gap-2 font-semibold cursor-default ${
//                   location.pathname === navItem.href && accentColor
//                 } ${
//                   isDark && "hover:text-sky-400"
//                 } hover:text-blue-600 cursor-pointer`}
//               >
//                 <p>{navItem.icon}</p>
//                 <p>{navItem.label}</p>
//               </div>
//             ))}
//         </div>
//         <div className="flex items-center gap-2">
//           <ThemeToggle />
//           {!isAuthenticated && <Profile type="icon" />}
//           {isAuthenticated && (
//             <div className="flex items-center gap-2">
//               <p className="font-semibold">Sami M.</p>
//               <Logout type="icon" />
//             </div>
//           )}
//         </div>
//       </main>
//     </nav>
//   );
// };

// export default Navbar;

import { useTheme } from "../context/Theme";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoLight from "../assets/maravex-logo-light.svg";
import LogoDark from "../assets/maravex-logo-dark.svg";
import {
  Home,
  ShoppingBag,
  Users,
  Bolt,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import Cart from "./ui/Cart";
import Profile from "./ui/Profile";
import Logout from "./ui/Logout";

const navBaseItems = [
  { id: 0, label: "Home", href: "/", icon: <Home className="w-6 h-6" /> },
  {
    id: 1,
    label: "Catalog",
    href: "/catalog",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "Testimonials",
    href: "/testimonials",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 3,
    label: "Support",
    href: "/support",
    icon: <Bolt className="w-6 h-6" />,
  },
];

const navAuthItems = [
  {
    id: 0,
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-sky-400" : "text-blue-600";
  const isAuthenticated = true;

  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`w-full px-6 py-4 shadow-2xl ${
        isDark ? "bg-zinc-950 text-zinc-50" : "bg-zinc-50 text-zinc-950"
      }`}
    >
      <main className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={isDark ? LogoDark : LogoLight}
            alt="MaraveX Logo"
            className={`w-12 h-12 p-1 rounded-full border-2 ${
              isDark ? "border-sky-400" : "border-blue-600"
            }`}
          />
          <h1 className="text-4xl font-semibold">
            Marave<span className={accentColor}>X</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navBaseItems.map((navItem) => (
            <div
              key={navItem.id}
              onClick={() => navigate(navItem.href)}
              className={`flex items-center gap-2 font-semibold ${
                location.pathname === navItem.href && accentColor
              } ${
                isDark ? "hover:text-sky-400" : "hover:text-blue-600"
              } cursor-pointer`}
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
                className={`flex items-center gap-2 font-semibold ${
                  location.pathname === navItem.href && accentColor
                } ${
                  isDark ? "hover:text-sky-400" : "hover:text-blue-600"
                } cursor-pointer`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {!isAuthenticated && <Profile type="icon" />}
          {isAuthenticated && (
            <div className="flex items-center gap-2">
              <Cart />
              <p className="font-semibold">Sami M.</p>
              <Logout type="icon" />
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
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
                  isDark ? "hover:text-sky-400" : "hover:text-blue-600"
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
