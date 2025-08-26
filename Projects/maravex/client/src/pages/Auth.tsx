import { Lock, LogIn, Mail } from "lucide-react";
import { useTheme } from "../contexts/Theme";
import { useState } from "react";

const Auth = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [mode, setMode] = useState("login");

  return (
    <main className={`min-h-screen ${isDark ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <section>
        <div>
          <h1>Welcome back</h1>
          <h3>Please login below or click signup to create a free account!</h3>
        </div>
        <div className="border-4 border-yellow-500 w-md mx-auto">
          {mode === "login" ? (
            <form className="border-3 border-red-500">
              <section className="border-2 border-blue-500">
                <div className="flex items-center gap-2 border-1 border-green-500">
                  <Mail className="w-8 h-8" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className={`border-2 shadow-2xl px-2 py-1 rounded-md ${
                      isDark ? "" : ""
                    }`}
                  />
                </div>
                <div className="flex items-center gap-2 border-1 border-green-500">
                  <Lock className="w-8 h-8" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
                    className={`border-2 shadow-2xl px-2 py-1 rounded-md ${
                      isDark ? "" : ""
                    }`}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className={`flex items-center gap-1 outline-none border-2 px-2 py-1 rounded-md font-bold ${
                      isDark
                        ? "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-zinc-100"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-zinc-100"
                    } transition-all duration-1000`}
                  >
                    Login
                    <LogIn className="w-6 h-6" />
                  </button>
                </div>
              </section>
            </form>
          ) : (
            <form></form>
          )}
        </div>
        <div>
          <p className={`font-semibold`}>
            Don't have an account?{" "}
            <span
              onClick={() => setMode("signup")}
              className={`font-bold cursor-pointer ${
                isDark ? "text-sky-500" : "text-blue-600"
              } hover:underline transition-all duration-1000`}
            >
              Signup
            </span>{" "}
            here.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Auth;
