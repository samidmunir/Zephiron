import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { useTheme } from "../contexts/Theme";

const Main = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <section
        className={`min-h-screen transition-all duration-3000 ${
          isDark ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        {children}
      </section>
    </main>
  );
};

export default Main;
