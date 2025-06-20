import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { useTheme } from "../context/Theme";
// import { toast } from "react-toastify";

type AuthMode = "login" | "register";

const AuthForm = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";
  const [mode, setMode] = useState<AuthMode>("login");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    adminCode: "",
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
          // toast.error("Login failed.");
          throw new Error(data.message || "Login failed.");
        }
        // toast.success("Successfully logged in!");
        login(data.token, data.user);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } catch (e: any) {
        // toast.error("Login failed.");
      }
    } else {
      const formData = {
        name: form.name,
        phone: form.phone,
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
          // toast.error("Registration failed.");
          throw new Error(data.message || "Registration failed.");
        }
        // toast.success("Account created. Please login!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } catch (e: any) {
        // alert("ERROR WHILE REGISTERING");
        // toast.error("Registration failed.", e.message);
      }
    }
  };

  const inputBase =
    "w-full px-4 py-3 border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600";
  const borderColor = isDark ? "border-zinc-700" : "border-zinc-300";
  const bgColor = isDark
    ? "bg-zinc-950 text-white"
    : "bg-zinc-50 text-zinc-900";
  const cardBg = isDark ? "bg-zinc-900" : "bg-white";
  const textSecondary = isDark ? "text-zinc-400" : "text-zinc-500";
  const textAccent = isDark ? "text-sky-400" : "text-blue-600";

  return (
    <section
      className={`w-full min-h-screen flex items-center justify-center px-4 py-12 ${bgColor}`}
    >
      <div className={`w-full max-w-md ${cardBg} rounded-xl shadow-lg p-8`}>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {mode === "login" ? "Welcome Back" : "Create Your Account"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className={`${inputBase} ${borderColor}`}
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className={`${inputBase} ${borderColor}`}
              />
              <input
                name="adminCode"
                placeholder="ADMIN CODE (optional)"
                value={form.adminCode}
                onChange={handleChange}
                className={`${inputBase} ${borderColor}`}
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className={`${inputBase} ${borderColor}`}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className={`${inputBase} ${borderColor}`}
          />

          {mode === "register" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className={`${inputBase} ${
                form.password !== form.confirmPassword && form.confirmPassword
                  ? "border-red-500"
                  : borderColor
              }`}
            />
          )}

          {error && (
            <p className="text-sm text-red-500 font-medium -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className={`text-center mt-6 text-sm ${textSecondary}`}>
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className={`underline ml-1 ${textAccent}`}
          >
            {mode === "login" ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default AuthForm;
