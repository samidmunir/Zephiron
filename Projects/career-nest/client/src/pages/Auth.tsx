import { useState } from "react";
import Logo from "../components/ui/Logo";
import { useTheme } from "../contexts/Theme";
import { Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const Auth = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { login } = useAuth();

  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    career: "",
  });

  const handleToggleAuth = () => {
    if (mode === "login") {
      setMode("signup");
    } else {
      setMode("login");
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (mode === "login") {
      setLoading(true);

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
          setError(data.error);
          toast.error("Login failed.");
          setLoading(false);
          throw new Error(data.error);
        } else {
          setLoading(false);
          toast.success("Login successful!");
          login(data.token, data.user);
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
      } catch (error) {
        setLoading(false);
        console.log(`Failed to login: ${error}`);
        // alert("Error exception in login.");
      }
    } else {
      setLoading(true);

      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        toast.error("Signup failed.");
        setLoading(false);
        return;
      }

      const formData = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.confirmPassword,
        career: form.career,
      };

      try {
        const res = await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success === false) {
          setError(data.error);
          toast.error("Signup failed.");
          setLoading(false);
          throw new Error(data.error);
        } else {
          setLoading(false);
          toast.success("Signup successful!");
          setTimeout(() => {
            setMode("login");
          }, 3000);
        }
      } catch (error) {
        setLoading(false);
        console.log(`Failed to signup: ${error}`);
        // alert("Error exception in signup.");
      }
    }
  };

  return (
    <main
      className={`flex items-center justify-center min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      <section
        className={`w-lg rounded-md shadow-2xl p-8 space-y-4 ${
          isDark ? "bg-zinc-950" : "bg-zinc-50"
        } transition-all duration-1500`}
      >
        {/* HEADER */}
        <header className={``}>
          <h1
            className={`flex items-center gap-2 text-3xl font-medium ${
              isDark ? "text-zinc-700" : "text-zinc-800"
            }`}
          >
            Welcome back to <Logo />
          </h1>
          <h2
            className={`text-xl ${
              isDark ? "text-zinc-500" : "text-zinc-900"
            } transition-all duration-1500`}
          >
            {mode === "login"
              ? "Please login below to start tracking!"
              : "Get started today for free! Signup below."}
          </h2>
        </header>
        {/* FORM */}
        <main className={`w-md p-8 rounded-md`}>
          {mode === "login" ? (
            <form onSubmit={handleSubmitAuth} className={``}>
              <section className={`space-y-4`}>
                {/* EMAIL */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <Mail className={`w-8 h-8`} />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* PASSWORD */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <Lock className={`w-8 h-8`} />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="Your password"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* LOGIN BTN */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-1 font-semibold px-2 py-1 border-2 rounded-md text-center ${
                      isDark
                        ? "text-orange-400 hover:bg-orange-400 hover:text-zinc-950"
                        : "text-blue-600 hover:bg-blue-600 hover:text-zinc-50"
                    } transition-all duration-1500`}
                  >
                    Login <LogIn />
                  </button>
                </div>
              </section>
            </form>
          ) : (
            <form onSubmit={handleSubmitAuth} className={``}>
              <section className={`space-y-4`}>
                {/* FIRST NAME */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <User className={`w-8 h-8`} />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* LAST NAME */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <User className={`w-8 h-8`} />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* EMAIL */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <Mail className={`w-8 h-8`} />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* PASSWORD */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <Lock className={`w-8 h-8`} />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="Your password"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* CONFIRM PASSWORD */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <Lock className={`w-8 h-8`} />
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* CAREER */}
                <div
                  className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                    isDark ? "text-orange-400" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <Mail className={`w-8 h-8`} />
                  <input
                    type="text"
                    name="career"
                    id="career"
                    value={form.career}
                    onChange={handleInputChange}
                    placeholder="Your career"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                {/* SIGNUP BTN */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-1 font-semibold px-2 py-1 border-2 rounded-md text-center ${
                      isDark
                        ? "text-orange-400 hover:bg-orange-400 hover:text-zinc-950"
                        : "text-blue-600 hover:bg-blue-600 hover:text-zinc-50"
                    } transition-all duration-1500`}
                  >
                    Signup <UserPlus />
                  </button>
                </div>
              </section>
            </form>
          )}
          {error !== "" && (
            <p
              className={`mt-4 font-semibold ${
                isDark ? "text-rose-500" : "text-red-600"
              } transition-all duration-1500`}
            >
              {error}
            </p>
          )}
        </main>
        {/* FOOTER */}
        <footer>
          {mode === "login" ? (
            <p
              className={`text-xl ${
                isDark ? "text-zinc-500" : "text-zinc-900"
              } transition-all duration-1500`}
            >
              Don't have an account?{" "}
              <button
                onClick={handleToggleAuth}
                className={`cursor-pointer transition-all duration-1500`}
              >
                Signup
              </button>{" "}
              here for free.
            </p>
          ) : (
            <p
              className={`text-xl ${
                isDark ? "text-zinc-500" : "text-zinc-900"
              } transition-all duration-1500`}
            >
              Already have an Account?{" "}
              <button
                onClick={handleToggleAuth}
                className={`cursor-pointer transition-all duration-1500`}
              >
                Login
              </button>{" "}
              here.
            </p>
          )}
        </footer>
      </section>
    </main>
  );
};

export default Auth;
