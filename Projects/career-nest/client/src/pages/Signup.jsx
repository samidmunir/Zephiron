import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/UserStore";
import { router } from "../router";

const Signup = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { signup } = useUserStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    career: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     await signup(formData);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(formData);
    if (res?.ok) {
      router.navigate("/login"); // safe navigation: in an event handler
      // optionally: router.navigate("/login?justSignedUp=1");
    } else {
      // show error toast or inline message
      console.error(res?.error || "Signup failed");
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`min-h-screen px-8 py-4`}
    >
      <div>
        <h1 className={`text-5xl ${isDark ? "text-gray-100" : ""}`}>
          Welcome to Career Nest
        </h1>
        <p className={`text-2xl font-medium ${isDark ? "text-gray-100" : ""}`}>
          Sign up for a free account to get started!
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
              First & Last Name
            </p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
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
              Your email
            </p>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="youremail@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
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
              Create a password
            </p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
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
              Confirm your password
            </p>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="******"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
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
              Enter your Career Field
            </p>
            <input
              type="text"
              id="career"
              name="career"
              placeholder="Ex: Sales"
              value={formData.career}
              onChange={handleChange}
              className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
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
          Signup
        </button>
      </form>
    </motion.main>
  );
};

export default Signup;
