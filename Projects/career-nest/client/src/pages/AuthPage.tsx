import { useAuth } from "../context/Auth";
import { useTheme } from "../context/Theme";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const career_nest_auth = "http://localhost:3000/api/auth";

const AuthPage = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState("register");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (authMode === "register" && form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Registration failed.");
      return;
    }

    if (authMode === "login") {
      const formData = {
        email: form.email,
        password: form.password,
      };

      try {
        const res = await fetch(`${career_nest_auth}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          toast.error("Login failed.");
          return;
        }

        const data = await res.json();
        if (!data.success) {
          toast.error("Login failed.");
          return;
        }
        toast.success("You're logged in!");
        login(data.token, data.user);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } catch (err: any) {
        toast.error("Login failed.");
      }
    } else {
      try {
        const formData = {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.confirmPassword,
          adminCode: form.adminCode,
        };

        const res = await fetch(`${career_nest_auth}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          toast.error("Registration failed.");
          return;
        }

        const data = await res.json();
        if (!data.success) {
          toast.error("Registration failed.");
          return;
        }
        toast.success("Account created. Please login!");
        setTimeout(() => {
          navigate("/auth");
          setAuthMode("login");
        }, 1500);
      } catch (err: any) {
        toast.error("Registration failed.");
      }
    }
  };

  return (
    <main
      className={`w-full min-h-screen transition-all duration-1000 ${
        isDark ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <h1
        className={`text-5xl font-semibold text-center py-8 ${
          isDark ? "" : "text-[#0e4e87]"
        }`}
      >
        Get Started For Free
      </h1>
      <section className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] rounded-md p-8 shadow-2xl"
        >
          {authMode === "register" ? (
            <>
              <div className="flex items-center justify-center gap-8">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
              <div className="flex items-center justify-center gap-8 my-8">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="password"
                  name="adminCode"
                  value={form.adminCode}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
              <div className="flex items-center justify-center gap-8">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-8">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 border-[#0e4e87] rounded-md px-2 py-1 placeholder:text-[#0e4e87] placeholder:font-medium shadow-2xl"
                />
              </div>
            </>
          )}
          {error && (
            <div className="flex justify-start">
              <p className="text-md text-rose-500 font-bold">{error}</p>
            </div>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                authMode === "register" ? "w-[80%]" : "w-[40%]"
              } border-2 border-[#0e4e87] rounded-md px-2 py-1 my-8 font-semibold text-[#0e4e87] shadow-2xl transition-all duration-1000 hover:bg-[#0e4e87] hover:text-gray-100`}
            >
              {authMode === "register" ? "Register" : "Login"}
            </button>
          </div>
          {authMode === "register" ? (
            <div>
              <p className="text-center">
                Already have an account?{" "}
                <span
                  onClick={() => setAuthMode("login")}
                  className="underline"
                >
                  Login
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p className="text-center">
                Don't have an account?{" "}
                <span
                  onClick={() => setAuthMode("register")}
                  className="underline"
                >
                  Sign up
                </span>
              </p>
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default AuthPage;
