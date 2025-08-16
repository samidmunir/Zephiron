import Layout from "./layouts/Layout";
import Protected from "./layouts/Protected";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import { useUserStore } from "./stores/UserStore";
import { useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Track from "./pages/Track";
import Application from "./pages/Application";

const App = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user, checkAuth, loading, checkingAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth || loading) {
    return (
      <main
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <h1
          className={`text-5xl font-bold ${
            isDark ? "text-amber-500" : "text-amber-600"
          }`}
        >
          {checkingAuth ? "Checking auth..." : "Loading..."}
        </h1>
      </main>
    );
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/auth/login"
          element={!user ? <Login /> : <UserDashboard />}
        />
        <Route
          path="/auth/signup"
          element={!user ? <Signup /> : <UserDashboard />}
        />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <UserDashboard />
            </Protected>
          }
        />
        <Route path="/dashboard/applications/:id" element={<Application />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/applications/track" element={<Track />} />
      </Routes>
    </Layout>
  );
};

export default App;
