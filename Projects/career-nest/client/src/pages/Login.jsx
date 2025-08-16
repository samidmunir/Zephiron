// import { useState } from "react";
// import { useTheme } from "../contexts/ThemeContext";
// import { Link } from "react-router-dom";
// import { Mail, Lock, LogIn } from "lucide-react";
// import { motion } from "framer-motion";
// import { useUserStore } from "../stores/UserStore";

// const Login = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const { login, loading } = useUserStore();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await login(formData);
//     } catch (e) {
//       setError("Failed to login.");
//       console.error(e);
//     }
//   };

//   return (
//     <main
//       className={`min-h-screen px-8 py-4 ${
//         isDark ? "bg-zinc-800" : "bg-zinc-200"
//       } transition-all duration-3000`}
//     >
//       <section>
//         <div>
//           <h1
//             className={`text-4xl font-semibold ${
//               isDark ? "text-zinc-300" : "text-zinc-700"
//             } transition-all duration-1500`}
//           >
//             Welcome back to Career Nest
//           </h1>
//           <h3
//             className={`text-xl font-medium ${
//               isDark ? "text-zinc-500" : "text-zinc-600"
//             }`}
//           >
//             Please login below or click{" "}
//             <Link
//               to="/auth/signup"
//               className={`font-bold italic ${
//                 isDark ? "text-sky-500" : "text-blue-600"
//               } transition-all duration-1500`}
//             >
//               Signup
//             </Link>{" "}
//             to get started for free!
//           </h3>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, x: -20, y: -20 }}
//           animate={{ opacity: 1, x: 0, y: 0 }}
//           transition={{ duration: 1.5 }}
//           className={`px-8 py-16 w-lg mx-auto rounded-md mt-8 flex items-center justify-center shadow-2xl ${
//             isDark ? "bg-zinc-300" : "bg-zinc-900"
//           }`}
//         >
//           <form onSubmit={handleSubmit} className={`space-y-4 w-[85%]`}>
//             <div
//               className={`flex items-center gap-2 border-2 p-2 rounded-md ${
//                 isDark ? "" : "border-zinc-500"
//               }`}
//             >
//               <label>
//                 <Mail
//                   className={`w-12 h-12 ${isDark ? "" : "text-zinc-500"}`}
//                 />
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`outline-none text-2xl ${
//                   isDark
//                     ? "placeholder:text-zinc-700 text-zinc-500"
//                     : "placeholder:text-zinc-500 text-zinc-300"
//                 } transition-all duration-1500`}
//               />
//             </div>
//             <div
//               className={`flex items-center gap-2 border-2 p-2 rounded-md ${
//                 isDark ? "" : "border-zinc-500"
//               }`}
//             >
//               <label>
//                 <Lock
//                   className={`w-12 h-12 ${isDark ? "" : "text-zinc-500"}`}
//                 />
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="*********"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`outline-none text-2xl ${
//                   isDark
//                     ? "placeholder:text-zinc-700 text-zinc-500"
//                     : "placeholder:text-zinc-500 text-zinc-300"
//                 } transition-all duration-1500`}
//               />
//             </div>
//             <div className={`flex items-center justify-center`}>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`text-2xl font-bold uppercase border-2 p-2 rounded-md w-full cursor-pointer flex items-center justify-center gap-2 shadow-2xl ${
//                   isDark
//                     ? "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-zinc-200"
//                     : "text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-zinc-300 hover:border-zinc-800"
//                 } transition-all duration-1500`}
//               >
//                 {loading ? (
//                   "Logging in..."
//                 ) : (
//                   <>
//                     <span>Login</span>
//                     <span>
//                       <LogIn className={`w-12 h-12`} />
//                     </span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default Login;

import { useState } from "react";
import { useUserStore } from "../stores/UserStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({ email, password });
    } catch (e) {
      alert("Failed to login.");
      console.error("Failed to login:", e);
    }

    // Your server-side logic will go here
    // console.log("Login attempt:", { email, password });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Brand */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-emerald-600 rounded-full p-3">
              <svg
                className="h-8 w-8 text-white"
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
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 font-serif">
              Career Nest
            </h1>
            <p className="text-slate-600 text-sm">
              Your professional job application tracker
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
          <div className="p-6 pb-4 space-y-1 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              Welcome back
            </h2>
            <p className="text-slate-600">
              Sign in to your Career Nest account
            </p>
          </div>
          <div className="p-6 pt-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-900 block"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-900 block"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 pr-10 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="remember" className="text-sm text-slate-600">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Don't have an account?{" "}
                <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-500">
          <p>© 2024 Career Nest. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
