import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { useTheme } from "../contexts/Theme";
import { motion } from "framer-motion";
import { FlameKindling, LogIn } from "lucide-react";

const Auth = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { login } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    country: "",
  });

  const [mode, setMode] = useState("login");
  //   const [emailError, setEmailError] = useState("");
  //   const [passwordError, setPasswordError] = useState("");
  //   const [confirmPasswordError, setConfirmPasswordError] = useState("");
  //   const [loading, setLoading] = useState(false);

  const toggleAuthMode = () => {
    if (mode === "login") {
      setMode("signup");
    } else {
      setMode("login");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "signup" && form.password !== form.confirmPassword) {
      //   setPasswordError("Passwords do not match.");
      //   setConfirmPasswordError("Passwords do not match.");
      alert("Passwords do not match.");
      return;
    }

    if (mode === "login") {
      const formData = {
        email: form.email,
        password: form.password,
      };

      try {
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success === false) {
          throw new Error(data.error);
        } else {
          login(data.token, data.user);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error(`Failed to login: ${error}`);
        alert("Failed to login.");
      }
    } else {
      const formData = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.confirmPassword,
        city: form.city,
        country: form.country,
      };

      try {
        const res = await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success === false) {
          throw new Error(data.error);
        } else {
          setMode("login");
          alert("Signup successful!");
        }
      } catch (error) {
        alert("Signup failed.");
      }
    }
  };

  return (
    <main
      className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      <section
        className={`flex flex-col align-middle justify-center gap-4 shadow-2xl rounded-md p-4 ${
          isDark ? "bg-zinc-950" : ""
        } transition-all duration-1500`}
      >
        {/* FORM HEADER */}
        <section
          className={`px-8 py-4 ${
            isDark ? "text-zinc-500" : "text-zinc-900"
          } transition-all duration-1500`}
        >
          <h1 className={`flex items-center gap-1 text-3xl font-medium`}>
            Welcome back to your
            <span
              className={`flex items-center ${
                isDark ? "text-orange-400" : "text-blue-600"
              }`}
            >
              Strata <FlameKindling className="w-8 h-8" />
            </span>{" "}
            account.
          </h1>
          <h2 className={`text-2xl font-semibold opacity-80 tracking-wide`}>
            Please login below.
          </h2>
          <h3 className={`tracking-wide`}>
            Track your career search journey with ease using Strata.
          </h3>
        </section>
        {/* FORM CONTAINER */}
        <section className="w-lg rounded-md mx-auto px-8 py-1">
          {mode === "login" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*********"
                    value={form.password}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`flex items-center justify-center gap-1 font-semibold border-2 rounded-md w-full px-2 py-1 text-lg ${
                      isDark
                        ? "border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-orange-400"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  >
                    <span>Login</span>
                    <LogIn className="w-6 h-6" />
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Country"
                    value={form.country}
                    onChange={handleInputChange}
                    className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                      isDark
                        ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                        : "text-blue-600 focus:border-blue-600"
                    } transition-all duration-1500`}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`flex items-center justify-center gap-1 font-semibold border-2 rounded-md w-full px-2 py-1 text-lg ${
                      isDark
                        ? "border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-orange-400"
                        : ""
                    } transition-all duration-1500`}
                  >
                    <span>Signup</span>
                    <LogIn className="w-6 h-6" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </section>
        {/* FORM FOOTER */}
        <section
          className={`px-8 py-4 flex items-center justify-center ${
            isDark ? "text-zinc-500" : ""
          }`}
        >
          {mode === "login" ? (
            <p>
              If you don't have an account,{" "}
              <button
                onClick={() => toggleAuthMode()}
                className={`font-semibold ${
                  isDark ? "text-sky-500" : "text-blue-600"
                } hover:underline transition-all duration-1500`}
              >
                Signup
              </button>{" "}
              here for free.
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => toggleAuthMode()}
                className={`font-semibold ${
                  isDark ? "text-sky-500" : "text-blue-600"
                } hover:underline transition-all duration-1500`}
              >
                Login
              </button>{" "}
            </p>
          )}
        </section>
      </section>
    </main>
  );
};

export default Auth;
