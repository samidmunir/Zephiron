// import { LogIn, Bird, UserPlus, LogOut, Activity } from "lucide-react";
// import { useTheme } from "../contexts/ThemeContext";
// import ThemeToggle from "./ui/ThemeToggle";
// import { useUserStore } from "../stores/UserStore";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const { user, logout } = useUserStore();

//   return (
//     <nav
//       className={`w-full px-8 py-4 border-b-3 shadow-2xl flex items-center justify-between ${
//         isDark ? "bg-zinc-950 border-zinc-50" : "bg-zinc-50 border-zinc-950"
//       } transition-all duration-3000`}
//     >
//       <div>
//         <Link
//           to="/"
//           className={`flex items-center gap-1 text-3xl font-bold ${
//             isDark ? "text-sky-500" : "text-blue-600"
//           }`}
//         >
//           <span>Career Nest</span>
//           <span>
//             <Bird className={`w-8 h-8`} />
//           </span>
//         </Link>
//       </div>
//       <div className={`flex items-center gap-4`}>
//         <div>
//           {user ? (
//             <div className={`flex items-center gap-4`}>
//               <p
//                 className={`font-bold uppercase ${
//                   isDark ? "text-zinc-300" : "text-zinc-900"
//                 }`}
//               >
//                 {user.name}
//               </p>
//               <Link
//                 to="/dashboard"
//                 className={`${
//                   isDark
//                     ? "text-sky-500 hover:text-sky-700"
//                     : "text-blue-600 hover:text-sky-800"
//                 } transition-all duration-1500`}
//               >
//                 <Activity className={`w-6 h-6`} />
//               </Link>
//               <button
//                 onClick={logout}
//                 className={`outline-none flex items-center gap-1 font-semibold cursor-pointer ${
//                   isDark
//                     ? "text-zinc-500 hover:text-zinc-300"
//                     : "text-zinc-800 hover:text-blue-600"
//                 } transition-all duration-1500`}
//               >
//                 {/* <span>Logout</span> */}
//                 <span>
//                   <LogOut className={`w-6 h-6`} />
//                 </span>
//               </button>
//             </div>
//           ) : (
//             <div className={`flex items-center gap-4`}>
//               <Link
//                 to="/auth/signup"
//                 className={`flex items-center gap-1 font-semibold ${
//                   isDark
//                     ? "text-zinc-500 hover:text-zinc-300"
//                     : "text-zinc-800 hover:text-blue-600"
//                 } transition-all duration-1500`}
//               >
//                 <span>Signup</span>
//                 <span>
//                   <UserPlus className={`w-6 h-6`} />
//                 </span>
//               </Link>
//               <Link
//                 to="/auth/login"
//                 className={`flex items-center gap-1 font-semibold ${
//                   isDark
//                     ? "text-zinc-500 hover:text-zinc-300"
//                     : "text-zinc-800 hover:text-blue-600"
//                 } transition-all duration-1500`}
//               >
//                 <span>Login</span>
//                 <span>
//                   <LogIn className={`w-6 h-6`} />
//                 </span>
//               </Link>
//             </div>
//           )}
//         </div>
//         <ThemeToggle />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client"

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogOut, BarChart3, Plus, Home } from "lucide-react";
import { useUserStore } from "../stores/UserStore";

export default function Navbar() {
  const { user, logout } = useUserStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Your logout logic will go here
    logout();
    // setUser(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-emerald-600 rounded-full p-2 group-hover:bg-emerald-700 transition-colors">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900 font-serif group-hover:text-emerald-600 transition-colors">
              Career Nest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                {/* Logged In Navigation */}
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/applications"
                  className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  <Home className="h-4 w-4" />
                  <span>Applications</span>
                </Link>
                <Link
                  to="/dashboard/applications/track"
                  className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Application</span>
                </Link>

                {/* User Menu */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <div className="bg-emerald-100 rounded-full p-2">
                      <User className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium">Welcome back!</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut onClick={handleLogout} className="h-4 w-4" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Logged Out Navigation */}
                <Link
                  to="/features"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  About
                </Link>
                <div className="flex items-center space-x-4">
                  <Link
                    to="/auth/login"
                    className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user ? (
                <>
                  {/* Mobile Logged In Menu */}
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link
                    to="/applications"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  >
                    <Home className="h-5 w-5" />
                    <span className="font-medium">Applications</span>
                  </Link>
                  <Link
                    to="/dashboard/applications/track"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 bg-emerald-600 text-white rounded-md font-medium"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Add Application</span>
                  </Link>
                  <div className="border-t border-slate-200 mt-2 pt-2">
                    <div className="flex items-center space-x-3 px-3 py-2 text-slate-600">
                      <div className="bg-emerald-100 rounded-full p-2">
                        <User className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium">Welcome back!</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors w-full text-left"
                    >
                      <LogOut className="h-5 w-5" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Mobile Logged Out Menu */}
                  <Link
                    to="/features"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors font-medium"
                  >
                    Features
                  </Link>
                  <Link
                    to="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors font-medium"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors font-medium"
                  >
                    About
                  </Link>
                  <div className="border-t border-slate-200 mt-2 pt-2 space-y-1">
                    <Link
                      to="/auth/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors font-medium"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/auth/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 bg-emerald-600 text-white rounded-md font-medium text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
