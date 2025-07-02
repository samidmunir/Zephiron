import React from "react";
import { useTheme } from "../context/Theme";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <section
        className={`${
          isDark ? "bg-zinc-900" : "bg-zinc-100"
        } transition-all duration-1000`}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
