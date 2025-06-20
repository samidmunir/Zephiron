import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useTheme } from "../context/Theme";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <main
        className={`${
          isDark ? "bg-zinc-900" : "bg-zinc-100"
        } transition-all duration-3000`}
      >
        {children}
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
