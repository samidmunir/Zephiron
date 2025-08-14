import { Navigate, Outlet } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen ${
        isDark ? "bg-gray-950 text-white-50" : "bg-white-50 text-gray-950"
      }`}
    >
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </main>
  );
};

export default App;
