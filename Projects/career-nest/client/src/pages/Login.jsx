import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/UserStore";
import { router } from "../router";
import { useRef } from "react";
import { useEffect } from "react";

const Login = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { login, user } = useUserStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
    } catch (error) {
      toast.error("Failed to login:", error);
    }
  };

  const hasNavigatedRef = useRef(false);
  useEffect(() => {
    if (user && !hasNavigatedRef.current) {
      hasNavigatedRef.current = true; // guards double-invoke in Strict Mode
      router.navigate("/dashboard");
    }
  }, [user]);

  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`min-h-screen px-8 py-4`}
    >
      <div>
        <h1 className={`text-5xl ${isDark ? "text-gray-100" : ""}`}>
          Welcome back to Career Nest
        </h1>
        <p className={`text-2xl font-medium ${isDark ? "text-gray-100" : ""}`}>
          You can login below!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <p
              className={`text-lg italic font-bold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Enter your email
            </p>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="youremail@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium placeholder:text-gray-500 outline-none ${
                isDark ? "border-gray-100" : "border-gray-900"
              }`}
            />
          </div>
          <div className="space-y-1">
            <p
              className={`text-lg italic font-bold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Enter your password
            </p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium placeholder:text-gray-500 outline-none ${
                isDark ? "border-gray-100" : "border-gray-900"
              }`}
            />
          </div>
        </div>
        <button
          type="submit"
          className={`text-lg border-2 rounded-md font-semibold px-2 py-1 w-[200px] mt-4 cursor-pointer transition-all duration-300 ${
            isDark
              ? "text-gray-100 hover:bg-gray-100 hover:text-gray-900"
              : "text-gray-900 hover:bg-gray-900 hover:text-gray-100"
          }`}
        >
          Login
        </button>
      </form>
    </motion.main>
  );
};

export default Login;
