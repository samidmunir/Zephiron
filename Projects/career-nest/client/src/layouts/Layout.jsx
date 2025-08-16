import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useTheme } from "../contexts/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main>
      <Toaster />
      <Navbar />
      <section
        className={`${
          isDark ? "bg-zinc-900" : "bg-zinc-100"
        } transition-all duration-3000`}
      >
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
