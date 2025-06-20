import {
  Globe,
  Lock,
  LockKeyhole,
  Mail,
  MapPinPlusInside,
  ShieldAlert,
  UserPlus,
} from "lucide-react";
import { useTheme } from "../context/Theme";
import { useState } from "react";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type AuthMode = "login" | "register";

const AuthForm = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const [mode, setMode] = useState<AuthMode>("login");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "register" && form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
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
        if (!res.ok) {
          throw new Error(data.message || "Login failed.");
        }
        toast.success("Logged in!");
        login(data.token, data.user);
        navigate("/dashboard");
      } catch (err: any) {
        alert("Login failed.");
      }
    } else {
      const location = {
        city: form.city,
        country: form.country,
      };

      const formData = {
        firstName: form.firstName,
        lastName: form.lastName,
        location: location,
        email: form.email,
        password: form.confirmPassword,
        adminCode: form.adminCode,
      };

      try {
        const res = await fetch("http://localhost:3000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) {
          toast.error("Registration failed.");
          throw new Error(data.message || "Registration failed.");
        }
        toast.success("Account created. Please login!");
        setTimeout(() => {
          navigate("/auth");
        }, 1500);
      } catch (e: any) {
        // alert("ERROR WHILE REGISTERING");
        toast.error("Registration failed.", e.message);
      }
    }
  };

  return (
    <section
      className={`w-full min-h-screen transition-all duration-3000 flex items-center justify-center ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className={`w-full max-w-md rounded-xl shadow-lg px-8 py-16`}>
        <h2 className="text-4xl font-bold text-center">
          {mode === "login" ? "Welcome Back" : "Create Your Account"}
        </h2>
        <form className="my-4" onSubmit={handleSubmit}>
          {mode === "register" ? (
            <section className="p-4">
              <div className="flex">
                <div className="flex items-center gap-2">
                  <UserPlus />
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <UserPlus />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
              </div>
              <div className="flex my-4">
                <div className="flex items-center gap-2">
                  <MapPinPlusInside />
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Globe />
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
              </div>
              <div className="flex my-4">
                <div className="flex items-center gap-2">
                  <Mail />
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <ShieldAlert />
                  <input
                    type="text"
                    name="adminCode"
                    value={form.adminCode}
                    onChange={handleChange}
                    placeholder="(OPTIONAL)"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
              </div>
              <div className="flex my-4">
                <div className="flex items-center gap-2">
                  <Lock />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LockKeyhole />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-3000`}
                  />
                </div>
              </div>
            </section>
          ) : (
            <section className="p-4">
              <div className="flex items-center gap-2">
                <Mail />
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                    isDark
                      ? "ring-rose-500 placeholder:text-zinc-500"
                      : "ring-sky-500 placeholder:text-zinc-700"
                  } transition-all duration-3000`}
                />
              </div>
              <div className="flex items-center gap-2 my-8">
                <Lock />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                    isDark
                      ? "ring-rose-500 placeholder:text-zinc-500"
                      : "ring-sky-500 placeholder:text-zinc-700"
                  } transition-all duration-3000`}
                />
              </div>
            </section>
          )}
          {error && (
            <p className="text-sm text-rose-500 font-medium -mt-2">{error}</p>
          )}
          <button
            type="submit"
            className={`w-full py-3 rounded-md font-semibold transition-all duration-3000 ${
              isDark ? "bg-rose-500 text-zinc-100" : " bg-sky-500 text-zinc-100"
            }`}
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>
        <p className={`text-center mt-6 text-sm`}>
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className={`underline ml-1 ${
              isDark ? "text-rose-500" : "text-sky-500"
            } transition-all duration-3000`}
          >
            {mode === "login" ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default AuthForm;
