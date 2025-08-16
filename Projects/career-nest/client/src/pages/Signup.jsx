// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useTheme } from "../contexts/ThemeContext";
// import { useUserStore } from "../stores/UserStore";

// const Signup = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const navigate = useNavigate();
//   const { signup, loading } = useUserStore();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     career: "",
//   });

//   const [error, setError] = useState("");

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // minimal client-side validation
//     if (!form.name || !form.email || !form.password || !form.confirmPassword) {
//       setError("Please fill out all required fields.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       console.log("form.password:", form.password);
//       console.log("form.confirmPassword:", form.confirmPassword);
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const res = await signup({
//         name: form.name.trim(),
//         email: form.email.trim(),
//         password: form.password,
//         confirmPassword: form.confirmPassword,
//         career: form.career,
//       });

//       // Your UserStore's signup does NOT set user; on success, route to login
//       if (res === true || res?.ok) {
//         navigate("/auth/login", {
//           replace: true,
//           state: { justSignedUp: true, email: form.email.trim() },
//         });
//       } else {
//         setError(res?.error || "Signup failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   const inputBase =
//     "border-2 rounded-md shadow-md px-2 py-1 w-[260px] placeholder:font-medium placeholder:text-gray-500 outline-none";
//   const inputClass = `${inputBase} ${
//     isDark ? "border-gray-100 text-gray-100" : "border-gray-900 text-gray-900"
//   }`;
//   const labelClass = `text-lg italic font-bold ${
//     isDark ? "text-gray-100" : "text-gray-900"
//   }`;

//   return (
//     <motion.main
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//       className="min-h-screen px-8 py-4"
//     >
//       <div>
//         <h1
//           className={`text-5xl font-semibold ${
//             isDark ? "text-gray-100" : "text-gray-900"
//           }`}
//         >
//           Create your CareerNest account
//         </h1>
//         <p
//           className={`text-2xl font-medium ${
//             isDark ? "text-gray-100/80" : "text-gray-700"
//           }`}
//         >
//           Sign up below
//         </p>
//       </div>

//       <form onSubmit={onSubmit} className="mt-6">
//         <div className="space-y-4">
//           <div className="space-y-1">
//             <p className={labelClass}>Full name *</p>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Jane Doe"
//               value={form.name}
//               onChange={onChange}
//               className={inputClass}
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-1">
//             <p className={labelClass}>Email *</p>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="you@example.com"
//               value={form.email}
//               onChange={onChange}
//               className={inputClass}
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-1">
//             <p className={labelClass}>Password *</p>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="••••••"
//               value={form.password}
//               onChange={onChange}
//               className={inputClass}
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-1">
//             <p className={labelClass}>Confirm password *</p>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="••••••"
//               value={form.confirmPassword}
//               onChange={onChange}
//               className={inputClass}
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-1">
//             <p className={labelClass}>Career (optional)</p>
//             <input
//               type="text"
//               id="career"
//               name="career"
//               placeholder="Software Engineer"
//               value={form.career}
//               onChange={onChange}
//               className={inputClass}
//               disabled={loading}
//             />
//           </div>
//         </div>

//         {error && (
//           <div
//             className={`mt-4 text-sm ${
//               isDark ? "text-rose-300" : "text-rose-600"
//             }`}
//           >
//             {error}
//           </div>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className={`text-lg border-2 rounded-md font-semibold px-3 py-2 w-[260px] mt-6 cursor-pointer transition-all duration-300 ${
//             isDark
//               ? "text-gray-100 hover:bg-gray-100 hover:text-gray-900 border-gray-100"
//               : "text-gray-900 hover:bg-gray-900 hover:text-gray-100 border-gray-900"
//           } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//         >
//           {loading ? "Creating account…" : "Sign up"}
//         </button>

//         <div
//           className={`mt-4 text-sm ${
//             isDark ? "text-gray-300" : "text-gray-700"
//           }`}
//         >
//           Already have an account?{" "}
//           <Link
//             to="/auth/login"
//             className={`${isDark ? "underline" : "underline"} hover:opacity-80`}
//           >
//             Log in
//           </Link>
//         </div>
//       </form>
//     </motion.main>
//   );
// };

// export default Signup;

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [career, setCareer] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(password === value || value === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    setIsLoading(true);

    // Your server-side logic will go here
    console.log("Signup attempt:", { fullName, email, password, career });

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

        {/* Signup Form */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
          <div className="p-6 pb-4 space-y-1 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              Create your account
            </h2>
            <p className="text-slate-600">
              Start tracking your career journey today
            </p>
          </div>
          <div className="p-6 pt-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-slate-900 block"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>

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
                  htmlFor="career"
                  className="text-sm font-medium text-slate-900 block"
                >
                  Career Field
                </label>
                <select
                  id="career"
                  value={career}
                  onChange={(e) => setCareer(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select your career field</option>
                  <option value="software-engineering">
                    Software Engineering
                  </option>
                  <option value="data-science">Data Science</option>
                  <option value="product-management">Product Management</option>
                  <option value="design">Design (UI/UX)</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="finance">Finance</option>
                  <option value="consulting">Consulting</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="legal">Legal</option>
                  <option value="other">Other</option>
                </select>
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
                    placeholder="Create a password"
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
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-slate-900 block"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    className={`w-full px-3 py-2 pr-10 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      !passwordMatch
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {!passwordMatch && (
                  <p className="text-sm text-red-600">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !passwordMatch}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Creating account...</span>
                  </div>
                ) : (
                  "Create account"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  Sign in
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
